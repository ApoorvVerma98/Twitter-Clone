import React, { useState } from "react";
import style from "./TrendingBar.module.css";
import { CgMoreO } from "react-icons/cg";

const Trends = () => {
  const [trending, setTrendings] = useState([
    {
      id: 1,
      country: "Trending in India",
      keyword: "#Ms Dhoni",
      totalKeywords: "7.5M Tweets",
    },
    {
      id: 2,
      country: "Trending in world",
      keyword: "#Tom Cruise",
      totalKeywords: "6.5M Tweets",
    },
    {
      id: 3,
      country: "Trending in Cricket",
      keyword: "#RohitSharma",
      totalKeywords: "5M Tweets",
    },
    {
      id: 4,
      country: "Trending in Cricket",
      keyword: "#ViratKohli",
      totalKeywords: "4.9M Tweets",
    },
    {
      id: 5,
      country: "Trending in Football",
      keyword: "#Ronaldo",
      totalKeywords: "3.9M Tweets",
    },
  ]);

  const [showDialog, setShowDialog] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleNotInterested = (id) => {
    const updatedTrending = trending.filter((keyword) => keyword.id !== id);
    setTrendings(updatedTrending);
    setShowDialog(false);
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
            onClick={() => {
              setSelectedId(keyword.id);
              setShowDialog(true);
            }}
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
              <CgMoreO size={24} />
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
                onClick={() => handleNotInterested(selectedId)}
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
