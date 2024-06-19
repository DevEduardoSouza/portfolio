import React from "react";
import { Header } from "../../components/Header/Header";
import { Container } from "../../components/Container/Container.styles";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import { Title } from "../../components/Title/Title.styles";
import { Paragraph } from "../../components/Paragraph/Paragraph.styles";
import Section from "../../components/Section/Section.jsx";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export const Cv = () => {
  return (
    <div>
      <Helmet>
        <title>Entre em Contato</title>
        <meta charSet="utf-8" />

        <meta
          name="description"
          content="Desenvolvedor ReactJS | TypeScript | HTML | CSS | JavaScript | NodeJs. Estudante de Análise e Desenvolvimento de Sistemas (ADS) no Instituto Federal da Bahia (IFBA)."
        />
      </Helmet>
      <Header />
      <Container>
        <Wrapper>
          <Section>
            <Title>Eduardo Souza</Title>
            <Paragraph>
              Desenvolvedor ReactJS | TypeScript | HTML | CSS | JavaScript |
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
            <Title>Experiências</Title>
      
            <Paragraph>
              Empório das Rendas <br /> 2023  / 2024
            </Paragraph>
            <Paragraph>
              Desenvolvi plugins e realizei modificações no site em WordPress,
              criando um catalogador de produtos para o cliente. Também implementei
              um calculador de impostos, lucros, despesas e custos na aba de
              administração do WordPress, permitindo que o cliente tivesse dados
              personalizados sobre seus produtos.
            </Paragraph>
            <Paragraph>
              <Link
                style={{ color: "#f3b410" }}
                to={"https://emporiodasrendas.com.br/"}
                target="_blank"
              >
                link para o site
              </Link>
            </Paragraph>

            <Paragraph>
              MapQuest <br /> 2024 - Em desenvolvimento
            </Paragraph>
            <Paragraph>
              Atualmente estou criando um jogo com inspirações no GeoGuessr no
              navegador usando TypeScript. Meu objetivo é lançar o jogo ainda este
              ano e monetizá-lo.
            </Paragraph>
            <Paragraph>
              <Link
                style={{ color: "#f3b410" }}
                to={"https://github.com/DevEduardoSouza/MapQuest"}
                target="_blank"
              >
                link para github
              </Link>
            </Paragraph>
          </Section>

          <Section margin="2rem 0">
            <Title>Formação acadêmica</Title>
            <Paragraph>
              IFBA - Instituto Federal da Bahia <br />
              Tecnólogo, Análise e Desenvolvimento de Sistemas (março de 2022 - julho de 2025)
            </Paragraph>
          </Section>
        </Wrapper>
      </Container>
    </div>
  );
};
