import React from 'react';
import '../styles/news-item.style.scss'

/*
articles": [
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Edward-Isaac Dovere",
      "title": "Heading into the vice presidential debate, Tim Walz is fighting nerves - CNN",
      "description": "Tim Walz is telling people he’s just as nervous about facing JD Vance on the debate stage as he was when he first warned Kamala Harris he was a bad debater.",
      "url": "https://www.cnn.com/2024/09/28/politics/tim-walz-vice-president-debate/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2024-09-14t220600z-229929578-rc2l0aag0er9-rtrmadp-3-usa-election-walz.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-09-28T20:06:00Z",
      "content": "Tim Walz is telling people hes just as nervous about facing JD Vance as he was the Sunday afternoon in August when he warned Kamala Harris in his running mate interview that he was a bad debater.\r\nMa… [+11283 chars]"
    },
  ]

  ** parameter=> catergory: [business| entertainment| general| health| science| sports| technology]
*/
const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <div className="news-item-container">
      {urlToImage ? (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      ) : null}
      <div className='contents'>
        <h2>
          <a href={url} target='_blank' rel="noopener noreferrer">
            {title}
          </a>
          <p>{description}</p>
        </h2>
      </div>
    </div>
  );
};

export default NewsItem;
