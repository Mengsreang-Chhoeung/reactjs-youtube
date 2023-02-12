import React from "react";

interface ArticleProps {
    title: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
    styleTitle?: React.CSSProperties;
}

const Article: React.FC<ArticleProps> = (props) => {
  const { title, children, style, styleTitle } = props;

  return (
    <div style={style}>
      <h2 style={styleTitle}>{title}</h2>
      <p>
        {children}
      </p>
    </div>
  );
};

export default Article;
