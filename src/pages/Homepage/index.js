import React, { useEffect, useState } from 'react';
import { getRandomCards, getCardsFromSet } from '../../utils/Api';
import { useStyles } from './styles';
import RandomGallery from '../../components/RandomGallery';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';
import _ from "lodash";


export default function Homepage() {

    const classes = useStyles();
    const history = useHistory();
    // const [random, setRandom] = useState("")

    const [randomForButton, setRandomForButton] = useState(null)
    const [introCards, setIntroCards] = useState([])
    const [arrByEldrazi, setArrByEldrazi] = useState([])

    useEffect(() => {
        const getIntro = async () => {                 //Rise of the Eldrazi uri
            const res = await getCardsFromSet("https://api.scryfall.com/cards/search?order=set&q=e%3Aroe&unique=prints");
            setIntroCards(res.data.data);

            setArrByEldrazi(res.data.data.filter((iterator => {
                if (iterator.type_line.includes("Eldrazi")) {
                    return iterator;
                }
            })));

        }
        getIntro();

    }, [])


    useEffect(() => {
        const getRandomForButton = async () => {

            const resp = await getRandomCards();
            setRandomForButton(resp.data.id)
        }

        getRandomForButton();

    }, [])


    const goToRandom = () => {

        history.push(`/details/${randomForButton}`)

    }


    return (
        <>
            <div className={classes.wrapper}>
                <Link to={"/allsets"}>
                    <Button variant="contained" color="primary" >
                        All Sets
                    </Button>
                </Link>

                <Button
                    onClick={() => goToRandom()}
                    variant="contained" color="primary" >
                    Random Card
                </Button>

            </div>

            <div className={classes.root}>
                {introCards ? (<RandomGallery images={arrByEldrazi} />) : null}
            </div>
        </>
    )
}
