// import React, { useState } from "react";
// import MovieCard from "./MovieCard";
// export default function SearchMovies() {
//   // states-input query,movies

  
//     const [query, setQuery] = useState("");

//     const [movies, setMovies] = useState([]);

  
//   return (
//     <>
//       <form className="flex items-center" onSubmit={searchMovies}>
//         <label htmlFor="simple-search" class="sr-only">
//           Search
//         </label>
//         <div className="relative">
//           <input
//             type="text"
//             className="bg-transparent border-2 border-[#D1D5DB] text-dark-100 text-sm rounded-sm block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600  dark:text-white outline-none"
//             placeholder="What do you want to watch"
//             name="query"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             required
//           />
//           <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
//             <svg
//               aria-hidden="true"
//               className="w-5 h-5 text-gray-500 dark:text-gray-400"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//                 clip-rule="evenodd"
//               ></path>
//             </svg>
//           </div>
//         </div>
//       </form>
//       <div className="card-list">
//         {movies
//           .filter((movie) => movie.poster_path)
//           .map((movie) => (
//             <MovieCard movie={movie} key={movie.id} />
//           ))}
//       </div>
//     </>
//   );
// }
