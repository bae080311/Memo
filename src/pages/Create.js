import Title from "../components/Title";
import Button from "../style/button";

export default function Create() {
  return (
    <div>
      <Title />
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
