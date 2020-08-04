import React from "react";
import AdminLogin from "../admin-login/admin";
import { RiAdminLine } from "react-icons/ri";
import { ReactComponent as Background } from "../../assets/bg.svg";
import { Container, BoxContainer } from "./admin-page.styles";
export default function AdminPage() {
  const styleIcons = { marginBottom: "20px" };
  return (
    <Container>
      <Background
        style={{
          height: "45rem",
          width: "auto",
          zIndex: "-18239",
          position: "absolute",
          opacity: ".4",
        }}
      />
      <BoxContainer>
        <RiAdminLine size="3rem" style={styleIcons} />
        <AdminLogin />
      </BoxContainer>
    </Container>
  );
}
