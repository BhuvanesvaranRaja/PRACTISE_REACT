import React, { Component } from "react";
import Multi from '../Constants/Multi'

export default class HomePage extends Component {
  render() {
    const countries = [
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

    return (
      <div>
        <Multi data={countries} />
      </div>
    );
  }
}
