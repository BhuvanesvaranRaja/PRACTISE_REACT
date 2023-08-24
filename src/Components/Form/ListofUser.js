import React, { Component } from "react";
import Select from "react-select";
import { Col } from "react-bootstrap";

export default class ListofUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
    };
  }

  handleOptionChange = (selectedOption) => {
    this.setState({ selectedOption });
  };

  render() {
    const { selectedOption } = this.state;
    const { dropdownOptions } = this.props;

    return (
      <Col md={12}>
        <div className="form-group">
          <label
            htmlFor="userDropdown"
            className="form-label mt-3 text-danger fw-bold"
          >
            USERS
          </label>
          <Select
            id="userDropdown"
            value={selectedOption}
            options={dropdownOptions}
            placeholder="Select an Option"
            getOptionLabel={(option) => (
              <div>
                <span style={{ color: "blue" }}>{option.name}</span> -{" "}
                <span style={{ color: "red" }}>@{option.username}</span>
              </div>
            )}
            getOptionValue={(option) => option.username}
            isSearchable={true}
            onChange={this.handleOptionChange}
          />
        </div>
      </Col>
    );
  }
}
