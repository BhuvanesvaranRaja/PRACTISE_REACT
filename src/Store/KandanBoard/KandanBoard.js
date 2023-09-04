import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Container from "./Container";
// import ModalHistory from "./ModalHistory";

class KandanBoard extends Component {
  constructor(props) {
    super(props);
    const savedContainers = JSON.parse(localStorage.getItem("containers"));
    const savedChanges = JSON.parse(localStorage.getItem("changes"));

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
      changes: savedChanges || [],
    };
  }
  // DRAG ENND
  onDragEnd = (result) => {
    console.log(result);
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
    const content = removed.content;

    // changes LOG in ONDRAG
    const currentDate = new Date();
    const change = {
      username: localStorage.getItem("USERNAME"),
      type: "drag",
      sourceContainerId: sourceContainer.title,
      destinationContainerId: destinationContainer.title,
      itemId: removed.id,
      contentValue: content,
      dateTime: currentDate.toLocaleString(), // Add the date and time
    };
    this.logChange(change);
    this.setState({ containers: updatedContainers });
    localStorage.setItem("containers", JSON.stringify(updatedContainers));
  };

  // NEW Container
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
    const currentDate = new Date();
    const change = {
      username: localStorage.getItem("USERNAME"),
      type: "create",
      Container: newContainer.title,
      dateTime: currentDate.toLocaleString(),
    };
    this.logChange(change);
    localStorage.setItem("containers", JSON.stringify(updatedContainers));
  };

  toggleAddContainerInput = () => {
    this.setState((prevState) => ({
      showAddContainerInput: !prevState.showAddContainerInput,
      newContainerTitle: "",
    }));
  };
  // NEW Container title validation
  handleNewContainerTitleChange = (e) => {
    const newContainerTitle = e.target.value;
    const isValid = /^[a-zA-Z0-9\s]*$/.test(newContainerTitle);
    this.setState({
      newContainerTitle,
      showTitleError: !isValid,
    });
  };
  // Container Movement using Modal
  moveItemToContainer = (itemId, targetContainerId, selectedContent) => {
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
    const BeforeEdit = itemToMove.content;
    console.log("item ti move previos", itemToMove.content);

    // Update the content of the item before moving it
    itemToMove.content = selectedContent;
    targetContainer.items.push(itemToMove);
    const updatedContainers = containers.map((container) =>
      container.id === sourceContainer.id ? sourceContainer : container
    );
    // changes Object for MOVE
    const currentDate = new Date();
    const change = {
      username: localStorage.getItem("USERNAME"),
      type: "move",
      MovedFrom: sourceContainer.title,
      MovedTo: targetContainer.title,
      itemId: itemToMove.id,
      selectedContent,
      BeforeEdit,
      dateTime: currentDate.toLocaleString(),
    };
    this.logChange(change); // updating the log for local storage
    this.setState({ containers: updatedContainers });
    localStorage.setItem("containers", JSON.stringify(updatedContainers));
  };
  // changes log
  logChange = (change) => {
    this.setState(
      (prevState) => ({
        changes: [...prevState.changes, change], // Add the change to the array
      }),
      () => {
        // Save the updated changes array to localStorage
        localStorage.setItem("changes", JSON.stringify(this.state.changes));
      }
    );
  };

  render() {
    const {
      containers,
      showAddContainerInput,
      newContainerTitle,
      showTitleError,
      userName,
      changes,
    } = this.state;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {/* HISTORY MODAL */}
        {/* <div className="d-flex justify-content-between align-items-center mt-2"> */}
        {/* <h3 className="fw-bold fs-3">SCRUM MANAGER</h3> */}
        {/* <ModalHistory changes={changes} />   */}
        {/* </div> */}
        <div className="w-100 overflow-auto mt-4  ">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}>
            {containers.map((container) => (
              <Container
                key={container.id}
                id={container.id}
                items={container.items}
                title={container.title}
                currentUser={userName}
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
                changes={changes}
                logChange={this.logChange}
              />
            ))}
            {showAddContainerInput ? (
              <div
                style={{
                  height: "85vh",
                  backgroundColor: "#BDBDBD",
                  width: "20%",
                  maxWdth: "20%",
                  minWidth: "20%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  marginRight: "20px",
                  alignItems: "center",
                }}>
                <input
                  type="text"
                  placeholder="Enter container title"
                  value={newContainerTitle}
                  autoFocus
                  onChange={this.handleNewContainerTitleChange}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      this.addContainer();
                    }
                  }}
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
                    onClick={this.addContainer}
                    disabled={showTitleError}>
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
                  width: "20%",
                  maxWdth: "20%",
                  minWidth: "20%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "20px",
                }}>
                <Button
                  className="btn-danger fw-bolder w-75 m-auto p-3 fw-bolder fs-6 "
                  style={{ letterSpacing: "3px" }}
                  onClick={this.toggleAddContainerInput}>
                  ADD CONTAINER{" "}
                  <FontAwesomeIcon icon={faBoxOpen}></FontAwesomeIcon>
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
