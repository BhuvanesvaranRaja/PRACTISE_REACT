import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

class SignUp extends Component {
  handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    console.log("Form Values: ", values);
  };

  render() {
    const validationSchema = Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().required("Password is required"),
      mobile: Yup.string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, "Must be at least 10 digits")
        .required("Mobile number is required"),
    });

    return (
      <div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            mobile: "",
          }}
          validationSchema={validationSchema}
          onSubmit={this.handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label htmlFor="name">NAME</label>
                <Field type="text" name="name" id="name" />
                <ErrorMessage name="name" component="div" className="error" />
              </div>
              <div>
                <label htmlFor="email">EMAIL</label>
                <Field type="email" name="email" id="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div>
                <label htmlFor="password">PASSWORD</label>
                <Field type="password" name="password" id="password" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>
              <div>
                <label htmlFor="mobile">MOBILE</label>
                <Field type="number" name="mobile" id="mobile" />
                <ErrorMessage name="mobile" component="div" className="error" />
              </div>
              <div>
                <button type="submit" disabled={isSubmitting}>
                  SUBMIT
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default SignUp;
