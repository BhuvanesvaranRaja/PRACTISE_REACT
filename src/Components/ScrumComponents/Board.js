// import React, { Component } from "react";
// import Coulmn from "./Column.js";
// import { DragDropContext } from "react-beautiful-dnd";

// export default class Board extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Coulmn
//           localStorageKey="tasks_column1"
//           columnId="column1"
//           head="TODO"
//         />
//         <Coulmn
//           localStorageKey="tasks_column2"
//           columnId="column2"
//           head="Pending"
//         />
//       </div>
//     );
//   }
// }
// import React, { Component } from "react";
// import Column from "./Column.js";
// import { DragDropContext } from "react-beautiful-dnd";

// export default class Board extends Component {
//   state = {
//     column1: [], // Initialize with your initial data
//     column2: [], // Initialize with your initial data
//   };

//   onDragEnd = (result) => {
//     const { source, destination } = result;

//     // Check if the item was dropped outside a droppable area
//     if (!destination) {
//       return;
//     }

//     // Log the source and destination column IDs
//     console.log(
//       `Dragged from column ${source.droppableId} to column ${destination.droppableId}`
//     );

//     // Copy the task from the source column
//     const task = this.state[source.droppableId][source.index];

//     // Remove the task from the source column
//     const updatedSourceColumn = [...this.state[source.droppableId]];
//     updatedSourceColumn.splice(source.index, 1);

//     // Add the task to the destination column
//     const updatedDestColumn = [...this.state[destination.droppableId]];
//     updatedDestColumn.splice(destination.index, 0, task);

//     // Update state with the new column configurations
//     this.setState({
//       [source.droppableId]: updatedSourceColumn,
//       [destination.droppableId]: updatedDestColumn,
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <DragDropContext onDragEnd={this.onDragEnd}>
//           <Column
//             localStorageKey="tasks_column1"
//             columnId="column1"
//             head="TODO"
//             items={this.state.column1}
//           />
//           <Column
//             localStorageKey="tasks_column2"
//             columnId="column2"
//             head="Pending"
//             items={this.state.column2}
//           />
//         </DragDropContext>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import Column from "./Column.js";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export default class Board extends Component {
  state = {
    column1: [], // Initialize with your initial data
    column2: [], // Initialize with your initial data
  };

  onDragEnd = (result) => {
    const { source, destination } = result;

    // Check if the item was dropped outside a droppable area
    if (!destination) {
      return;
    }

    // Copy the task from the source column
    const task = this.state[source.droppableId][source.index];

    // Remove the task from the source column
    const updatedSourceColumn = [...this.state[source.droppableId]];
    updatedSourceColumn.splice(source.index, 1);

    // Add the task to the destination column
    const updatedDestColumn = [...this.state[destination.droppableId]];
    updatedDestColumn.splice(destination.index, 0, task);

    // Update state with the new column configurations
    this.setState({
      [source.droppableId]: updatedSourceColumn,
      [destination.droppableId]: updatedDestColumn,
    });
  };

  render() {
    return (
      <div className="App">
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className="columns-container">
            <Droppable droppableId="column1" key="column1">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="column">
                  <Column
                    localStorageKey="tasks_column1"
                    columnId="column1"
                    head="TODO"
                    items={this.state.column1}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <Droppable droppableId="column2" key="column2">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="column">
                  <Column
                    localStorageKey="tasks_column2"
                    columnId="column2"
                    head="Pending"
                    items={this.state.column2}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
    );
  }
}
