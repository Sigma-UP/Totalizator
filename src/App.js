import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import './App.css';
import AllItems from './components/AllItems';
import Header from './components/Header';

const App = () => {
  return (
    <Grid className="app-wrapper">
      <Header/>
      <Container sx={{margin:'auto'}}>
        <AllItems/>
      </Container>
    </Grid>
  );
}

export default App;
