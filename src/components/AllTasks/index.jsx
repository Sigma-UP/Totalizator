import { Grid } from '@mui/material';
import PageHeadline from '../PageHeadline';
import TaskItem from './TaskItem';

const AllTasks = () => {
    return(
        <Grid container direction="column" pt={2} rowSpacing={2} sx={{maxWidth:'405px', fontFamily:'Inter'}}>
            <Grid item sx={{
                display:'flex', justifyContent:'center', alignItems:'center'
            }}>
                <PageHeadline text="ALL TASKS"/>
            </Grid>
            <Grid item>
                <TaskItem headline="React" description="Finish learn React" deadline="12:40PM"/>
            </Grid>
            <Grid item>
                <TaskItem headline="Olya" description="I love you!" deadline="Endless"/>
            </Grid>
        </Grid>
    )
}
export default AllTasks;
 