// // import React, { Component } from "react";
// // import { Container, Row, Col } from "react-bootstrap";

// // class MultiLevelSelect extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       selectedValues: {},
// //     };
// //   }

// //   handleSelectionChange = (level, value, formikProps) => {
// //     const { selectedValues } = this.state;
// //     selectedValues[level] = value;

// //     // Reset values for subsequent levels
// //     if (level === "country") {
// //       selectedValues.state = "";
// //       selectedValues.district = "";
// //     } else if (level === "state") {
// //       selectedValues.district = "";
// //     }

// //     this.setState({ selectedValues });
// //     formikProps.setFieldValue(level, value);
// //   };

// //   render() {
// //     const { data } = this.props;
// //     const { selectedValues } = this.state;

// //     const countryOptions = data.map((country) => ({
// //       value: country.name,
// //       label: country.name,
// //     }));

// //     const selectedCountryData = data.find(
// //       (country) => country.name === selectedValues.country
// //     );

// //     const stateOptions =
// //       selectedCountryData?.states.map((state) => ({
// //         value: state.name,
// //         label: state.name,
// //       })) || [];

// //     const selectedStateData =
// //       selectedCountryData?.states.find(
// //         (state) => state.name === selectedValues.state
// //       ) || {};

// //     const districtOptions = selectedStateData.districts
// //       ? selectedStateData.districts.map((district) => ({
// //           value: district,
// //           label: district,
// //         }))
// //       : [];

// //     return (
// //       <Container>
// //         <Row>
// //           <Col md={4}>
// //             <select
// //               value={selectedValues.country || ""}
// //               onChange={(e) =>
// //                 this.handleSelectionChange("country", e.target.value)
// //               }
// //               className="form-control">
// //               <option value="" disabled>
// //                 Select a country
// //               </option>
// //               {countryOptions.map((option) => (
// //                 <option key={option.value} value={option.value}>
// //                   {option.label}
// //                 </option>
// //               ))}
// //             </select>
// //           </Col>
// //           <Col md={4}>
// //             <select
// //               value={selectedValues.state || ""}
// //               onChange={(e) =>
// //                 this.handleSelectionChange("state", e.target.value)
// //               }
// //               className="form-control"
// //               disabled={!selectedValues.country}>
// //               <option value="" disabled>
// //                 Select a state
// //               </option>
// //               {stateOptions.map((option) => (
// //                 <option key={option.value} value={option.value}>
// //                   {option.label}
// //                 </option>
// //               ))}
// //             </select>
// //           </Col>
// //           <Col md={4}>
// //             <select
// //               value={selectedValues.district || ""}
// //               onChange={(e) =>
// //                 this.handleSelectionChange("district", e.target.value)
// //               }
// //               className="form-control"
// //               disabled={!selectedValues.state}>
// //               <option value="" disabled>
// //                 Select a district
// //               </option>
// //               {districtOptions.map((option) => (
// //                 <option key={option.value} value={option.value}>
// //                   {option.label}
// //                 </option>
// //               ))}
// //             </select>
// //           </Col>
// //         </Row>
// //       </Container>
// //     );
// //   }
// // }

// // export default MultiLevelSelect;

//     import React, { Component } from "react";
//     import { Container, Row, Col } from "react-bootstrap";

//     class MultiLevelSelect extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         selectedValues: {
//             country: "",
//             state: "",
//             district: "",
//         },
//         };
//     }

//     handleSelectionChange = (level, value) => {
//         const { selectedValues } = this.state;

//         // Reset values for subsequent levels
//         if (level === "country") {
//         selectedValues.country = value;
//         selectedValues.state = "";
//         selectedValues.district = "";
//         } else if (level === "state") {
//         selectedValues.district = "";
//         }

//         // Set the selected value for the current level
//         selectedValues[level] = value;

//         this.setState({ selectedValues });
//     };

//     render() {
//         const { data } = this.props;
//         const { selectedValues } = this.state;

//         const countryOptions = data.map((country) => ({
//         value: country.name,
//         label: country.name,
//         }));

//         const selectedCountryData = data.find(
//         (country) => country.name === selectedValues.country
//         );

//         const stateOptions =
//         selectedCountryData?.states.map((state) => ({
//             value: state.name,
//             label: state.name,
//         })) || [];

