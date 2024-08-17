import React from "react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import Button from "../components/button";

function List() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Title />
      <Button
        onClick={() => {
          navigate("/create");
        }}
        style={{
          position: "relative",
          left: "47%",
          top: "500px",
        }}
      >
        메모 작성
      </Button>
    </div>
  );
}

export default List;
