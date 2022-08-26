import { Grid } from '@mui/material';
import styles from './style.module.css';

const TaskItem = () => {
    return(
        <Grid container direction="column" className={styles.item}>
            <Grid container item>
                <Grid item xs={9} sx={{fontWeight: '500'}}>
                    TASK name
                </Grid>
                <Grid item xs sx={{textAlign:'right', fontWeight: '500'}}>
                    12:40PM
                </Grid>
            </Grid>
            <Grid item sx={{fontWeight: '400', color:'darkgray'}}>
                Lorem
            </Grid>
        </Grid>
    )
}
export default TaskItem;
 