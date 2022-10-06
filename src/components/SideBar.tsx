import { useEffect, useState } from 'react';

import '../styles/sidebar.scss';
import { Button } from './Button';

import { GenreResponseProps } from '../App';
import { api } from '../services/api';

interface SideBarProps {
  selectedGenreId: number,
  setSelectedGenreId: any,
}

export function SideBar({ selectedGenreId, setSelectedGenreId }: SideBarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then((response) => {
      setGenres(response.data);
    })
  }, []);

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => setSelectedGenreId(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
