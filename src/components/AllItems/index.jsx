import { Box, Grid } from '@mui/material';
import { Container } from '@mui/system';
import styles from './style.module.css';

const AllItems = () => {
    return(
        <Grid container direction="column" sx={{width:'100%', alignItems: 'center'}}>
            <Container item className={styles.header}>
                <Box sx={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'}}>ALL TASKS</Box>
            </Container>
            <Grid container direction="column" item className={styles.item}>
                <Grid container item>
                    <Grid item xs={9} sx={{fontWeight: '500'}}>
                        TASK name
                    </Grid>
                    <Grid item xs sx={{textAlign:'right', fontWeight: '500'}}>
                        12:40PM
                    </Grid>
                </Grid>
                <Grid item sx={{fontWeight: '400', color:'darkgray'}}>
                    Lorem
                </Grid>
            </Grid>
        </Grid>
    )
}
export default AllItems;
 