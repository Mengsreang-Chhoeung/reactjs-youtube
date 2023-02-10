import React from "react";

interface ArticleProps {
    title: string;
    children: React.ReactNode;
}

const Article: React.FC<ArticleProps> = (props) => {
  const { title, children } = props;

  return (
    <div>
      <h2>{title}</h2>
      <p>
        {children}
      </p>
    </div>
  );
};

export default Article;
