import React, { Component } from "react";
import Filter1 from "../Components/HOC/Filter1";
import Filter2 from "../Components/HOC/Filter2";
import style from "../Assets/CSS/ParentHOC.module.css";

export default class ParentHOC extends Component {
  render() {
    return (
      <div className={style.flex}>
        <Filter1 />
        <Filter2 />
      </div>
    );
  }
}
