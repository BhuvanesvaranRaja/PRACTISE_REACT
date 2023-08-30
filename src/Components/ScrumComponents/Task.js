// Task.js
import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";

class Task extends Component {
  state = {
    newTaskContent: "",
  };

  handleTaskInputChange = (event) => {
    this.setState({ newTaskContent: event.target.value });
  };

  handleAddTask = () => {
    if (this.state.newTaskContent.trim() === "") {
      return;
    }
    this.props.onAddTask(this.state.newTaskContent);
    this.setState({ newTaskContent: "" });
  };

  render() {
    const { content, index } = this.props;

    return (
      <Draggable draggableId={content} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="task">
            <p>{content}</p>
          </div>
        )}
      </Draggable>
    );
  }
}

export default Task;
