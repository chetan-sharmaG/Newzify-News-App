import React from 'react';

const creators = [
  {
    name: 'Chetan Sharma',
    image: 'https://chetan-portfolio-woad.vercel.app/static/media/userImage.2e104f080288a4123dde.JPG',
    github: 'https://github.com/chetan07chauhan',
    linkedin: 'https://www.linkedin.com/in/chetan-sharma-07/',
    website: 'https://chetan-portfolio-woad.vercel.app/',
  },
  // Add more creators as needed
];

const NewzifyCreators = () => {
  return (
    <section className="mt-24 mb-16 px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">
          Newzify's Creator
        </h1>
        
      </div>

      {/* Creator Cards */}
      <div className="flex flex-wrap gap-6 justify-center md:justify-start">
        {creators.map((creator, idx) => (
          <div
            key={idx}
            className="w-[260px] p-5 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-white/20 text-center"
          >
            <div className="flex flex-col items-center">
              <img
                src={creator.image}
                alt={creator.name}
                className="w-24 h-24 rounded-full border-4 border-red-300 object-cover shadow-md"
              />
              <h2 className="mt-4 text-lg font-semibold text-black">{creator.name}</h2>

              {/* Social Buttons */}
              <div className="mt-4 flex justify-center gap-3">
                <a
                  href={creator.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 text-white px-3 py-1 rounded-full text-sm hover:bg-slate-700 transition"
                >
                  GitHub
                </a>
                <a
                  href={creator.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-500 transition"
                >
                  LinkedIn
                </a>
                <a
                  href={creator.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-3 py-1 rounded-full text-sm hover:opacity-90 transition"
                >
                  Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewzifyCreators;
