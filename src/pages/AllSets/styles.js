import { makeStyles } from '@material-ui/core/styles';
import Image from '../../images/minimal-blur.jpg';


export const useStyles = makeStyles({
    table: {
        minWidth: 650,
        backgroundColor: "#4080bf",
    },

    root: {
        height: "100vh",
    },

    loaderRoot: { height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#4080bf", backgroundImage: `url(${Image})` },

});