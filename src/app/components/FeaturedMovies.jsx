export default function FeaturedMovies() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Featured Movies
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((m) => (
          <div
            key={m}
            className="bg-gray-800 text-white p-4 rounded-xl"
          >
            <img
              src="https://i.ibb.co/3kRz9qP/movie.jpg"
              className="rounded-lg mb-3"
            />
            <h3 className="font-semibold">Movie Title</h3>
            <p className="text-sm text-gray-400">Action</p>
          </div>
        ))}
      </div>
    </section>
  );
}