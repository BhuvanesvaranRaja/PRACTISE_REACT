// import React, { Component } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import ".//..//..//App.css"; // Create a separate CSS file for styling

// class Coulmn extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tasks: [],
//       newTaskText: "",
//       showInput: false, // Initially hidden
//     };
//     this.localStorageKey = props.localStorageKey || "defaultTasksKey";
//   }

//   componentDidMount() {
//     const storedTasks =
//       JSON.parse(localStorage.getItem(this.localStorageKey)) || [];
//     this.setState({ tasks: storedTasks });
//     console.log("tasks", this.state.tasks);
//   }

//   componentDidUpdate() {
//     localStorage.setItem(
//       this.localStorageKey,
//       JSON.stringify(this.state.tasks)
//     );
//     console.log("tasks", this.state.tasks);
//   }

//   onDragEnd = (result) => {
//     if (!result.destination) return;

//     const tasks = Array.from(this.state.tasks);
//     const [reorderedItem] = tasks.splice(result.source.index, 1);
//     tasks.splice(result.destination.index, 0, reorderedItem);

//     this.setState({ tasks });
//     console.log(
//       console.log(
//         `Moved task from index ${result.source.index} in container ${this.props.columnId} to index ${result.destination.index} in container ${this.props.columnId}`
//       )
//     );
//   };

//   addTask = () => {
//     this.setState({ showInput: true });
//   };

//   saveTask = () => {
//     const { newTaskText } = this.state;
//     if (newTaskText.trim() !== "") {
//       const newTask = {
//         id: Date.now(),
//         text: newTaskText,
//       };

//       const updatedTasks = [...this.state.tasks, newTask];
//       this.setState({ tasks: updatedTasks, newTaskText: "", showInput: false }); // Hide input field after saving
//     }
//   };

//   handleTaskTextChange = (event) => {
//     this.setState({ newTaskText: event.target.value });
//   };

//   render() {
//     const { tasks, newTaskText, showInput } = this.state;

//     return (
//       <>
//         <div className="container">
//           <h1 className="text-danger fix-top">{this.props.head}</h1>
//           <DragDropContext onDragEnd={this.onDragEnd}>
//             <div className="task-list">
//               <Droppable droppableId={this.props.columnId} type="group">
//                 {(provided) => (
//                   <div {...provided.droppableProps} ref={provided.innerRef}>
//                     {tasks.map((task, index) => (
//                       <Draggable
//                         key={task.id}
//                         draggableId={task.id.toString()}
//                         index={index}>
//                         {(provided) => (
//                           <div
//                             {...provided.draggableProps}
//                             {...provided.dragHandleProps}
//                             ref={provided.innerRef}
//                             className="task-item">
//                             {task.text}
//                           </div>
//                         )}
//                       </Draggable>
//                     ))}
//                     {provided.placeholder}
//                   </div>
//                 )}
//               </Droppable>
//             </div>
//           </DragDropContext>
//           <div className="task-input d-flex flex-column">
//             {!showInput ? (
//               <button onClick={this.addTask}>Add Task</button>
//             ) : (
//               <>
//                 <input
//                   type="text"
//                   value={newTaskText}
//                   onChange={this.handleTaskTextChange}
//                   placeholder="Enter task"
//                   className="w-100"
//                   required
//                 />
//                 <button onClick={this.saveTask}>Save Task</button>
//               </>
//             )}
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default Coulmn;

// // // import ".//..//..//App.css"; // Create a separate CSS file for styling

import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ".//..//..//App.css"; // Create a separate CSS file for styling

class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTaskText: "",
      showInput: false, // Initially hidden
    };
    this.localStorageKey = props.localStorageKey || "defaultTasksKey";
  }

  componentDidMount() {
    const storedTasks =
      JSON.parse(localStorage.getItem(this.localStorageKey)) || [];
    this.setState({ tasks: storedTasks });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.localStorageKey,
      JSON.stringify(this.state.tasks)
    );
  }

  onDragEnd = (result) => {
    if (!result.destination) return;
    console.log("the results", result);
    const tasks = Array.from(this.state.tasks);
    const [reorderedItem] = tasks.splice(result.source.index, 1);
    tasks.splice(result.destination.index, 0, reorderedItem);

    this.setState({ tasks });
    console.log(
      `Moved task from index ${result.source.index} in container ${this.props.columnId} to index ${result.destination.index} in container ${this.props.columnId}`
    );
  };

  addTask = () => {
    this.setState({ showInput: true });
  };

  saveTask = () => {
    const { newTaskText } = this.state;
    if (newTaskText.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: newTaskText,
      };

      const updatedTasks = [...this.state.tasks, newTask];
      this.setState({
        tasks: updatedTasks,
        newTaskText: "",
        showInput: false,
      }); // Hide input field after saving
    }
  };

  handleTaskTextChange = (event) => {
    this.setState({ newTaskText: event.target.value });
  };

  render() {
    const { tasks, newTaskText, showInput } = this.state;

    return (
      <div className="container">
        <h1 className="text-danger fix-top">{this.props.head}</h1>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className="task-list">
            <Droppable droppableId={this.props.columnId} type="group">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {tasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id.toString()}
                      index={index}>
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          className="task-item"
                          onClick={() => {
                            console.log(
                              `Clicked task with id ${
                                task.id
                              } in container dragable ${
                                this.props.columnId
                              },draggable ${task.id.toString()}`
                            );
                          }}>
                          {task.text}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
        <div className="task-input d-flex flex-column">
          {!showInput ? (
            <button onClick={this.addTask}>Add Task</button>
          ) : (
            <>
              <input
                type="text"
                value={newTaskText}
                onChange={this.handleTaskTextChange}
                placeholder="Enter task"
                className="w-100"
                required
              />
              <button onClick={this.saveTask}>Save Task</button>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Column;
