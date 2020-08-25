import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';
import { useStyles } from './styles';

export default function ErrorDialog({ modalError, handleCloseModal, errorText, errorTitle }) {

    const classes = useStyles();

    return (
        <Dialog open={modalError} onClose={handleCloseModal}>
            <DialogTitle className={classes.titleStyle}>
                Error: {errorTitle}
            </DialogTitle>
            <DialogContent>
                <p className={classes.contentStyle}>{errorText} <br /> Try again.  </p>
            </DialogContent>
            <Divider className={classes.dividerStyle} />

            <DialogActions>
                <Button onClick={handleCloseModal} color="primary">
                    Ok
                </Button>

            </DialogActions>
        </Dialog>
    )
}
