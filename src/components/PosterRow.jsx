import PosterCard from "./PosterCard";

export default function PosterRow({ id, title, movies = [] }) {
  const movieList = Array.isArray(movies) ? movies.filter(Boolean) : [];

  return (
    <section className="poster-row" id={id}>
      <div className="poster-row__header">
        <div>
          <div className="poster-row__eyebrow">Collection</div>
          <h2 className="poster-row__title">{title}</h2>
        </div>
        <div className="poster-row__count">{movieList.length} titles</div>
      </div>

      <div className="poster-row__track" role="list" aria-label={title}>
        {movieList.map((movie) => (
          <div className="poster-row__item" key={movie.id} role="listitem">
            <PosterCard movie={movie} />
          </div>
        ))}
      </div>
    </section>
  );
}