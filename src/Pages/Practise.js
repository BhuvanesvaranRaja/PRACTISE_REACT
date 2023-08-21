import React, { Component } from "react";

class AddressForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      primaryAddress: {
        street: "",
        city: "",
        state: "",
        zip: "",
      },
      secondaryAddress: {
        street: "",
        city: "",
        state: "",
        zip: "",
      },
    };
  }

  handlePrimaryAddressChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      primaryAddress: {
        ...prevState.primaryAddress,
        [name]: value,
      },
    }));
  };

  handleSecondaryAddressChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      secondaryAddress: {
        ...prevState.secondaryAddress,
        [name]: value,
      },
    }));
  };

  copyPrimaryToSecondary = () => {
    this.setState((prevState) => ({
      secondaryAddress: { ...prevState.primaryAddress },
    }));
  };

  render() {
    const { primaryAddress, secondaryAddress } = this.state;

    return (
      <div>
        <h2>Primary Address</h2>
        <input
          type="text"
          name="street"
          value={primaryAddress.street}
          onChange={this.handlePrimaryAddressChange}
          placeholder="Street"
        />
        <input
          type="text"
          name="city"
          value={primaryAddress.city}
          onChange={this.handlePrimaryAddressChange}
          placeholder="City"
        />
        <input
          type="text"
          name="state"
          value={primaryAddress.state}
          onChange={this.handlePrimaryAddressChange}
          placeholder="State"
        />
        <input
          type="text"
          name="zip"
          value={primaryAddress.zip}
          onChange={this.handlePrimaryAddressChange}
          placeholder="Zip Code"
        />

        <h2>Secondary Address</h2>
        <input
          type="text"
          name="street"
          value={secondaryAddress.street}
          onChange={this.handleSecondaryAddressChange}
          placeholder="Street"
        />
        <input
          type="text"
          name="city"
          value={secondaryAddress.city}
          onChange={this.handleSecondaryAddressChange}
          placeholder="City"
        />
        <input
          type="text"
          name="state"
          value={secondaryAddress.state}
          onChange={this.handleSecondaryAddressChange}
          placeholder="State"
        />
        <input
          type="text"
          name="zip"
          value={secondaryAddress.zip}
          onChange={this.handleSecondaryAddressChange}
          placeholder="Zip Code"
        />

        <button onClick={this.copyPrimaryToSecondary}>
          Copy Primary to Secondary
        </button>
      </div>
    );
  }
}

export default AddressForm;
