import React, { useState } from "react";
import "./Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from "../../assets/rental-heaven-logo-transparent-low-res.png";
import { FaBars as BurgirIcon } from "react-icons/fa";
import { CgClose as BurgirClose } from "react-icons/cg";
import { useAuthContext } from "../../context/authContext";
import { signOutUser } from "../../firebase/firebase-auth";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const { signedUser, isAdminAuth } = useAuthContext();

  const [showSubNav, setShowSubnav] = useState(false);
  const toggleSubNav = (isActive) => {
    setShowSubnav(isActive);
  };

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
          <CustomLink to="/" onClick={() => setNavActive(false)}>
            Home
          </CustomLink>
          <CustomLink to="/cars" onClick={() => setNavActive(false)}>
            Cars
          </CustomLink>
          <CustomLink to="/contacts" onClick={() => setNavActive(false)}>
            Contact
          </CustomLink>
          {isAdminAuth() && (
            <>
              <CustomLink to="/customers" onClick={() => setNavActive(false)}>
                Customers
              </CustomLink>
              <CustomLink to="/rentals" onClick={() => setNavActive(false)}>
                Rentals
              </CustomLink>
            </>
          )}
          {!signedUser ? (
            <CustomLink to="/signIn" onClick={() => setNavActive(false)}>
              Sign In
            </CustomLink>
          ) : (
            <CustomLink
              showSubNav={showSubNav}
              onMouseEnter={() => toggleSubNav(true)}
              onMouseLeave={() => toggleSubNav(false)}
            >
              -- {signedUser.name} {signedUser.surname} --
            </CustomLink>
          )}
          {/* <CustomLink to="/signUp">SignUp</CustomLink> */}
        </div>
        <div className="nav-burgir" onClick={toggleMenu}>
          {navActive ? <BurgirClose /> : <BurgirIcon />}
        </div>
      </nav>
    </header>
  );
};

function CustomLink({ to, children, showSubNav, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  //end:true makes sure the entire URL matches
  const { isMainAdminAuth } = useAuthContext();

  return (
    <Link to={to} {...props}>
      {to ? (
        <li className={isActive ? "active" : ""}>{children}</li>
      ) : (
        <>
          <li className="logged-profile">
            {children}
            <ul className={`sub-nav-profile ${!showSubNav && "hidden"}`}>
              <li onClick={() => signOutUser()}>Sign Out</li>
            </ul>
          </li>
        </>
      )}
    </Link>
  );
}

export default Navbar;
