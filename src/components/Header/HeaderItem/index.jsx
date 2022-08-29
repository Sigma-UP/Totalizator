import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";


const HeaderItem = (props) => {
  const { path, children } = props;
  return(
      <Link to={path}>
          <IconButton 
          sx={{
          minWidth: 0,
          borderRadius:'50%',
          height: '40px',
          width: '40px',
          margin: '8px',
          }}>
            {children} 
          </IconButton>
        </Link>
    )
}

export default HeaderItem;