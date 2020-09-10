import React, { useEffect, useState } from 'react';
import { getSpecificSet } from '../../utils/Api';
import { useParams } from 'react-router-dom';
import { getCardsFromSet } from '../../utils/Api';
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';


export default function Sets() {

    const classes = useStyles();

    const { setCode } = useParams();

    const [expansionsDetails, setExpansionsDetails] = useState(null);
    const [expansionCards, setExpansionCards] = useState(null);


    useEffect(() => {
        const doFetch = async () => {
            const res = await getSpecificSet(setCode);
            setExpansionsDetails(res);
        }
        doFetch();
    }, [])  //callback

    useEffect(() => {
        if (expansionsDetails) {
            const doFetch = async () => {
                const res = await getCardsFromSet(expansionsDetails.data.search_uri);
                setExpansionCards(res?.data.data);
            }
            doFetch();
        }
    }, [expansionsDetails])  //callback

    console.log(expansionCards);

    return (

        <div className={classes.wrapper}>
            {/* CHECK THE LOADER!!! :( :( :( :( */}
            {expansionCards === null ? (
                <div className={classes.root}>
                    <CircularProgress size={150} />
                </div>) :
                (<Grid container spacing={0}>
                    {expansionCards && expansionCards.map((img => {
                        return (
                            <Grid item xs={6} sm={4} md={3} className={classes.container} key={img?.image_uris?.normal}>
                                <Link to={`/details/${img.id}`}>
                                    <img src={img.image_uris ? `${img.image_uris.normal}` : `${img.card_faces[0].image_uris.normal}`}
                                        alt={"Not found"}
                                        className={classes.img} />
                                </Link>
                            </Grid>)
                    }))}
                </Grid>)
            }

        </div>

    )
}
