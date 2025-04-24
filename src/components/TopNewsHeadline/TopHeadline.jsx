import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetch_miscelleneous_news } from '../../Redux/slice/miscelleneousnews';
import getRelativeTime from '../../Utils/CommonFunc';

const TopHeadline = () => {
    const dispatch = useDispatch();
    const { isloading, data, isError } = useSelector(state => state.miscelleneousnews);
    const [headlines, setHeadlines] = useState([]);

    useEffect(() => {
        if (data.length === 0 && !isloading && !isError) {
            dispatch(fetch_miscelleneous_news());
        } else if (data.articles && data.articles.length > 0) {
            setHeadlines(data.articles);
        }
    }, [data, isloading, dispatch]);

    const mainHeadline = useMemo(() => headlines?.[0], [headlines]);
    const secondaryHeadlines = useMemo(() => headlines?.slice(1), [headlines]);

    const popArray = () => {
        setHeadlines(prev => {
            if (!prev.length) return prev;
            const newArray = [...prev];
            const last = newArray.pop();
            newArray.unshift(last);
            return newArray;
        });
    };

    const pushArray = () => {
        setHeadlines(prev => {
            if (!prev.length) return prev;
            const newArray = [...prev];
            const first = newArray.shift();
            newArray.push(first);
            return newArray;
        });
    };

    if (isloading) {
        return (
            <div className="w-full h-[300px] flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-red-500"></div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="text-center text-red-600 font-semibold mt-5">
                Failed to load headlines. Please try again.
            </div>
        );
    }

    return (
        <>
            {headlines.length > 0 && (
                <div className="relative flex flex-col lg:flex-row lg:h-[450px] gap-4 mt-12 mb-12 px-4 z-10">
                    {/* Main Image Block */}
                    <div className="relative w-full lg:w-[60%] h-[450px] lg:h-full overflow-hidden rounded-2xl shadow-2xl group">
                        <img
                            src={mainHeadline.imageUrl}
                            alt="Main Headline"
                            className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end text-white transition-opacity duration-300">
                            <div className="mb-4 text-sm text-gray-300 flex items-center gap-3 cursor-pointer" onClick={() => window.open(mainHeadline.sourceUrl, '_blank')}>
                                <span>{mainHeadline.sourceName}</span>
                                <span>&#x2022;</span>
                                <span>{getRelativeTime(mainHeadline.createdAt)}</span>
                            </div>
                            <h1 className="text-3xl lg:text-4xl font-extrabold leading-snug cursor-pointer " onClick={() => window.open(mainHeadline.sourceUrl, '_blank')}>
                                {mainHeadline.title}
                            </h1>
                            <p className="line-clamp-3 mt-2 text-gray-300 text-sm cursor-pointer lg:text-base" onClick={() => window.open(mainHeadline.sourceUrl, '_blank')}>{mainHeadline.content}</p>
                            <div className="mt-4 flex justify-between items-center"> 
                                {/* <span className="text-sm text-gray-400">- {mainHeadline.date}</span> */}
                                <div className="flex gap-4">
                                    <img
                                        onClick={popArray}
                                        className="w-6 h-6 cursor-pointer hover:scale-125 transition-transform"
                                        src="https://img.icons8.com/ios-filled/50/ffffff/circled-left-2.png"
                                        alt="Previous"
                                    />
                                    <img
                                        onClick={pushArray}
                                        className="w-6 h-6 cursor-pointer hover:scale-125 transition-transform"
                                        src="https://img.icons8.com/ios-filled/50/ffffff/circled-right-2.png"
                                        alt="Next"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mini Headlines */}
                    <div className="lg:w-[40%] flex flex-col gap-4 overflow-clip" >
                        {secondaryHeadlines.map((news, index) => (
                            <a
                                key={news.hashId || index}
                                href={news.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                // style={{
                                //     background: `url(${news.imageUrl}) `,
                                //     backgroundSize:'140px',
                                //     backgroundRepeat: 'no-repeat',
                                //     backgroundPosition: 'right',
                                // }}
                                className="bg-white  flex-row-reverse rounded-xl min-h-[97px]  shadow hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex gap-4 overflow-hidden"
                            >
                                <img
                                    src={news.imageUrl}
                                    alt={news.title}
                                    className="w-1/4  object-cover "
                                />
                                <div className="flex flex-col p-3 w-3/4 ">
                                    <div className="text-sm text-gray-500 flex items-center gap-2">
                                        <span style={{fontWeight: 'bold'}}>{news.sourceName}</span>
                                        <span>&#x2022;</span>
                                        <span>{getRelativeTime(news.createdAt)}</span>
                                    </div>
                                    <h2 className="font-semibold text-black line-clamp-2 mt-1">
                                        {news.title}
                                    </h2>
                                    {/* <p className="text-xs text-gray-600 mt-1 ml-2">- {news.authorName}</p> */}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default TopHeadline;
