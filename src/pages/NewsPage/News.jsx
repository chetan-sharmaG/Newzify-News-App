import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import getRelativeTime from '../../Utils/CommonFunc'
const News = () => {


    const [news,setnews] = useState([])
    const {category} = useParams()

  useEffect(() => {
   
    fetchData()

  },[])
  async function fetchData() {
    let  a = await fetch(`https://inshorts-news-jr964xyhw-sumanjay.vercel.app/news?category=${category}`)
    let res = await a.json()
    setnews(res.data)
  }

  return (
    <>
    <Navbar />
    <div className='lg:w-[85vw] w-[90vw] mx-auto'>
            
      <h1 className=' my-6 flex justify-between'><h2 className='font-bold text-3xl'>Sports News</h2><span className='flex gap-2'>
        {/* <h1 className='font-semibold'>Cricket</h1>
        <h1 className='font-semibold'>Football</h1> */}
        </span></h1>
      <div className='w-full  flex flex-wrap  md:overflow-x-auto md:gap-x-3 md:gap-y-3 '>
        {/* Maps over the latest news and displays it in a grid layout */}
        {!news &&
          <div className="card flex  my-5 lg:flex-row flex-col h-fit md:h-fit  md:flex-col lg:even:flex-row-reverse lg:max-h-[400px] gap-2 w-full">
            <div className="card_load image aspect-video  rounded-2xl w-full md:w-full h-[300px] lg:w-[40%] md:h-[300px] lg:h-full"></div>
            <div className='flex flex-col gap-3 w-full md:w-full lg:w-[60%] md:px-0 px-0 lg:px-10 py-2 lg:h-full h-full'>
              <div className="card_load_extreme_title "></div>
              <div className="card_load_extreme_descripion"></div>
            </div>
          </div>}
        {news &&
          news.map((item, index) => {
            return (
              <a href={item.readMoreUrl} target='_blank' key={item.title} className='flex my-5 lg:flex-row flex-col h-fit md:h-fit items-center  md:flex-col lg:even:flex-row-reverse lg:max-h-[400px] gap-2 w-full   '>
                <div className='aspect-video  rounded-2xl overflow-hidden w-full md:w-full h-[300px] lg:w-[40%] md:h-[300px] lg:h-full '>
                  <img loading='lazy' src={item.imageUrl} className='w-full  object-center h-full object-cover '></img>
                </div>
                <div className='flex flex-col gap-3 w-full md:w-full lg:w-[60%] md:px-0 px-0 lg:px-10 py-2 h-full'>
                  <span className='flex gap-2  '><h1 className='' >Inshorts</h1>&#x2022;&nbsp;{getRelativeTime(item.date, item.time)}</span>
                  <span className='lg:text-2xl md:text-xl text-lg font-semibold text-balance line-clamp-3 whitespace-pre-line text-ellipsis overflow-hidden font-poppins '>{item.title}</span>
                  <span className='line-clamp-10 whitespace-pre-line text-ellipsis overflow-hidden md:text-base text-sm'>{item.content}</span>
                  <span className='font-semibold line-clamp-1 whitespace-pre-line text-ellipsis overflow-hidden '>-{item.author}</span>
                </div>

              </a>
            )

          })}

      </div>
      {/* <Subscribe/> */}
      <Footer />
    </div>
   </>
  )
}

export default News
