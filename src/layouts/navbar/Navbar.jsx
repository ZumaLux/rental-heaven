import React, { useState } from "react";
import "./Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaBars as BurgirIcon } from "react-icons/fa";
import { CgClose as BurgirClose } from "react-icons/cg";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleMenu = () => {
    
    setNavActive((prevState) => !prevState);
  };

  return (
    <header>
      <nav className="nav">
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>
        <div className={navActive ? "nav-links " : "nav-links nav-hidden "}>
          <CustomLink to="/" onClick={()=>setNavActive(false)}>
            Home
          </CustomLink>
          <CustomLink to="/cars" onClick={()=>setNavActive(false)}>
            Cars
          </CustomLink>
          <CustomLink to="/contacts" onClick={()=>setNavActive(false)}>
            Contact
          </CustomLink>
          <CustomLink to="/customers" onClick={()=>setNavActive(false)}>
            Customers
          </CustomLink>
          <CustomLink to="/rentals" onClick={()=>setNavActive(false)}>
            Rentals
          </CustomLink>

          <CustomLink to="/signIn" onClick={()=>setNavActive(false)}>
            Sign In
          </CustomLink>
          {/* <CustomLink to="/signUp">SignUp</CustomLink> */}
        </div>
        <div className="nav-burgir" onClick={toggleMenu}>
          {navActive ? <BurgirClose /> : <BurgirIcon />}
        </div>
      </nav>
    </header>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  //end:true makes sure the entire URL matches

  return (
    <Link to={to} {...props}>
      <li className={isActive ? "active" : ""}>{children}</li>
    </Link>
  );
}

export default Navbar;
