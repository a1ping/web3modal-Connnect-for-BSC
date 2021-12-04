import React , { useState } from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem } from './NavBarElements'
import '../../App.css';
import {FaBars} from 'react-icons/fa'




const Navbar = ({ toggle, Web3ModalComp}) => {
    
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
        setColorchange(true);
        }
        else{
        setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
        
        return (
            <>
                <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
                    <NavbarContainer>
                        <NavLogo to="/"><img  alt="logo" className="logo" src="assets/images/logo-website.png" /></NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon> 
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="header">Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="about">About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="platform">Introduction</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="tokensale">Tokens</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="roadmap">Roadmap</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="team">Team</NavLinks>
                            </NavItem>
                            <NavItem>
                                <a className="wpaper" href="/assets/whitepaper.pdf">Whitepaper</a>
                            </NavItem>
                            <NavItem>
                                <Web3ModalComp bntid = "btn_connect"/>
                                {/* <button id="btn_connect">connect</button> */}
                            </NavItem>
                        </NavMenu> 
                    </NavbarContainer>
                </Nav>

            </>
        )
}

export default Navbar
