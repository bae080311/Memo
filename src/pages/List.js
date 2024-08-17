import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import Button from "../style/button";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column; /* 수정: 수직 정렬을 위한 flex-direction 추가 */
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 70%;
  background-color: purple;
  color: white;
`;

function ShowMemo({ memo }) {
  return (
    <Container
      style={{
        flexDirection: "row",
      }}
    >
      <p>{memo.content}</p>
    </Container>
  );
}

export default function List() {
  const [memos, setMemos] = useState([]);
  const navigate = useNavigate();

  const getMemo = () => {
    axios
      .get("http://localhost:5000/memos")
      .then((res) => {
        setMemos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMemo();
  }, []);

  return (
    <div className="App">
      <Title />
      <Container
        style={{
          marginLeft: "25%",
        }}
      >
        {memos.map((memo) => (
          <ShowMemo key={memo.id} memo={memo} />
        ))}
      </Container>
      <Button
        onClick={() => {
          navigate("/create");
        }}
        style={{
          position: "relative",
          left: "47%",
          top: "20px",
        }}
      >
        메모 작성
      </Button>
    </div>
  );
}
