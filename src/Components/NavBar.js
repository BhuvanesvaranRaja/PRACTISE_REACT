import React, { Component } from "react";
import style from "../Assets/CSS/NavBar.module.css";
import { Link } from "react-router-dom";
export default class NavBar extends Component {
  render() {
    return (
      <div className={style.head}>
        <Link to={"/"}>HOME</Link>
        <Link to={"/HOC"}>HOC</Link>
        <Link to={"/Signup"}>SIGN UP</Link>
        <Link to={"/styled"}>STYLED</Link>
      </div>
    );
  }
}
