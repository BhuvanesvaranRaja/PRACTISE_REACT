import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import DraggableItem from "./DraggableItem";
import { Button } from "react-bootstrap";
import "..//..//App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";

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
      newItemContent: "", // Clear input on toggle
      newItemError: false, // Clear error on toggle
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

      const { containers, setContainers, id } = this.props;
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
    }
  };

  render() {
    const {
      id,
      items,
      title,
      containersFromLocalStorage,
      moveItemToContainer,
    } = this.props;
    const { newItemContent, addingTask, newItemError } = this.state;
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
              className="form-control fw-bold w-75 m-auto border-1"
              placeholder="Enter task content"
              style={{
                marginBottom: "10px",
                letterSpacing: "3px",
                padding: "23px",
              }}
            />
            <Button
              onClick={this.handleAddItem}
              variant="primary"
              className="btn btn-danger w-75 m-auto  mt-3 fw-bolder text-uppercase fs-5 mb-2 ">
              Add
              <FontAwesomeIcon icon={faCheck} style={{ marginLeft: "10px" }} />
            </Button>
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
