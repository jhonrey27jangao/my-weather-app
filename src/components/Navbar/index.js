import React, { useState } from "react";
import {
  Navbar as ReactStrapNavbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  Collapse,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import { TiWeatherCloudy } from "react-icons/ti";
import AuthButton from "../AuthButton";
import { useAuth0 } from "@auth0/auth0-react";
import useWindowSize from "../../utils/helpers";

const renderNavList = ({ user, collapsed, isMobile }) => {
  if (user) {
    return (
      <>
        {isMobile ? (
          <>
            <Collapse isOpen={!collapsed} navbar>
              <Nav className="me-auto" navbar>
                <NavLink to="/home" tag={Link} className="link-btn">
                  Home
                </NavLink>
                <NavItem>
                  <NavLink to="/weather" tag={Link} className="link-btn">
                    Weather
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
            <AuthButton type="logout" />
          </>
        ) : (
          <>
            <Nav className="me-auto">
              <NavLink to="/home" tag={Link} className="link-btn">
                Home
              </NavLink>
              <NavItem>
                <NavLink to="/weather" tag={Link} className="link-btn">
                  Weather
                </NavLink>
              </NavItem>
            </Nav>
            <AuthButton type="logout" />
          </>
        )}
      </>
    );
  }
  return <></>;
};

const Navbar = (props) => {
  const { user } = useAuth0();
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const { width } = useWindowSize();
  const isMobile = width < 600;

  return (
    <ReactStrapNavbar color="dark" dark {...props}>
      <NavbarBrand to="/" tag={Link}>
        <Row>
          <Col>
            <TiWeatherCloudy size={40} />
          </Col>
          <Col>
            <h3>Weather Forecast</h3>
          </Col>
        </Row>
      </NavbarBrand>
      {renderNavList({
        user: user,
        toggleNavbar: toggleNavbar,
        collapsed: collapsed,
        isMobile: isMobile,
      })}
    </ReactStrapNavbar>
  );
};

export default Navbar;
