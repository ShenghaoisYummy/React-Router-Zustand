import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { url } from "../data/db.json";

const Container = styled.div`
  width: 100dvw;
  height: 100dvh;
  background-color: white;
  display: grid;
  place-items: center;
  place-content: center;
`;

const Button = styled(Link)`
  background-color: black;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  display: block;
`;

const Projects = () => {
  return (
    <Container>
      <h1>Projects:</h1>
      <ul>
        {url.map((link, index) => {
          return (
            <li key={index}>
              <Button to={`/projects/${index + 1}`}>{link}</Button>
              <br />
            </li>
          );
        })}
      </ul>
      <Button to="/">Back to Home</Button>
    </Container>
  );
};

export default Projects;
