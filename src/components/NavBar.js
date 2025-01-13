import { useState, useEffect } from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import { Zigzag } from './svgComponents/ZigzagSVG'
import navIcon1 from '../assets/images/nav-icon1.svg'
import navIcon2 from '../assets/images/github-icon-1-logo-svgrepo-com.svg'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}  id="navBar">
            <Container className='container'>
                <Zigzag className={scrolled ? "zigzag-wrapper-hidden" : "zigzag-wrapper"} />
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className='social-icon'>
                        <a href="https://www.linkedin.com/in/sam-smith-0550632a4/" target="_blank" rel="noopener noreferrer">
                            <img src={navIcon1} alt="" id="linkedin-icon"/>
                        </a>
                        <a href="https://github.com/samsmith00" target="_blank" rel="nonopener nonreferrer">
                            <img src={navIcon2} alt="" id="github-icon"/>
                        </a>
                    </div>
                </span>
                <a href="#connect">
                    <button id="btn-connect"><span class="box">Let's Connect</span></button>
                </a>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}