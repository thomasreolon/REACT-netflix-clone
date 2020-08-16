import axios from "axios";
import requests from "./requests";

const axsiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

const imgUrl = "https://image.tmdb.org/t/p/original/";

export default { axsiosInstance, imgUrl };
