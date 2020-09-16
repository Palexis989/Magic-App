import React, { useEffect, useState } from 'react'
import { getAllSets } from '../../utils/Api';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './styles';
import { Link, useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { Icon } from '@material-ui/core';



export default function AllSets() {

    const classes = useStyles();

    const [allSets, setAllSets] = useState(null);

    useEffect(() => {
        const retrieveAllSets = async () => {
            const response = await getAllSets();
            setAllSets(response.data.data);
        }
        retrieveAllSets()
    }, [])

    const history = useHistory();

    const handleClick = (id) => {
        history.push(`/sets/${id}`)
    }

    return (
        <>
            {allSets === null ? (
                <div className={classes.loaderRoot}>
                    <CircularProgress size={150} />
                </div>) :
                (<div className={classes.root}>

                    <TableContainer className={classes.denseTableContainer} component={Paper}>
                        <Table stickyHeader className={classes.table} aria-label="sticky table">
                            <TableHead>
                                <TableRow className={classes.tableHead}>
                                    <TableCell className={classes.tableHeadTitle}>Icon</TableCell>
                                    <TableCell className={classes.tableHeadTitle} align="center">Name</TableCell>
                                    <TableCell className={classes.tableHeadTitle} align="center">Cards</TableCell>
                                    <TableCell className={classes.tableHeadTitle} align="center">Date</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {allSets && allSets?.map((row) => (

                                    <TableRow onClick={() => handleClick(row.id)} key={row.id}>
                                        {/* <Link to={`/sets/${row.code}`}> */}
                                        <TableCell className={classes.rows} align="center"><img
                                            style={{ maxWidth: "42px", maxHeight: "42px" }}
                                            src={`${row.icon_svg_uri}`} /></TableCell>
                                        <TableCell className={classes.rows} align="center">{row.name}</TableCell>
                                        <TableCell className={classes.rows} align="center">{row.card_count}</TableCell>
                                        <TableCell className={classes.rows} align="center">{row.released_at}</TableCell>
                                        {/* </Link> */}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>
                )}
        </>
    )
}
