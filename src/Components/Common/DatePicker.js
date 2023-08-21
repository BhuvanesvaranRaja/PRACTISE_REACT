import React, { Component } from "react";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field, ErrorMessage } from "formik";
import FromError from "../Form/FromError";

function calculateAge(dob) {
  const today = new Date();
  const birthDate = new Date(dob);
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
    years--;
    months = 12 - birthDate.getMonth() + today.getMonth();
  }
  return { years, months };
}

export default class DatePicker extends Component {
  render() {
    const { label, name, ...rest } = this.props;

    return (
      <div className="d-flex flex-column mt-3">
        <label className="text-primary" htmlFor={name}>
          {label}
        </label>
        <Field name={name} className="form-control ">
          {({ form, field }) => {
            const { setFieldValue } = form;
            const { value } = field;

            return (
              <div>
                <DateView
                  id={name}
                  {...field}
                  {...rest}
                  selected={value}
                  maxDate={new Date()}
                  dateFormat="dd/MM/yyyy"
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  onChange={(val) => {
                    setFieldValue(name, val);
                    const dob = new Date(val);
                    const age = calculateAge(dob);
                    setFieldValue(
                      "age",
                      `${age.years} years ${age.months} months`
                    );
                  }}
                  className="form-control"
                />
              </div>
            );
          }}
        </Field>
        <ErrorMessage name={name} component={FromError} />
      </div>
    );
  }
}
