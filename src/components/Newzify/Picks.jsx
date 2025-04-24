import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetch_picked_news } from '../../Redux/slice/pickedNews';
import getRelativeTime from '../../Utils/CommonFunc';

const Picks = () => {
  const dispatch = useDispatch();
  const { data, isloading } = useSelector((state) => state.pickednews);
  const [picknews, setPicknews] = useState([]);

  useEffect(() => {
    if (!isloading) {
      if (data?.articles?.length > 0) {
        setPicknews(data.articles);
      } else {
        dispatch(fetch_picked_news());
      }
    }
  }, [data, isloading, dispatch]);

  if (!picknews.length) return null;

  return (
    <div className="w-full mt-20 mb-10">
      {/* Header */}
      <div className="flex items-center justify-between px-2 mb-6">
        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold">Newzify's Pick</h1>
        <Link to="/news/EXPLAINERS" className="flex gap-1 hover:scale-110 transition-transform cursor-pointer">
          See all
          <img loading="lazy" width="30" height="30" src="https://img.icons8.com/laces/30/arrow.png" alt="arrow" />
        </Link>
      </div>

      {/* Hero Pick (glassmorphism-style) */}
      <a
        href={picknews[0].sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full relative bg-gray-900/70 backdrop-blur-md rounded-2xl overflow-hidden flex flex-col lg:flex-row lg:h-[350px] shadow-lg hover:shadow-2xl transition-all"
      >
        <div className="flex flex-col justify-between p-6 lg:w-1/2 w-full text-white z-10">
          <div className="flex gap-2 text-sm text-gray-300 mb-2">
            <span>{picknews[0].sourceName}</span>&#x2022;
            <span>{getRelativeTime(picknews[0].createdAt)}</span>
          </div>
          <h2 className="text-3xl font-semibold line-clamp-3">{picknews[0].title}</h2>
          <p className="text-md mt-2 line-clamp-2">{picknews[0].content}</p>
          <span className="mt-2 font-semibold text-sm text-gray-200">
            - {picknews[0].authorName || picknews[0].author || 'Unknown'}
          </span>
        </div>
        <img
          src={picknews[0].imageUrl}
          alt={picknews[0].title}
          className="object-cover lg:w-1/2 w-full h-[250px] lg:h-full brightness-[0.7]"
        />
      </a>

      {/* Grid Picks */}
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mt-10">
        {picknews.slice(1, 5).map((item) => (
          <a
            href={item.sourceUrl}
            key={item.title}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col gap-2">
              <div className="flex text-xs text-gray-500 gap-2">
                <span>{item.sourceName}</span>&#x2022;
                <span>{getRelativeTime(item.createdAt)}</span>
              </div>
              <h3 className="text-lg font-semibold line-clamp-2">{item.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{item.content}</p>
              <span className="text-sm font-medium text-gray-700 mt-auto">
                - {item.authorName || item.author || 'Unknown'}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Picks;
