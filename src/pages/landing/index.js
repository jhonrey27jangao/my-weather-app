import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Navigate } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import AuthButton from "../../components/AuthButton";

const Landing = () => {
  const { user } = useAuth0();

  if (user) {
    return <Navigate to="/home" replace />;
  }

  return (
    <Container>
      <Col className="p-10 mt-5" xs="auto">
        <Row>
          <p>
            Welcome to the weather forecase web application. Please login with
            your Github user to use the application and view the weather in your
            city
          </p>
          <AuthButton />
        </Row>
      </Col>
    </Container>
  );
};

export default Landing;
