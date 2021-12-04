import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS }  from 'react-scroll'

export const Nav = styled.nav`
background: none;
height: auto;
font-size: 1rem;
top: 0px;
justify-content: center;
align-items: center;
z-index: 10;
display: flex;
position: sticky;
padding: 16px 0px 0px 0px;

@media screen and (max-with: 960px){
    transition: 0.8 all ease;
}
@media screen and (max-width: 768px){
    height: 70px;
    padding: unset;
}

`
export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: auto;
z-index:1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
color: white;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
align-items: center;
display: flex;
font-weight: bold;
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right : 0px;
        transform: translate(-100%, 60%);
        font-size: 1.4rem;
        cursor: pointer;
        color: white;
    } 
`
export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px){
    display: none;
} 
`

export const NavItem = styled.li`
height: auto;
`

export const NavLinks = styled(LinkS)`
color: #FFF!important;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
font-size: 1rem;
cursor: pointer!important;
font-family: Raleway;

&.active {
    border-bottom: 3px solid #01bf71;
}
`