import React from 'react';
import { SidebarMenu, SidebarWrapper, SidebarLink, SidebarContainer, Icon , CloseIcon } from './SidebarElements';

const Sidebar = ({ isOpen, toggle, Web3ModalComp}) => {
    
        return (
                    <SidebarContainer isOpen={isOpen}>
                        <Icon onClick={toggle}>
                        <CloseIcon />
                            <SidebarWrapper>
                                <SidebarMenu>
                                    <SidebarLink to="about" onClick={toggle}>
                                        Home
                                    </SidebarLink>
                                    <SidebarLink to="about" onClick={toggle}>
                                        About
                                    </SidebarLink>
                                    <SidebarLink to="platform" onClick={toggle}>
                                    Introduction
                                    </SidebarLink>
                                    <SidebarLink to="tokensale" onClick={toggle}>
                                    Tokens
                                    </SidebarLink>
                                    <SidebarLink to="roadmap" onClick={toggle}>
                                    Roadmap
                                    </SidebarLink>
                                    <SidebarLink to="team" onClick={toggle}>
                                    Team
                                    </SidebarLink>
                                    <a className="wpaper" href="assets/whitepaper.pdf">
                                    Whitepaper
                                    </a>
                                    <Web3ModalComp bntid = "btn_connect1"/>                                
                                </SidebarMenu>
                            </SidebarWrapper>
                        </Icon>
                    </SidebarContainer>

        )
}

export default Sidebar
