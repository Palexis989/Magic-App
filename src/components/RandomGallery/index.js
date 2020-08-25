import React from 'react';
import './additionalStyle.css';
// import Grid from '@material-ui/core/Grid';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
// import Image from '../../images/card-back-cover.jpg';

export default function RandomGallery({ images }) {

    const classes = useStyles();

    return (

        <div className={classes.container}>
            {images.map((img => {
                return (
                    <Link to={`/details/${img.data.id}`}>
                        <img src={img.data.image_uris ? `${img.data.image_uris.normal}` : `${img.data.card_faces[0].image_uris.normal}`}
                            alt={"Not found"} key={`${img.data.id}`}
                            className={classes.img} />
                    </Link>)
            }))}
        </div>

        // <Grid container spacing={0}>
        //     {images.map((img => {
        //         return (
        //             <Grid item xs={3} className={classes.container} key={img.data.image_uris.normal}>
        //                 <img src={`${img.data.image_uris.normal}`} className={classes.img} />
        //             </Grid>)
        //     }))}
        // </Grid>

    )
}
