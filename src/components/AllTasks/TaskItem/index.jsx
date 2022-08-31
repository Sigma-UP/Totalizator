import { Grid } from '@mui/material';
import styles from './style.module.css';

//TODO:
//- when description is over than its field, description displayed
//cutted to not overflow component
//- next redaction of app should provide an action bar. Probably it will
//be realized by adding buttons inside taskitem

const TaskItem = (props) => {
    return(
        <Grid container direction="column" className={styles.item}>
            <Grid container item>
                <Grid item xs={9} sx={{fontWeight: '500'}}>
                    {props.headline}
                </Grid>
                <Grid item xs sx={{textAlign:'right', fontWeight: '500'}}>
                    {props.deadline}
                </Grid>
            </Grid>
            <Grid item sx={{fontWeight: '400', color:'darkgray'}}>
                {props.description}
            </Grid>
        </Grid>
    )
}
export default TaskItem;
 