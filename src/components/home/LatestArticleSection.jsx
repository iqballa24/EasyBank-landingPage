import React from "react";

const LatestArticleSection = ({ data }) => {
  return (
    <div className="container latestArticle-section">
      <h3>Latest Article</h3>
      <div className="flex flex-wrap">
        {data.article.data.map((item) => (
          <div className="w-full w-md-6 w-lg-3 card-article">
            <div className="card-article-image">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="card-article-title">
              <p className="text-xxs color-grayish-blue2">{item.author}</p>
              <p
                className="text-sm font-bold color-dark-blue"
                style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
              >
                {item.title}
              </p>
              <p className="text-xs font-bold color-grayish-blue2">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestArticleSection;
