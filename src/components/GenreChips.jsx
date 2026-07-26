export default function GenreChips({ genres = [] }) {
  const fallbackGenres = [
    { id: 28, name: "Action" },
    { id: 18, name: "Drama" },
    { id: 878, name: "Sci-Fi" },
    { id: 53, name: "Thriller" },
    { id: 35, name: "Comedy" },
    { id: 10749, name: "Romance" },
    { id: 27, name: "Horror" },
    { id: 12, name: "Adventure" },
  ];

  const visibleGenres = genres.length ? genres.slice(0, 10) : fallbackGenres;

  return (
    <section className="genre-chips" aria-label="Browse by genre">
      <div className="genre-chips__eyebrow">Browse by Genre</div>
      <div className="genre-chips__list">
        {visibleGenres.map((genre) => (
          <button key={genre.id} type="button" className="genre-chip">
            {genre.name}
          </button>
        ))}
      </div>
    </section>
  );
}