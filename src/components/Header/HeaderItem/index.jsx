import { IconButton } from "@mui/material";
import { HomeIcon } from "../../Icons";

const HeaderItem = () => {
    return(
        <IconButton 
        sx={{
        minWidth: 0,
        borderRadius:'50%',
        height: '40px',
        width: '40px',
        margin: '8px'
        }}>
          <HomeIcon /> 
        </IconButton>
    )
}

export default HeaderItem;