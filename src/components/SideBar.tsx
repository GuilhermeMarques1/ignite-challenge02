import '../styles/sidebar.scss';
import { Button } from './Button';

import { GenreResponseProps } from '../App';

interface SideBarProps {
  genres: Array<GenreResponseProps>,
  selectedGenreId: number,
  setSelectedGenreId: any,
}

export function SideBar({ genres, selectedGenreId, setSelectedGenreId }: SideBarProps) {
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
