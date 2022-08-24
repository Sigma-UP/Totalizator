import { TextareaAutosize } from "@mui/material";
import classes from './style.module.css';

const TextAreaCustom = (props) => {
    return(
        <TextareaAutosize
        placeholder={props.placeholder}
        minRows={props.minRows}
        maxRows={props.maxRows}
        className={classes.text}
        />
    );
}

export default TextAreaCustom;