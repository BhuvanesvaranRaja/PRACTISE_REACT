import React, { Component } from "react";
import { Field, ErrorMessage } from "formik";
import FromError from "../Form/FromError";
export default class CheckBox extends Component {
  render() {
    const { label, name, options, ...rest } = this.props;
    return (
      <div className="form-group d-flex gap-4 flex-wrap mt-3">
        <label className="text-primary">{label}</label>
        <Field name={name} {...rest}>
          {({ field }) => {
            return options.map((option) => {
              return (
                <div key={option.key} className="form-check">
                  <input
                    type="checkbox"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={
                      field.value ? field.value.includes(option.value) : false
                    }
                    className="form-check-input "
                  />
                  <label htmlFor={option.value} className="form-check-label">
                    {option.key}
                  </label>
                </div>
              );
            });
          }}
        </Field>
        <ErrorMessage name={name} component={FromError}></ErrorMessage>
      </div>
    );
  }
}
