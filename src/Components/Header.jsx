// import univ_logo from "../Images/univ_logo.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Header.css";
import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom";
import logo from "../Images/logo1.png";
import { Facebook, Twitter, GitHub, LinkedIn} from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';
// import WhiteLG from "../Images/WhiteLG.png";
// import univ_logo from "../Images/logo.png";
function CustomLink({ to, children, ...props }) {
  const url = window.location.pathname;
  const resolvedPath = useResolvedPath(to);
  const isactive = useMatch({ path: resolvedPath.pathname, end: true });
  console.log(to, url.includes(to) ? "active" : "");
  console.log(isactive);
  return (
    <Link to={to} {...props}>
      {/* ("active" && isactive )+  */}
      <Nav className={url.includes(to) ? "active" : "inactive"} href={to}>
        {children}
      </Nav>
    </Link>
  );
}

function Header() {
  const path = useLocation();
  return (
    <>
      <Navbar
        bg="light"
        expand="md"
        bsPrefix="navbar"
        className={path.pathname.includes("/About") ? "WhiteMode" : ""}
      >
        <Container fluid="sm">
          <Navbar.Brand href="/Home">
            {/* <img
              className="logo"
              src={logo}
              alt="logo"
            /> */}
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto align-end w-100 justify-content-center">
              <CustomLink className="link_page" to="/Home">
                Home
              </CustomLink>
              <CustomLink className="link_page" to="/Projects">
              Projects
              </CustomLink>
              <CustomLink className="link_page" to="/FAQs">
              FAQs
              </CustomLink>
              <CustomLink className="link_page" to="/Contact">
               Contact
              </CustomLink>
              
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
    </>
  );
}

export default Header;
