import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const API_KEY = 'ad2e3abfb56d0bd03c35663dc9829f67';

const GetMovieRevievs = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  
  // console.log(`reviews`, reviews);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
        );
        const data = await response.json();
        setReviews(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, [id]);
    
  return (
    <>
      {reviews.length < 1 ? (
        <div>No reviews</div>
      ) : (
        <ul>
          {reviews.map(review => {
            return (
              <li key={`${review.id}`}>
                Author: {review.author} <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default GetMovieRevievs;