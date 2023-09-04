import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { Droppable } from "react-beautiful-dnd";
import { Button } from "react-bootstrap";
import DraggableItem from "./DraggableItem";
import "..//..//App.css";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItemContent: "",
      addingTask: false,
      newItemError: false, // Add state for item validation
    };
  }

  toggleAddingTask = () => {
    this.setState((prevState) => ({
      addingTask: !prevState.addingTask,
      newItemContent: "",
      newItemError: false,
    }));
  };
  toggleCancellingTask = () => {
    this.setState((prevState) => ({
      cancellingTask: !prevState.cancellingTask,
      addingTask: false,
      newItemContent: "",
      newItemError: false,
    }));
  };

  handleAddItem = () => {
    const { newItemContent } = this.state;
    if (newItemContent.trim() === "") {
      // Show the error message and return if content is empty
      this.setState({ newItemError: true });
      return;
    }
    if (newItemContent.trim() !== "") {
      const newItem = {
        id: `new-item-${Date.now()}`,
        content: newItemContent,
      };

      const { containers, setContainers, id, title } = this.props;
      const updatedContainers = containers.map((container) => {
        if (container.id === id) {
          return {
            ...container,
            items: [...container.items, newItem],
          };
        }
        return container;
      });

      setContainers(updatedContainers);
      this.setState({
        newItemContent: "",
        addingTask: false,
        newItemError: false,
      });

      // Log the task addition
      const currentDate = new Date();
      const change = {
        username: localStorage.getItem("USERNAME"),
        type: "add",
        Container: title,
        Task: newItemContent,
        dateTime: currentDate.toLocaleString(),
      };
      this.props.logChange(change);
    }
  };

  render() {
    const {
      id,
      items,
      title,
      containersFromLocalStorage,
      moveItemToContainer,
      currentUser,
      changes,
    } = this.props;
    const { newItemContent, addingTask } = this.state;
    return (
      <div
        style={{
          width: "20%",
          maxWdth: "20%",
          minWidth: "20%",
          // marginBottom: "20px",
          border: "1px solid grey",
          borderRadius: " 4px",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
          marginRight: "20px",
          position: "relative",
          height: "85vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}>
        <h2
          className="bg-primary text-center text-white fw-bolder text-uppercase  "
          style={{
            padding: "10px",
            borderBottom: "1px solid lightgray",
            letterSpacing: "2px",
            height: "5vh",
            background:
              " linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)",
          }}>
          {title}
        </h2>
        <Droppable droppableId={id}>
          {(provided) => (
            <div
              className="scroll"
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                fontWeight: "medium",
                fontSize: "20px",
                wordBreak: "break-word",
                height: "66vh",
                overflow: "scroll",
              }}>
              {items.map((item, index) => (
                <DraggableItem
                  key={item.id}
                  item={item}
                  index={index}
                  containersFromLocalStorage={containersFromLocalStorage}
                  moveItemToContainer={moveItemToContainer}
                  currentTitle={title}
                  currentUser={currentUser}
                  changes={changes}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <hr />
        {addingTask ? (
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              flexDirection: "column",
            }}>
            <input
              type="text"
              autoFocus
              value={newItemContent}
              onChange={(e) =>
                this.setState({ newItemContent: e.target.value })
              }
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  this.handleAddItem();
                }
              }}
              className="form-control fw-bold w-75 m-auto border-1"
              placeholder="Enter task content"
              style={{
                marginBottom: "10px",
                letterSpacing: "3px",
                padding: "20px",
              }}
            />
            <div className="d-flex gap-2 m-auto  ">
              <Button
                onClick={this.handleAddItem}
                variant="primary"
                className="btn btn-success mt-3 fw-bolder text-uppercase fs-6 mb-2 ">
                Add
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ marginLeft: "10px" }}
                />
              </Button>
              <Button
                onClick={this.toggleCancellingTask}
                variant="secondary"
                className="btn btn-danger  mt-3 fw-bolder text-uppercase fs-6 mb-2">
                Cancel
                <FontAwesomeIcon icon={faX} style={{ marginLeft: "10px" }} />
              </Button>
            </div>
          </div>
        ) : (
          <Button
            onClick={this.toggleAddingTask}
            className="w-75 m-auto text-uppercase fw-bolder fs-5 btn-success text-white ">
            Add Task{" "}
            <FontAwesomeIcon
              icon={faPlus}
              style={{ color: "white ", marginLeft: "10px" }}
            />
          </Button>
        )}
      </div>
    );
  }
}

export default Container;
