import { useState, useEffect } from 'react';
import { Items, Image } from './Cast.styled';
import { useParams } from 'react-router-dom';
import { getMovieCast, IMAGE_URL } from 'components/fetchAPI';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      const { cast } = await getMovieCast(movieId);
      setCast(cast);
    };

    getCast();
  }, [movieId]);

  return (
    <Items>
      {cast &&
        cast.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <Image
              src={IMAGE_URL + profile_path}
              alt={name}
              width="100"
              height=""
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
    </Items>
  );
}
