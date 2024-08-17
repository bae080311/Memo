import React from "react";
import styled from "styled-components";

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
  font-size: 1.2rem;
`;

export default function Write() {
  return (
    <div>
      <TextArea placeholder="메모를 작성하세요." />
    </div>
  );
}
