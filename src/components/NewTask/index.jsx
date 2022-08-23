import { Button, Grid, TextareaAutosize} from '@mui/material';
import PageHeadline from '../PageHeadline';
import classes from './style.module.css';

const NewTask = () => {
    const buttonStyles = {
        height: '30px',
        borderRadius: '50px',
        color:'rgba(42, 166, 22, 1)',
        borderColor:'rgba(42, 166, 22, 1)',
        backgroundColor:'rgba(168, 229, 159, 1)',
        fontFamily: 'Inter',
        '&:hover':{
            backgroundColor: 'rgba(199, 246, 191, 1)',
            borderColor: 'rgba(128, 217, 58, 1)',
            color: 'rgba(128, 217, 58, 1)'
        }
    }
    
    return(
        <Grid container direction="column" pt={2} rowSpacing={2} sx={{maxWidth:'405px'}}>
            <Grid item sx={{
                display:'flex', justifyContent:'center', alignItems:'center'
            }}>
                <PageHeadline text="NEW TASK"/>
            </Grid>
            <Grid item sx={{
                display:'flex', justifyContent: 'center', width:'100%'
            }}>
                <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Type a headline here..."
                className={classes.shit}
                />
            </Grid>
            <Grid item sx={{
                display:'flex', justifyContent: 'center', width:'100%'
            }}>
                <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Type a description here..."
                    minRows={10}
                    className={classes.shit}
                />
            </Grid>
            <Grid 
                container 
                item 
                sx={{
                    display:'flex', justifyContent: 'center', width:'100%', maxWidth:'405px'
                }}>
                <Grid item xs={6}>
                    <Button variant="outlined" sx={buttonStyles}>CANCEL</Button>
                </Grid>
                <Grid item xs sx={{display:'flex', justifyContent: 'flex-end'}}>
                    <Button variant="outlined" sx={buttonStyles}>SUBMIT</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default NewTask;
 