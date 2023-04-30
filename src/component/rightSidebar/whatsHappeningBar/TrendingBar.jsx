import React, { useState } from "react";
import style from "./TrendingBar.module.css";

const Trends = () => {
  const [trending, setTrendings] = useState([
    {
      id: 1,
      country: "Trending in World",
      keyword: "#Shahrukh Khan",
      totalKeywords: "7.5M Tweets",
    },
    {
      id: 2,
      country: "Trending in Cricket",
      keyword: "#Ms Dhoni",
      totalKeywords: "6.1M Tweets",
    },
    {
      id: 3,
      country: "Trending",
      keyword: "#GodiMedia",
      totalKeywords: "4.5M Tweets",
    },
    {
      id: 4,
      country: "Trending in Entertainment",
      keyword: "#Anushka Sharma",
      totalKeywords: "3.9M Tweets",
    },
    {
      id: 5,
      country: "Trending in Football",
      keyword: "#Lionel Messi",
      totalKeywords: "2000k Tweets",
    },
  ]);

  const [selectedId, setSelectedId] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  const handleNotInterested = (id) => {
    const updatedTrending = trending.filter((keyword) => keyword.id !== id);
    setTrendings(updatedTrending);
  };

  return (
    <div className={style.keywords}>
      <div className={style.key}>
        <div className={style.keyword__heading}>
          <h4 className={style.heading4}>What's happening</h4>
        </div>
        {trending.map((keyword) => (
          <div
            key={keyword.id}
            className={style.container}
            onClick={() => setSelectedId(keyword.id)}
          >
            <div>
              <div className={style.country}>{keyword.country}</div>
              <div className={style.keyword__name}>
                <strong>{keyword.keyword}</strong>
              </div>
              <div className={style.keyword__tweets}>
                {keyword.totalKeywords}
              </div>
            </div>
            <div className={style.btn}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDialog(true);
                }}
              >
                Not Interested
              </button>
            </div>
          </div>
        ))}
      </div>
      {showDialog && (
        <div className={style.dialog}>
          <div className={style.dialog__box}>
            <div className={style.dialog__header}>
              <h3 className={style.heading3}>What would you like to do?</h3>
              <button
                className={style.close__btn}
                onClick={() => setShowDialog(false)}
              >
                X
              </button>
            </div>
            <div className={style.dialog__body}>
              <button
                className={style.not__interested}
                onClick={() => {
                  handleNotInterested(selectedId);
                  setShowDialog(false);
                }}
              >
                Not Interested
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Trends;
