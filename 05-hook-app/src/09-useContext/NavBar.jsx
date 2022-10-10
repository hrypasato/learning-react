import { Link, NavLink } from "react-router-dom";


export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
                <ul className="navbar-nav">
                    <NavLink 
                        className={({ isActive })=> `nav-link ${ isActive ? 'active': '' }`}
                        to="/"
                    >Home
                    </NavLink>
                    <NavLink 
                        className={({ isActive })=> `nav-link ${ isActive ? 'active': '' }`}
                        to="/login"
                    >Login
                    </NavLink>
                    <NavLink 
                        className={({ isActive })=> `nav-link ${ isActive ? 'active': '' }`}
                        to="/about"
                    >About
                    </NavLink>
                </ul>
        </nav>
    );
}
/* 
<>
<Link className="btn btn-md btn-primary m-4" to="/">Home</Link>
<Link className="btn btn-md btn-primary m-4" to="/about">About</Link>
<Link className="btn btn-md btn-primary m-4" to="/login">Login</Link>
</> */