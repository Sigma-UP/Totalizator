import { Grid } from '@mui/material';
import PageHeadline from '../PageHeadline';
import TaskItem from './TaskItem';

const AllTasks = () => {
    return(
        <Grid container direction="column" pt={2} rowSpacing={2} sx={{maxWidth:'405px'}}>
            <Grid item sx={{
                display:'flex', justifyContent:'center', alignItems:'center'
            }}>
                <PageHeadline text="ALL TASKS"/>
            </Grid>
            <Grid item>
                <TaskItem/>
            </Grid>
            <Grid item>
                <TaskItem/>
            </Grid>
            <Grid item>
                <TaskItem/>
            </Grid>
        </Grid>
    )
}
export default AllTasks;
 