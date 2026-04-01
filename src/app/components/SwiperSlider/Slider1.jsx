"use client";

export default function Slider1() {
    return (
        <section className="relative w-full h-[90vh] flex items-center justify-center text-white">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1608889175123-8ee362201f81?auto=format&fit=crop&w=1600&q=80')",
                }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Unlimited Movies, TV Shows & More
                </h1>

                <p className="text-lg md:text-xl text-gray-300 mb-6">
                    Watch anywhere. Cancel anytime. Dive into your favorite stories.
                </p>

                <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 text-lg font-semibold rounded">
                    See Movies Collection
                </button>
            </div>
        </section>
    );
}