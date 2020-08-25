import React, { useEffect, useState } from 'react';
import { getCardDetails } from '../../utils/Api';
import { useParams, Link } from 'react-router-dom';
import { useStyles } from './styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DetailsPrintsTable from '../../components/DetailsPrintsTable';
import DetailsSetTable from '../../components/DetailsSetTable';
import CircularProgress from '@material-ui/core/CircularProgress';
// import Image from '../../images/card-back-cover.jpg';
import { Button } from '@material-ui/core';


export default function Details() {

    const classes = useStyles();

    const [transformed, setTransformed] = useState(0);
    const handleClick = () => {
        setTransformed(transformed === 0 ? 1 : 0)
    }

    const [details, setDetails] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const doFetch = async () => {
            const res = await getCardDetails(id);
            console.log(res);
            setDetails(res);
        }
        doFetch();
    }, [id])  //callback


    return (
        <>
            {details === null ? (
                <div className={classes.root}>
                    <CircularProgress size={150} />
                </div>) : (
                    <div className={classes.detailsContainer}>
                        <Grid container >
                            <Grid item xs={12} sm={6} md={4}>
                                {details ? (
                                    <div>
                                        <img className={classes.detailsImg} src={details.data.image_uris ? `${details.data.image_uris.normal}` : `${details.data.card_faces[transformed].image_uris.normal}`} alt={"Not found"} />
                                    </div>) : null}

                                <div className={classes.transformButton}>
                                    {details.data.card_faces ?
                                        <Button variant="contained" color="primary" onClick={handleClick} className={classes.transformButton}>
                                            Transform
                                        </Button>
                                        : null}
                                </div>

                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                {details ?
                                    (
                                        <List component="nav" className={classes.dividers} aria-label="mailbox folders">
                                            <ListItem>
                                                {details.data.mana_cost === undefined ? <ListItemText primary={`${details.data.name + " " + details.data.card_faces[transformed].mana_cost}`} /> :
                                                    <ListItemText primary={`${details.data.name + " " + details.data.mana_cost}`} />}
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                                <ListItemText primary={`${details.data.type_line + " | " + details.data.rarity}`} />
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                                {details.data.oracle_text === undefined ? <ListItemText primary={`${details.data.card_faces[transformed].oracle_text}`} />
                                                    : <ListItemText primary={`${details.data.oracle_text}`} />
                                                }
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                                <ListItemText primary={`${"Released on " + details.data.released_at}`} />
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                                <div className={classes.nestedGrids}>
                                                    {/* Use object.keys(obj) + props check */}
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12}>
                                                            <Grid container>
                                                                <Grid item xs={3}>
                                                                    <Paper className={classes.paper}>Standard</Paper>
                                                                </Grid>
                                                                <Grid item xs={3} style={{ paddingRight: "4px" }}>
                                                                    <Paper className={classes.paper} style={{
                                                                        backgroundColor: `${details.data.legalities.standard}` === "not_legal" ? "red" : "green",
                                                                        color: "white"
                                                                    }}>{`${details.data.legalities.standard}` === "not_legal" ? "Not legal" : "Legal"} </Paper>
                                                                </Grid>
                                                                <Grid item xs={3}>
                                                                    <Paper className={classes.paper}>Brawl</Paper>
                                                                </Grid>
                                                                <Grid item xs={3}>
                                                                    <Paper className={classes.paper} style={{
                                                                        backgroundColor: `${details.data.legalities.brawl}` === "not_legal" ? "red" : "green",
                                                                        color: "white"
                                                                    }} >{`${details.data.legalities.brawl}` === "not_legal" ? "Not legal" : "Legal"}</Paper>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Grid container>
                                                                <Grid item xs={3}>
                                                                    <Paper className={classes.paper}>Pioneer</Paper>
                                                                </Grid>
                                                                <Grid item xs={3} style={{ paddingRight: "4px" }}>
                                                                    <Paper className={classes.paper} style={{
                                                                        backgroundColor: `${details.data.legalities.pioneer}` === "not_legal" ? "red" : "green",
                                                                        color: "white"
                                                                    }}>{`${details.data.legalities.pioneer}` === "not_legal" ? "Not legal" : "Legal"}</Paper>
                                                                </Grid>
                                                                <Grid item xs={3}>
                                                                    <Paper className={classes.paper}>Historic</Paper>
                                                                </Grid>
                                                                <Grid item xs={3}>
                                                                    <Paper className={classes.paper} style={{
                                                                        backgroundColor: `${details.data.legalities.historic}` === "not_legal" ? "red" : "green",
                                                                        color: "white"
                                                                    }}>{`${details.data.legalities.historic}` === "not_legal" ? "Not legal" : "Legal"}</Paper>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Grid container>
                                                                <Grid item xs={3}>
                                                                    <Paper className={classes.paper}>Modern</Paper>
                                                                </Grid>
                                                                <Grid item xs={3} style={{ paddingRight: "4px" }}>
                                                                    <Paper className={classes.paper} style={{
                                                                        backgroundColor: `${details.data.legalities.modern}` === "not_legal" ? "red" : "green",
                                                                        color: "white"
                                                                    }}>{`${details.data.legalities.modern}` === "not_legal" ? "Not legal" : "Legal"}</Paper>
                                                                </Grid>
                                                                <Grid item xs={3}>
                                                                    <Paper className={classes.paper}>Pauper</Paper>
                                                                </Grid>
                                                                <Grid item xs={3}>
                                                                    <Paper className={classes.paper} style={{
                                                                        backgroundColor: `${details.data.legalities.pauper}` === "not_legal" ? "red" : "green",
                                                                        color: "white"
                                                                    }}>{`${details.data.legalities.pauper}` === "not_legal" ? "Not legal" : "Legal"}</Paper>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Grid container>
                                                                <Grid item xs={3}>
                                                                    <Paper className={classes.paper}>Legacy</Paper>
                                                                </Grid>
                                                                <Grid item xs={3} style={{ paddingRight: "4px" }}>
                                                                    <Paper className={classes.paper} style={{
                                                                        backgroundColor: `${details.data.legalities.legacy}` === "not_legal" ? "red" : "green",
                                                                        color: "white"
                                                                    }}>{`${details.data.legalities.legacy}` === "not_legal" ? "Not legal" : "Legal"}</Paper>
                                                                </Grid>
                                                                <Grid item xs={3}>
                                                                    <Paper className={classes.paper}>Penny</Paper>
                                                                </Grid>
                                                                <Grid item xs={3}>
                                                                    <Paper className={classes.paper} style={{
                                                                        backgroundColor: `${details.data.legalities.penny}` === "not_legal" ? "red" : "green",
                                                                        color: "white"
                                                                    }}>{`${details.data.legalities.penny}` === "not_legal" ? "Not legal" : "Legal"}</Paper>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Grid container>
                                                                <Grid item xs={3}>
                                                                    <Paper className={classes.paper}>Vintage</Paper>
                                                                </Grid>
                                                                <Grid item xs={3} style={{ paddingRight: "4px" }}>
                                                                    <Paper className={classes.paper} style={{
                                                                        backgroundColor: `${details.data.legalities.vintage}` === "not_legal" ? "red" : "green",
                                                                        color: "white"
                                                                    }}>{`${details.data.legalities.vintage}` === "not_legal" ? "Not legal" : "Legal"}</Paper>
                                                                </Grid>
                                                                <Grid item xs={3}>
                                                                    <Paper className={classes.paper}>Commander</Paper>
                                                                </Grid>
                                                                <Grid item xs={3}>
                                                                    <Paper className={classes.paper} style={{
                                                                        backgroundColor: `${details.data.legalities.commander}` === "not_legal" ? "red" : "green",
                                                                        color: "white"
                                                                    }}>{`${details.data.legalities.commander}` === "not_legal" ? "Not legal" : "Legal"}</Paper>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </div>
                                            </ListItem>
                                        </List>
                                    ) : null}
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <DetailsSetTable details={details ? details : null} />
                                <DetailsPrintsTable allPrints={details?.data.prints_search_uri} />
                            </Grid>
                        </Grid>
                    </div>
                )}
        </>
    )
}
