import { IconButton } from "@mui/material";
import { NavLink, useMatch } from "react-router-dom";

const HeaderItem = (props) => {
  const { path, children } = props;
  return(
      <NavLink to={path}>
          <IconButton 
          disabled={useMatch(path)}
          sx={{
          minWidth: 0,
          borderRadius:'50%',
          height: '30px',
          width: '30px',
          margin: '8px',
          }}
          >
            {children} 
          </IconButton>
      </NavLink>
    )
}

export default HeaderItem;