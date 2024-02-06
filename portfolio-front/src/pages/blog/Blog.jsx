import React from "react";
import { Header } from "../../components/Header/Header";
import { Container } from "../../components/Container/Container.styles";
import { Wrapper } from "../../components/Wrapper/Wrapper";

export const Blog = () => {
  return (
    <div>
      <Header />
      <Container>
        <Wrapper>Blog</Wrapper>
      </Container>
    </div>
  );
};
