import { Grid} from '@mui/material';
import PageHeadline from '../PageHeadline';
import ButtonCustom from './ButtonCustom';
import TextAreaCustom from './TextAreaCustom';

const NewTask = () => {    
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
                <TextAreaCustom placeholder="Type a headline here..."/>
            </Grid>
            <Grid item sx={{
                display:'flex', justifyContent: 'center', width:'100%'
            }}>
                <TextAreaCustom placeholder="Type a description here..." minRows={10} maxRows={15}/>
            </Grid>
            <Grid 
                container 
                item 
                sx={{
                    display:'flex', justifyContent: 'center', width:'100%', maxWidth:'405px'
                }}>
                <Grid item xs={6}>
                    <ButtonCustom text="CANCEL"/>
                </Grid>
                <Grid item xs sx={{display:'flex', justifyContent: 'flex-end'}}>
                    <ButtonCustom text="SUBMIT"/>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default NewTask;
 