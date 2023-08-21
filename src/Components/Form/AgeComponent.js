import React from "react";
import { Field } from "formik";

const AgeFieldComponent = ({ name, label }) => {
  return (
    <div className="form-group mt-3">
      <label className="text-primary" htmlFor={name}>
        {label}
      </label>
      <Field name={name}>
        {({ field }) => <input {...field} className="form-control" readOnly />}
      </Field>
    </div>
  );
};

export default AgeFieldComponent;
