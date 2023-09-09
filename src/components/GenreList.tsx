import useGenres from "../hooks/useGenres";

interface GenreListProps {}

const GenreList = ({}: GenreListProps) => {
  const { genres, isLoading, error } = useGenres();
  return (
    <ul>
      {genres.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
