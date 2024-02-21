import React from "react";
import { useSystemStore } from "../data/state";
import { useAppstore } from "../data/state";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => (props.theme === "dark" ? "black" : "white")};
  color: ${(props) => (props.theme === "dark" ? "white" : "black")};
  display: grid;
  place-items: center;
  place-content: center;
`;

const StyledLink = styled(Link)`
  background: white;
  padding: 10px 20px;
  border-radius: 5px;
  color: black;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
`;

const Home = () => {
  const theme = useSystemStore((state) => state.SystemState.theme);
  const switchTheme = useSystemStore((state) => state.SwitchTheme);

  const AppType = useAppstore((state) => state.AppState.AppList[0].type);
  const AppTypeName = useAppstore((state) => state.AppState.AppList[0].name);

  const SwitchAppType = useAppstore((state) => state.SwitchAppType);
  return (
    <Container theme={theme}>
      <h1>Home</h1>
      <StyledLink as="div" onClick={switchTheme}>
        Theme:{theme}
      </StyledLink>

      <StyledLink as="div" onClick={SwitchAppType}>
        AppTypeName:{AppTypeName}
      </StyledLink>
      <AppType color="Blue">TEST</AppType>
    </Container>
  );
};

export default Home;