//         const selectedStateData =
//         selectedCountryData?.states.find(
//             (state) => state.name === selectedValues.state
//         ) || {};

//         const districtOptions = selectedStateData.districts
//         ? selectedStateData.districts.map((district) => ({
//             value: district,
//             label: district,
//             }))
//         : [];

//         return (
//         <Container>
//             <Row>
//             <Col md={4}>
//                 <select
//                 value={selectedValues.country}
//                 onChange={(e) =>
//                     this.handleSelectionChange("country", e.target.value)
//                 }
//                 className="form-control">
//                 <option value="" disabled>
//                     Select a country
//                 </option>
//                 {countryOptions.map((option) => (
//                     <option key={option.value} value={option.value}>
//                     {option.label}
//                     </option>
//                 ))}
//                 </select>
//             </Col>
//             <Col md={4}>
//                 <select
//                 value={selectedValues.state}
//                 onChange={(e) =>
//                     this.handleSelectionChange("state", e.target.value)
//                 }
//                 className="form-control"
//                 disabled={!selectedValues.country}>
//                 <option value="" disabled>
//                     Select a state
//                 </option>
//                 {stateOptions.map((option) => (
//                     <option key={option.value} value={option.value}>
//                     {option.label}
//                     </option>
//                 ))}
//                 </select>
//             </Col>
//             <Col md={4}>
//                 <select
//                 value={selectedValues.district}
//                 onChange={(e) =>
//                     this.handleSelectionChange("district", e.target.value)
//                 }
//                 className="form-control"
//                 disabled={!selectedValues.state}>
//                 <option value="" disabled>
//                     Select a district
//                 </option>
//                 {districtOptions.map((option) => (
//                     <option key={option.value} value={option.value}>
//                     {option.label}
//                     </option>
//                 ))}
//                 </select>
//             </Col>
//             </Row>
//         </Container>
//         );
//     }
//     }

//     export default MultiLevelSelect;

import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class MultiLevelSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValues: {
        country: "",
        state: "",
        district: "",
      },
    };
  }

  handleSelectionChange = (level, value) => {
    const { selectedValues } = this.state;

    if (level === "country") {
      selectedValues.country = value;
      selectedValues.state = "";
      selectedValues.district = "";
    } else if (level === "state") {
      selectedValues.district = "";
    }

    selectedValues[level] = value;

    this.setState({ selectedValues }, () => {
        this.displaySelectedValues();
       // Call the function after updating state
    });
  };

  displaySelectedValues = () => {
    const { selectedValues } = this.state;
    console.log("Selected Values:", selectedValues);
  };

  render() {
    const { data } = this.props;
    const { selectedValues } = this.state;

    const countryOptions = data.map((country) => ({
      value: country.name,
      label: country.name,
    }));

    const selectedCountryData = data.find(
      (country) => country.name === selectedValues.country
    );

    const stateOptions =
      selectedCountryData?.states.map((state) => ({
        value: state.name,
        label: state.name,
      })) || [];

    const selectedStateData =
      selectedCountryData?.states.find(
        (state) => state.name === selectedValues.state
      ) || {};

    const districtOptions = selectedStateData.districts
      ? selectedStateData.districts.map((district) => ({
          value: district,
          label: district,
        }))
      : [];

    return (
      <Container>
        <Row>
          <Col md={4}>
            <select
              value={selectedValues.country}
              onChange={(e) =>
                this.handleSelectionChange("country", e.target.value)
              }
              className="form-control">
              <option value="" disabled>
                Select a country
              </option>
              {countryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Col>
          <Col md={4}>
            <select
              value={selectedValues.state}
              onChange={(e) =>
                this.handleSelectionChange("state", e.target.value)
              }
              className="form-control"
              disabled={!selectedValues.country}>
              <option value="" disabled>
                Select a state
              </option>
              {stateOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Col>
          <Col md={4}>
            <select
              value={selectedValues.district}
              onChange={(e) =>
                this.handleSelectionChange("district", e.target.value)
              }
              className="form-control"
              disabled={!selectedValues.state}>
              <option value="" disabled>
                Select a district
              </option>
              {districtOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MultiLevelSelect;
