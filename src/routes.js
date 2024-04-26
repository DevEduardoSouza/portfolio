import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home/Home.jsx";
import { Studies } from "./pages/studies/Studies.jsx";
import { Projects } from "./pages/projects/Projects.jsx";
import { Cv } from "./pages/CV/Cv.jsx";
import { Contact } from "./pages/contact/Contact.jsx";

import { data } from "./data/data.js";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home data={data} />}></Route>
        <Route path="/projetos" element={<Projects data={data} />}></Route>
        <Route path="/estudos" element={<Studies />}></Route>
        <Route path="/curriculo" element={<Cv />}></Route>
        <Route path="/contatos" element={<Contact data={data} />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
