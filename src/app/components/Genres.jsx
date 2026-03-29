export default function Genres() {
  const genres = ["Action", "Drama", "Comedy", "Sci-Fi"];

  return (
    <section className="py-16 bg-gray-900 text-white text-center">
      <h2 className="text-2xl font-bold mb-6">Browse by Genre</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {genres.map((g) => (
          <button key={g} className="px-4 py-2 bg-gray-700 rounded-full">
            {g}
          </button>
        ))}
      </div>
    </section>
  );
}