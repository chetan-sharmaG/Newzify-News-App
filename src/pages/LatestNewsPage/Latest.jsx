import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { fetch_latest_news } from '../../Redux/slice/latestnews'
import getRelativeTime from '../../Utils/CommonFunc'

/**
 * Latest component displays the latest news from the API
 * It fetches the data from the API if the state is empty
 * It displays the latest news in a grid layout
 */
const Latest = () => {

  const dispatch = useDispatch(); // Dispatch function for Redux
  const [latestNews, setLatestNews] = useState(null) // State to store the latest news
  const latestNewsState = useSelector((state) => state.latestnews); // State from Redux store
  const [error,setError]= useState(false)

  // Fetches the data from the API if the state is empty
  useEffect(() => {
    if (!latestNewsState.isError ) {
      setLatestNews(latestNewsState.data)
    }
    else if(latestNewsState.isError){
      setError(true)
    }
    else {
      dispatch(fetch_latest_news()) // Dispatches the fetchnews action
      console.log("calling dispatch")
    }
  }, [latestNewsState])


  

  return (
    <>
      <div className='lg:w-[85vw] w-[90vw] mx-auto'>

        <Navbar />
        <h1 className='font-bold text-3xl my-10'>Latest News</h1>
        <div className='w-full  flex flex-wrap  md:overflow-x-auto md:gap-x-3 md:gap-y-3'>
        {!latestNews &&
                        <div className="card flex  my-5 lg:flex-row flex-col h-fit md:h-fit  md:flex-col lg:even:flex-row-reverse lg:max-h-[400px] gap-2 w-full">
                            <div className="card_load image aspect-video  rounded-2xl w-full md:w-full h-[300px] lg:w-[40%] md:h-[300px] lg:h-full"></div>
                            <div className='flex flex-col gap-3 w-full md:w-full lg:w-[60%] md:px-0 px-0 lg:px-10 py-2 lg:h-full h-full'>
                                <div className="card_load_extreme_title "></div>
                                <div className="card_load_extreme_descripion"></div>
                            </div>
                        </div>}
          {/* Maps over the latest news and displays it in a grid layout */}
          {error && <h1>Something went wrong</h1>}
          {latestNews &&
            latestNews.map((item, index) => {
              return (
                <a href={item.readMoreUrl} target='_blank' key={item.title} className='flex my-5 lg:flex-row flex-col h-fit md:h-fit items-center  md:flex-col lg:even:flex-row-reverse lg:max-h-[400px] gap-2 w-full     '>
                  <div className='aspect-video  rounded-2xl w-full md:w-full h-[300px] lg:w-[40%] md:h-[300px] lg:h-full  '>
                    <img loading='lazy' src={item.imageUrl} className='w-full h-full object-conver '></img>
                  </div>
                  <div className='flex flex-col gap-3 w-full md:w-full lg:w-[60%] md:px-0 px-0 lg:px-10 py-2 h-full'>
                    <span className='flex gap-2'><h1 >Inshorts</h1>&#x2022;&nbsp;{getRelativeTime(item.date, item.time)}</span>
                    <span className='lg:text-2xl md:text-xl text-lg font-semibold text-balance line-clamp-3 whitespace-pre-line text-ellipsis overflow-hidden font-poppins '>{item.title}</span>
                    <span className='line-clamp-10 whitespace-pre-line text-ellipsis overflow-hidden md:text-base text-sm'>{item.content}</span>
                    <span className='font-semibold line-clamp-1 whitespace-pre-line text-ellipsis overflow-hidden '>-{item.author}</span>
                  </div>

                </a>
              )

            })}

        </div>
        <Footer />
      </div>
    </>
  )
}

export default Latest

