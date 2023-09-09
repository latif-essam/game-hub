import useGenres from "../hooks/useGenres";

interface GenreListProps {}

const GenreList = ({}: GenreListProps) => {
  const { data, isLoading, error } = useGenres();
  return (
    <ul>
      {data.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
