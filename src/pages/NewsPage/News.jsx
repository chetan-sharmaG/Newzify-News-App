import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import getRelativeTime from "../../Utils/CommonFunc";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); // Error state
  const { category } = useParams();

  useEffect(() => {
    fetchData();
  }, [category]);

  async function fetchData() {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(
        `https://inshorts-nrddnp0p3-sumitkolhe.vercel.app/news/topics/${category}`
      );
      const result = await response.json();
      setNews(result.data.articles);
    } catch (err) {
      console.error("Error fetching news:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      <div className="lg:w-[85vw] w-[90vw] mx-auto lg:mb-10 text-white">
        <h1 className="font-bold text-3xl my-6 text-center text-[#fefefe] capitalize">
          {category} News
        </h1>

        {/* Retry Button on Error */}
        {error && (
          <div className="flex flex-col items-center gap-4 mt-4">
            <p className="text-red-400 text-lg font-semibold">Failed to load news. Please try again.</p>
            <button
              onClick={fetchData}
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all"
            >
              Retry
            </button>
          </div>
        )}

        <div className="w-full flex flex-col gap-6 mt-6">
          {/* Skeleton Loader */}
          {loading &&
            Array.from({ length: 3 }).map((_, idx) => (
              <div
                key={idx}
                className="flex flex-col lg:flex-row lg:even:flex-row-reverse gap-4 w-full animate-pulse bg-neutral-800 rounded-xl overflow-hidden shadow-md"
              >
                <div className="w-full lg:w-[40%] h-[300px] bg-gray-700" />
                <div className="flex flex-col gap-4 p-4 w-full lg:w-[60%]">
                  <div className="h-6 bg-gray-600 rounded w-2/3" />
                  <div className="h-4 bg-gray-600 rounded w-full" />
                  <div className="h-4 bg-gray-600 rounded w-full" />
                  <div className="h-4 bg-gray-600 rounded w-1/3" />
                </div>
              </div>
            ))}

          {/* News Cards */}
          {!loading &&
            !error &&
            news.map((item, index) => (
              <a
                href={item.readMoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                key={item.title}
                className={`flex my-2 lg:flex-row flex-col md:flex-col items-center gap-4 w-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="w-full lg:w-[40%] h-[250px] overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-3 w-full lg:w-[60%] px-5 py-4 text-left">
                  <span className="flex items-center gap-2 text-sm text-slate-500">
                    <strong>{item.sourceName}</strong>
                    <span>&#x2022;</span>
                    <span>{getRelativeTime(item.createdAt)}</span>
                  </span>

                  <h2 className="text-xl md:text-2xl text-black font-semibold line-clamp-3 text-balance font-poppins">
                    {item.title}
                  </h2>

                  <p className="text-sm md:text-base text-gray-800 line-clamp-5 whitespace-pre-line">
                    {item.content}
                  </p>

                  <span className="font-semibold text-sm text-slate-500 line-clamp-1">
                    - {item.authorName}
                  </span>
                </div>
              </a>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default News;
