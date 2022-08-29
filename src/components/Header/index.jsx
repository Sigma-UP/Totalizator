import HomeIcon from '@mui/icons-material/Home'
import AddIcon from '@mui/icons-material/Add'
import DoneIcon from '@mui/icons-material/Done'
import HeaderItem from './HeaderItem'
import s from './style.module.css'
import { useMatch } from 'react-router-dom'

const Header = () => {
  return (
    <div className={s.headerContainer}>
      <HeaderItem path='/done'>
        <DoneIcon className={useMatch('/done') ? s.active : s.item} />
      </HeaderItem>
      <HeaderItem path='/all'>
        <HomeIcon className={useMatch('/all') ? s.active : s.item} />
      </HeaderItem>
      <HeaderItem path='/new'>
        <AddIcon className={useMatch('/new') ? s.active : s.item} />
      </HeaderItem>
    </div>
  )
}

export default Header
