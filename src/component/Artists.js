import React from "react";
import "./component-style/artist.css";

class Artists extends React.Component {
  render() {
    return (
      // artist full container
      <div className="artist-container">
        {/* title bar div */}
        <div className="title-bar">
          <p className="titleBar-p">iPod</p>
        </div>

        {/* artist information div */}
        <div className="artist-info">
          <img
            className="artist-image"
            src="https://lh3.googleusercontent.com/pW7Jv2o8g0bkXFi11hrumm_N0e7KAf5pc5bawoSdD44uTLAYQi-Eeh1t1HileeiMx-9pXN6hQROW-OBEzWQWcEs2"
            alt=""
          ></img>
          <h4>Justin Bieber</h4>
        </div>
      </div>
    );
  }
}

export default Artists;
