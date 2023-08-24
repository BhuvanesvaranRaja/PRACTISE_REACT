import React from "react";
import { useFormik } from "formik";
import Select from "react-select";
import { useState } from "react";
import * as Yup from "yup";

const countryData = [
  {
    label: "United States",
    value: "us",
    states: [
      {
        label: "California",
        value: "ca",
        districts: [
          { label: "Los Angeles", value: "la" },
          { label: "San Francisco", value: "sf" },
        ],
      },
      {
        label: "New York",
        value: "ny",
        districts: [
          { label: "Manhattan", value: "manhattan" },
          { label: "Brooklyn", value: "brooklyn" },
        ],
      },
      // Add more states and districts as needed
    ],
  },
  {
    label: "India",
    value: "in",
    states: [
      {
        label: "Maharashtra",
        value: "mh",
        districts: [
          { label: "Mumbai", value: "mumbai" },
          { label: "Pune", value: "pune" },
        ],
      },
      {
        label: "Karnataka",
        value: "ka",
        districts: [
          { label: "Bangalore", value: "bangalore" },
          { label: "Mysore", value: "mysore" },
        ],
      },
      // Add more states and districts as needed
    ],
  },
  // Add more countries with their states and districts
];

// export default function NewComponent(props) {
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [selectedState, setSelectedState] = useState(null);
//   const [selectedDistrict, setSelectedDistrict] = useState(null);

//   const handleCountryChange = (selectedOption) => {
//     setSelectedCountry(selectedOption);
//     setSelectedState(null);
//     setSelectedDistrict(null);
//   };

//   const handleStateChange = (selectedOption) => {
//     setSelectedState(selectedOption);
//     setSelectedDistrict(null);
//   };

//   const handleDistrictChange = (selectedOption) => {
//     setSelectedDistrict(selectedOption);
//   };

//   return (
//     <div>
//       <h2>Select Country, State, and District:</h2>
//       <Select
//         options={countryData}
//         value={selectedCountry}
//         onChange={handleCountryChange}
//         placeholder="Select Country"
//       />
//       <Select
//         options={selectedCountry?.states || []}
//         value={selectedState}
//         onChange={handleStateChange}
//         placeholder="Select State"
//       />
//       <Select
//         options={selectedState?.districts || []}
//         value={selectedDistrict}
//         onChange={handleDistrictChange}
//         placeholder="Select District"
//       />
//       <div>
//         <h3>Selected Values:</h3>
//         <p>Country: {selectedCountry?.label}</p>
//         <p>State: {selectedState?.label}</p>
//         <p>District: {selectedDistrict?.label}</p>
//       </div>
//     </div>
//   );
// }
export default function NewComponent(props) {
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]); // Default country
  const [selectedState, setSelectedState] = useState(selectedCountry.states[0]); // Default state
  const [selectedDistrict, setSelectedDistrict] = useState(
    selectedState.districts[0]
  ); // Default district

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setSelectedState(selectedOption.states[0]);
    setSelectedDistrict(selectedOption.states[0].districts[0]);
  };

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
    setSelectedDistrict(selectedOption.districts[0]);
  };

  const handleDistrictChange = (selectedOption) => {
    setSelectedDistrict(selectedOption);
  };

  return (
    <div>
      <h2>Select Country, State, and District:</h2>
      <Select
        options={countryData}
        value={selectedCountry}
        onChange={handleCountryChange}
        placeholder="Select Country"
      />
      <Select
        options={selectedCountry.states}
        value={selectedState}
        onChange={handleStateChange}
        placeholder="Select State"
      />
      <Select
        options={selectedState.districts}
        value={selectedDistrict}
        onChange={handleDistrictChange}
        placeholder="Select District"
      />
      <div>
        <h3>Selected Values:</h3>
        <p>Country: {selectedCountry?.label}</p>
        <p>State: {selectedState?.label}</p>
        <p>District: {selectedDistrict?.label}</p>
      </div>
    </div>
  );
}
