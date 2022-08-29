import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import HeaderItem from "./HeaderItem";
import "./index.css"


const Header = () =>{
    return(
        <div className='headerContainer'>
            <HeaderItem path="/new">
                <DoneIcon/>
            </HeaderItem>
            <HeaderItem path="/all">
                <HomeIcon/>
            </HeaderItem>
            <HeaderItem path="/new">
                <AddIcon/>
            </HeaderItem>
        </div>
    )
}

export default Header;