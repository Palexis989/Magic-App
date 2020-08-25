import React, { useEffect, useState } from 'react';
import { getRandomCards } from '../../utils/Api';
import { useStyles } from './styles';
import RandomGallery from '../../components/RandomGallery'

export default function Homepage() {

    const classes = useStyles();

    const [random, setRandom] = useState()
    useEffect(() => {
        const getRandoms = async () => {
            const randomImages = [getRandomCards(), getRandomCards(), getRandomCards(), getRandomCards(), getRandomCards(), getRandomCards(), getRandomCards(), getRandomCards()];
            const res = await Promise.all(randomImages);
            console.log(res)
            setRandom(res);
        }
        getRandoms();

    }, [])  //callback

    return (
        <div className={classes.root}>
            {random ? (<RandomGallery images={random} />) : null}
        </div>
    )
}
