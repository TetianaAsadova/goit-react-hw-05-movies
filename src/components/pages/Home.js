import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const API_KEY = 'ad2e3abfb56d0bd03c35663dc9829f67';
// https://api.themoviedb.org/3/genre/movie/list
// https://api.themoviedb.org/3/guest_session/{guest_session_id}/rated/movies
// https://api.themoviedb.org/3/keyword/{keyword_id}
// https://api.themoviedb.org/3/keyword/{keyword_id}/movies
// https://api.themoviedb.org/3/find/{external_id}
// https://api.themoviedb.org/3/discover/movie
// https://api.themoviedb.org/3/movie/changes
// https://api.themoviedb.org/3/account/{account_id}/rated/movies
// https://api.themoviedb.org/3/account/{account_id}/lists

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
        )
            .then(response => response.json())
            .then(data => {
                setTrendingMovies(data.results);
                console.log(trendingMovies);
            })
            .catch(error => {
                console.log(error.message);

            })
    }, [])
        
    return <div>
        <h1>Trends of day</h1>
        <ul>
            {trendingMovies.map(trendingMovie => (
                <li key={trendingMovie.id}>
                     <Link to={`/movies/${trendingMovie.id}`}>{trendingMovie.title}</Link>
                </li>
            ))}
        </ul>

    </div>
}

export default Home;
