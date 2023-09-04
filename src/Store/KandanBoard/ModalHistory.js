import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import History from "./History";

function ModalHistory(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="text-center">
      <Button
        variant="success"
        className="p-1 text-white fs-5 mb-1"
        onClick={handleShow}>
        HISTORY
        <FontAwesomeIcon icon={faClockRotateLeft} className="mx-2" />
      </Button>

      <Modal show={show} size="xl" onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>HISTORY</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <History changes={props.changes} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalHistory;
