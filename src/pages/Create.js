import { useState } from "react";
import Title from "../components/Title";
import Write from "../components/Write";
import Button from "../style/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [memo, setMemo] = useState("");
  const navigator = useNavigate();

  function addMemo() {
    if (memo.trim() === "") {
      alert("내용을 입력하세요");
      return;
    }
    axios
      .post("http://localhost:5000/memos", { content: memo })
      .then((res) => {
        setMemo("");
        navigator("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Title />
      <Write value={memo} onChange={(e) => setMemo(e.target.value)} />
      <Button
        style={{
          position: "relative",
          left: "53%",
          top: "500px",
        }}
        onClick={addMemo}
      >
        추가
      </Button>
      <Button
        style={{
          backgroundColor: "red",
          position: "relative",
          left: "38%",
          top: "500px",
          marginRight: "10px",
        }}
        onClick={() => {
          window.history.back();
        }}
      >
        취소
      </Button>
    </div>
  );
}
