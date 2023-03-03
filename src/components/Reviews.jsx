import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'components/fetchAPI';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      const { reviews } = await getMovieReviews(movieId);
      setReviews(reviews);
    };

    getReviews();
  }, [movieId]);

  return (
    <div>
      {reviews > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>There is no reviews for this movie</p>
      )}
    </div>
  );
}
