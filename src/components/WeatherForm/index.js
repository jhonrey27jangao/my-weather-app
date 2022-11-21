import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, InputGroup, InputGroupText } from "reactstrap";
import { ImSearch } from "react-icons/im";

const WeatherForm = ({ onSubmit }) => {
  const validationSchema = Yup.object().shape({
    city: Yup.string().required(),
  });

  return (
    <Formik
      initialValues={{ city: "" }}
      validationSchema={validationSchema}
      onSubmit={({ city }) => {
        onSubmit(city);
      }}
    >
      {() => (
        <Form>
          <div className="form-group mb-3">
            <InputGroup className="mb-2">
              <InputGroupText>
                <ImSearch />
              </InputGroupText>
              <Field
                type="search"
                name="city"
                className="form-control"
                placeholder="City"
              />
            </InputGroup>
            <ErrorMessage
              name="city"
              render={(error) => <p className="text-danger">{error}</p>}
            />
          </div>
          <Button type="submit" outline>
            Display weather
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default WeatherForm;
