import React, { useState, useEffect } from 'react';
import axios from "./axios";
import request from './requests'
import "./banner.css"
function Banner() {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(request.fetchNetflixOriginals);
            setMovie(req.data.results[Math.floor(Math.random() * req.data.results.length - 1)]);
            console.log(req);
            return req;
        }
        fetchData();
    }, [])
    function truncate(str, n) {
        return (str?.length > n) ? (
            str.substring(0, n - 1) + "...") : (str)
    }
    return (
        <div className="banner"
            style={{
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}") `,
                backgroundSize: "cover",
                backgroundPosition: "center center"
            }}

        >
            <div className="banner__content">
                <div className="banner__title">

                    {movie?.title || movie?.name || movie?.original_name}
                </div>

                <div className="bannner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <div className="banner__description">
                    {truncate(movie?.overview, 150)}
                </div>
                <br />
                <div className="banner__fadebottom">

                </div>
            </div>
        </div>
    )
}

export default Banner
