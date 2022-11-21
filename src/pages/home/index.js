import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router";
import { Container, Row, Col } from "reactstrap";
import WeatherForm from "../../components/WeatherForm";
import { GITHUB_URL } from "../../utils/constants";

const renderUserInfo = (user) => {
  if (user) {
    return (
      <>
        <p className="mb-2 text-center">{user.name}</p>
        <a href={`${GITHUB_URL}/${user.nickname}`} className="text-center">
          <p className="mb-5">
            {GITHUB_URL}/{user.nickname}
          </p>
        </a>
      </>
    );
  }
};

const Home = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();

  const handleSubmit = (city) => {
    if (city) {
      navigate("/weather", {
        state: {
          city,
        },
      });
    }
  };

  return (
    <Container className="home-container">
      <Col className="pt-5">
        <Row>{renderUserInfo(user)}</Row>
        <WeatherForm onSubmit={handleSubmit} />
      </Col>
    </Container>
  );
};

export default Home;
