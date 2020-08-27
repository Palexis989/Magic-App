import { makeStyles } from '@material-ui/core/styles';
import Image from '../../images/minimal-blur.jpg';

export const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        overflowX: "auto",
        overflowY: "hidden",
        width: "100%",
        backgroundImage: `url(${Image})`,
        backgroundColor: "#4080bf",
        marginLeft: "4px",
        marginBottom: "69px"
        // scrollSnapType: "y mandatory" //scrolling prop
    },
    img: {
        width: "238px", height: "334px", transition: "244ms all", margin: "2px",
        backgroundImage: `url(${Image})`, borderRadius: "15px", backgroundColor: "#4080bf",
        // scrollSnapAlign: "start", //scrolling prop
        "&:hover": {
            marginLeft: "0 11px",
            transform: "scale(1.1)",
            cursor: "pointer"
        }
    }
}));