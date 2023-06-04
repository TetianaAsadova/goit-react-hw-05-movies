import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = 'ad2e3abfb56d0bd03c35663dc9829f67';

const GetMovieCredits = () => {
  const { id } = useParams();

  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
        );
        const data = await response.json();
          
        // console.log(`data`, data);

        setCasts(data.cast);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [id]);

  return (
    <div>
      {casts.length < 1 ? (
        <div>No cast avaliable</div>
      ) : (
        <ul>
          {casts.map(cast => {
            return (
              <li key={`${cast.id}`}>
                {cast.profile_path === null ? (
                  <img
                    src={`https://as2.ftcdn.net/v2/jpg/02/51/95/53/1000_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg`}
                    alt="Movie poster"
                    width={50}
                  />
                ) : (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                    alt="Movie poster"
                    width={50}
                  />
                )}

                <>
                  <p>{cast.name}</p>
                  <p>Character: {cast.character}</p>
                </>
              </li>
            );
          })}
        </ul>
      )}
                  
    </div>
  );
};

export default GetMovieCredits;