import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import getRelativeTime from '../../Utils/CommonFunc'
import { fetch_latest_news } from '../../Redux/slice/latestnews'

const LatestNews = () => {

    const dispatch = useDispatch()
    const [latestNews, setLatestNews] = useState(null)

    const latestNewsState = useSelector((state) => state.latestnews)

    useEffect(() => {
        if (latestNewsState.data.length > 0) {
            setLatestNews(latestNewsState.data)
        } else {
            dispatch(fetch_latest_news())
            console.log("calling dispatch")
        }

    }, [latestNewsState])


 

    return (
        <>
            <span className=' flex w-full items-center p-1 justify-between   my-14 '>
                <h1 className='lg:text-3xl md:text-3xl sm:text-xl text-lg font-semibold'>Latest News</h1>
                <Link to='/latest' className='flex gap-1 hover:scale-110 cursor-pointer'>See all <img width="30" height="30" src="https://img.icons8.com/laces/30/arrow.png" alt="arrow" /></Link></span>
            <div className='w-full lg:min-h-[600px] sm:h-fit sm:flex-wrap md:h-[600px] flex lg:flex-wrap md:flex-nowrap  md:gap-x-3 md:gap-y-3 h-fit flex-wrap lg:justify-between md:overflow-x-clip '>
                {latestNews &&
                    latestNews.map((item, index) => {
                        if (index < 4) {

                            return (
                                <a href={item.readMoreUrl} target='_blank' key={item.title} className='flex  flex-col gap-2 md:w-[32%] lg:w-[24%] md:h-full w-full md:my-0 my-5 sm:my-5   '>
                                    <div className='aspect-square sm:aspect-video rounded-2xl lg:h-[44%] md:h-[44%] sm:h-[350px] h-[350px] w-full   '>
                                        <img loading='lazy' src={item.imageUrl} className='w-full h-full md:object-cover sm:object-contain rounded-2xl'></img>
                                    </div>
                                    <div className='flex flex-col gap-3 px-1 py-2 h-[56%] sm:h-fit '>
                                        <span className='flex gap-2'><h1 >Inshorts</h1>&#x2022;&nbsp;{getRelativeTime(item.date, item.time)}</span>
                                        <span className='text-2xl font-semibold text-balance  line-clamp-3 whitespace-pre-line text-ellipsis overflow-hidden font-poppins '>{item.title}</span>
                                        <span className='line-clamp-5 whitespace-pre-line text-ellipsis overflow-hidden'>{item.content}</span>
                                        <span className='font-semibold line-clamp-1 whitespace-pre-line text-ellipsis overflow-hidden '>-{item.author}</span>
                                    </div>

                                </a>
                            )
                        }

                    })}
                {/* <div className='flex flex-col gap-2 md:w-[30%] lg:w-[24%] h-full   '>
                    <div className='aspect-square rounded-2xl h-[44%] '>
                        <img src='https://www.hindustantimes.com/ht-img/img/2024/06/05/1600x900/Mild_Persistent_1717561262722_1717561288921.jpg' className='w-full h-full object-conver rounded-2xl'></img>
                    </div>
                    <div className='flex flex-col gap-3 px-1 py-2 h-[56%]'>
                        <span className='flex gap-2'><h1 >Livemint</h1>&#x2022;&nbsp;3 hours ago</span>
                        <span className='text-2xl font-semibold text-balance line-clamp-3 whitespace-pre-line text-ellipsis overflow-hidden '>Exercise Induced Asthma and Brittle Asthma: Differences, coping with symptoms, prevention tips</span>
                        <span className='line-clamp-5 whitespace-pre-line text-ellipsis overflow-hidden'>Tips on recogising the symptoms of Exercise Induced Asthma and Brittle Asthma along with effective management strategies and preventive measures to take | Health</span>
                        <span className='font-semibold line-clamp-1 whitespace-pre-line text-ellipsis overflow-hidden '>-Zarafshan Shira</span>
                    </div>

                </div>
                <div className='flex flex-col md:w-[30%] lg:w-[24%] h-full  '>
                    <div className='aspect-square rounded-2xl bg-black h-[44%]'>
                        <img src='https://dims.apnews.com/dims4/default/9709752/2147483647/strip/true/crop/7621x4287+0+397/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb7%2F17%2Ff380f544e3895f0ae77efbed3558%2F0d111225e8a94272b794f6f741580042' className='w-full h-full object-cover rounded-2xl'></img>
                    </div>
                    <div className='flex flex-col gap-3 px-1 py-2 h-[56%]'>
                        <span className='flex gap-2'><h1 >Associated Press</h1>&#x2022;&nbsp;6 hours ago</span>
                        <span className='text-2xl font-semibold text-balance line-clamp-3 whitespace-pre-line text-ellipsis overflow-hidden'>India election results 2024: Modi claims victory but falls short of full majority</span>
                        <span className='line-clamp-5 whitespace-pre-line text-ellipsis overflow-hidden'>Prime Minister Narendra Modi’s National Democratic Alliance coalition has won a majority in parliament, according to official results from India’s Election Commission. Modi had already declared victory for his alliance earlier Tuesday, claiming a mandate to p…</span>
                        <span className='font-semibold line-clamp-1 whitespace-pre-line text-ellipsis overflow-hidden'>-KRUTIKA PATHI, SHEIKH SAALIQ, DAVID RISING</span>
                    </div>
                </div>
                <div className='flex flex-col md:w-[30%] lg:w-[24%] h-full  '>
                    <div className='aspect-square rounded-2xl bg-black h-[44%]'>
                        <img src='https://images.moneycontrol.com/static-mcnews/2024/03/Sensex_market_Nifty-1.jpg' className='w-full h-full object-cover rounded-2xl'></img>
                    </div>
                    <div className='flex flex-col gap-3 px-1 py-2 h-[56%]'>
                        <span className='flex gap-2'><h1 >Moneycontrol</h1>&#x2022;&nbsp;6 hours ago</span>
                        <span className='text-2xl font-semibold text-balance line-clamp-3 whitespace-pre-line text-ellipsis overflow-hidden'>Brokerage Radar: Brokerages analyse India's election results</span>
                        <span className='line-clamp-5 whitespace-pre-line text-ellipsis overflow-hidden'>Explore the latest brokerage calls and analyst commentary on the impact of India's general election results on the equity market.</span>
                        <span className='font-semibold line-clamp-1 whitespace-pre-line text-ellipsis overflow-hidden'>-Moneycontrol News</span>
                    </div>
                </div>
                <div className='flex flex-col md:w-[30%] lg:w-[24%] h-full '>
                    <div className='aspect-square rounded-2xl bg-black h-[44%]'>
                        <img src='https://www.livemint.com/lm-img/img/2024/06/05/1600x900/Stock_market_today_Stocks_to_buy_today_Buy_or_sell_1717553865753_1717553866009.JPG' className='w-full h-full object-cover rounded-2xl'></img>
                    </div>
                    <a href='/' className='flex flex-col gap-3 px-1 py-2 h-[56%]'>

                        <span className='flex gap-2'><h1 >Livemint</h1>&#x2022;&nbsp;6 hours ago</span>
                        <span className='text-2xl font-semibold text-balance line-clamp-3 whitespace-pre-line text-ellipsis overflow-hidden'>Stock market today: Trade setup for Nifty 50 to India VIX, five stocks to buy or sell on Wednesday — June 5 | Stock Market News</span>
                        <span className='line-clamp-5 whitespace-pre-line text-ellipsis overflow-hidden'>Stocks to buy today: Experts have recommended buying these five buy or sell stocks — Heritage Foods, Dabur, Marico, McDowell-N, and Tata Consumer</span>
                        <span className='font-semibold line-clamp-1 whitespace-pre-line text-ellipsis overflow-hidden'>-Asit Manohar</span>
                    </a>
                </div> */}


            </div>
        </>
    )
}

export default LatestNews
