import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetch_sports_news } from '../../Redux/slice/sportsnews'
import getRelativeTime from '../../Utils/CommonFunc'
import { Link } from 'react-router-dom'


const Sports = () => {
    const dispatch = useDispatch()
    const sportsnewState = useSelector(state => state.sportnews)
    const [sportsnew, setsportsnew] = useState()
    console.log(sportsnewState)
    useEffect(() => {
        if (sportsnewState.data.length > 0) {
            setsportsnew(sportsnewState.data)
        } else {
            dispatch(fetch_sports_news())
            console.log("calling dispatch")
        }

    }, [sportsnewState])

    return (
        <>
            <div className='w-full pl-[1%] h-full flex flex-col'>
                <span className=' flex w-full items-center p-1 justify-between '>
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold'>Sports</h1>
                    <Link to="/sports" className='flex gap-1 hover:scale-110 cursor-pointer'><img loading='lazy' width="30" height="30" src="https://img.icons8.com/laces/30/arrow.png" alt="arrow" /></Link></span>

                <div className='  flex md:flex-row flex-col h-fit justify-between md:h-[600px] my-10 w-full'>
                    {sportsnew &&
                        sportsnew.map((item, index) => {
                            if (index < 2) {
                                return (
                                    <a href={item.readMoreUrl} key={item.title} className='flex flex-col gap-2 md:w-[48%] lg:w-[48%] h-full   '>
                                        <div className='aspect-square rounded-2xl md:h-[44%] h-[310px] '>
                                            <img loading='lazy' src={item.imageUrl} className='w-full h-full object-cover rounded-2xl'></img>
                                        </div>
                                        <div className='flex flex-col gap-3 px-1 py-2 h-[56%]'>
                                            <span className='flex gap-2'><h1 >Inshort</h1>&#x2022;&nbsp;3 hours ago</span>
                                            <span className='lg:text-3xl md:text-2xl text-xl font-semibold text-balance font-poppins line-clamp-3 whitespace-pre-line text-ellipsis overflow-hidden '>{item.title}</span>
                                            <span className='line-clamp-5 whitespace-pre-line text-ellipsis overflow-hidden'>{item.content}</span>
                                            <span className='font-semibold line-clamp-1 whitespace-pre-line text-ellipsis overflow-hidden '>-{item.author}</span>
                                        </div>
                                    </a>
                                )
                            }
                        })
                    }
                    {/* <div className='flex flex-col gap-2 md:w-[48%] lg:w-[48%] h-full   '>
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
                    <div className='flex flex-col md:w-[48%] lg:w-[48%] h-full  '>
                        <div className='aspect-square rounded-2xl bg-black h-[44%]'>
                            <img src='https://dims.apnews.com/dims4/default/9709752/2147483647/strip/true/crop/7621x4287+0+397/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb7%2F17%2Ff380f544e3895f0ae77efbed3558%2F0d111225e8a94272b794f6f741580042' className='w-full h-full object-cover rounded-2xl'></img>
                        </div>
                        <div className='flex flex-col gap-3 px-1 py-2 h-[56%]'>
                            <span className='flex gap-2'><h1 >Associated Press</h1>&#x2022;&nbsp;6 hours ago</span>
                            <span className='text-2xl font-semibold text-balance line-clamp-3 whitespace-pre-line text-ellipsis overflow-hidden'>India election results 2024: Modi claims victory but falls short of full majority</span>
                            <span className='line-clamp-5 whitespace-pre-line text-ellipsis overflow-hidden'>Prime Minister Narendra Modi’s National Democratic Alliance coalition has won a majority in parliament, according to official results from India’s Election Commission. Modi had already declared victory for his alliance earlier Tuesday, claiming a mandate to p…</span>
                            <span className='font-semibold line-clamp-1 whitespace-pre-line text-ellipsis overflow-hidden'>-KRUTIKA PATHI, SHEIKH SAALIQ, DAVID RISING</span>
                        </div>
                    </div> */}

                </div>

            </div>
        </>
    )
}

export default Sports
