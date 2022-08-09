import React from "react";
import moviePhoto from "../images/netflix.png";

function Card({ title, popularity, vote_average, overview }) {
  return (
    <div className="card--div">
      <div class="row">
        <div class="column">
          <div class="card">
            <img className="card--photo" src={moviePhoto} alt="Netflixphoto" />
            <p>{title}</p>
            <p>{popularity}</p>
            <p>{vote_average}</p>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
