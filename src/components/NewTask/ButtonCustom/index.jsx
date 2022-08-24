import { Button} from '@mui/material';
import classes from './style.module.css';

const ButtonCustom = (props) => {
    return(
        <Button variant="outlined" className={classes.customButton}>{props.text}</Button>
    )
}
export default ButtonCustom;
 