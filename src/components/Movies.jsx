
import React, { useEffect, useState } from "react";
import Tomato from "../assets/svg/rottenTomato.svg";
import Imbd from "../assets/svg/Imdb.svg";
import { Link } from "react-router-dom";

const Movies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_APIKEY;

    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=1`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.results && Array.isArray(data.results)) {
          setTopRatedMovies(data.results.slice(0, 10));
        } else {
          setError("Invalid API response format");
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="pt-[50px] px-[50px]">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <h2 className="text-2xl pb-[50px] font-bold">Featured Movies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topRatedMovies.map((movie) => (
              <Link to={`/movie/${movie.id}`} key={movie.id}>
                <div>
                  <div
                    className="bg-white p-4 rounded shadow h-[90vh] object-contain"
                    id="back"
                    style={{
                      backgroundImage: movie.poster_path
                        ? `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`
                        : "none",
                    }}
                  ></div>
                  <div className="mt-4">
                    <p className="text-lg text">{movie.logo_path}</p>
                    <h3 className="text-lg text-black font-semibold">
                      {movie.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-6 pb-4 pt-4">
                    <div className="flex">
                      <img src={Imbd} alt="" />
                      <p className="text-black text-sm pl-2 ">
                        {movie.popularity}
                      </p>
                    </div>

                    <div className="flex items-center">
                      <img src={Tomato} alt="" />
                      <p className="text-black text-sm pl-2 ">97%</p>
                    </div>
                  </div>

                  <div className="pb-5">
                    <p className="md:text-sm text-xs opacity-[0.4] font-bold">
                      {movie.release_date}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Movies;
