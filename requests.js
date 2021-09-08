const apikey = "5dcca663f893885d076bf9d6a9b6c1f3";
const request = {
    fetchTrending: `/trending/all/week?api_key=${apikey}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${apikey}&with_networks=213`,
    fetchTopRated: `/movies/top_rated?api_key=${apikey}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${apikey}&with_genres=28`,
    fetcComedyMovies: `/discover/movie?api_key=${apikey}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${apikey}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${apikey}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${apikey}&with_genres=99`,
}
export default request;