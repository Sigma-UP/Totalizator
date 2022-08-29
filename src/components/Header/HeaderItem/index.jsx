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
          height: '40px',
          width: '40px',
          margin: '8px',
          }}
          >
            {children} 
          </IconButton>
      </NavLink>
    )
}

export default HeaderItem;