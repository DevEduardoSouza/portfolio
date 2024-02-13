import React from "react";
import { Header } from "../../components/Header/Header";
import { Container } from "../../components/Container/Container.styles";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import { Title } from "../../components/Title/Title.styles";
import { Paragraph } from "../../components/Paragraph/Paragraph.styles";
import Section from "../../components/Section/Section.jsx";
import { Link } from "react-router-dom";

export const Cv = () => {
  return (
    <div>
      <Header />
      <Container>
        <Wrapper>
          <Section>
            <Title>Eduardo Souza</Title>
            <Paragraph>
              Desenvolvedor ReactJS | TypeScript | HTML | CSS | javaScript |
              NodeJs
            </Paragraph>
          </Section>

          <Section margin="2rem 0">
            <Title>Resumo</Title>
            <Paragraph>
              Estudante de Análise e Desenvolvimento de Sistemas (ADS) no
              Instituto Federal da Bahia (IFBA) em Irecê Desenvolvendo
              habilidades sólidas em criação de interfaces atraentes com HTML,
              CSS e JavaScript, além de experiência na construção de
              experiências interativas com ReactJS.
            </Paragraph>
            <Paragraph>
              Focado em: ReactJS para construção de interfaces e Node.js para
              desenvolvimento do back-end. Explorando o poder do Node.js para
              desenvolver robustos serviços no back-end, incluindo a criação de
              APIs, gerenciamento de autenticação e segurança.
            </Paragraph>
          </Section>

          <Section margin="2rem 0">
            <Title>Experiência</Title>
            <Paragraph>
              Vulcan <br /> de 2024 - Present
            </Paragraph>
            <Paragraph>
              Como parte da equipe de desenvolvimento do site da comunidade
              Vulcan, tenho contribuído para criar uma plataforma onde os
              autores possam publicar seus capítulos de webnovel e os usuários
              possam desfrutar de uma interface intuitiva e envolvente. Estamos
              utilizando ReactJS para construir uma experiência moderna e
              responsiva para todos os membros da comunidade.
            </Paragraph>
            <Paragraph>
              <Link
                style={{ color: "#f3b410" }}
                to={"https://github.com/VulcanAsu/illlusia-front-end"}
                target="_blank"
              >
                link para github
              </Link>
            </Paragraph>
          </Section>

          <Section margin="2rem 0">
            <Title>Formação acadêmica</Title>
            <Paragraph>
              Formação acadêmica IFBA - Instituto Federal da Bahia Tecnólogo,
              Analise e desenvolvimento de sistemas · (março de 2022 - julho de
              2025)
            </Paragraph>
          </Section>
        </Wrapper>
      </Container>
    </div>
  );
};
