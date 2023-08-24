import React, { Component } from "react";
import { Field, ErrorMessage } from "formik";
import FromError from "../Form/FromError";
export default class Input extends Component {
  render() {
    const { label, name, type, sameAsPrimary, ...rest } = this.props;
    return (
      <div className="mt-3">
        <label className="text-primary" htmlFor={name}>
          {label}
        </label>
        <Field
          className="form-control"
          type={type}
          id={name}
          name={name}
          {...rest}
        ></Field>
        <ErrorMessage name={name} component={FromError}></ErrorMessage>
      </div>
    );
  }
}
