import React, { useEffect, useState } from "react";
import axios from "../scripts/axsios";
import requests from "../scripts/requests";
import "../styles/Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  var bg_path_if_empty = "bg_black.jpg";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.axsiosInstance.get(
        requests.fetchNetflixOriginals
      );

      setMovie(request.data.results[Math.floor(Math.random() * 10)]);
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  if (movie.backdrop_path !== undefined) {
    bg_path_if_empty = axios.imgUrl + movie.backdrop_path;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${bg_path_if_empty})`,
      }}
    >
      <div className="banner--fadeBottom"></div>
      <div className="banner__contents">
        {/* TITLE */}
        <h1 className="banner__title">
          {movie?.name ||
            movie?.title ||
            movie?.original_name ||
            movie?.original_title}
        </h1>

        {/* CTA */}
        <button className="banner__btn">Play</button>
        <button className="banner__btn">My List</button>

        {/* DESCRIPTION */}

        <p className="banner__description">{truncate(movie?.overview, 150)}</p>
      </div>
    </header>
  );
}

export default Banner;
