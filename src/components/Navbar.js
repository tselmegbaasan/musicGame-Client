import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        setClick(!click)
    }

    const closeMobileMenu = () => {
        setClick(false);
    }

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <i class="fas fa-music"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick} >
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/howToPlay' className="nav-links" onClick={closeMobileMenu}>HOW TO PLAY</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/readMore' className="nav-links" onClick={closeMobileMenu}>READ MORE</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/newGame' className="nav-links-mobile" onClick={closeMobileMenu}>START NEW GAME</Link>
                        </li>
                    </ul>
                    {button && <Button link="/newGame" buttonStyle="btn--outline--nav" buttonSize="btn--medium">START NEW GAME</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;