import useGenres from "../hooks/useGentres";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <div>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
