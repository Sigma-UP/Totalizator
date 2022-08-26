import { IconButton } from "@mui/material";
import { HomeIcon } from "../../Icons";
import { Link } from "react-router-dom";

const HeaderItem = (props) => {
    return(
      <Link to={props.path}>
          <IconButton 
          sx={{
          minWidth: 0,
          borderRadius:'50%',
          height: '40px',
          width: '40px',
          margin: '8px',
          }}>
            <HomeIcon /> 
          </IconButton>
        </Link>
    )
}

export default HeaderItem;