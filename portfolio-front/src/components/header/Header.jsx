import React from "react";
import {
  StyleHeader,
  Profile,
  ContainerImg,
  Nav,
  List,
  Item,
  SocialMedia,
} from "./Header.styles";
import theme from "../../theme/theme";

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";

import imageProfile from "../../assets/img-profile-example.jpg";

export const Header = () => {

  return (
    <StyleHeader>
      <Profile>
        <ContainerImg>
          <img src={imageProfile} alt="User" />
        </ContainerImg>
      </Profile>

      <Nav>
        <List>
          <Item>
            <a href="home.com">Home</a>
          </Item>
          <Item>
            <a href="projetos.com">Projetos</a>
          </Item>
          <Item>
            <a href="blog.com">Blog</a>
          </Item>
          <Item>
            <a href="cv.com">CV</a>
          </Item>
          <Item>
            <a href="contatos.com">Contatos</a>
          </Item>
        </List>
      </Nav>

      <SocialMedia>
        <a href={theme.socialLinks.github}>
          <FaGithub />
        </a>
        <a href={theme.socialLinks.LinkedIn}>
          <FaLinkedin />
        </a>
        <a href={theme.socialLinks.Instagram}>
          <FaInstagram />
        </a>
        <a href={theme.socialLinks.Discord}>
          <FaDiscord />
        </a>
      </SocialMedia>
    </StyleHeader>
  );
};
