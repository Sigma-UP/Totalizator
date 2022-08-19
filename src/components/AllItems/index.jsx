import { Grid } from '@mui/material';
import TaskHeader from './TaskHeader';
import TaskItem from './TaskItem';

const AllItems = () => {
    return(
        <Grid container direction="column" sx={{width:'100%', alignItems: 'center'}}>
            <TaskHeader/>
            <TaskItem/>
            <TaskItem/>
            <TaskItem/>
        </Grid>
    )
}
export default AllItems;
 