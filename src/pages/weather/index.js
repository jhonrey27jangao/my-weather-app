import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { getWeather } from "../../api";
import Table from "../../components/Table";
import { Container, Col, Row, Button, Alert } from "reactstrap";
import { TABLE_PROPERTIES } from "../../utils/constants";
import useWindowSize from "../../utils/helpers";

const apiKey = process.env.REACT_APP_WATHER_API_KEY;

const renderNoData = (data) => {
  if (data === null || data.cod === "404") {
    return (
      <Row>
        <Alert color="danger">No city found.</Alert>
      </Row>
    );
  }
};

const Weather = () => {
  const { state } = useLocation();
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const isMobile = width < 600;

  useEffect(() => {
    if (state) {
      getWeather(
        {
          city: state.city,
          apiKey: apiKey,
        },
        (res) => {
          setData(res);
        },
        () => {
          alert("There was an error in getting weather");
          navigate(-1);
        }
      );
    }
  }, [state, navigate]);

  return (
    <Container className="pt-3">
      <Col className="p-2">
        <Row>
          {data && (
            <Table
              cols={TABLE_PROPERTIES.cols}
              data={data}
              isMobile={isMobile}
            />
          )}
        </Row>
        {renderNoData(data)}
      </Col>
      <Col className="p-2">
        <Row className="justify-content-end">
          <Button onClick={() => navigate(-1)} className="small-btn">
            Back
          </Button>
        </Row>
      </Col>
    </Container>
  );
};

export default Weather;
