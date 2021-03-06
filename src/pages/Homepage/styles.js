import { makeStyles } from '@material-ui/core/styles';
import Image from '../../images/minimal-blur.jpg';

export const useStyles = makeStyles((theme) => ({
    root: { height: "100vh", display: "flex", alignItems: "center", backgroundColor: "#4080bf", backgroundImage: `url(${Image})` },

    loaderRoot: { height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#4080bf", backgroundImage: `url(${Image})` },

    wrapper: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#4080bf",
        backgroundImage: `url(${Image})`,
    },
    homeButton: {
        paddingLeft: "4px"
    },
    loader: {
        width: "200px",
    },
}));