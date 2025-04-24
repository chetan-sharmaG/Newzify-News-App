import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const customDefaultTopics = [
    { topic: 'national', label: 'India' },
    { topic: 'Israel-Hamas_War', label: 'Israel-Hamas War' },
    { topic: 'world', label: 'World' },
    { topic: 'politics', label: 'Politics' },
    { topic: 'technology', label: 'Technology' },
    { topic: 'startup', label: 'Startup' },
    { topic: 'business', label: 'Business' },
  ];
  
  const [topics, setTopics] = useState([]);
  const [defaultTopics, setDefaultTopics] = useState(customDefaultTopics);
  const [extraTopics, setExtraTopics] = useState([]);
  
  const [showMore, setShowMore] = useState(false);

  const allTopics = [
    {
        topic:'national',
    },
    {
        topic:'world',
    },
    {
        topic:'politics',
    },
    {
        topic:'business',
    },
    {
        topic:'entertainment',
    },
    {
        topic:'technology',
    },
    {
        topic:'startup',
    },
    {
        topic:'science',
    }
  ];

  useEffect(() => {
    fetchTopics();
  }, []);

  const fetchTopics = async () => {
    try {
      const res = await fetch('https://inshorts-nrddnp0p3-sumitkolhe.vercel.app/news/topics');
      const data = await res.json();
      const fetchedTopics = data.data.topics || [];
  
      // Filter out topics that are already in customDefaultTopics
      const defaultTopicKeys = new Set(customDefaultTopics.map(t => t.topic));
      const filteredExtras = fetchedTopics.filter(t => !defaultTopicKeys.has(t.topic));
  
      setTopics(fetchedTopics);
      setDefaultTopics(customDefaultTopics);
      setExtraTopics(filteredExtras);
    } catch (err) {
      console.error('Error fetching topics:', err);
      setTopics(customDefaultTopics);
      setDefaultTopics(customDefaultTopics);
      setExtraTopics([]);
    }
  };
  

  

  console.log(defaultTopics)

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchNews = (e) => {
    e.preventDefault();
    const trimmedSearch = search.trim();
    if (trimmedSearch) {
      window.open(`/search-result/${trimmedSearch}`, '_self');
    }
  };

  return (
    <nav className="w-full h-auto py-4 bg-[#1F1F1F]">
      <div className="w-[95%] mx-auto flex flex-wrap justify-between items-center px-2 md:px-0">
        {/* Logo + Nav links */}
        <div className="flex items-center gap-8 text-white w-full lg:w-auto">
          <Link to="/" className="text-white text-2xl font-bold">Newzify</Link>
          <div className="hidden lg:flex flex-wrap gap-x-8 items-center">
            {defaultTopics && defaultTopics.map((topic) => (
              <Link key={topic.topic} to={`/news/${topic.topic}`} className="capitalize">
                {topic.label}
              </Link>
            ))}

            {/* More Topics Toggle */}
            {extraTopics && extraTopics.length > 0 && (
              <div className="relative">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="text-sm px-3 py-1 rounded-md hover:bg-[#2b2b2b] transition"
                >
                  {showMore ? 'Less ▲' : 'More ▼'}
                </button>

                {/* Dropdown for extra topics */}
                {showMore && (
                  <div className="absolute left-0 mt-2 bg-[#2c2c2c] text-white rounded-md shadow-md z-50 p-2 flex flex-col gap-1 min-w-max">
                    {extraTopics.map((topic) => (
                      <Link
                        key={topic.topic}
                        to={`/news/${topic.topic}`}
                        onClick={() => setShowMore(false)}
                        className="capitalize hover:underline"
                      >
                        {topic.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Search */}
        <div className="flex items-center gap-5 mt-4 lg:mt-0 w-full lg:w-auto justify-end">
          <form onSubmit={searchNews} className="container1">
            <input
              type="text"
              name="search"
              className="input"
              value={search}
              onChange={handleSearch}
              onKeyDown={(e) => e.key === 'Enter' && searchNews(e)}
              placeholder="Type to search news..."
              autoComplete="off"
            />
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                <title>Search</title>
                <path
                  d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeWidth="32"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="32"
                  d="M338.29 338.29L448 448"
                />
              </svg>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
