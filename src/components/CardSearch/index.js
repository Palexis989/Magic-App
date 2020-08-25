import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { useStyles } from './styles';
// import Image from '../../images/magic-logo.jpg';
import { getFuzzyNameCard, } from '../../utils/Api';
import { Link, useHistory, } from 'react-router-dom';
import ErrorDialog from '../../components/ErrorDialog';

export default function CardSearch() {

    // search.onclick = function (event) {
    //     event.preventDefault();
    //     const name = search.value;

    //     getFuzzyNameCard(name);
    //     console.log(getFuzzyNameCard(name));

    //     search.value = "";
    // }

    const history = useHistory();

    const [modalError, setModalError] = useState(false);
    const [errorText, setErrorText] = useState("");
    const [errorTitle, setErrorTitle] = useState("");


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


    const classes = useStyles();

    const [value, setValue] = React.useState();


    return (
        <div className={classes.searchbarContainer}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
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
                    {/* <IconButton onClick={() => console.log('Press Check')}>
                            <SearchIcon />
                        </IconButton> */}
                    <div className={classes.search}>
                        {/* <div className={classes.searchIcon} >
                            </div> */}
                        <InputBase
                            onKeyPress={handleSearch}
                            className={classes.input}
                            onChange={event => {    //adding the onChange event
                                setValue(event.target.value)
                            }}
                            placeholder="Search a card"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
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
        </div>
    )
}
