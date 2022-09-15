import { Grid } from '@mui/material';
import React from 'react';
import PageHeadline from '../PageHeadline';
import ButtonCustom from './ButtonCustom';
import TextAreaCustom from './TextAreaCustom';

const NewTask = (props) => { 
    let createNewTask = () => {
        props.addTask();
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
                <TextAreaCustom 
                placeholder="Type a headline here..." 
                value={props.newTask.headline.value}
                onChange={(event)=>props.newTask.headline.onChange(event.target.value)}/>
            </Grid>
            <Grid item sx={{
                display:'flex', justifyContent: 'center', width:'100%'
            }}>
                <TextAreaCustom 
                placeholder="Type a description here..." 
                value={props.newTask.description.value}
                onChange={(event)=>props.newTask.description.onChange(event.target.value)}
                minRows={10} maxRows={15}/>
            </Grid>
            <Grid 
                container 
                item 
                sx={{
                    display:'flex', justifyContent: 'center', width:'100%', maxWidth:'405px'
                }}>
                <Grid item xs={6}>
                    <ButtonCustom text="CANCEL" onClick={()=>{alert('Cancel')}}/>
                </Grid>
                <Grid item xs sx={{display:'flex', justifyContent: 'flex-end'}}>
                    <ButtonCustom text="SUBMIT" onClick={createNewTask}/>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default NewTask;
 