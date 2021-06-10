import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
body{
    background-color:${(prop) => prop.theme.backgroundColor};
    }
`;
export const Title = styled.h1`
  text-align: center;
  font-size: 35px;
  color: #e17b77;
`;
export const IntroText = styled.h2`
  margin-right: 5px;
`;
export const IntroImage = styled.img`
  float: right;
  width: 200px;
  hieght: 200px;
  margin-top: -10px;
  margin-left: 30px;
  padding: 5px;
`;
