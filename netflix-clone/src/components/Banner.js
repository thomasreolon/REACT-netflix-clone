import React, { useEffect, useState } from "react";
import axios from "../scripts/axsios";
import requests from "../scripts/requests";
import "../styles/Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

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

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${axios.imgUrl}${movie.backdrop_path})`,
      }}
    >
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
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
