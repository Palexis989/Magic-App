import { makeStyles } from '@material-ui/core/styles';
import Image from '../../images/minimal-blur.jpg';

export const useStyles = makeStyles({
    root: {
        backgroundImage: `url(${Image})`,
        backgroundColor: "#4080bf",
    }
});
