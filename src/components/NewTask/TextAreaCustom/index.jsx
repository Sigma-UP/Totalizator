import { TextareaAutosize } from "@mui/material";
import classes from './style.module.css';

const TextAreaCustom = (props) => {
    return(
        <TextareaAutosize
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        minRows={props.minRows}
        maxRows={props.maxRows}
        className={classes.text}
        />
    );
}

export default TextAreaCustom;