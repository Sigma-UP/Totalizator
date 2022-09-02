import { Grid } from '@mui/material';
import PageHeadline from '../PageHeadline';
import TaskItem from './TaskItem';
import { tasksData } from '../mock/data';

const AllTasks = (props) => {
    return(
        <Grid container direction="column" pt={2} rowSpacing={2} sx={{maxWidth:'405px', fontFamily:'Inter'}}>
            <Grid item sx={{
                display:'flex', justifyContent:'center', alignItems:'center'
            }}>
                <PageHeadline text="ALL TASKS"/>
            </Grid>
            {
                tasksData
                .map(data=>
                    <Grid item>
                        <TaskItem 
                        headline = {data.headline} 
                        description={data.description} 
                        deadline={data.deadline}/>
                    </Grid>
                )
            }

        </Grid>
    )
}
export default AllTasks;
 