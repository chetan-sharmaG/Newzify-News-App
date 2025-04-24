import React, { useEffect, useState } from "react";
import { fetch_business_news } from "../../Redux/slice/businessnews";
import { useDispatch, useSelector } from "react-redux";
import getRelativeTime from "../../Utils/CommonFunc";
import { Link } from "react-router-dom";

const Business = () => {
  const dispatch = useDispatch();
  const { data, isloading } = useSelector((state) => state.businessnews);
  const [businessNews, setBusinessNews] = useState([]);

  useEffect(() => {
    if (data?.articles?.length > 0) {
      setBusinessNews(data.articles);
    } else {
      dispatch(fetch_business_news());
    }
  }, [data]);

  return (
    <div className="w-full pr-3 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold tracking-wide">Politics</h1>
        <Link to="/news/politics" className="hover:scale-110 transition-transform duration-200">
          <img
            src="https://img.icons8.com/laces/30/arrow.png"
            alt="arrow"
            width="30"
            height="30"
          />
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {isloading ? (
          <p className="text-lg">Loading...</p>
        ) : (
          businessNews.slice(0, 2).map((item) => (
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
          ))
        )}
      </div>
    </div>
  );
};

export default Business;
