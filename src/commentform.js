import React, { useState } from "react";

function CommentForm({ onCommentSubmit }) {
  const [newComment, setNewComment] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCommentSubmit({ text: newComment, image: selectedImage });
    setNewComment("");
    setSelectedImage(null);
  };

  return (
    <div>
      <h2>Agregar un comentario</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Escribe tu comentario"
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default CommentForm;
