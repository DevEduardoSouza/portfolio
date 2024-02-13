import React from "react";
import { Header } from "../../components/Header/Header";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import { Paragraph } from "../../components/Paragraph/Paragraph.styles.jsx";
import { Title, Subtitle } from "../../components/Title/Title.styles.jsx";
import theme from "../../theme/theme.js";
import { Skills } from "./Home.styles.jsx";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiStyledcomponents,
} from "react-icons/si";
import { Card } from "../../components/Card/Card.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import { Container } from "../../components/Container/Container.styles.jsx";

import Section from "../../components/Section/Section.jsx";

export const Home = ({ data }) => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Section>
            <Paragraph>Olá 👋</Paragraph>
            <Title fontSize="2.8rem">Eu sou {theme.user.name}</Title>
            <span
              style={{
                fontSize: "1.2rem",
                marginBottom: ".5rem",
                display: "block",
              }}
            >
              {theme.user.job}
            </span>
            <Paragraph>{theme.user.description}</Paragraph>
          </Section>

          <Section margin="1.5rem 0 0.5rem 0">
            <Skills>
              <SiReact title="ReactJs" style={{ color: " #61DAFB" }} />
              <SiJavascript style={{ color: "yellow" }} title="JavaScript" />
              <SiTypescript style={{ color: "#007ACC" }} title="TypeScript" />
              <SiStyledcomponents
                style={{ color: " #fff" }}
                title="Styled Components"
              />
              <SiNodedotjs style={{ color: "  #8CC84B " }} title="NodeJs" />
              <SiExpress style={{ color: " #858585" }} title="Express" />
            </Skills>
          </Section>

          <Section margin="2rem">
            <Subtitle>Meus Projetos {"</>"} </Subtitle>
            <div style={{ margin: "2rem 0" }}>
              {data.projects.map((project, index) => {
                return (
                  <Card
                    title={project.title}
                    content={project.description}
                    imageUrl={project.img}
                    url={project.link.deploy}
                    key={index}
                    isOutside={true}
                  />
                );
              })}
            </div>
          </Section>

          {/* <Section margin="2rem">
            <Subtitle>Últimas do blog</Subtitle>
            <div style={{ margin: "2rem 0" }}>
              {data.posts.map((post, index) => {
                return (
                  <Card
                    title={post.title}
                    content={post.description}
                    imageUrl={post.img}
                    key={index}
                    url={post.url}
                    isOutside={false}
                  />
                );
              })}
            </div>
          </Section> */}

          <Footer />
        </Wrapper>
      </Container>
    </>
  );
};
