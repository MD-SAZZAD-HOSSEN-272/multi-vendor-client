export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-gray-900  to-black text-white py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Stream, Rent & Sell Movies in One Platform
      </h1>

      <p className="max-w-2xl mx-auto text-gray-300 mb-6">
        Multi-vendor movie platform where vendors can upload movies and users can
        rent or purchase seamlessly.
      </p>

      <div className="flex justify-center gap-4">
        <button className="bg-blue-600 px-6 py-3 rounded-lg">
          Browse Movies
        </button>
        <button className="border px-6 py-3 rounded-lg">
          Become Vendor
        </button>
      </div>
    </section>
  );
}