import React from "react";
import "./style.css";

interface ImageWithArticleLayoutProps {
  image: string;
  children: React.ReactNode;
  imageStayLeft?: boolean;
}

const ImageWithArticleLayout: React.FC<ImageWithArticleLayoutProps> = (
  props
) => {
  const { image, children, imageStayLeft = true } = props;

  return (
    <div className="image-with-article-layout">
      {imageStayLeft ? (
        <>
          <div className="image">
            <img src={image} alt="picture" />
          </div>
          <div className="article">{children}</div>
        </>
      ) : (
        <>
          <div className="article">{children}</div>
          <div className="image">
            <img src={image} alt="picture" />
          </div>
        </>
      )}
    </div>
  );
};

export default ImageWithArticleLayout;
