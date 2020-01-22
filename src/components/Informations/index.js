import React from "react";

import { Container, Name, Description, List } from "./styles";
import academy from "../../assets/academy.svg";
import code from "../../assets/code.svg";

export default function Informations() {
  return (
    <Container>
      <Name>Manoel Gomes</Name>
      <Description>
        Trabalhando constantemente no desenvolvimento de front-end e back-end
        para aplicativos mobile escaláveis e complexos.
      </Description>
      <div>O que eu faço</div>
      <List>
        <li>
          <img src={academy} alt="Academy" />
          <p>
            Academico de Ciência da Computação na Universidade Federal do Amapá
          </p>
        </li>
        <li>
          <img src={code} alt="Code" />
          <p>
            Desnvolvedor Full-Stack mobile na empresa{" "}
            <a href="https://msbtec.com.br/" target="_blank">
              MSB TECNOLOGIA
            </a>
          </p>
        </li>
      </List>
    </Container>
  );
}
