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

// import React, { Component } from "react";
// import Select from "react-select";
// import { Field, ErrorMessage } from "formik";
// import FromError from "../Form/FromError";

// export default class SearchableSelect extends Component {
//   render() {
//     const { label, name, options, ...rest } = this.props;
//     const selectOptions = options.map((option) => ({
//       value: option.value,
//       label: option.key,
//     }));

//     return (
//       <div className="mt-3">
//         <label className="text-primary" htmlFor={name}>
//           {label}
//         </label>
//         <Field name={name}>
//           {({ field, form }) => (
//             <Select
//               id={name}
//               className="form-control"
//               options={selectOptions}
//               onChange={(option) => form.setFieldValue(name, option)}
//               value={selectOptions.find(
//                 (option) => option.value === field.value
//               )}
//               {...rest}
//             />
//           )}
//         </Field>
//         <ErrorMessage name={name} component={FromError} />
//       </div>
//     );
//   }
// }

// import React, { Component } from "react";
// import Select from "react-select";
// import { Field, ErrorMessage } from "formik";
// import FromError from "../Form/FromError";

// export default class SearchableSelect extends Component {
//   render() {
//     const { label, name, options, ...rest } = this.props;
//     const selectOptions = options.map((option) => ({
//       value: option.value,
//       label: option.key,
//     }));

//     return (
//       <div className="mt-3">
//         <label className="text-primary" htmlFor={name}>
//           {label}
//         </label>
//         <Field name={name}>
//           {({ field, form }) => (
//             <Select
//               id={name}
//               className="form-control"
//               options={selectOptions}
//               onChange={(selectedOption) =>
//                 form.setFieldValue(name, selectedOption.value)
//               }
//               value={selectOptions.find(
//                 (option) => option.value === field.value
//               )}
//               {...rest}
//             />
//           )}
//         </Field>
//         <ErrorMessage name={name} component={FromError} />
//       </div>
//     );
//   }
// }
