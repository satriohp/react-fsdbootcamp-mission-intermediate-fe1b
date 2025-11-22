export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center hero-bg flex items-end"
      style={{
        backgroundImage: 'url("/assets/movie-posters/herogambar.jpg")',
      }}
    >
      <div className="absolute inset-0 gradient-overlay"></div>
      <div className="relative z-10 p-8">
        <h1 className="text-5xl font-extrabold mb-4">Avatar</h1>
        <p className="text-sm w-2/3 opacity-80 mb-6">
          A paraplegic Marine dispatched to the moon Pandora on a unique
          mission becomes torn between following his orders and protecting the
          world he feels is his home.
        </p>
        <div className="flex space-x-4 items-center">
          <button className="bg-[#0F1E93] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#192DB7]">
            Mulai
          </button>
          <button className="bg-[#2F3334] text-white font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-black">
            Selengkapnya
          </button>
          <span className="text-xs border border-white opacity-80 rounded-full px-2 py-1">
            PG-13
          </span>
        </div>
      </div>

      {/* Button Mute Speaker */}
      <button className="absolute bottom-8 right-8 z-20 w-12 h-12 rounded-full flex items-center justify-center border border-white/30 bg-[#2F3334]/80 backdrop-blur-sm transition transform hover:bg-[#5A5A5A]/90 hover:scale-105">
        <img src="/assets/Frame 65.png" alt="Mute Speaker" className="w-12 h-12 invert" />
      </button>
    </section>
  );
}
