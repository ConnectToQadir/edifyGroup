import './AdminPenel.css'
import logo from '../../assets/images/logo.png'
import { NavLink, Link, Outlet } from 'react-router-dom'
import { useState, useContext } from 'react'
import { Context } from '../../context/Context'
import { useEffect } from 'react'

const AdminPenel = () => {


    // Checking Internet Connection Start ===========================>

    const [isOnline, setIsOnline] = useState(navigator.onLine);
    useEffect(() => {
        // Update network status
        const handleStatusChange = () => {
            setIsOnline(navigator.onLine);
        };

        // Listen to the online status
        window.addEventListener('online', handleStatusChange);

        // Listen to the offline status
        window.addEventListener('offline', handleStatusChange);

        // Specify how to clean up after this effect for performance improvment
        return () => {
            window.removeEventListener('online', handleStatusChange);
            window.removeEventListener('offline', handleStatusChange);
        };
    }, [isOnline]);

    // Checking Internet Connection End   ===========================>

    const { user, dispatch } = useContext(Context);
    const [mobNavLinks, setMobNavLinks] = useState("");

    const navLinksToggle = () => {
        mobNavLinks === "none" ? setMobNavLinks("block") : setMobNavLinks("none")
    }

    const handleLogout = (e) => {
        if (window.confirm("Are you sure to LOGOUT?")) {
            dispatch({ type: "LOGOUT" })
            window.location.replace("/login");
        }
    }

    return (
        <div className='AdminPenel'>
            <div className="NavBar">
                <nav>
                    <div className="logo">
                        <Link to="/admin/home"><img className="width" src={logo} alt='' /></Link>
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
                            <li><NavLink to="home">Home</NavLink></li>
                            {(user.desig === "Admin" || user.desig === "Developer") && <li><NavLink to="users">Manage Users</NavLink></li>}
                            {(user.desig === "Admin" || user.desig === "Developer") && <li><NavLink to="blogs">Blogs</NavLink></li>}
                            {(user.desig === "Admin" || user.desig === "Developer") && <li><NavLink to="reviews">Reviews</NavLink></li>}
                            <li><NavLink to="applications">Enquiries</NavLink></li>
                            <li><NavLink to="campusEnquiryForm">Enquiry Form</NavLink></li>
                            <li className='userIconAdmin'>
                                <div className="imgDiv">
                                    {user.photo === "" ?
                                        <h4>{user.username.split(" ")[0][0] + user.username.split(" ")[1][0]}</h4> :
                                        <img className='fa-solid' src={user.photo} alt="" />
                                    }
                                    <div style={{ backgroundColor: isOnline ? "rgb(8, 219, 8)" : "red" }} className='onlineSignal'></div>
                                </div>
                                <div>
                                    <h5 className="username">{user.username}</h5>
                                    <p className='slbp'>{user.desig}</p>
                                    <p className="logoutLink"><a onClick={handleLogout} style={{ margin: 0, fontSize: "12px", padding: "0" }} href="/">Logout</a></p>
                                </div>

                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <Outlet />
        </div>
    )
}

export default AdminPenel