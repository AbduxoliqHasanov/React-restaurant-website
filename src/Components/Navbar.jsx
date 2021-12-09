import React,{useState} from 'react'
import { Link } from 'react-scroll';
import logo from "../images/logo1.png"

export default function Navbar() {
    const [nav,setNav] = useState(false);
    const changeBackground = () => {
        if(window.scrollY>=50){
            setNav(true)
        }else{
            setNav(false)
        }
    }
    window.addEventListener("scroll",changeBackground);
    return (
        <nav className={nav?"nav active":"nav"}>
            <Link to='main' className='logo' smooth={true} duration={2000}>
                <img src={logo} alt='foto'/>
            </Link>
            <input className="menu-btn" type="checkbox" id='menu-btn' />
            <label className='menu-icon' for="menu-btn">
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link smooth={true} duration={2000} to='main'>Home</Link></li>
                <li><Link smooth={true} duration={2000} to='products'>Product</Link></li>
                <li><Link smooth={true} duration={2000} to='about'>About</Link></li>
                <li><Link smooth={true} duration={2000} to='contact'>Contact</Link></li>
            </ul>

        </nav>
    )
}
