import React, { Component } from "react";
import { Field, ErrorMessage } from "formik";
import FromError from "../Form/FromError";

export default class Select extends Component {
  render() {
    const { label, name, options, ...rest } = this.props;
    return (
      <div className="mt-3">
        <label className="text-primary" htmlFor={name}>
          {label}
        </label>
        <Field
          as="select"
          id={name}
          name={name}
          className="form-control"
          {...rest}>
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.key}
              </option>
            );
          })}
        </Field>
        <ErrorMessage name={name} component={FromError} />
      </div>
    );
  }
}
