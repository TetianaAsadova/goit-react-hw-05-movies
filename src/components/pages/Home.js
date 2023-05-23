import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const API_KEY = 'ad2e3abfb56d0bd03c35663dc9829f67';

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);   

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(
                `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
                );
                const data = await response.json();
                setTrendingMovies(data.results);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovies();
    }, []);

     console.log(`trendingMovies`, trendingMovies);    
    return (
        <div>
            <h1>Trends of day</h1>
            <ul>
                {trendingMovies.map(trendingMovie => (
                    <li key={trendingMovie.id}>
                        <Link to={`/movies/${trendingMovie.id}`}>{trendingMovie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home;
