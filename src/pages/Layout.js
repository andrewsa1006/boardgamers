import "./Layout.css";
import { Outlet } from "react-router-dom";
import TopNav from "../components/Nav/TopNav.js";
import Container from "react-bootstrap/Container";

const Layout = () => {
  return (
    <div>
      <TopNav />
      <Container style={{ marginTop: "70px" }}>
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
