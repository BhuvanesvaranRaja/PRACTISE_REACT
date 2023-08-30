import React, { Component } from "react";
import Board from "./Board";
import KanbanBoard from "../KandanBoard/KandanBoard";
export default class ScrumComponent extends Component {
  render() {
    return (
      <div>
        <KanbanBoard />
      </div>
    );
  }
}
