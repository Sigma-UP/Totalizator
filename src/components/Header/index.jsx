import HeaderItem from "./HeaderItem";
import "./index.css"


const Header = () =>{
    return(
        <div className='headerContainer'>
            <HeaderItem path="/all"/>
            <HeaderItem path="/new"/>
        </div>
    )
}

export default Header;