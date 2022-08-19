import { Grid } from '@mui/material';
import PageHeadline from '../PageHeadline';
import TaskItem from './TaskItem';

const AllItems = () => {
    return(
        <Grid container direction="column" sx={{width:'100%', alignItems: 'center'}}>
            <PageHeadline text="All Tasks"/>
            <TaskItem/>
            <TaskItem/>
            <TaskItem/>
        </Grid>
    )
}
export default AllItems;
 