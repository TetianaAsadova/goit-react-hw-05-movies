import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";


// const API = ad2e3abfb56d0bd03c35663dc9829f67;
// https://api.themoviedb.org/3/movie/550?api_key=ad2e3abfb56d0bd03c35663dc9829f67
// const API4 = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDJlM2FiZmI1NmQwYmQwM2MzNTY2M2RjOTgy
// OWY2NyIsInN1YiI6IjY0NjhmZWUyMmJjZjY3MDBlM2JhYWQ2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.
// f5Q - ZCMABBQPhekfr_N4jBQXP5Kj8jzawAOGqcuHlnY;

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
    >
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<div>Movies</div>} />
        {/* <Route path="/movies/:movieId" element={<div>MovieDetails</div>} />
        <Route path="/movies/:movieId/cast" element={<div>Cast</div>} />
        <Route path="/movies/:movieId/reviews" element={<div>Reviews</div>} />        */}
      </Routes>
      
    </div>
  );
};
