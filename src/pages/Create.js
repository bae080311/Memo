import Title from "../components/Title";
import Write from "../components/Write";
import Button from "../style/button";

function addMomo() {}

export default function Create() {
  return (
    <div>
      <Title />
      <Write />
      <Button
        style={{
          position: "relative",
          left: "53%",
          top: "500px",
        }}
        onClick={addMomo}
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
