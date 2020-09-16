import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles({

    // currentPrint: {
    //     backgroundColor: "#4080bf"
    // },

    

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
    anchors: {
        textDecoration: "none"
    }
});
