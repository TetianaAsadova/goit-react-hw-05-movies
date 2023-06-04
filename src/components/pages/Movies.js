import { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import {
    useParams,
    useSearchParams,
    useLocation,
    Link,
    Outlet
} from 'react-router-dom';

const API_KEY = 'ad2e3abfb56d0bd03c35663dc9829f67';

const Movies = () => {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const { id } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const value = searchParams.get('query') ?? '';
    const location = useLocation();


    const handleChange = event => {
        if (event.target.value === '') {
            return setSearchParams({});
        }
        // console.log(`event`, event);
        setSearchParams({ query: event.target.value });
    };

    // console.log(`value`, value);
    

    const handleSubmit = async event => {
        event.preventDefault();
           
        if (value !== '') {
            setLoading(true);
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/search/movie?query=${value}&api_key=${API_KEY}`
                );
                if (!response.ok) {
                    throw new Error('Failed to find movies');
                }
                const data = await response.json();
                setMovies(data.results);
                setLoading(false);
            } catch (error) {
                console.log(error.message);
                setLoading(false);
            }
        }
    };

    // useEffect(() => {
    //     if (value !== '') {
    //         handleSubmit({
    //             preventDefault: () => {}
    //             // loading: true
    //         });
    //     }
    // }, [value, handleSubmit]);
    
    return (
        <div>
            {id ? (
                <Outlet />
            ) : ( 
                <>                  
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={value}
                            autoComplete="off"
                            // placeholder={value}
                            onChange={handleChange}
                        />
                        <button type="submit">Search</button>
                    </form>       
                    {loading && (
                        <div>
                            <ColorRing />
                        </div>
                        )}
                    <ul>
                        {movies.map(movie => (
                        <li key={movie.id}>
                            <Link to={`${movie.id}`} state={{ from: location }}>
                                {movie.title}
                            </Link>
                        </li>
                        ))}
                    </ul>     
                </>      
            )
            }
        </div>    
    )    
}

export default Movies;
