import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import Header from './components/Header';
import NewTask from './components/NewTask';
import AllTasks from './components/AllTasks';
import './App.css';

const App = (props) => {
  return (
    <BrowserRouter>
      <Grid className="app-wrapper">
        <Header/>
        <Container sx={{padding:'16px', paddingTop: '0px', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Routes>
            <Route path="/new" element={<NewTask />} />
            <Route path="/all" element={<AllTasks />} />
          </Routes>  
        </Container>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
