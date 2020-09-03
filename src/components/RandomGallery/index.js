import React from 'react';
import './additionalStyle.css';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
// import Image from '../../images/card-back-cover.jpg';

export default function RandomGallery({ images }) {

    const classes = useStyles();

    return (

        <div className={classes.container}>
            {images.map((img => {
                return (
                    <Link to={`/details/${img.id}`}>
                        <img src={img.image_uris ? `${img.image_uris.normal}` : `${img.card_faces[0].image_uris.normal}`}
                            alt={"Not found"} key={`${img.id}`}
                            className={classes.img} />
                    </Link>)
            }))}
        </div>

    )
}
