import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetch_global_news } from '../../Redux/slice/gloabalnews'
import { Link } from 'react-router-dom'
import getRelativeTime from '../../Utils/CommonFunc'

const Global = () => {

    const dispatch = useDispatch()
    const globalnewsState = useSelector((state) => state.globalnews)
    const [globaldata, setglobaldata] = useState()

    useEffect(() => {

        if (globalnewsState.data.length === 0) {
            dispatch(fetch_global_news())
        }
        else {
            setglobaldata(globalnewsState.data)
        }
    }, [globalnewsState])

    return (
        <>
            <div className='md:block '>
                <span className=' flex w-full items-center p-1 justify-between   my-10 '>
                    <h1 className='lg:text-4xl  font-poppins md:text-3xl sm:text-xl text-lg font-semibold'>Must Read</h1>
                    <Link to='/globalnews' className='flex gap-1 hover:scale-110 cursor-pointer'>See all <img loading='lazy' width="30" height="30" src="https://img.icons8.com/laces/30/arrow.png" alt="arrow" /></Link>
                </span>
                <div className='w-full lg:min-h-[500px] md:min-h-[400px] justify-between  flex md:flex-col gap-y-10 md:flex-row2 flex-row min-h-[500px]   '>
                    {globaldata &&

                        <>
                            <div className='flex lg:flex-row flex-col' >
                                <div className='lg:w-[58%] md:w-full  h-[500px]'>
                                    <div className='w-full h-[55%] '>
                                        <img className='w-full h-full object-cover rounded-xl' src={globaldata[0].imageUrl} alt={globaldata[0].title} />
                                    </div>
                                    <div className='w-full h-[45%] flex flex-col gap-3 py-1 '>
                                        <span className='flex gap-2 mt-1 items-center  md:text-sm text-[#ADADAD]'><h1 className='font-medium text-slate-700 lg:text-base' >{globaldata[0].author}</h1>&#x2022;&nbsp;{getRelativeTime(globaldata[0].date, globaldata[0].time)}</span>
                                        <h1 className='text-2xl font-bold'>{globaldata[0].title}</h1>
                                        <p className='text-base line-clamp-3  font-poppins  whitespace-pre-line  text-ellipsis overflow-hidden '>{globaldata[0].content}</p>
                                        <p>World</p>
                                    </div>
                                </div>
                                <div className='lg:w-[41%] md:w-full p-1 flex  flex-col md:gap-2 lg:flex-col justify-between min-h-[100px] lg:h-[500px]'>

                                    {globaldata.map((data, index) => {
                                        if (index > 0 && index < 4) {
                                            return (
                                                <div key={data.title} className='lg:w-full lg:h-[32%] md:w-full md:h-[200px]  '>
                                                    <div className='flex md:flex-row flex-col w-full lg:gap-0 gap-2 lg:p-0 p-2 justify-between h-full'>
                                                        <img className='lg:w-[44%] md:w-[55%] h-full object-cover rounded-xl' src={data.imageUrl} alt={globaldata[1].title} />
                                                        <div className='md:w-[55%] h-full flex flex-col gap-1 px-2 p-1 '>
                                                            <span className='flex gap-2 mt-1 items-center  md:text-sm text-[#ADADAD]'><h1 className='font-medium text-slate-700 lg:text-base' >{data.author}</h1>&#x2022;&nbsp;{getRelativeTime(data.date, data.time)}</span>
                                                            <h1 className='lg:text-lg font-bold'>{data.title}</h1>
                                                            <span className=' lg:hidden  line-clamp-2 text-sm whitespace-pre-line text-ellipsis overflow-hidden'>{data.content}</span>

                                                            <p>World</p>
                                                        </div>
                                                    </div>
                                                </div>)
                                        }
                                    })}
                                    {/* <div className='lg:w-full lg:h-[32%]   '>
                                <div className='flex w-full justify-between h-full'>
                                    <img className='lg:w-[44%] h-full object-cover rounded-xl' src={globaldata[1].imageUrl} alt={globaldata[1].title} />
                                    <div className='w-[55%] h-full flex flex-col gap-1 px-2 p-1 '>
                                        <span className='flex gap-2 mt-1 items-center  md:text-sm text-[#ADADAD]'><h1 className='font-medium text-slate-700 lg:text-base' >{globaldata[0].author}</h1>&#x2022;&nbsp;{getRelativeTime(globaldata[0].date, globaldata[0].time)}</span>
                                        <h1 className='text-xl font-bold'>{globaldata[0].title}</h1>
                                        <p>World</p>
                                    </div>
                                </div>
                            </div> */}

                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default Global
