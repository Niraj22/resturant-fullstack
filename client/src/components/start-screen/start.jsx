import React from "react";
import { Container, Slogan, Details } from "./start.styles";
import { ReactComponent as Welcome } from "../../assets/welcome-login.svg";
import CtaButton from "../cta-buttons/buttons";
export default function Start(props) {
  return (
    <Container>
      <Slogan>Welcome to XYZ</Slogan>
      <Details>"The pleasure of variety on your plate"</Details>
      <Welcome style={{ height: "37rem", width: "35rem" }} />
      <CtaButton to="/adminpanel">Login as admin</CtaButton>
      <CtaButton to="/categories">Continue as customer</CtaButton>
    </Container>
  );
}
