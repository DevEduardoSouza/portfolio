import React from "react";
import { Header } from "../../components/Header/Header";
import { Container } from "../../components/Container/Container.styles";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import RotateScale from "../../components/RotateScale/RotateScale.styles";
import { Footer } from "../../components/Footer/Footer.jsx";

export const Blog = () => {
  return (
    <div>
      <Header />
      <Container>
        <Wrapper>
          BLOG
          <Footer />
        </Wrapper>
      </Container>
    </div>
  );
};
