import { useEffect, useState, useRef } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

const API_KEY = 'ad2e3abfb56d0bd03c35663dc9829f67';

const GetMovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  
  // console.log(`id`, id);
  
  const location = useLocation();

  // console.log(`location`, location);

  const locationRef = useRef(location.state?.from??'/');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error('Error of loading!!!');
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <>
      <Link to={locationRef.current}>Go back</Link>
      {movie && (
        <div className="movei_info">
          {movie.poster_path === null ? (
            <img
              src={`https://as2.ftcdn.net/v2/jpg/02/51/95/53/1000_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg`}
              alt="Movie poster"
              width={250}
            />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="Movie poster"
              width={250}
            />
          )}
          <div>
            <h2>{movie.original_title}</h2>
            {movie.vote_average === 0 ? (
              <div>No user score</div>
            ) : (
              <div>
                User score: {((movie.vote_average * 100) / 10).toFixed(0)}%
              </div>
            )}

            <h3>Overview</h3>
            {movie.overview ? (
              <div>{movie.overview}</div>
            ) : (
              <div>No overview added</div>
            )}
            <h3>Genres</h3>
            {movie.genres.length < 1 ? (
              <div>No genres</div>
            ) : (
              <div>
                {movie.genres.map(genre => (
                  <span key={genre.id}>{genre.name} </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default GetMovieDetails;