import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FromError from "./FromError";
import * as Yup from "yup";
class SignUp extends Component {
  handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    console.log("form Values : ", values);
  };
  render() {
    // VALIDATION RULES
    const validationSchema = Yup.object({
      name: Yup.string().required("Name is Required"),
      email: Yup.string()
        .required("Invalid Email !")
        .required("Email is Required"),
      password: Yup.string().required("Password is Required"),
      mobile: Yup.string()
        .max(10, "Must be atleast 10 digits")
        .matches(/^[0-9]+$/, "Must be only digits")
        .required("Mobile Number is required"),
      whatsapp: Yup.string().required("Please enter the Fields"),
    });
    return (
      <div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            mobile: "",
            social: {
              whatsapp: "",
              // instagram: "",
            },
          }}
          validationSchema={validationSchema}
          onSubmit={this.handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label htmlFor="name">NAME</label>
                <Field type="text" name="name" id="name" />
                <ErrorMessage
                  name="name"
                  component={FromError}
                  className="error"
                />
              </div>
              <div>
                <label htmlFor="email">EMAIL</label>
                <Field type="email" name="email" id="email" />
                <ErrorMessage
                  name="email"
                  component={FromError}
                  className="error"
                />
              </div>
              <div>
                <label htmlFor="password">PASSWORD</label>
                <Field type="password" name="password" id="password" />
                <ErrorMessage
                  name="password"
                  component={FromError}
                  className="error"
                />
              </div>
              <div>
                <label htmlFor="mobile">MOBILE</label>
                <Field type="number" name="mobile" id="mobile" />
                <ErrorMessage
                  name="mobile"
                  component={FromError}
                  className="error"
                />
              </div>
              <div>
                <label htmlFor="whatsapp">WHATSAPP NO</label>
                <Field type="number" name="social.whatsapp" id="whatsapp" />
                <ErrorMessage
                  name="whatsapp"
                  component={FromError}
                  className="error"
                />
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
