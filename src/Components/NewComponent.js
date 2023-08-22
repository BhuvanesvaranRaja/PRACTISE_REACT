import React from "react";
import Select from "react-select";

export default function NewComponent(props) {
  const options = props.options;

  return (
    <div>
      <Select options={options} />
    </div>
  );
}
