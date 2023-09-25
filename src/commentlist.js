import React from "react";

function CommentList({ comments }) {
  return (
    <div>
      <h2>Comentarios</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            {comment.text}
            {comment.image && (
              <img
                src={comment.image}
                alt="Comentario"
                style={{ width: "400px", height: "250px" }}
              />
            )}
            {/* Agregar una línea divisoria después de cada comentario, excepto el último */}
            {index !== comments.length - 1 && <hr />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
