import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "..//../App.css";

class DraggableItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedContainerId: "",
    };
  }

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  handleContainerChange = (event) => {
    this.setState({ selectedContainerId: event.target.value });
  };

  handleMoveItem = () => {
    const { item, moveItemToContainer } = this.props;
    const { selectedContainerId } = this.state;
    if (selectedContainerId) {
      moveItemToContainer(item.id, selectedContainerId);
      this.setState({ showModal: false });
    }
  };
  render() {
    const { item, index, containersFromLocalStorage } = this.props;
    const { showModal, selectedContainerId } = this.state;

    return (
      <Draggable draggableId={item.id} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="draggable-item" // Apply the draggable-item classy
            style={{
              userSelect: "none",
              padding: "8px",
              borderRadius: "10px",
              margin: "8px",
              backgroundColor: "#EAB543",
              border: "1px solid lightgray",
              display: "flex",
              justifyContent: "space-between",
              letterSpacing: "3px",

              ...provided.draggableProps.style,
            }}>
            {item.content}
            <div className="move-icon" onClick={this.openModal}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </div>
            <Modal show={showModal} onHide={this.closeModal}>
              <Modal.Header closeButton>
                <Modal.Title>MOVE TO</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group>
                  <Form.Label className="mt-2">MOVE TASK</Form.Label>
                  <Form.Control
                    as="input"
                    value={item.content}
                    disabled></Form.Control>
                  <Form.Label className="mt-2">TO</Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedContainerId}
                    onChange={this.handleContainerChange}>
                    <option value="">Select a container</option>
                    {containersFromLocalStorage.map((container) => (
                      <option key={container.id} value={container.id}>
                        {container.title}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.closeModal}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={this.handleMoveItem}>
                  Move Item
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        )}
      </Draggable>
    );
  }
}

export default DraggableItem;
