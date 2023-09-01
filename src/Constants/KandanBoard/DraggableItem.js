import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "..//../App.css";
import History from "./History";
import Accordion from "react-bootstrap/Accordion";

class DraggableItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedContainerId: "",
      selectedContent: props.item.content,
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

  handleContentChange = (event) => {
    this.setState({ selectedContent: event.target.value });
  };

  handleMoveItem = () => {
    const { item, moveItemToContainer } = this.props;
    const { selectedContainerId, selectedContent } = this.state;
    if (selectedContainerId && selectedContent) {
      moveItemToContainer(item.id, selectedContainerId, selectedContent);
      this.setState({ showModal: false });
    }
  };

  render() {
    const { item, index, containersFromLocalStorage, changes } = this.props;
    const { showModal, selectedContainerId, selectedContent } = this.state;
    console.log("changes", changes);
    return (
      <Draggable draggableId={item.id} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="draggable-item"
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
              <FontAwesomeIcon icon={faPenToSquare} style={{ color: "red" }} />
            </div>
            <Modal
              size="xl"
              show={showModal}
              onHide={this.closeModal}
              className="fw-bolder">
              <Modal.Header closeButton>
                <Modal.Title>MOVE TO</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group>
                  <Form.Label className="mt-2 text-primary">
                    MOVE TASK
                  </Form.Label>
                  <Form.Control
                    className="fw-bolder text-uppercase text-center"
                    as="input"
                    value={selectedContent} // Corrected line
                    onChange={this.handleContentChange}
                  />
                  <Form.Label className="mt-2 text-success">TO</Form.Label>
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

                <Accordion
                  flush
                  className="mt-2 p-3 w-100"
                  defaultActiveKey={[]}>
                  <Accordion.Item>
                    <Accordion.Header className="">
                      <h3> VIEW HISTORY</
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="h-50 overflow-scroll ">
                        <History changes={changes} />
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.closeModal}>
                  CANCEL
                </Button>
                <Button variant="primary" onClick={this.handleMoveItem}>
                  UPDATE
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
