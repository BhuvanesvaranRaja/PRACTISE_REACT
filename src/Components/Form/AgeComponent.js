import React from "react";
import { ErrorMessage, Field } from "formik";
import FromError from "./FromError";

const AgeFieldComponent = ({ name, label }) => {
  return (
    <div className="form-group mt-3">
      <label className="text-primary" htmlFor={name}>
        {label}
      </label>
      <Field name={name}>
        {({ field }) => <input {...field} className="form-control" readOnly />}
      </Field>
      <ErrorMessage name={name} component={FromError}></ErrorMessage>
    </div>
  );
};

export default AgeFieldComponent;
