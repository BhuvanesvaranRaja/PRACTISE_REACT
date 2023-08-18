import React, { Component } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikContainer from "../Components/Form/FormikContainer";
import { Container, Row, Col } from "react-bootstrap";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copyPrimaryToSecondary: false, // State to track checkbox status
    };
  }
  handleCheckboxChange = (e) => {
    this.setState({ copyPrimaryToSecondary: e.target.checked });
  };
  render() {
    const DropCountryOptions = [
      { key: "Select an Option", value: "" },
      { key: "India", value: "ABC" },
      { key: "America", value: "DEF" },
      { key: "Africa", value: "GHI" },
    ];
    const DropStateOptions = [
      { key: "Select an Option", value: "" },
      { key: "Tamil Nadu", value: "Tamil Nadu" },
      { key: "Kerala", value: "Kerala" },
      { key: "Punjab", value: "Punjab" },
    ];
    const DropDistrictOptions = [
      { key: "Select an Option", value: "" },
      { key: "Coimbatore", value: "Coimbatore" },
      { key: "Madurai", value: "Madurai" },
      { key: "Chennai", value: "Chennai" },
    ];
    const radioOptions = [
      { key: "Male", value: "Male" },
      { key: "Female", value: "Female" },
      { key: "Others", value: "Others" },
    ];
    const CheckOptions = [
      { key: "Photography", value: "Photography" },
      { key: "Editing", value: "Editing" },
      { key: "Arts", value: "Arts" },
    ];
    const initialValues = {
      name: "",
      lastname: "",
      email: "",
      username: "",
      selectCountryOption: "",
      selectStateOption: "",
      selectDistrictOption: "",
      radioOption: "",
      repassword: "",
      password: "",
      birthDate: null,
      CheckOptions: [],
      address1: "",
      address2: "",
      secaddress1: "",
      secaddress2: "",
      seclandmark: "",
      secpincode: "",
      pincode: "",
      landmark: "",
      phoneNumber: "",
    };
    const validationSchema = Yup.object({
      name: Yup.string().required("Name is required"),
      lastname: Yup.string().required("Last Name is required"),
      username: Yup.string()
        .required("User name is required")
        .matches(
          /^[a-zA-Z0-9]*$/,
          "Username cannot contain special characters"
        ),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
      repassword: Yup.string()
        .required("Please confirm your password")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
      birthDate: Yup.date().required("required"),
      selectCountryOption: Yup.string().required("Select the country"),
      selectStateOption: Yup.string().required("Select the State"),
      selectDistrictOption: Yup.string().required("Select the District"),
      radioOption: Yup.string().required("Select the Genders"),
      CheckOptions: Yup.array()
        .min(1, "Select any value")
        .required("Select any value"),
      address1: Yup.string().required("Address is required"),
      address2: Yup.string().required("Address is required"),
      landmark: Yup.string().required("LandMark is required"),
      pincode: Yup.string()
        .required("Pincode is required")
        .max(6, "Incorrect Pincode"),
      secaddress1: Yup.string().required("Address is required"),
      secaddress2: Yup.string().required("Address is required"),
      seclandmark: Yup.string().required("Address is required"),
      secpincode: Yup.string().required("Address is required"),

      phoneNumber: Yup.string()
        .min(10, "Must be at least 10 digits")
        .matches(/^\d+$/, "Phone number must be digits only")
        .required("Phone Number is required"),
    });
    const onSubmit = (values, actions) => {
      setTimeout(() => {
        console.log("Form Values:", values);
        const timestamp = new Date().getTime();
        const storageKey = `FORM_DATA`;
        //  existing data from localStorage or create an empty array
        const existingFormData =
          JSON.parse(localStorage.getItem(storageKey)) || [];
        // Add the new form data to the array
        const newFormData = { ...values, timestamp };
        existingFormData.push(newFormData);
        // Store the updated array back in localStorage
        localStorage.setItem(storageKey, JSON.stringify(existingFormData));
        actions.setSubmitting(false);
        actions.resetForm();
      }, 1000);
    };
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <Container className="border p-5 mt-3 ">
              <p className="mt-2">PERSONAL DETAILS</p>
              <hr />
              {/* name and last name */}
              <Row>
                <Col md={7}>
                  <div className="form-group mb-2">
                    <div className="form-group">
                      <FormikContainer
                        control="input"
                        type="text"
                        name="name"
                        id="name"
                        label="FIRST NAME"
                      />
                    </div>
                  </div>
                </Col>
                <Col md={5}>
                  <div className="form-group mb-2">
                    <FormikContainer
                      control="input"
                      type="text"
                      name="lastname"
                      id="lastname"
                      label="Last Name"
                    />
                  </div>
                </Col>
              </Row>
              {/* mail */}
              <Row>
                <Col md={7}>
                  <FormikContainer
                    control="input"
                    type="mail"
                    name="email"
                    id="email"
                    label="EMAIL"
                  />
                </Col>
                <Col md={5}>
                  <FormikContainer
                    control="input"
                    type="text"
                    name="username"
                    id="username"
                    label="USER NAME"
                  />
                </Col>
              </Row>

              {/* password and repass */}
              <Row>
                <Col md={6}>
                  <FormikContainer
                    control="input"
                    type="password"
                    name="password"
                    id="password"
                    label="PASSWORD"
                  />
                </Col>
                <Col md={6}>
                  <FormikContainer
                    control="input"
                    type="password"
                    name="repassword"
                    id="repassword"
                    label="RE ENTER PASSWORD"
                  />
                </Col>
              </Row>
              {/* DOB and Mobile */}
              <Row>
                <Col md={3}>
                  <FormikContainer
                    control="date"
                    name="birthDate"
                    label="DOB"
                  />
                </Col>
                <Col md={1}>
                  <FormikContainer
                    control="input"
                    name="age"
                    id="age"
                    label="AGE"
                  />
                </Col>
                <Col md={3}>
                  <FormikContainer
                    control="input"
                    type="number"
                    name="phoneNumber"
                    id="phoneNumber"
                    label="MOBILE"
                  />
                </Col>
                <Col md={5}>
                  <FormikContainer
                    control="radio"
                    name="radioOption"
                    label="GENDER"
                    options={radioOptions}
                  />
                </Col>
              </Row>
              <p className="mt-2">PRIMARY ADDRESS</p>
              <hr />
              <Row>
                <Col md={6}>
                  <FormikContainer
                    control="input"
                    type="text"
                    name="address1"
                    id="address1"
                    label="ADDRESS LINE 1"
                  />
                </Col>
                <Col md={6}>
                  <FormikContainer
                    control="input"
                    type="text"
                    name="address2"
                    id="address2"
                    label="ADDRESS LINE 2"
                  />
                </Col>
                <Col md={6}>
                  <FormikContainer
                    control="input"
                    type="text"
                    name="landmark"
                    id="landmark"
                    label="LANDMARK"
                  />
                </Col>
                <Col md={6}>
                  <FormikContainer
                    control="input"
                    type="number"
                    name="pincode"
                    id="pincode"
                    label="PIN CODE"
                  />
                </Col>
              </Row>

              {/* country state district pincode */}
              <Row>
                <Col md={4}>
                  <FormikContainer
                    control="select"
                    name="selectDistrictOption"
                    label="DISTRICT"
                    options={DropDistrictOptions}
                  />
                </Col>
                <Col md={4}>
                  <FormikContainer
                    control="select"
                    name="selectStateOption"
                    label="STATE"
                    options={DropStateOptions}
                  />
                </Col>
                <Col md={4}>
                  <FormikContainer
                    control="select"
                    name="selectCountryOption"
                    label="COUNTRY"
                    options={DropCountryOptions}
                  />
                </Col>
              </Row>
              <p className="mt-4">SECONDRY ADDRESS</p>
              <hr />
              <Row>
                <Col md={6}>
                  <FormikContainer
                    control="input"
                    type="text"
                    name="secaddress1"
                    id="secaddress1"
                    label="ADDRESS LINE 1"
                  />
                </Col>
                <Col md={6}>
                  <FormikContainer
                    control="input"
                    type="text"
                    name="secaddress2"
                    id="secaddress2"
                    label="ADDRESS LINE 2"
                  />
                </Col>
                <Col md={6}>
                  <FormikContainer
                    control="input"
                    type="text"
                    name="seclandmark"
                    id="seclandmark"
                    label="LANDMARK"
                  />
                </Col>
                <Col md={6}>
                  <FormikContainer
                    control="input"
                    type="number"
                    name="secpincode"
                    id="secpincode"
                    label="PIN CODE"
                  />
                </Col>
              </Row>
              {/* country state district pincode */}
              <Row>
                <Col md={4}>
                  <FormikContainer
                    control="select"
                    name="secselectDistrictOption"
                    label="DISTRICT"
                    options={DropDistrictOptions}
                  />
                </Col>
                <Col md={4}>
                  <FormikContainer
                    control="select"
                    name="secselectStateOption"
                    label="STATE"
                    options={DropStateOptions}
                  />
                </Col>
                <Col md={4}>
                  <FormikContainer
                    control="select"
                    name="secselectCountryOption"
                    label="COUNTRY"
                    options={DropCountryOptions}
                  />
                </Col>
              </Row>
              <label>
                <input type="checkbox" className="mx-2 mt-4"></input>
                Same as Primary Address
              </label>
              <hr />
              <Row>
                <Col md={6}>
                  <FormikContainer
                    control="checkbox"
                    name="secCheckOptions"
                    label="SKILLS"
                    options={CheckOptions}
                  />
                </Col>
              </Row>

              <button
                type="submit"
                className="btn btn-danger  w-100 mt-4 "
                disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </Container>
          </Form>
        )}
      </Formik>
    );
  }
}
