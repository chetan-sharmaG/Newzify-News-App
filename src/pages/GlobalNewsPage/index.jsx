import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetch_global_news } from '../../Redux/slice/gloabalnews'
import { getFormattedDate } from '../../Utils/CommonFunc'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
const Global = () => {

    const dispatch = useDispatch()
    const globalnewsState = useSelector((state) => state.globalnews)
    const isLoading = globalnewsState.isloading
    const [globaldata, setglobaldata] = useState()

    useEffect(() => {
        if(!isLoading){
            
            if (globalnewsState.data?.articles?.length === 0) {
                dispatch(fetch_global_news())
            } else {
                setglobaldata(globalnewsState.data.articles)
            }
        }
    }, [globalnewsState])

    const removeQuotes = (str) => str.replace(/^['"]|['"]$/g, '');
    return (
        <>
                <Navbar />
            <div className='lg:w-[85vw] w-[90vw] mx-auto'>

                <h1 className='font-bold text-3xl my-6'>Global News</h1>
                <div className='w-full  flex flex-wrap  md:overflow-x-auto md:gap-x-3 md:gap-y-3 '>
                    {/* Maps over the latest news and displays it in a grid layout */}
                    {!globaldata &&
                        <div className="card flex  my-5 lg:flex-row flex-col h-fit md:h-fit  md:flex-col lg:even:flex-row-reverse lg:max-h-[400px] gap-2 w-full">
                            <div className="card_load image aspect-video  rounded-2xl w-full md:w-full h-[300px] lg:w-[40%] md:h-[300px] lg:h-full"></div>
                            <div className='flex flex-col gap-3 w-full md:w-full lg:w-[60%] md:px-0 px-0 lg:px-10 py-2 lg:h-full h-full'>
                                <div className="card_load_extreme_title "></div>
                                <div className="card_load_extreme_descripion"></div>
                            </div>
                        </div>}
                    {globaldata &&
                        globaldata.map((item, index) => {
                            return (
                                <a href={item.link} target='_blank' key={removeQuotes(item.title.toString())} className='flex my-5 lg:flex-row flex-col h-fit md:h-fit  md:flex-col lg:even:flex-row-reverse lg:max-h-[400px] gap-2 w-full   '>
                                    <div className='aspect-video  rounded-2xl w-full md:w-full h-[300px] lg:w-[40%] md:h-[300px] lg:h-full '>
                                        <img loading='lazy' src={item.enclosure[0].$.url} className='w-full  h-full object-contain '></img>
                                    </div>
                                    <div className='flex flex-col gap-3 w-full md:w-full lg:w-[60%] md:px-0 px-0 lg:px-10 py-2 h-full'>
                                        <span className='flex gap-2  '><h1 className='' >Inshorts</h1>&#x2022;&nbsp;{getFormattedDate(item.pubDate)}</span>
                                        <span className='lg:text-2xl md:text-xl text-lg font-semibold text-balance line-clamp-3 whitespace-pre-line text-ellipsis overflow-hidden font-poppins '>{item.title}</span>
                                        <span className='line-clamp-10 whitespace-pre-line text-ellipsis overflow-hidden md:text-base text-sm'>{item.content}</span>
                                        <span className='font-semibold line-clamp-1 whitespace-pre-line text-ellipsis overflow-hidden '>-{item.authorName}</span>
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

export default Global
