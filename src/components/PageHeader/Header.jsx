import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const Header = () => {
  const [randomNews, setRandomNews] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://ok.surf/api/v1/cors/news-feed');
      const result = await response.json();

      const allArticles = Object.values(result).flat(); // Flatten arrays from each category
      if (allArticles.length) {
        const shuffled = allArticles.sort(() => 0.5 - Math.random()); // Shuffle for randomness
        setRandomNews(shuffled.slice(0, 10)); // Get top 10 random articles
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full bg-[#EEEAEA] my-8 rounded-lg mx-auto p-2 flex flex-col items-center justify-center">
      <Marquee pauseOnHover gradient={false} speed={50}>
        <h1 className="md:text-xl font-bold text-red-700 mr-6">News Update:</h1>
        {randomNews.map((item, index) => (
          <a
            key={`${item.link}-${index}`}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 text-sm md:text-base font-medium text-gray-800 hover:text-red-600"
          >
            <img
              src={item.source_icon}
              alt={`${item.source} icon`}
              width={20}
              height={20}
              className="rounded-full object-cover"
            />
            <span className="line-clamp-1">{item.source}: {item.title}</span>
          </a>
        ))}
      </Marquee>
    </div>
  );
};

export default Header;
