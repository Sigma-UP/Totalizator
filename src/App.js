import { Route, Routes } from 'react-router-dom';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import Header from './components/Header';
import NewTask from './components/NewTask';
import AllTasks from './components/AllTasks';
import './App.css';

const App = (props) => {
  return (
      <Grid className="app-wrapper">
        <Header/>
        <Container sx={{padding:'16px', paddingTop: '0px', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Routes>
            <Route path="/new" element={<NewTask addTask={props.addTask} newTask={props.newTask}/>} />
            <Route path="/all" element={<AllTasks data={props.state.tasksData.tasks}/>} />
          </Routes>  
        </Container>
      </Grid>
  );
}

export default App;
