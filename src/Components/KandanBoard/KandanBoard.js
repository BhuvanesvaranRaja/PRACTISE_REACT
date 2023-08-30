import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Container from "./Container";
import { Button } from "react-bootstrap";

class KandanBoard extends Component {
  constructor(props) {
    super(props);
    const savedContainers = JSON.parse(localStorage.getItem("containers"));

    this.state = {
      containers: savedContainers || [
        {
          id: "container1",
          title: "TODO",
          items: [],
        },
        {
          id: "container2",
          title: "PENDING",
          items: [],
        },
      ],
      showAddContainerInput: false,
      newContainerTitle: "",
    };
  }

  onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const { containers } = this.state;
    const sourceContainer = containers.find(
      (container) => container.id === source.droppableId
    );
    const destinationContainer = containers.find(
      (container) => container.id === destination.droppableId
    );
    const [removed] = sourceContainer.items.splice(source.index, 1);
    destinationContainer.items.splice(destination.index, 0, removed);

    const updatedContainers = containers.map((container) => {
      if (container.id === source.droppableId) {
        return sourceContainer;
      } else if (container.id === destination.droppableId) {
        return destinationContainer;
      }
      return container;
    });

    this.setState({ containers: updatedContainers });
    localStorage.setItem("containers", JSON.stringify(updatedContainers));
  };

  addContainer = () => {
    const { containers, newContainerTitle } = this.state;
    if (newContainerTitle.trim() === "") {
      // Show the error message and return if title is empty
      this.setState({ showTitleError: true });
      return;
    }
    const newContainerId = `container${containers.length + 1}`;
    const newContainer = {
      id: newContainerId,
      title: this.state.newContainerTitle,
      items: [],
    };

    const updatedContainers = [...containers, newContainer];
    this.setState({
      containers: updatedContainers,
      showAddContainerInput: false,
      newContainerTitle: "",
      showTitleError: false,
    });
    localStorage.setItem("containers", JSON.stringify(updatedContainers));
  };

  toggleAddContainerInput = () => {
    this.setState((prevState) => ({
      showAddContainerInput: !prevState.showAddContainerInput,
      newContainerTitle: "",
    }));
  };

  handleNewContainerTitleChange = (e) => {
    console.log(e.target.value);
    this.setState({ newContainerTitle: e.target.value });
  };
  moveItemToContainer = (itemId, targetContainerId) => {
    const { containers } = this.state;

    const sourceContainer = containers.find((container) =>
      container.items.some((item) => item.id === itemId)
    );
    const targetContainer = containers.find(
      (container) => container.id === targetContainerId
    );

    const itemToMove = sourceContainer.items.find((item) => item.id === itemId);
    sourceContainer.items = sourceContainer.items.filter(
      (item) => item.id !== itemId
    );
    targetContainer.items.push(itemToMove);

    const updatedContainers = containers.map((container) =>
      container.id === sourceContainer.id ? sourceContainer : container
    );

    this.setState({ containers: updatedContainers });
    localStorage.setItem("containers", JSON.stringify(updatedContainers));
  };

  render() {
    const {
      containers,
      showAddContainerInput,
      newContainerTitle,
      showTitleError,
    } = this.state;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              maxWidth: "100%",
            }}>
            {containers.map((container) => (
              <Container
                key={container.id}
                id={container.id}
                items={container.items}
                title={container.title}
                setContainers={(updatedContainers) => {
                  this.setState({ containers: updatedContainers });
                  localStorage.setItem(
                    "containers",
                    JSON.stringify(updatedContainers)
                  );
                }}
                containers={containers} 
                containersFromLocalStorage={containers}
                moveItemToContainer={this.moveItemToContainer}
              />
            ))}
            {showAddContainerInput ? (
              <div
                style={{
                  height: "85vh",
                  backgroundColor: "#BDBDBD",
                  width: "400px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  marginRight: "20px", // Spacing between containers
                  alignItems: "center",
                }}>
                <input
                  type="text"
                  placeholder="Enter container title"
                  value={newContainerTitle}
                  onChange={this.handleNewContainerTitleChange}
                  style={{
                    padding: "10px",
                    marginBottom: "10px",
                    borderRadius: "4px",
                    width: "90%",
                    border: showTitleError
                      ? "3px solid red"
                      : "2px solid lightgray",
                  }}
                />
                {showTitleError && (
                  <p className="text-danger text-center ">
                    Please enter a title for the new container.
                  </p>
                )}
                <div className="d-flex gap-2 ">
                  <Button
                    className="btn-success fw-bolder"
                    onClick={this.addContainer}>
                    ADD
                  </Button>
                  <Button
                    className="btn-danger fw-bolder"
                    onClick={this.toggleAddContainerInput}>
                    CANCEL
                  </Button>
                </div>
              </div>
            ) : (
              <div
                style={{
                  height: "85vh",
                  backgroundColor: "#BDBDBD",
                  width: "400px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "20px", // Spacing between containers
                }}>
                <Button
                  className="btn-danger fw-bolder"
                  onClick={this.toggleAddContainerInput}>
                  ADD CONTAINER
                </Button>
              </div>
            )}
          </div>
        </div>
      </DragDropContext>
    );
  }
}

export default KandanBoard;
