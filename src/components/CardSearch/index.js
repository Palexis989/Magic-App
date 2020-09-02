import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './styles';
// import Image from '../../images/magic-logo.jpg';
import { getFuzzyNameCard, } from '../../utils/Api';
import { Link, useHistory, } from 'react-router-dom';
import ErrorDialog from '../../components/ErrorDialog';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import { getRandomCards } from '../../utils/Api';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Axios from 'axios';


export default function CardSearch() {


    const history = useHistory();

    const [modalError, setModalError] = useState(false);
    const [errorText, setErrorText] = useState("");
    const [errorTitle, setErrorTitle] = useState("");
    const [open, setOpen] = React.useState(false);

    const [autocompleteOptions, setAutocompleteOptions] = useState([]);


    const handleAutocomplete = () => {
        Axios.get(`https://api.scryfall.com/cards/autocomplete?q=${value}`)
            .then(response => setAutocompleteOptions(response.data.data))
    }

    const doFetchAutocomplete = async (value) => {
        let res = null;
        try {
            res = await getFuzzyNameCard(value);
            console.log(res)
            history.push(`/details/${res.data.id}`)
            window.location.reload();

        } catch (error) {
            console.log(error.response.data.details)
            console.log(error.response.status)
            setErrorTitle(error.response.status)
            setErrorText(error.response.data.details)
            handleOpenModal();
        }
    }

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    const handleCloseModal = () => {
        setModalError(false);
    }

    const handleOpenModal = () => {
        setModalError(true);
    }

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            let res = null;
            const doFetch = async () => {
                try {
                    res = await getFuzzyNameCard(value);
                    console.log(res)
                    history.push(`/details/${res.data.id}`)
                    window.location.reload();

                } catch (error) {
                    console.log(error.response.data.details)
                    console.log(error.response.status)
                    setErrorTitle(error.response.status)
                    setErrorText(error.response.data.details)
                    handleOpenModal();
                }
            }
            doFetch();
        }
    }

    const [randomForButton, setRandomForButton] = useState("")
    const getRandomForButton = async () => {
        const resp = await getRandomCards();
        setRandomForButton(resp)
    }
    getRandomForButton();

    const classes = useStyles();

    const [value, setValue] = React.useState();


    return (
        <div className={classes.searchbarContainer}>
            <AppBar position="static">
                <Toolbar>
                    <ClickAwayListener onClickAway={handleClickAway}>
                        <div>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleClick}
                            >
                                <MenuIcon />
                            </IconButton>
                            {open ? (
                                <div className={classes.dropdown}>
                                    <Link to={"/allsets"}>
                                        <Button variant="contained" color="primary" >
                                            All Sets
                                        </Button>
                                    </Link>
                                    <Link to={`/details/${randomForButton && randomForButton.data.id}`}>
                                        <Button variant="contained" color="primary" >
                                            Random Card
                                        </Button>
                                    </Link>
                                </div>
                            ) : null}
                        </div>
                    </ClickAwayListener>
                    <Typography className={classes.title} variant="h6" noWrap>
                        {/* Magic The Gathering */}

                        <Link to={"/"}>
                            <img className={classes.title}
                                alt={"Not found"}
                                src={Image}
                                width={"44"}
                                height={"42"}
                            // eslint-disable-next-line no-restricted-globals
                            // onClick={() => history.back()}
                            />
                        </Link>

                    </Typography>
                    <div className={classes.search}>
                        <Autocomplete
                            freeSolo
                            disableClearable
                            onChange={(event, value, reason) => {

                                doFetchAutocomplete(value)

                            }}
                            options={autocompleteOptions.map((option) => (

                                option

                            ))}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    onKeyUp={handleAutocomplete}
                                    onKeyPress={handleSearch}
                                    className={classes.input}
                                    onChange={event => {    //adding the onChange event
                                        setValue(event.target.value)
                                    }}
                                    placeholder="Search a card"
                                    InputProps={{ ...params.InputProps, type: 'search' }}
                                // // classes={{
                                // //     root: classes.inputRoot,
                                // //     input: classes.inputInput,
                                // }}

                                />
                            )}
                        />

                    </div>
                </Toolbar>
            </AppBar>
            <ErrorDialog
                modalError={modalError}
                handleCloseModal={handleCloseModal}
                errorText={errorText}
                errorTitle={errorTitle}
            />
        </div >
    )
}
