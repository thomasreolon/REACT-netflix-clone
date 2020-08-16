import apikeys from './apikeys';

const API_KEY = apikeys.TMDB;

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetch2020Movies: `/discover/movie?api_key=${API_KEY}&year=2020`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`
}



export default requests;