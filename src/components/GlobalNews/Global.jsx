import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_global_news } from '../../Redux/slice/gloabalnews';
import { Link } from 'react-router-dom';
import getRelativeTime from '../../Utils/CommonFunc';

const Global = () => {
  const dispatch = useDispatch();
  const globalnewsState = useSelector((state) => state.globalnews);
  const isLoading = globalnewsState.isloading;
  const isError = globalnewsState.isError;
  const [globaldata, setGlobaldata] = useState([]);

  useEffect(() => {
    if (!isLoading && !isError) {
      if (globalnewsState.data.length === 0) {
        dispatch(fetch_global_news());
      } else {
        setGlobaldata(globalnewsState.data.articles);
      }
    }
  }, [globalnewsState, isLoading, dispatch.isError]);

  const mainHeadline = useMemo(() => globaldata?.[0], [globaldata]);
  const secondaryHeadlines = useMemo(() => globaldata?.slice(1), [globaldata]);

  if (isLoading) {
    return (
      <div className="w-full h-[300px] flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-gray-800"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-600 font-semibold mt-5">
        Failed to load global news. Please try again.
      </div>
    );
  }

  return (
    <>
      {globaldata.length > 0 && (
        <div className="w-full flex flex-col gap-5">
          {/* Header */}
          <div className="flex justify-between items-center px-2">
            <h1 className="lg:text-4xl text-2xl font-semibold">IPL 2025</h1>
            <Link to="/news/IPL_2025" className="flex items-center gap-2 text-blue-600 hover:scale-110 transition-transform">
              See all
              <img width="30" height="30" src="https://img.icons8.com/laces/30/arrow.png" alt="arrow" />
            </Link>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
            {/* Main Headline */}
            <a href={mainHeadline.sourceUrl} target="_blank" rel="noopener noreferrer" className="col-span-2 flex flex-col gap-3 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src={mainHeadline.imageUrl} alt={mainHeadline.title} className="w-full h-[300px] object-cover" />
              <div className="p-4 flex flex-col gap-2">
                <div className="text-sm text-gray-500 flex items-center gap-2">
                  <span className="font-semibold text-gray-700">{mainHeadline.authorName}</span>
                  &#x2022;
                  <span>{getRelativeTime(mainHeadline.createdAt)}</span>
                </div>
                <h2 className="text-2xl font-bold">{mainHeadline.title}</h2>
                <p className="text-base text-gray-600 line-clamp-4">{mainHeadline.content}</p>
              </div>
            </a>

            {/* Secondary Headlines */}
            <div className="flex flex-col gap-4 overflow-y-auto lg:max-h-[500px] scrollbar-thin scrollbar-thumb-gray-400 pr-2">
              {secondaryHeadlines.map((item) => (
                <a key={item.title} href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 rounded-xl hover:bg-gray-100 transition-all">
                  <img src={item.imageUrl} alt={item.title} className="w-32 h-24 object-cover rounded-lg flex-shrink-0" />
                  <div className="flex flex-col justify-between">
                    <div className="lg:flex text-sm text-gray-500 hidden items-center gap-2">
                      <span className="font-semibold text-gray-700">{item.authorName || 'Unknown'}</span>
                      &#x2022;
                      <span>{getRelativeTime(item.createdAt)}</span>
                    </div>
                    <h3 className="font-bold text-md line-clamp-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{item.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Global;
