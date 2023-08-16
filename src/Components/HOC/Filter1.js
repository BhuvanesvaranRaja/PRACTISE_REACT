import React, { Component } from "react";

class Filter1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        "Apple",
        "Banana",
        "Cherry",
        "Date",
        "Elderberry",
        "Litchi",
        "Orange",
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
export default Filter1;
