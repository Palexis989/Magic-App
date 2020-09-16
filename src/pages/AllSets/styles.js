import { makeStyles } from '@material-ui/core/styles';
import Image from '../../images/minimal-blur.jpg';


export const useStyles = makeStyles({
    table: {
        minWidth: 650,
        backgroundColor: "#4080bf",
    },

    root: {
        height: "100vh",
        margin: "4px"
    },

    loaderRoot: { height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#4080bf", backgroundImage: `url(${Image})` },

    denseTableContainer: {
        maxWidth: "100%",
        maxHeight: "100%",
        borderRadius: "6px",
        boxShadow: "1px 3px",
    },

    rows: {
        color: "white",
        cursor: "pointer",
        fontSize: "large"
    },

    tableHeadTitle: {
        fontSize: "large"
    }

});