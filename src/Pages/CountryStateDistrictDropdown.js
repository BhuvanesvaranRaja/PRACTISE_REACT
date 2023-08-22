import React, { Component } from "react";
import Select from "react-select";
import { ErrorMessage } from "formik"; // Add this import
import FromError from "../Components/Form/FromError";

class CountryStateDistrictDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: "",
      selectedState: "",
      selectedDistrict: "",
    };
  }

  countries = [
    {
      name: "United States",
      states: [
        {
          name: "California",
          districts: ["Los Angeles", "San Francisco", "San Diego"],
        },
        {
          name: "New York",
          districts: ["New York City", "Buffalo", "Rochester"],
        },
      ],
    },
    {
      name: "India",
      states: [
        {
          name: "Maharashtra",
          districts: ["Mumbai", "Pune", "Nagpur"],
        },
        {
          name: "Karnataka",
          districts: ["Bangalore", "Mysore", "Hubli"],
        },
      ],
    },
  ];

  handleCountryChange = (selectedOption) => {
    const selectedCountry = selectedOption.value;
    this.setState({
      selectedCountry,
      selectedState: "",
      selectedDistrict: "",
    });
  };

  handleStateChange = (selectedOption) => {
    const selectedState = selectedOption.value;
    this.setState({
      selectedState,
      selectedDistrict: "",
    });
  };

  handleDistrictChange = (selectedOption) => {
    const selectedDistrict = selectedOption.value;
    this.setState({
      selectedDistrict,
    });
  };

  render() {
    const countryOptions = this.countries.map((country) => ({
      value: country.name,
      label: country.name,
    }));

    const stateOptions =
      this.countries
        .find((country) => country.name === this.state.selectedCountry)
        ?.states.map((state) => ({
          value: state.name,
          label: state.name,
        })) || [];

    const districtOptions =
      this.countries
        .find((country) => country.name === this.state.selectedCountry)
        ?.states.find((state) => state.name === this.state.selectedState)
        ?.districts.map((district) => ({
          value: district,
          label: district,
        })) || [];

    return (
      <div>
        <label>Select Country:</label>
        <Select
          name="selectedCountry"
          options={countryOptions}
          onChange={this.handleCountryChange}
          value={countryOptions.find(
            (option) => option.value === this.state.selectedCountry
          )}
        />

        <ErrorMessage name="selectedCountry" component={FromError} />
        <ErrorMessage
          name="selectedCountry"
          component={FromError}
          className="error" // Add this className for styling
        >
          {this.props.errors.selectedCountry} {/* Display the error message */}
        </ErrorMessage>
        <div>
          <label>Select State:</label>
          <Select
            name="selectedState"
            options={stateOptions}
            onChange={this.handleStateChange}
            value={stateOptions.find(
              (option) => option.value === this.state.selectedState
            )}
            isDisabled={!this.state.selectedCountry}
          />

          <ErrorMessage name="selectedState" component={FromError} />
          <ErrorMessage
            name="selectedState"
            component={FromError}
            className="error" // Add this className for styling
          >
            {this.props.errors.selectedCountry}{" "}
            {/* Display the error message */}
          </ErrorMessage>
        </div>

        <div>
          <label>Select District:</label>
          <Select
            name="selectedDistrict"
            options={districtOptions}
            onChange={this.handleDistrictChange}
            value={districtOptions.find(
              (option) => option.value === this.state.selectedDistrict
            )}
            isDisabled={!this.state.selectedState}
          />

          {/* <ErrorMessage name="selectedDistrict" component={FromError} /> */}
          <ErrorMessage
            name="selectedDistrict"
            component={FromError}
            className="error" // Add this className for styling
          >
            {this.props.errors.selectedCountry}{" "}
            {/* Display the error message */}
          </ErrorMessage>
        </div>
      </div>
    );
  }
}

export default CountryStateDistrictDropdown;
