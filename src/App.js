import React, { useState, useEffect } from "react";
import CommentList from "./commentlist";
import CommentForm from "./commentform";
import "./App.css";

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Cargar los comentarios desde el localStorage cuando la aplicación se inicia
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  const handleCommentSubmit = ({ text, image }) => {
    let imageSrc = null;

    if (image) {
      const reader = new FileReader();
      reader.onload = (e) => {
        imageSrc = e.target.result;
        const newComment = { text, image: imageSrc };
        const updatedComments = [...comments, newComment];

        // Guardar los comentarios en el localStorage
        localStorage.setItem("comments", JSON.stringify(updatedComments));

        setComments(updatedComments);
      };
      reader.readAsDataURL(image);
    } else {
      const newComment = { text, image: null };
      const updatedComments = [...comments, newComment];

      // Guardar los comentarios en el localStorage
      localStorage.setItem("comments", JSON.stringify(updatedComments));

      setComments(updatedComments);
    }
  };

  return (
    <div className="container">
      <h1>Blog la 35</h1>
      <CommentList comments={comments} />
      <CommentForm onCommentSubmit={handleCommentSubmit} />
    </div>
  );
}

export default App;
