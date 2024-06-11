import React, { useEffect, useState } from 'react'
import { fetch_business_news } from '../../Redux/slice/businessnews'
import { useDispatch,useSelector } from 'react-redux'
import getRelativeTime from '../../Utils/CommonFunc'
import { Link } from 'react-router-dom'

const Business = () => {

    const dispatch = useDispatch()
    const businessNewsState = useSelector(state => state.businessnews)
    const [businessnew, setbusinessnew] = useState([])

    useEffect(() => {
        if(businessNewsState.data.length>0){
            setbusinessnew(businessNewsState.data)
        }else{
            dispatch(fetch_business_news())
        }

    }, [businessNewsState])
   
    return (
        <>

            <div className='w-full pr-3 h-full flex flex-col '>
                <span className=' flex w-full items-center p-1 justify-between '>
                    <h1 className='text-5xl font-semibold'>Business</h1>
                    <Link to={'/business'} className='flex gap-1 hover:scale-110 cursor-pointer'> <img width="30" height="30" src="https://img.icons8.com/laces/30/arrow.png" alt="arrow" /></Link ></span>

                <div className='  flex md:flex-row flex-col justify-between md:h-[600px] my-10 w-full '>
                    {!businessnew && <h1>Loading</h1>}
                    {businessnew &&
                        businessnew.map((item, index) => {
                            if (index < 2) {
                                return (<a href={item.readMoreUrl} key={item.title} className='flex flex-col gap-2 md:w-[48%] w-full lg:w-[48%] h-full   '>
                                    <div className='aspect-square rounded-2xl md:h-[44%] h-[310px] '>
                                        <img loading='lazy'  className='w-full h-full  object-cover rounded-xl ' src={item.imageUrl}></img>
                                    </div>
                                    <div className='flex flex-col md:gap-3 gap-1 px-1 py-2 h-[56%]'>
                                        <span className='flex gap-2'><h1 >Inshort</h1>&#x2022;&nbsp;{getRelativeTime(item.date, item.time)}</span>
                                        <span className='lg:text-3xl md:text-2xl text-xl font-semibold font-poppins text-balance line-clamp-3 whitespace-pre-line text-ellipsis overflow-hidden '>{item.title}</span>
                                        <span className='line-clamp-5 whitespace-pre-line  text-ellipsis overflow-hidden'>{item.content}</span>
                                        <span className='font-semibold line-clamp-1 whitespace-pre-line text-ellipsis overflow-hidden '>-{item.author}</span>
                                    </div>

                                </a>)
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

export default Business
