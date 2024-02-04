import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home/Home.jsx";
import {Blog} from "./pages/blog/Blog.jsx";
import { Projects } from "./pages/projects/Projects.jsx";
import {Cv} from "./pages/CV/Cv.jsx";
import {Contact} from "./pages/contact/Contact.jsx";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projetos" element={<Projects />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/curriculo" element={<Cv />}></Route>
        <Route path="/contatos" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
