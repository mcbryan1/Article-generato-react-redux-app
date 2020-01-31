import React, { useState } from "react";
import "../Article/Article.css";

const AddArticle = ({ saveArticle }) => {
  const [article, setArticle] = useState();

  const handleArticleData = e => {
    setArticle({
      ...article,
      [e.target.id]: e.target.value
    });
  };
  const addNewArticle = e => {
    e.preventDefault();
    saveArticle(article);
  };

  return (
    <div className="article-1" >
      <h1><u>Article Creator</u></h1>
      <form onSubmit={addNewArticle} className="add-article">
        <input
          type="text"
          id="title"
          placeholder="Title"
          onChange={handleArticleData}
        />{" "}
        <br />
        <textarea
          type="message"
          id="body"
          placeholder="Body"
          onChange={handleArticleData}
        />{" "}
        <br />
        <button>Add article</button>
      </form>
    </div>
  );
};
export default AddArticle;
