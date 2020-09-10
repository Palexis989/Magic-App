import React, { useEffect, useState } from 'react';
import { getRandomCards, getCardsFromSet } from '../../utils/Api';
import { useStyles } from './styles';
import RandomGallery from '../../components/RandomGallery';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';
import _ from "lodash";
import CircularProgress from '@material-ui/core/CircularProgress';



export default function Homepage() {

    const classes = useStyles();
    const history = useHistory();

    const [randomForButton, setRandomForButton] = useState(null)
    const [slice1, setSlice1] = useState(null)
    const [slice2, setSlice2] = useState(null)

    const [initialEldrazi, setInitialEldrazi] = useState(null)

    const [arrByEldrazi, setArrByEldrazi] = useState(null)

    useEffect(() => {
        const getIntro = async () => {
            //Rise of the Eldrazi uri
            const res = await getCardsFromSet("https://api.scryfall.com/cards/search?order=set&q=e%3Aroe&unique=prints");
            setSlice1(res.data);

        }
        getIntro();


    }, [])

    useEffect(() => {
        const getIntro2 = async () => {
            const res2 = await getCardsFromSet(slice1?.next_page);
            setSlice2(res2.data);
        }
        getIntro2();
    }, [slice1])

    const filterSlice1 = () => {

        let introCards = []
        if (slice1 !== null) {
            slice1.data.filter((iterator => {
                if (iterator.type_line.includes("Eldrazi")) {
                    introCards.push(iterator)
                    setInitialEldrazi(introCards)
                }
                return initialEldrazi
            }))
        }
    }

    const filterSlice2 = () => {

        if (initialEldrazi !== null) {
            let introCards = initialEldrazi;
            slice2.data.filter((iterator => {
                if (iterator.type_line.includes("Eldrazi")) {
                    introCards.push(iterator)
                    setArrByEldrazi(introCards)
                }
                return arrByEldrazi
            }))
        }

    }


    useEffect(() => {

        filterSlice1()
        filterSlice2()


    }, [slice1, slice2])



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

    console.log(arrByEldrazi)
    console.log(arrByEldrazi?.length)

    return (
        <>
            {arrByEldrazi && arrByEldrazi.length === 19 ?
                (<>
                    <div className={classes.wrapper}>
                        <Link to={"/allsets"}>
                            <Button className={classes.homeButton} variant="contained" color="primary" >
                                All Sets
                    </Button>
                        </Link>

                        <Button
                            className={classes.homeButton}
                            onClick={() => goToRandom()}
                            variant="contained" color="primary" >
                            Random Card
                </Button>

                    </div>

                    <div className={classes.root}>
                        <RandomGallery images={arrByEldrazi} />
                    </div>
                </>)
                : <CircularProgress size={150} />}

        </>
    )
}
