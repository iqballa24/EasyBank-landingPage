import React from "react";

const LatestArticleSection = ({ data }) => {
  return (
    <div className="container latestArticle-section" role="articleSection">
      <h1 className="text-xl">Latest Articles</h1>
      <div className="flex flex-wrap">
        {data.article.data.map((item, index) => (
          <div key={index} className="w-full w-md-6 w-lg-3 card-container">
            <div className="card-article">
              <div className="card-article-image">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="card-article-title">
                <p className="text-xs color-grayish-blue2">{item.author}</p>
                <p className="text-base color-dark-blue text-title">
                  {item.title}
                </p>
                <p className="text-sm color-grayish-blue2">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestArticleSection;
