import { Grid } from '@mui/material';
import PageHeadline from '../PageHeadline';
import TaskItem from './TaskItem';

const AllTasks = (props) => {
    return(
        <Grid container direction="column" pt={2} rowSpacing={2} sx={{maxWidth:'405px', fontFamily:'Inter'}}>
            <Grid item sx={{
                display:'flex', justifyContent:'center', alignItems:'center'
            }}>
                <PageHeadline text="ALL TASKS"/>
            </Grid>
            {
                props.data
                .map(task=>
                    <Grid item>
                        <TaskItem 
                        headline = {task.headline} 
                        description={task.description} 
                        deadline={task.deadline}/>
                    </Grid>
                )
            }

        </Grid>
    )
}
export default AllTasks;
 