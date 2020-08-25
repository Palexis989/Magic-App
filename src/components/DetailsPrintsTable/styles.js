import { makeStyles } from '@material-ui/core/styles';
// import Image from '../../images/minimal-blur.jpg';

export const useStyles = makeStyles({

    // currentPrint: {
    //     backgroundColor: "#4080bf"
    // },

    tableWrapper: {
        backgroundColor: "4080bf",
        height: "100px",
        width: "100px"
    },

    printsLink: {
        textDecoration: "none",
        "&:visited": {
            color: "black"
        },
        "&:link": {
            color: "black"
        },
        "&:hover": {
            color: "#4080bf"
        }
    },

    denseTableContainer: {
        maxWidth: "424px",
        maxHeight: "669px",
        borderRadius: "6px",
        boxShadow: "1px 3px"
    },
    tableHead: {
        backgroundColor: "#4080bf"
    },
    headTableCell: {
        color: "white",
        backgroundColor: "#4080bf",
        width: "100px",
    },
});
