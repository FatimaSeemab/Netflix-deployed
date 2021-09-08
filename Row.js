import React, { useState, useEffect } from 'react'
import axios from './axios'
import './row.css';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("");
    const baseURL = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchdata() {
            const movie = await axios.get(fetchUrl);
            setMovies(movie.data.results);
            console.log(movie);
            return movie;

        }
        fetchdata();
    }
        , [fetchUrl])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    const handleclick = (movie) => {
        if (trailerUrl) { setTrailerUrl("") }
        else {
            movieTrailer(movie?.name || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'))
                })
                .catch(error => console.log(error))
        }
    }
    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row__posters">
                {movies.map((movie) => {
                    return (<img className={`row__poster
                    
                    ${isLargeRow && "large_row"}`}
                        onClick={() => { handleclick(movie) }}
                        src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.title} />)
                })}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>

    )
}

export default Row
