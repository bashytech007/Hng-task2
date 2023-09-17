import React,{useState} from 'react'

export default function Search() {
     const [query,setQuery]=useState('');
     const [movies,setMovies]=useState([]);
 
    
      const searchMovies = async (e) => {
      e.preventDefault();

      const url = `https://api.themoviedb.org/3/search/movie?api_key=b57962aacbc95728f5812818c5c30cb6&language=en-US&query=${query}&page=1&include_adult=false`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.results);

        setMovies(data.results);
      } catch (error) {
        console.log(err);
      }
    }
  return (
    
    <div className="w-[10px]">
     {/* <form class="flex items-center w-[60%]" onSubmit={searchMovies}>
        <label htmlFor="simple-search" class="sr-only">
          Search
        </label>
       
          <input
            type="text"
            className="bg-transparent border-2 border-[#D1D5DB] text-white text-md rounded-md block w-full p-1.5 outline-none"
            placeholder="What do you want to watch?"
            disabled
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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
       
      </form> */}
      <div className="card-list w-screen absolute top-[780px] left-[-400px]  grid grid-cols 2 lg:grid-cols-4 place-content-center mx-auto">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <div className="card w-[100%]" key={movie.id} movie={movie}>
              <img
                className="card--image object-cover"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + " poster"}
              />
              <div className="card-content">
                <h3 className="card--title">{movie.title}</h3>
                <p>
                  <small>date:{movie.release_date}</small>
                </p>
                <p>
                  <small>IMDB :{movie.vote_average}</small>
                </p>
                {/* <p className="card-desc">{movie.overview}</p> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

