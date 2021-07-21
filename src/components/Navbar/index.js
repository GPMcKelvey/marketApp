import React from 'react'
import { 
    Nav, 
    NavLink, 
    Bars, 
    NavMenu, 
    NavBtn, 
    NavBtnLink
 } from './NavbarElements';
 import logo from "./logo.png"

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={logo}
                    height="140" width="140"
                    alt="logo" />  
                </NavLink>
                <Bars /> 
                <NavMenu> 
                    <NavLink to="/resources" activeStyle>
                        Resources 
                    </NavLink>
                    <NavLink to="/forums" activeStyle>
                        Forums 
                    </NavLink>
                    <NavLink to="/farmers" activeStyle>
                        Farmers 
                    </NavLink>
                    <NavLink to="/markets" activeStyle>
                        Markets
                    </NavLink>
                    <NavLink to="/Products" activeStyle>
                        Classes
                    </NavLink>
                    <NavLink to="/Volunteer" activeStyle>
                       Volunteer
                    </NavLink>
                    {/* <NavBtnLink to='/signin'>Sign In</NavBtnLink> */}

                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/Login'>Login</NavBtnLink>
                </NavBtn>
                <NavBtn>
                    <NavBtnLink to='Signup'>Register</NavBtnLink>
                </NavBtn> 
            </Nav>
        </>
    )
}

export default Navbar
