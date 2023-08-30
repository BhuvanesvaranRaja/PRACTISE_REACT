import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import DraggableItem from "./DraggableItem";
import { Button } from "react-bootstrap";
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
          width: "400px",
          marginBottom: "20px",
          border: "1px solid lightgray",
          borderRadius: "4px",
          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#f9f9f9",
          display: "inline-block",
          marginRight: "20px",
          position: "relative",
          height: "85vh",
        }}>
        <h2
          className="bg-primary text-center text-white fw-bolder text-uppercase  "
          style={{
            padding: "10px",
            borderBottom: "1px solid lightgray",
            letterSpacing: "2px",
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
                minHeight: "100px",
                display: "flex",
                flexDirection: "column",
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
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        {addingTask ? (
          <div style={{ marginTop: "10px" }}>
            <input
              type="text"
              autoFocus
              value={newItemContent}
              onChange={(e) =>
                this.setState({ newItemContent: e.target.value })
              }
              style={{
                color: "black",
                padding: "10px",
                margin: "10px",
                border: "1px solid black",
                borderRadius: "10px",
                letterSpacing: "3px",
                width: "90%",
                position: "absolute",
                bottom: "60px",
                backgroundColor: "#bdbdbd",
                fontWeight: "bolder",
                textAlign: "center",
                outline: "none",
                fontSize: "18px",
              }}
            />
            {/* {newItemError && (
                    <p className="text-danger">
                      Please enter the item content.
                    </p>
                  )} */}
            <Button
              onClick={this.handleAddItem}
              style={{
                backgroundColor: "#74b9ff",
                color: "white",
                border: "none",
                width: "90%",
                borderRadius: "4px",
                padding: "5px 10px",
                cursor: "pointer",
                position: "absolute",
                bottom: "10px",
                fontWeight: "bolder",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}>
              Add Item
            </Button>
          </div>
        ) : (
          <Button
            onClick={this.toggleAddingTask}
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              width: "90%",
              borderRadius: "4px",
              padding: "5px 10px",
              cursor: "pointer",
              marginTop: "10px",
              position: "absolute",
              bottom: "10px",
              fontWeight: "bolder",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}>
            Add Task
          </Button>
        )}
      </div>
    );
  }
}

export default Container;
