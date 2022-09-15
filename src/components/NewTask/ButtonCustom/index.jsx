import { Button, styled} from '@mui/material';


const BCustom = styled(Button)`
    height: 30px;
    border-radius: 20px;
    color: rgba(120, 204, 54, 1);
    border-color: rgba(120, 204, 54, 1);
    background-color: rgba(199, 246, 191, 1);
    font-family: Inter;
    
    :hover{
        background-color: white;
        border-color: rgba(128, 217, 58, 1);
        color: rgba(128, 217, 58, 1);
    }
`


export default function ButtonCustom(props){
    return(
        <BCustom variant='outlined' onClick={props.onClick}>{props.text}</BCustom>
    )
}
 