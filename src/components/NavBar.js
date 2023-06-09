import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import logo from "../assets/img/TS_Transparan.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

import {
    BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window. removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        const navbarHeight = document.querySelector(".navbar").offsetHeight;
        const offsetTop = section.offsetTop - navbarHeight;
    
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      };

    return(
        <Navbar expand='lg' className={scrolled ? "scrolled":"" }>
            <Container>
                <Navbar.Brand href='#home'>
                    <img src={logo} alt="Logo"/>
                </Navbar.Brand>
                
                <Navbar.Toggle>
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                        href="#home"
                        className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
                        onClick={() => {
                            onUpdateActiveLink("home");
                            scrollToSection("home");
                        }}
                        >
                        Home
                        </Nav.Link>
                        <Nav.Link
                        href="#skills"
                        className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
                        onClick={() => {
                            onUpdateActiveLink("skills");
                            scrollToSection("skills");
                        }}
                        >
                        Skills
                        </Nav.Link>
                        <Nav.Link
                        href="#projects"
                        className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
                        onClick={() => {
                            onUpdateActiveLink("projects");
                            scrollToSection("projects");
                        }}
                        >
                        Projects
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                        <a href="https://www.linkedin.com/in/thomas-stefen-mardianto-940357202/">
                            <img src={navIcon1} alt="Icon" />
                        </a>
                        <a href="https://github.com/T0MYAMMM/">
                            <img src={navIcon2} alt="Icon" />
                        </a>
                        <a href="https://instagram.com/thomaassm">
                            <img src={navIcon3} alt="Icon" />
                        </a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}