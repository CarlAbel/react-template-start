import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "./Button"
import "./Navbar.css"

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener("resize", showButton)

  return (
    <>
      <nav className="navbar">
        <div className="navbarContainer">
          <Link to="/" className="navbarLogo" onClick={closeMobileMenu}>
            TRVL <i className="fab fa-typo3"></i>
          </Link>
          <div className="menuIcon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="navItem">
              <Link to="/" className="navLinks" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link
                to="/services"
                className="navLinks"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="navItem">
              <Link
                to="/products"
                className="navLinks"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="navItem">
              <Link
                to="/signUp"
                className="navLinksMobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar
