import React from 'react';
import  {useState} from 'react';
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    const [showlinks, setShowlinks] = useState(false);
    const toggleNavbar =()=>{
        setShowlinks(!showlinks);
    }
    return (
        <div className='navbar'>
            <div className='leftSide' id={showlinks ? 'open':'close'}>
                <img src={logo} alt="logo"/>
                <div className='hiddenLinks'>
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/about'>About</Link>
                <Link to='/Contact'>Contact</Link>
                </div>
            </div>
                                                     
            <div className='rightSide'>
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/about'>About</Link>
                <Link to='/Contact'>Contact</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    );
}

export default Navbar
