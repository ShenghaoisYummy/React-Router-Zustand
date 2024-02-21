import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 200px;
  background: ${(props) => props.background || "black"};
  color: ${(props) => props.color || "white"};
  display: grid;
  place-items: center;
  place-content: center;
`;

export default function Card(props) {
  return <Container {...props}></Container>;
}
