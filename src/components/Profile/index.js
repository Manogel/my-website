import React from "react";

import { Container, Actions } from "./styles";
import profile from "../../assets/profile.png";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";

export default function Profile() {
  return (
    <Container>
      <img src={profile} alt="Profile" />
      <p>Olá, meu nome é Manoel Gomes e bem vindo ao meu site pessoal!</p>
      <Actions>
        <a href="https://github.com/Manogel" target="_blank">
          <img src={github} alt="Github" />
        </a>
        <a href="https://linkedin.com/in/manogel/" target="_blank">
          <img src={linkedin} alt="Linkedin" />
        </a>
      </Actions>
    </Container>
  );
}
