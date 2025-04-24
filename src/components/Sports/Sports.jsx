import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_sports_news } from "../../Redux/slice/sportsnews";
import getRelativeTime from "../../Utils/CommonFunc";
import { Link } from "react-router-dom";

const Sports = () => {
  const dispatch = useDispatch();
  const { data, isloading , isError} = useSelector((state) => state.sportnews);
  const [sportsNews, setSportsNews] = useState([]);

  useEffect(() => {
    if (!isloading && !isError) {
      if (data?.articles?.length > 0) {
        setSportsNews(data.articles);
      } else {
        dispatch(fetch_sports_news());
      }
    }
  }, [data, isloading, isError, dispatch]); 

  return (
    <div className="w-full pl-3 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold tracking-wide">Sports</h1>
        <Link to="/news/sports" className="hover:scale-110 transition-transform duration-200">
          <img
            src="https://img.icons8.com/laces/30/arrow.png"
            alt="arrow"
            width="30"
            height="30"
          />
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {sportsNews.slice(0, 2).map((item) => (
          <a
            key={item.title}
            href={item.sourceUrl}
            className="flex flex-col md:w-1/2 bg-white rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-[250px] object-cover"
            />
            <div className="p-4 flex flex-col gap-2">
              <span className="text-gray-500 text-sm">
                {item.sourceName} • {getRelativeTime(item.createdAt)}
              </span>
              <h2 className="text-xl font-semibold line-clamp-2">{item.title}</h2>
              <p className="text-sm text-gray-700 line-clamp-4">{item.content}</p>
              <span className="text-sm font-medium text-right">- {item.authorName}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sports;
