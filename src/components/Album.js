import React from 'react'
import arrow from "../assets/images/right-arrow-svgrepo-com.svg";
import { Link } from "react-router-dom";
const Album = () => {
    //   let audio = new Audio("../assets/sounds/page-turn.wav");
    //   const start = () => {
    //     audio.play();
    //   };

  return (
    <section className="album">
      <div className="container album__cover">
        <div className="row h-100">
          <div className="col-md-9">
            <div className="album__cover-wrapper h-100">
              <h1>Sticker Album</h1>
            </div>
          </div>
          <div className="col-md-3">
            <Link
              to="/album"
              className=" d-flex flex-column justify-content-center align-items-center h-100"
            >
              <img src={arrow} alt="cover wallpaper" width={64} />
              <h2>Next Page</h2>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Album