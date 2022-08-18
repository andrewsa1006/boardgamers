import "./TopNav.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector, useDispatch } from "react-redux";
import { setLogin, setRegister } from "../../store/reducers/AuthTypeReducer";

const TopNav = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  return (
    <Navbar bg="dark" fixed="top" variant="dark" expand="lg">
      <Navbar.Brand className="ml-3" href="/">
        Boardgamers
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {user.display_name ? (
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#home">Friends</Nav.Link>
            <Nav.Link href="#home">Marketplace</Nav.Link>
            <NavDropdown title="Collection" id="collection-dropdown">
              <NavDropdown.Item>View Collection</NavDropdown.Item>
              <NavDropdown.Item>Add Game</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Plays" id="plays-dropdown">
              <NavDropdown.Item>View Plays</NavDropdown.Item>
              <NavDropdown.Item>Add Play</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        ) : (
          <Nav className="me-auto"></Nav>
        )}

        {user.display_name ? (
          <Nav>
            <Nav.Link href="#home">Sign Out</Nav.Link>
          </Nav>
        ) : (
          <Nav>
            <Nav.Link
              onClick={() => {
                dispatch(setLogin());
              }}
            >
              Login
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                dispatch(setRegister());
              }}
            >
              Register
            </Nav.Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
    // <div class="sidebar">
    //   <a class="active" href="#home">
    //     Home
    //   </a>
    //   <a href="#news">News</a>
    //   <a href="#contact">Contact</a>
    //   <a href="#about">About</a>
    // </div>
  );
};

export default TopNav;
