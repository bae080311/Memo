import React from "react";
import styled from "styled-components";

// styled-components로 Title 스타일 정의
const TitleStyle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
`;
const SubTitleStyle = styled.h3`
  text-align: center;
`;

export default function Title() {
  return (
    <>
      <TitleStyle>메모!!</TitleStyle>
      <SubTitleStyle>간단한 메모 하세요!!</SubTitleStyle>
    </>
  );
}
