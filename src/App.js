import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import './App.css';
import Header from './components/Header';
import NewTask from './components/NewTask';

const App = () => {
  return (
    <Grid className="app-wrapper">
      <Header/>
      <Container sx={{margin:'auto'}}>
        <NewTask/>
      </Container>
    </Grid>
  );
}

export default App;
