import { Container, IconButton, Link, Typography } from "@mui/material";

import Background from "../../components/Background/Background";
import {
  ContainerStyled,
  Description,
  GithubIconStyled,
  LinksContainer,
  Title,
} from "./styled";

function HomePage() {
  const goToGithub = () => {
    window.open("https://github.com/Caribbean-Online-Judge", "__blank");
  };

  return (
    <div>
      <Background />

      <ContainerStyled maxWidth="sm">
        <Title>Coming Soon</Title>
        <Description>
          In this website is under construction the version 2.0 of Caribbean
          Online Judge.
        </Description>

        <LinksContainer>
          <IconButton onClick={goToGithub}>
            <GithubIconStyled />
          </IconButton>
        </LinksContainer>
      </ContainerStyled>
    </div>
  );
}

export default HomePage;
