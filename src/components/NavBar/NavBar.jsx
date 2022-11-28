import './NavBar.css'
import { useState } from 'react'
import logo from '../../assets/images/logo.png'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {

    const [mobNavLinks, setMobNavLinks] = useState("");

    const navLinksToggle = () => {
        mobNavLinks === "none" ? setMobNavLinks("block") : setMobNavLinks("none")
    }

    return (
        <div className="NavBar">
            <nav>
                <div className="logo">
                    <Link to="/"><img className="width" src={logo} alt='' /></Link>
                </div>
                <div className="barsDiv" onClick={navLinksToggle}>
                    <div className="bars">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="navLinks" style={{ display: mobNavLinks }}>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/Services">Services</NavLink></li>
                        <div className="dropdown">
                            <button className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Destinations
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link className="dropdown-item" to="/Australia">Australia</Link>
                                <Link className="dropdown-item" to="/USA">USA</Link>
                                <Link className="dropdown-item" to="/UK">UK</Link>
                                <Link className="dropdown-item" to="/Canada">Canada</Link>
                                <Link className="dropdown-item" to="/Sweden">Sweden</Link>
                                <Link className="dropdown-item" to="/Kyrgyzstan">Kyrgyzstan</Link>
                            </div>
                        </div>
                        <li><NavLink to="/Updates">Updates</NavLink></li>
                        <li><NavLink to="/IELTS">IELTS</NavLink></li>
                        <li><NavLink to="/Blog">Blog</NavLink></li>
                        <li><NavLink to="/FAQ">FAQ's</NavLink></li>
                        <li><NavLink to="/About">About</NavLink></li>
                        <div className="dropdown">
                            <button className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Branches
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link className="dropdown-item" to="/FsdBranch">Faisalabad Branch</Link>
                                <Link className="dropdown-item" to="/LahoreBranch">Lahore DHA Branch</Link>
                                <Link className="dropdown-item" to="/MultanBranch">Multan Branch</Link>
                                <Link className="dropdown-item" to="/contact-us">Contact Us</Link>
                            </div>
                        </div>
                        <li><NavLink to="/Apply">Apply</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;