import { fade, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    searchbarContainer: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        borderRadius: '4px',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    titleButton: {
        borderRadius: "2px",
        width: "44",
        height: "42"
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: '202px',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'white',
    },
    dropdown: {
        position: 'absolute',
        top: 3,
        right: 0,
        left: 404,
        zIndex: 1,
        border: '1px solid',
        padding: theme.spacing(1),
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "center",
        maxWidth: "606px",
        maxHeight: "69px",
        borderRadius: "6px"
    },
    inputInput: {
        fontWeight: "bold",
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    dropButton: {
        backgroundColor: "white",
        color: "blue",
        margin: "2px"
    },
    input: {
        color: "white",
        paddingLeft: "43px"
    },
}));
