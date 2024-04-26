import React, { useEffect, useState } from "react";
import { marked } from "marked";
import axios from "axios";
import md from "../../md.md";

export const Studies = () => {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    async function fetchMarkdown() {
      try {
        const response = await axios.get("/md.md");
        setMarkdownContent(response.data);
      } catch (error) {
        console.error("Erro ao buscar o arquivo Markdown:", error);
      }
    }

    fetchMarkdown();
  }, []);

  return (
    <div>
      <pre>{markdownContent}</pre>
    </div>
  );
};
