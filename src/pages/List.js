import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import Button from "../style/button";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 70%;
  background-color: white;
  color: black;
  border-radius: 10px;
  border: 2px solid black;
`;

function List() {
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

  const handleDelete = (id) => {
    const confirmed = window.confirm("정말 삭제하시겠습니까?");
    if (confirmed) {
      axios
        .delete(`http://localhost:5000/memos/${id}`)
        .then((response) => {
          console.log("Memo deleted", response);
          setMemos(memos.filter((memo) => memo.id !== id));
          alert("삭제되었습니다");
        })
        .catch((error) => {
          console.error("There was an error deleting the memo!", error);
        });
    }
  };

  return (
    <div className="App">
      <Title />
      <Container
        style={{
          borderBottom: "none",
          marginLeft: "30%",
        }}
      >
        {memos.map((memo) => (
          <Container
            key={memo.id}
            style={{
              flexDirection: "row",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
            }}
          >
            <p>{memo.content}</p>
            <Button
              onClick={() => handleDelete(memo.id)}
              style={{
                position: "absolute",
                left: "900px",
                backgroundColor: "red",
              }}
            >
              삭제
            </Button>
          </Container>
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

export default List;
