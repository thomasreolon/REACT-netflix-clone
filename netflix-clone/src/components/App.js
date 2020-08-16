import React from "react";
import "../styles/App.css";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
import requests from "../scripts/requests";

function App() {
  return (
    <div className="App">
      <Nav />

      <Banner />

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="2020 Movies" fetchUrl={requests.fetch2020Movies} />
    </div>
  );
}

export default App;
