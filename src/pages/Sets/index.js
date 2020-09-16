import React, { useEffect, useState } from 'react';
import { getSpecificSet } from '../../utils/Api';
import { useParams } from 'react-router-dom';
import { getCardsFromSet } from '../../utils/Api';
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import InfiniteScroll from 'react-infinite-scroll-component';
import _ from 'lodash';


export default function Sets() {

    const classes = useStyles();

    const { setCode } = useParams();

    const [expansionsDetails, setExpansionsDetails] = useState(null);
    const [expansionCards, setExpansionCards] = useState(null);
    const [trigger, setTrigger] = useState(false);


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
                setExpansionCards(res?.data);
            }
            doFetch();
        }
    }, [expansionsDetails])  //callback


    // console.log(expansionCards);
    // console.log(expansionsDetails);

    useEffect(() => {
        const fetchMore = async () => {

            const res = await getCardsFromSet(expansionCards?.next_page);
            let object1 = expansionCards
            let object2 = res.data

            function customizer(objValue, srcValue) {
                if (_.isArray(objValue)) {
                    return objValue.concat(srcValue);
                }
            }

            let merge = _.mergeWith(object1, object2, customizer);
            setExpansionCards(null)
            setExpansionCards(merge);

            console.log(expansionCards.has_more)
            setTrigger(false)
        }
        fetchMore()
    }, [trigger])

    const pullTrigger = () => {
        setTrigger(true)
    }

    return (

        <div className={classes.wrapper}>

            {expansionCards === null ? (
                <div className={classes.loaderRoot}>
                    <CircularProgress size={150} />
                </div>) :
                (<InfiniteScroll
                    dataLength={expansionCards && expansionCards.total_cards}
                    next={pullTrigger}
                    hasMore={expansionCards && expansionCards.has_more}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b style={{ color: "white" }} >Yay! You have seen it all.</b>
                        </p>
                    }
                >
                    <Grid container spacing={0}>
                        {expansionCards && expansionCards.data.map((img => {
                            return (
                                <Grid item xs={6} sm={4} md={3} className={classes.container} key={img?.image_uris?.normal}>
                                    <Link to={`/details/${img.id}`}>
                                        <img src={img.image_uris ? `${img.image_uris.normal}` : `${img.card_faces[0].image_uris.normal}`}
                                            alt={"Not found"}
                                            className={classes.img} />
                                    </Link>
                                </Grid>)
                        }))}
                    </Grid>
                </InfiniteScroll>)
            }

        </div>

    )
}
