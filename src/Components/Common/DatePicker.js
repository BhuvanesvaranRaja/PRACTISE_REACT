// import React, { Component } from "react";
// import DateView from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { Field, ErrorMessage } from "formik";
// import FromError from "../Form/FromError";
// export default class DatePicker extends Component {
//   render() {
//     const { label, name, ...rest } = this.props;
//     const currentDate = new Date();

//     return (
//       <div className="d-flex flex-column mt-3">
//         <label className="text-primary" htmlFor={name}>
//           {label}
//         </label>
//         <Field name={name} className="form-control ">
//           {({ form, field }) => {
//             const { setFieldValue } = form;
//             const { value } = field;
//             return (
//               <DateView
//                 id={name}
//                 {...field}
//                 {...rest}
//                 selected={value}
//                 dateFormat="dd/MM/yyyy"
//                 showMonthDropdown
//                 showYearDropdown
//                 dropdownMode="select"
//                 maxDate={currentDate}
//                 onChange={(val) => setFieldValue(name, val)}
//                 className="form-control"
//               />
//             );
//           }}
//         </Field>
//         <ErrorMessage name={name} component={FromError} />
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field, ErrorMessage } from "formik";
import FromError from "../Form/FromError";

export default class DatePicker extends Component {
  calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

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
            // Calculate age based on selected birthdate
            const age = this.calculateAge(value);
            return (
              <div>
                <DateView
                  id={name}
                  {...field}
                  {...rest}
                  selected={value}
                  showIcon={true}
                  maxDate={new Date()}
                  dateFormat="dd/MM/yyyy" 
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select" 
                  onChange={(val) => setFieldValue(name, val)}
                  className="form-control"
                />
                {value && (
                  <p className="text-muted">Current Age: {age} years</p>
                )}
              </div>
            );
          }}
        </Field>
        <ErrorMessage name={name} component={FromError} />
      </div>
    );
  }
}
