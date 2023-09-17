import React from "react";
import TV from '../assets/svg/tv.svg'
import menu from "../assets/svg/menu.svg"
import Play from '../assets/svg/Play.svg'
import Imdb from '../assets/svg/Imdb.svg'
import rottenTomato from '../assets/svg/rottenTomato.svg'


const Hero = () => {
    
  return (
    <div className="w-full min-h-screen hero">
      <div className="w-[90%]  mx-auto">
        <div className="w-full flex items-center justify-between px-[80px] pt-4">
          <div className="flex gap-5 items-center">
            <img src={TV} alt="tv-icon" />
            <span className="text-2xl font-bold text-white ">MovieBox</span>
          </div>

          {/* <form class="flex items-center w-full">
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <div class="relative w-full">
              <input
                type="text"
                class="bg-transparent border-2 border-[#D1D5DB] text-white text-md rounded-md block w-full p-1.5 outline-none"
                placeholder="What do you want to watch?"
                required
                // value={query}
                // onChange={handleInputChange}
              />
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="white"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </form> */}
          <div className="relative w-full md:w-[32.8125rem]">
            <form class="flex items-center w-full">
              <label for="simple-search" class="sr-only">
                Search
              </label>
              <div class="relative w-full">
                <input
                  type="text"
                  class="bg-transparent border-2 border-[#D1D5DB] text-white text-md rounded-md block w-full p-1.5 outline-none"
                  placeholder="What do you want to watch?"
                  required
                  // value={query}
                  // onChange={handleInputChange}
                />
                <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="white"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </form>
            {/* {loading && (
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <p>Loading...</p>
              </div>
            )}

            {error && <p>Error: {error.message}</p>}
            {showResults && !loading && !error && (
              <div className="absolute mt-2 w-full bg-white border border-[#D1D5DB] rounded-md shadow-md">
                <ul>
                  {results.map((movie) => (
                    <li
                      key={movie?.id}
                      className="flex items-center p-2 border-b"
                    >
                      <Link to={`/movies/${movie?.id}`}>
                        {movie.poster_path ? (
                          <img
                            src={`${POSTER_BASE_URL}${movie?.poster_path}`}
                            alt={movie?.title}
                            className="w-16 h-16"
                          />
                        ) : (
                          <div className="text-4 text-center animate-bounce duration-500">
                            No Image Found
                          </div>
                        )}
                        <p className="text-black ml-2">{movie?.title}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )} */}
          </div>

          <div className="flex items-center gap-3">
            <p className="text-white text-base font-bold whitespace-nowrap">
              Sign In
            </p>
            <span>
              <img src={menu} alt="signIn-icon" />
            </span>
          </div>
        </div>
        <div className="w-full flex justify-between  py-28">
          <div>
            <h2 className="text-7xl text-white font-bold leading-[68px]">
              John Wick 3 : <br /> Parabellum
            </h2>
            <div className="flex gap-4 mt-[14px] lg:mt-[29px]">
              <div className="flex gap-2">
                <img src={Imdb} alt="imdb-icon" className="text-black " />
                <p className="text-sm text-white">86/100</p>
              </div>
              <div className="flex gap-2">
                <img src={rottenTomato} alt="rottentomato-icon" />
                <p className="text-sm text-white">97%</p>
              </div>
            </div>
            <div className="w-[26%] mt-8">
              <p className="text-white text-sm">
                John Wick is on the run after killing a member of the
                international assassins' guild, and with a $14 million price tag
                on his head, he is the target of hit men and women everywhere.
              </p>
            </div>
            <button className="bg-[#BE123C] py-3 px-5 rounded-md flex items-center gap-3 mt-6">
              <img src={Play} alt="watch-icon" />
              <span className="text-white font-bold text-md">
                WATCH TRAILER
              </span>
            </button>
          </div>
          <div className="flex flex-col justify-center gap-[10px] text-[12px] lg:text-base text-white">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
