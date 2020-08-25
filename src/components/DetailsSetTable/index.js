import React, { useEffect, useState } from 'react';

import { useStyles } from './styles';
// import { getAllPrints } from '../../utils/Api';
import { Link, useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';



export default function DetailsSetTable({ details }) {
    const classes = useStyles();

    const [expansionsDetails, setExpansionDetails] = useState();

    useEffect(() => {
        const doFetch = async () => {
            const res = await console.log(expansionsDetails);
            console.log(res);
            setExpansionDetails(res);
        }
        doFetch();
    }, [expansionsDetails])  //callback

    return (
        <>
            <Link to={`/sets/${details?.data.set}`}>
                <Grid item xs={12}>
                    <Grid container className={classes.gridContainer}>
                        <Grid item xs={3} >Logo</Grid>
                        <Grid item xs={6} >{details?.data.set_name}</Grid>
                        <Grid item xs={3} >{details?.data.set}</Grid>
                    </Grid>
                </Grid>
            </Link>
        </>
    );
}
