import React, { useEffect, useState, } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './styles';
import { getAllPrints } from '../../utils/Api';
import { Link, useParams } from 'react-router-dom';
// import { Grid } from '@material-ui/core';


export default function DetailsPrintsTable({ allPrints, details }) {
    const classes = useStyles();

    const { id } = useParams();

    const [prints, setPrints] = useState();

    useEffect(() => {
        setPrints(null)
        const doFetch = async () => {
            const res = await getAllPrints(allPrints)
            setPrints(res.data)
        }
        doFetch();
    }, [allPrints, id])
    return (
        <>

            <TableContainer className={classes.denseTableContainer} component={Paper}>
                <Table stickyHeader className={classes.table} aria-label="sticky table">
                    <TableHead >
                        <TableRow className={classes.tableHead}>
                            <TableCell className={classes.headTableCell}>Prints</TableCell>
                            <TableCell className={classes.headTableCell} align="right">Usd</TableCell>
                            <TableCell className={classes.headTableCell} align="right">Eur</TableCell>
                            <TableCell className={classes.headTableCell} align="right">Tix</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {prints?.map((print) => (
                            <TableRow key={print.set_name}>
                                <TableCell component="th" scope="row">
                                    <Link to={`/details/${print.id}`} className={classes.printsLink}>
                                        {print.set_name}
                                    </Link>
                                </TableCell>
                                <TableCell align="right">{print.prices.usd ? print.prices.usd : "-"}
                                    <a target="_blank" href={print.purchase_uris?.tcgplayer}> Buy</a>
                                </TableCell>
                                <TableCell align="right">{print.prices.eur ? print.prices.eur : "-"}
                                    <a target="_blank" href={print.purchase_uris?.cardmarket}> Buy</a>
                                </TableCell>
                                <TableCell align="right">{print.prices.tix ? print.prices.tix : "-"}
                                    <a target="_blank" href={print.purchase_uris?.cardhoarder}> Buy</a>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
}
