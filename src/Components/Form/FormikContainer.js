import React, { Component } from "react";
import Input from "../Common/Input";
import Select from "../Common/Select";
import RadioButtons from "../Common/RadioButtons";
import CheckBox from "../Common/CheckBox";
import DatePicker from "../Common/DatePicker";

class FormikContainer extends Component {
  render() {
    const { control, ...rest } = this.props;
    switch (control) {
      case "input":
        return <Input { ...rest} />;
      case "textarea":
        return <textarea />;
      case "select":
        return <Select {...rest} />;
      case "radio":
        return <RadioButtons {...rest} />;
      case "checkbox":
        return <CheckBox {...rest} />;
      case "date":
        return <DatePicker {...rest} />;
      default:
        return null;
    }
  }
}

export default FormikContainer;
