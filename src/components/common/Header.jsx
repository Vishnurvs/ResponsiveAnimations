import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import logo from '../data/images/logo.png'
import {navlink} from '../data/dummydata'
import TocIcon from '@mui/icons-material/Toc';

const Header = () => {
    const [responsive, setResponsive] = useState(false)
  return (
    <div>
      <header>
        <div className="container flexsb">
            <div className="logo">
                <img src={logo} alt=''data-aos="zoom-in-right"/>
            </div>
            <div className={responsive ? "hideMenu" : "nav"}>{navlink.map((links,i)=>
            (
                <Link to={links.url} key={i} data-aos="zoom-in-left">
                    {links.text}
                </Link>
            ))}
            </div>
            <button className='toggle' onClick={()=>setResponsive(!responsive)}>
                <TocIcon className='icon'></TocIcon>
            </button>
        </div>
      </header>
    </div>
  )
}

export default Header
