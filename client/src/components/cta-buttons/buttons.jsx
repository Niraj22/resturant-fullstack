import React from "react";
import { ButtonContainer } from "./buttons.styles";
const CtaButton = ({ children, ...props }) => (
  <ButtonContainer {...props}>{children}</ButtonContainer>
);

export default CtaButton;
