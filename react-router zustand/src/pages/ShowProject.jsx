import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { url } from "../data/db.json";
import NotMatch from "./NotMatch";

const Container = styled.iframe`
  width: 100dvw;
  height: 100dvh;
  background-color: white;
  display: grid;
  place-items: center;
  place-content: center;
`;

const ShowProject = () => {
  const { id } = useParams();

  const link = url[id - 1];
  return link ? <Container src={link} /> : <NotMatch />;
};

export default ShowProject;
