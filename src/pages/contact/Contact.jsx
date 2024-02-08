import React from "react";
import { Header } from "../../components/Header/Header";
import { Container } from "../../components/Container/Container.styles";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import { Footer } from "../../components/Footer/Footer.jsx";

import { Title } from "../../components/Title/Title.styles.jsx";
import Section from "../../components/Section/Section.jsx";
import { Paragraph } from "../../components/Paragraph/Paragraph.styles.jsx";
import Card2 from "../../components/Card2/Card2.jsx";

export const Contact = ({
  data: {
    user: { contacts },
  },
}) => {
  return (
    <div>
      <Header />
      <Container>
        <Wrapper>
          <Section>
            <Title>Entre em Contato</Title>
            <Paragraph>
              Estou disponível para oportunidades de colaboração e ansioso para
              conectar-me. Utilize os detalhes abaixo para entrar em contato e
              iniciar uma conversa.
            </Paragraph>
          </Section>

          <Paragraph>
            E-mail:
            <span>
              {" " +
                contacts
                  .find((contact) => contact.name === "E-mail")
                  ?.link.replace("mailto:", "")}
            </span>
          </Paragraph>

          <Section
            margin="2rem"
            style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}
          >
            {contacts.map((contact, index) => {
              return (
                <Card2
                  key={index}
                  icon={contact.icon}
                  title={contact.name}
                  link={contact.link}
                  backgroundColor={contact.backgroundColor}
                  description={contact.description}
                />
              );
            })}
          </Section>

          <Footer />
        </Wrapper>
      </Container>
    </div>
  );
};
