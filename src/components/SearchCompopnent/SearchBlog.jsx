import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetch_gnews_headlines } from "../../Redux/slice/gnewsHeadlines";

const SearchBlog = () => {
  const dispatch = useDispatch();
  const { data, isloading, isError } = useSelector((state) => state.gnews);

  const { search } = useParams();
  const [searchText, setsearchText] = useState(search);
  const [searchResponse, setsearchResponse] = useState({
    loading: true,
    totalArticles: 0,
    articles: [],
  });
  const [topHeadlines, settopHeadlines] = useState({
    isloading: true,
    totalArticles: 0,
    articles: [],
    isError: false,
  });

  useEffect(() => {
    fetchSearchNews();
    // fetchTopHeadlines()
  }, []);

  useEffect(() => {
    // Only dispatch fetch if there are no articles in dat
    // a
   if(isError) return
   else {
    if (!isloading && !isError && (!data?.articles || data.articles.length === 0)) {
        dispatch(fetch_gnews_headlines());
      }
   }
  }, [ isloading, isError, dispatch]);
  

  const fetchSearchNews = async () => {
    let a = await fetch(
      "https://gnews.io/api/v4/search?lang=en&country=in&max=20&apikey=19e94d6a4144d4dbf91e5d5cae139578&q=" +
        searchText
    );
    let res = await a.json();
    console.log(res);
    setsearchResponse({ ...res, loading: false });
  };

  function timeAgo(isoTimestamp) {
    // Create a date object from the ISO 8601 timestamp
    const date = new Date(isoTimestamp);

    // Get the current date and time
    const now = new Date();

    // Calculate the difference in milliseconds
    const diff = now - date;

    // Convert difference to minutes
    const minutes = Math.round(diff / 60000);

    // Create an instance of Intl.RelativeTimeFormat
    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

    // Determine the appropriate unit and value for display
    if (minutes < 60) {
      return rtf.format(-minutes, "minute");
    } else if (minutes < 1440) {
      // less than 1 day
      const hours = Math.round(minutes / 60);
      return rtf.format(-hours, "hour");
    } else if (minutes < 10080) {
      // less than 1 week
      const days = Math.round(minutes / 1440);
      return rtf.format(-days, "day");
    } else {
      const weeks = Math.round(minutes / 10080);
      return rtf.format(-weeks, "week");
    }
  }

  const submitSearch = (e) => {
    e.preventDefault();
    if (searchText) {
      console.log("asjdhams");
      //    navigate(`/search-result/${searchText}/`)
      window.open("/search-result/" + searchText, "_self");
    }
  };

  const handleFormChange = (e) => {
    setsearchText(e.target.value);
    console.log(searchText);
  };

  return (
    <>
      <div className="form relative my-5 w-[70%]">
        <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
          <svg
            width="17"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="search"
            className="w-5 h-5 text-gray-700"
          >
            <path
              d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
              stroke="currentColor"
              strokeWidth="1.333"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <input
          className=" rounded-full w-full  px-8 py-3 border-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
          placeholder="Search..."
          required={true}
          onChange={handleFormChange}
          value={searchText ? searchText : ""}
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              console.log("enter");
              submitSearch(e);
            }
          }}
        />
        <button
          type="reset"
          onClick={() => setFormData("")}
          className="absolute right-3 -translate-y-1/2 top-1/2 p-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <h1>
        Showing {searchResponse.articles.length > 0 ? 10 : 0} Search results for{" "}
        {search}
      </h1>

      {searchResponse.articles.length == 0 && !searchResponse.loading && (
        <div>No search results</div>
      )}
      <div className="flex gap-3 relative justify-between  divide-x-[2px] ">
        <div className="flex flex-row flex-wrap  divide-y-4  my-5 w-[70%]  gap-3">
          {searchResponse.loading && (
            <div className="flex items-center justify-center w-full h-[300px]">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
          {searchResponse &&
            searchResponse.articles.map((item, index) => {
              if (index == 0)
                return (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    className="flex group w-full my-5 gap-3 h-[300px] flex-row"
                  >
                    <div className=" w-1/2 h-full ">
                      <img
                        className="w-full h-full object-cover group-hover:brightness-95 "
                        src={item.image}
                        alt="image"
                      />
                    </div>
                    <div className="bg-white flex h-full gap-5 flex-col p-3 w-1/2 ">
                      <span className="flex gap-3 text-xl ">
                        <h1>{item.source.name}</h1>
                        {timeAgo(item.publishedAt)}
                      </span>
                      <span className="text-2xl line-clamp-3   whitespace-pre-line  text-ellipsis overflow-hidden  group-hover:underline font-poppins font-semibold">
                        {item.title}
                      </span>
                      <span className="line-clamp-4   whitespace-pre-line  text-ellipsis overflow-hidden text-base">
                        {item.content}
                      </span>
                    </div>
                  </a>
                );
              return (
                <a
                  key={item.url}
                  href={item.url}
                  className="flex group even:flex-row-reverse pt-4  gap-3 flex-row w-full h-[185px]"
                >
                  <img
                    src={item.image}
                    alt="image"
                    className="f-full object-cover group-hover:brightness-95 "
                  />
                  <div className="flex flex-col gap-2">
                    <span className="flex gap-3 text-base ">
                      <h1>{item.source.name}</h1>
                      {timeAgo(item.publishedAt)}
                    </span>
                    <span className="text-xl line-clamp-2   whitespace-pre-line  text-ellipsis overflow-hidden  group-hover:underline font-poppins font-semibold">
                      {item.title}
                    </span>
                    <span className="line-clamp-2   whitespace-pre-line  text-ellipsis overflow-hidden text-base">
                      {item.description}
                    </span>
                  </div>
                </a>
              );
            })}
        </div>
        <div
          className={`w-[26%]  gap-4 overflow-y-clip ${
            searchResponse.articles.length > 0 ? "" : "h-[500px]"
          }  justify-start flex flex-col  `}
        >
          <h1 className="text-xl">Top Headlines</h1>
          {topHeadlines.length > 0 &&
            topHeadlines.map((item, index) => {
              return (
                <a
                  key={item.url}
                  href="{item.url}"
                  target="_blank"
                  className="flex group flex-row w-full p-1 gap-2 h-[100px] "
                >
                  <div className="w-1/2 h-full ">
                    <img
                      src={item.image}
                      alt="image"
                      className="w-full h-full object-cover group-hover:brightness-95 "
                    />
                  </div>
                  <div className="flex flex-col gap-2 py-1 h-full w-1/2">
                    <span className="text-sm line-clamp-4 group-hover:underline  whitespace-pre-line  text-ellipsis overflow-hidden">
                      {item.title}
                    </span>
                  </div>
                </a>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default SearchBlog;
