import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup"; // Import yup for validation
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Typeahead } from "react-bootstrap-typeahead";

const initialValues = {
  country: "",
  state: "",
  district: "",
};

const validationSchema = Yup.object().shape({
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
  district: Yup.string().required("District is required"),
});

const countries = [
  {
    name: "India",
    states: [
      {
        name: "Karnataka",
        districts: ["District A", "District B", "District C"],
      },
      // ... other states ...
    ],
  },
  {
    name: "USA",
    states: [
      {
        name: "California",
        districts: ["District P", "District Q", "District R"],
      },
      // ... other states ...
    ],
  },
  // ... other countries ...
];

const App = () => {
  const handleSubmit = (values) => {
    console.log(values);
    // You can perform additional actions with the form values here
  };

  return (
    <div className="container mt-5">
      <h1>Form with Formik and Bootstrap Typeahead</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema} // Add validation schema
      >
        {({ values, handleChange, setFieldValue, errors, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <Typeahead
                id="country"
                options={countries.map((country) => country.name)}
                placeholder="Select Country"
                onChange={(selected) => {
                  setFieldValue("country", selected[0]);
                  setFieldValue("state", ""); // Clear selected state
                  setFieldValue("district", ""); // Clear selected district
                }}
                selected={values.country ? [values.country] : []}
              />
              {touched.country && errors.country && (
                <div className="text-danger">{errors.country}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="state">State</label>
              <Typeahead
                id="state"
                options={
                  countries
                    .find((country) => country.name === values.country)
                    ?.states.map((state) => state.name) || []
                }
                placeholder="Select State"
                onChange={(selected) => {
                  setFieldValue("state", selected[0]);
                  setFieldValue("district", ""); // Clear selected district
                }}
                selected={values.state ? [values.state] : []}
              />
              {touched.state && errors.state && (
                <div className="text-danger">{errors.state}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="district">District</label>
              <Typeahead
                id="district"
                options={
                  countries
                    .find((country) => country.name === values.country)
                    ?.states.find((state) => state.name === values.state)
                    ?.districts || []
                }
                placeholder="Select District"
                onChange={(selected) => setFieldValue("district", selected[0])}
                selected={values.district ? [values.district] : []}
              />
              {touched.district && errors.district && (
                <div className="text-danger">{errors.district}</div>
              )}
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
