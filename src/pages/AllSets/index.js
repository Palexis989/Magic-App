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
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';


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

    console.log("riivg", allSets)


    return (
        <>
            {allSets === null ? (
                <div className={classes.loaderRoot}>
                    <CircularProgress size={150} />
                </div>) :
                (<div className={classes.root}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Icon</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">Cards</TableCell>
                                    <TableCell align="right">Date</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {allSets && allSets?.map((row) => (

                                    <TableRow key={row.id}>
                                        <Link to={`/sets/${row.code}`}>
                                            <TableCell align="right">Icon</TableCell>
                                            <TableCell align="right">{row.name}</TableCell>
                                            <TableCell align="right">{row.card_count}</TableCell>
                                            <TableCell align="right">{row.released_at}</TableCell>
                                        </Link>
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
