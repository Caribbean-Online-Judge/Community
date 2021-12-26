import { Container, styled, Typography } from "@mui/material";
import { GitHub as GithubIcon } from "@mui/icons-material";

export const ContainerStyled = styled(Container)`
  text-align: center;
  padding: 150px 0 0 0;
`;

export const Title = styled(Typography)`
  font-size: 50px;
  line-height: 1.1;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;

export const Description = styled(Typography)`
  font-size: 25px;
  line-height: 1.1;
  color: #fff;
  margin-top: 20px;
`;

export const LinksContainer = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 70px;
`;

export const GithubIconStyled = styled(GithubIcon)`
  color: #fff;
`;
