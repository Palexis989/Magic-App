import React, { useEffect, useState } from 'react';
import { getRandomCards } from '../../utils/Api';
import { useStyles } from './styles';
import RandomGallery from '../../components/RandomGallery';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


export default function Homepage() {

    const classes = useStyles();

    const [random, setRandom] = useState("")
    useEffect(() => {
        const getRandoms = async () => {
            const randomImages = [getRandomCards(), getRandomCards(), getRandomCards(), getRandomCards(), getRandomCards(), getRandomCards(), getRandomCards(), getRandomCards()];
            const res = await Promise.all(randomImages);
            console.log(res)
            setRandom(res);
        }
        getRandoms();

    }, [])  //callback

    const [randomForButton, setRandomForButton] = useState("")
    const getRandomForButton = async () => {
        const resp = await getRandomCards();
        setRandomForButton(resp)
    }
    getRandomForButton();


    return (
        <>
            <div className={classes.wrapper}>
                <Link to={"/allsets"}>
                    <Button variant="contained" color="primary" >
                        All Sets
                    </Button>
                </Link>
                <Link to={`/details/${randomForButton && randomForButton.data.id}`}>
                    <Button variant="contained" color="primary" >
                        Random Card
                    </Button>
                </Link>
            </div>

            <div className={classes.root}>
                {random ? (<RandomGallery images={random} />) : null}
            </div>
        </>
    )
}
