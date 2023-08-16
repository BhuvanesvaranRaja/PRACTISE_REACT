import React, { Component } from "react";

class Filter2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        "Laptop",
        "Smartphone",
        "Tablet",
        "Headphones",
        "Camera",
        "Speakers",
        "Keyboard",
      ],
      
      searchTerm: "",
    };
  }

  handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    this.setState({ searchTerm });
  };

  render() {
    const { items, searchTerm } = this.state;
    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={this.handleSearchChange}
        />
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Filter2;
