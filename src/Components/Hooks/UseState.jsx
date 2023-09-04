import React, { useState } from "react";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button"; // Correct import statement for Button

export default function UseState() {
  const [likes, setLikes] = useState(0);

  return (
    <>
      <Button
        className="btn-success"
        onClick={() => {
          setLikes((prevLikes) => prevLikes + 1);
        }}>
        Like <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
      </Button>
      <Button variant="warning" className="btn-info mx-2" disabled>
        {likes}
      </Button>
      <Button
        className="btn-danger"
        onClick={() => {
          setLikes((prevLikes) => prevLikes - 1);
        }}>
        Dislike <FontAwesomeIcon icon={faThumbsDown}></FontAwesomeIcon>
      </Button>
    </>
  );
}
