export default function Home() {
  return (
    <div className="text-center mx-auto relative min-h-screen">
      <div className="absolute top-0 left-0 w-full h-1/2 z-0">
        <img
          src="/51656172721_d0bfecb6b5_k.jpg"
          alt="Open Day Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-500 z-0"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4 text-white">
        <h1 className="font-bold text-3xl md:text-4xl mb-4 drop-shadow bg-black/40 rounded-2xl p-4">
          Welcome to the Tresham College 2025 Open Day
        </h1>
        <p className="text-lg max-w-xl mb-6 drop-shadow m-4">
          Discover our courses, meet staff, and explore your future at Tresham.
        </p>

      </div>
    </div>
  );
}
