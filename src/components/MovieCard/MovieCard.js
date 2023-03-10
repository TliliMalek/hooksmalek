import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

import "./styles.css";

const Moviecard = ({ el }) => {
  return (
    <div>
      <div>
        <div className="wrapper">
          <div className="main_card">
            <div className="card_left">
              <div className="card_datails">
                <h1>{el.title}</h1>
                <div className="card_cat">
                  <p className="PG">PG - 13</p>
                  <p className="year">2018</p>
                  <p className="genre">Action | Adventure </p>
                  <p className="time">2h 28m</p>
                  <p></p>
                </div>
                <p className="disc">{el.description}</p>
                <div className="social-btn">
                  {/* WATCH TRAILER*/}
                  <Link to={`/description/${el.id}`}>
                    <button>
                      <i className="fas fa-play" /> SEE Details
                    </button>
                  </Link>
                  {/* GET*/}

                  {/*USERS RATINGS*/}
                  <button>
                    <Rating
                      size={20}
                      readonly={true}
                      initialValue={el.rating}
                    />
                  </button>
                  {/*BOOKMARK*/}
                </div>
              </div>
            </div>
            <div className="card_right">
              <div className="img_container">
                <img src={el.posterUrl} alt="" />
              </div>
              <div className="play_btn">
                <i className="fas fa-play-circle" />
              </div>
            </div>
          </div>
        </div>
        {/* FOLLOW */}
      </div>
    </div>
  );
};

export default Moviecard;
