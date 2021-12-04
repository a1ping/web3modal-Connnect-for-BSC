import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS }  from 'react-scroll'
import { FaTimes } from 'react-icons/fa'



export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: black;
  display: grid;
  align-items: center;
  left: 0;
  top: 0; 
  transition: 0.25s ease-in-out;
  opacity: ${({ isOpen }) => ( isOpen ? '100%' : '0' )};
  left: ${({ isOpen }) => ( isOpen ? '0' : '-100%' )};
`
export const CloseIcon = styled(FaTimes)`
  color: white;
  position: absolute;
  right: 0;
`
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  width: 100%;
`

export const SidebarWrapper = styled.div`
 color: white;
`
export const SidebarMenu = styled.div`
    display: inline-grid;
    grid-template-columns: max-content;
    grid-template-rows: repeat(10,79px);
    position: absolute;
    left: 15%;
`

export const SidebarLink = styled(LinkS)`
color: #FFF!important;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
font-size: 1.5rem;
cursor: pointer!important;
font-family: Raleway;
top: 20px;
position: relative;

&.hover {
    border-bottom: 3px solid #01bf71;
}
`

export const SideBtnWrap = styled.div`
display: flex;
justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
border-radius: 50%;
background: red;
padding: 16px 64px;
color: yellow;
font-size: 1rem:
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
&.hover {
  border-bottom: 3px solid #01bf71;
  background: red;
}
`