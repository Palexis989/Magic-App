import React from 'react'
import { useStyles } from './styles';

export default function DeckBuilder() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h4>Aprilia rules!!!</h4>
        </div>
    )
}
