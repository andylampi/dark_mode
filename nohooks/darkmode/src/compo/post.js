import React from "react";

const Post = ({title, description}) => {
  return (
    <article className="articleOne">
      <div className="title">
      <h4>{title}</h4>
      <div></div>
      </div>
      <p>{description}</p>
    </article>
  );
};

export default Post;
