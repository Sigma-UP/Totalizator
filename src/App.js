import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import './App.css';
import Header from './components/Header';
import NewTask from './components/NewTask';

const App = () => {
  return (
    <Grid className="app-wrapper">
      <Header/>
      <Container sx={{padding:'16px', paddingTop: '0px', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <NewTask/>
      </Container>
    </Grid>
  );
}

export default App;
