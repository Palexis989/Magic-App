import { makeStyles } from '@material-ui/core/styles';
import Image from '../../images/minimal-blur.jpg';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: "100vh",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${Image})`,
        backgroundColor: "#4080bf",
    },
    loader: {
        width: "200px",
    },
    detailsContainer: {
        display: "flex",
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${Image})`,
        backgroundColor: "#4080bf",
        alignItems: "center",
        justifyContent: "space-evenly",
        fontSize: "small",
        fontWeight: "bold"
    },

    detailsImg: {
        marginLeft: "44px",
        width: "322px", height: "464px",
        borderRadius: "18px"
    },

    dividers: {
        width: '100%',
        maxWidth: 424,
        maxHeight: 624,
        backgroundColor: theme.palette.background.paper,
        borderRadius: "6px",
        boxShadow: "4px 4px"
    },

    nestedGrids: {
        flexGrow: 1,
    },

    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    transformButton: {
        margin: "0",
        position: "absolute",
        top: "87%",
        left: "8%"
    }
}));
