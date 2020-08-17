import React, { useState, useEffect } from "react";
import axsios from "../scripts/axsios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import "../styles/Row.css";

function Row({ title, fetchUrl, isLargeRow }) {
  // fetch movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axsios.axsiosInstance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // show trailer
  const [trailerUrl, setTrailerUrl] = useState("");

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie.original_title)
        .then((url) => {
          const urlParam = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParam.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  // mobile
  if (!isLargeRow) {
    isLargeRow = window.innerWidth < 700;
  }

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              src={`${axsios.imgUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`row__poster ${
                isLargeRow ? "row__poster-large" : "row__poster-small"
              }`}
            />
          );
        })}
      </div>
      {trailerUrl && (
        <Youtube
          videoId={trailerUrl}
          opts={{
            height: "480",
            width: "100%",
            playerVars: { autoplay: 0 },
          }}
        />
      )}
    </div>
  );
}

export default Row;
