import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  StyleHeader,
  Profile,
  ContainerImg,
  Nav,
  List,
  Item,
  SocialMedia,
  Fade,
  HeaderMobile,
} from "./Header.styles";

import theme from "../../theme/theme";

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

import { Wrapper } from "../Wrapper/Wrapper";
import { data } from "../../data/data";

export const Header = () => {
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth >= theme.breakpoints.md.replace("px", "")
  );

  const [menuVisible, setMenuVisible] = useState(isDesktop);

  useEffect(() => {
    const handleResize = () => {
      const isDesktopNow =
        window.innerWidth >= theme.breakpoints.md.replace("px", "");
      setIsDesktop(isDesktopNow);
      setMenuVisible(isDesktopNow);
    };

    document.addEventListener("click", handleClickOutside, true);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (window.innerWidth <= theme.breakpoints.md.replace("px", "")) {
      setMenuVisible(menuRef.current.contains(e.target));
    }
  };

  const handleButtonClick = () => {
    setMenuVisible(true);
  };

  const menuRef = useRef(null);

  return (
    <>
      {!isDesktop && menuVisible && <Fade />}

      <Wrapper>
        {!isDesktop && (
          <HeaderMobile>
            <RxHamburgerMenu onClick={handleButtonClick} />
            <span>Eduardo Souza</span>
          </HeaderMobile>
        )}
      </Wrapper>

      <StyleHeader
        ref={menuRef}
        style={{ display: menuVisible ? "block" : "none" }}
      >
        <Profile>
          <ContainerImg>
            <img src={data.user.imgProfile} alt="User" />
          </ContainerImg>
        </Profile>

        <Nav>
          <List>
            <Item>
              <Link to={"/"}>Home</Link>
            </Item>
            <Item>
              <Link to={"/projetos"}>Projetos</Link>
            </Item>
            <Item>
              <Link to={"/blog"}>Blog</Link>
            </Item>
            <Item>
              <Link to={"/curriculo"}>Currículo</Link>
            </Item>
            <Item>
              <Link to={"/contatos"}>Contatos</Link>
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
    </>
  );
};
