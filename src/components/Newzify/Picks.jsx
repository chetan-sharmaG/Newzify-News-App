import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetch_picked_news } from '../../Redux/slice/pickedNews'
import getRelativeTime from '../../Utils/CommonFunc'

const Picks = () => {

    const dispatch = useDispatch()
    const pickedNewsState = useSelector(state => state.pickednews)
    const [picknews, setpicknews] = useState([])

    useEffect(() => {
        if (pickedNewsState.data.length > 0) {
            setpicknews(pickedNewsState.data)
        } else {
            dispatch(fetch_picked_news())
        }

    }, [pickedNewsState])
    const fetchData = async () => {
        let a = await fetch('https://inshorts-news-jr964xyhw-sumanjay.vercel.app/news?category=national')
        let res = await a.json()
        if (res) {

            // console.log(res.data)
            // var data = res.data.slice(0, 5).map((item, index) => {
            //     setpicknews([...picknews, item])
            // })
            // // setpicknews(data)
            setpicknews(res.data)

        }
    }


    return (
        <>
            <span className=' flex w-full items-center p-1 justify-between  mt-20 mb-10 '>
                <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl  font-semibold'>Newzify's Pick</h1>
                <Link to='/newzifyPicks' className='flex gap-1 hover:scale-110 cursor-pointer'>See all <img loading='lazy' width="30" height="30" src="https://img.icons8.com/laces/30/arrow.png" alt="arrow" /></Link ></span>
            {picknews.length > 0 &&
                <>
                    <a href={picknews[0].readMoreUrl} className=' w-full flex h-[550px] items-end relative'>
                        <img loading='lazy' src={picknews[0].imageUrl}
                            className='w-full h-full  rounded-2xl brightness-[0.5] absolute top-0 z-[-1]'></img>
                        <div className='flex flex-col w-full gap-3 px-1 py-2 m-3  text-white'>
                            <span className='flex gap-2'><h1 >InShort</h1>&#x2022;&nbsp;{getRelativeTime(picknews[0].date, picknews[0].time)}</span>
                            <span className='text-3xl font-semibold text-balance line-clamp-3 whitespace-pre-line text-ellipsis overflow-hidden font-poppins'>{picknews[0].title}</span>
                            <span className='line-clamp-1 text-lg whitespace-pre-line text-ellipsis overflow-hidden'>{picknews[0].content}</span>
                            <span className='font-semibold line-clamp-1 whitespace-pre-line text-ellipsis overflow-hidden'>-{picknews[0].author}</span>
                        </div>
                    </a>
                    <div className='flex  lg:flex-row flex-col mt-7 lg:divide-y-0 divide-y-2 lg:justify-between w-full md:min-h-[350px] lg:h-[350px] h-fit'>

                        {picknews.map((item, index) => {
                            if (index < 5 && index != 0) {
                                return (
                                    <a href={item.readMoreUrl} key={item.title} className='flex flex-col lg:w-[23%] w-full md:py-5 lg:py-0 py-3   h-fit'>
                                        <img loading='lazy' className='md:h-[350px] md:mx-auto h-[310px] w-full aspect-square rounded-2xl object-cover' src={item.imageUrl}></img>
                                        <div className='flex flex-col w-full gap-1 px-0 py-2 m-1  h-fit '>
                                            <span className='flex gap-2'><h1 >InShort</h1>&#x2022;&nbsp;{getRelativeTime(item.date, item.time)}</span>
                                            <span className='text-xl font-semibold text-balance line-clamp-3 whitespace-pre-line text-ellipsis overflow-hidden font-poppins'>{item.title}</span>
                                            <span className='font-semibold line-clamp-1 whitespace-pre-line text-ellipsis overflow-hidden'>-{item.author}</span>
                                        </div>
                                    </a>
                                )
                            }
                        })}
                        {/* <div className='flex flex-col w-[23%]  h-fit'>
                            <img className='h-[55%] w-full aspect-square rounded-2xl object-cover' src='https://nis-gs.pix.in/inshorts/images/v1/variants/webp/m/2024/06_jun/5_wed/img_1717604904288_634.webp?'></img>
                            <div className='flex flex-col w-full gap-1 px-0 py-2 m-1  h-fit '>
                                <span className='flex gap-2'><h1 >InShort</h1>&#x2022;&nbsp;6 hours ago</span>
                                <span className='text-xl font-semibold text-balance line-clamp-3 whitespace-pre-line text-ellipsis overflow-hidden'>Bear captured in Chamaraj Nagar district relocated to Bandipur</span>
                                <span className='font-semibold line-clamp-1 whitespace-pre-line text-ellipsis overflow-hidden'>-System User</span>
                            </div>
                        </div>
                        <div className='flex flex-col w-[23%]  h-fit'>
                            <img className='h-[55%] w-full aspect-square rounded-2xl object-cover' src='https://nis-gs.pix.in/inshorts/images/v1/variants/jpg/m/2024/06_jun/5_wed/img_1717603551397_956.jpg?'></img>
                            <div className='flex flex-col w-full gap-1 px-0 py-2 m-1  h-fit '>
                                <span className='flex gap-2'><h1 >InShort</h1>&#x2022;&nbsp;6 hours ago</span>
                                <span className='text-xl font-semibold text-balance line-clamp-3 whitespace-pre-line text-ellipsis overflow-hidden'>Israel warns of 'very intense operation' along Lebanon border</span>
                                <span className='font-semibold line-clamp-1 whitespace-pre-line text-ellipsis overflow-hidden'>-Disha Jana</span>
                            </div>
                        </div>
                        <div className='flex flex-col w-[23%]  h-fit'>
                            <img className='h-[55%] w-full aspect-square rounded-2xl object-cover' src='https://nis-gs.pix.in/inshorts/images/v1/variants/jpg/m/2024/06_jun/5_wed/img_1717603490428_542.jpg?'></img>
                            <div className='flex flex-col w-full gap-1 px-0 py-2 m-1  h-fit '>
                                <span className='flex gap-2'><h1 >InShort</h1>&#x2022;&nbsp;6 hours ago</span>
                                <span className='text-xl font-semibold text-balance line-clamp-3 whitespace-pre-line text-ellipsis overflow-hidden'>What does losing security deposit in election mean?</span>
                                <span className='font-semibold line-clamp-1 whitespace-pre-line text-ellipsis overflow-hidden'>-Deepika Bhatt</span>
                            </div>
                        </div>
                        <div className='flex flex-col w-[23%]  h-fit'>
                            <img className='h-[55%] w-full aspect-square rounded-2xl object-cover' src='https://nis-gs.pix.in/inshorts/images/v1/variants/jpg/m/2024/06_jun/5_wed/img_1717604283296_589.jpg?'></img>
                            <div className='flex flex-col w-full gap-1 px-0 py-2 m-1  h-fit '>
                                <span className='flex gap-2'><h1 >InShort</h1>&#x2022;&nbsp;6 hours ago</span>
                                <span className='text-xl font-semibold text-balance line-clamp-3 whitespace-pre-line text-ellipsis overflow-hidden'>Axar Patel pulls off caught and bowled to dismiss Barry vs Ireland</span>
                                <span className='font-semibold line-clamp-1 whitespace-pre-line text-ellipsis overflow-hidden'>-System User</span>
                            </div>
                        </div> */}

                    </div>
                </>
            }
        </>
    )
}

export default Picks
