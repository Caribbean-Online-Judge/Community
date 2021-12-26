import { styled } from "@mui/material";
import bg from "../../assets/images/under-construction-bg.jpeg";

export const BackgroundContainer = styled("div")`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

export const BackgroundStyled = styled("div")`
  height: 100vh;
  background-image: url(${bg});
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 1;
`;

export const Blur = styled("div")`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  backdrop-filter: blur(5px);
  background-color: #4c84c280;
  z-index: 2;
`;
