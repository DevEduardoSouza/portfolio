import React from "react";
import { Header } from "../../components/Header/Header";
import { Container } from "../../components/Container/Container.styles";
import { Wrapper } from "../../components/Wrapper/Wrapper";

import { Subtitle } from "../../components/Title/Title.styles.jsx";
import { Section } from "../home/Home.styles.jsx";
import { Card } from "../../components/Card/Card.jsx";
import axios from "axios";

import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer/Footer.jsx";
import RotateScale from "../../components/RotateScale/RotateScale.styles.jsx";

export const Projects = ({ data }) => {
  const [repositories, setRepositories] = useState([]);
  const [spinner, setSpinner] = useState(true);

  const {
    usernameGithub,
    howManyProjects,
    addProjectsWithoutDescription,
    imgThumbnailDefault,
  } = data.user.configsGitHub;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${usernameGithub}/repos`
        );

        const arrayDeObjetosOrdenado = [...response.data]
          .sort(
            (a, b) =>
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime()
          )
          .filter((repo) => {
            if (addProjectsWithoutDescription) {
              return true;
            }

            return repo.description !== null;
          })
          .slice(0, howManyProjects);

        setRepositories(arrayDeObjetosOrdenado);
        setSpinner(false);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <Wrapper>
          <Subtitle>Projetos Principais</Subtitle>

          <Section margin="2rem 0 4rem 0">
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

          <Subtitle>Últimos Projetos</Subtitle>

          <Section margin="2rem 0 4rem 0">
            {spinner && <RotateScale />}
            <div style={{ margin: "2rem 0" }}>
              {repositories.map((repository) => {
                return (
                  <Card
                    title={repository.name}
                    content={repository.description}
                    imageUrl={
                      imgThumbnailDefault ||
                      "https://i.pinimg.com/564x/4d/a1/0a/4da10a639ef44f983f83fc25effa85b8.jpg"
                    }
                    url={repository.html_url}
                    key={repository.id}
                    isOutside={true}
                  />
                );
              })}
            </div>
          </Section>

          <Footer />
        </Wrapper>
      </Container>
    </div>
  );
};
