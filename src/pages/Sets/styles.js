import { makeStyles } from '@material-ui/core/styles';
import Image from '../../images/minimal-blur.jpg';

export const useStyles = makeStyles((theme) => ({
    img: {
        width: "238px", height: "334px", transition: "244ms all", margin: "1px",
        borderRadius: "15px",
        // scrollSnapAlign: "start", //scrolling prop
        "&:hover": {
            marginLeft: "0 11px",
            transform: "scale(1.1)",
            cursor: "pointer"
        }
    },

    container: {
        display: "flex",
        width: "100%",
        justifyContent: "space-evenly"
    },

    wrapper: {
        backgroundImage: `url(${Image})`,
        backgroundColor: "#4080bf",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        height: "100%",

    },

    loader: {
        width: "200px",
    },

    loaderRoot: { height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#4080bf", backgroundImage: `url(${Image})` },

}))