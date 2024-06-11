import React, { useEffect, useState } from 'react'
import Marquee from "react-fast-marquee";


const Header = () => {

    const [news, setnews] = useState()
    const [randomnews, setrandomnews] = useState()

    function getRandom(news) {
        const allobject = []
        for (const category in news) {
            if (news.hasOwnProperty(category)) {
                allobject.push(news[category])
            }
        }
        const random = Math.floor(Math.random() * allobject.length)
        setrandomnews(allobject[random])
        console.log(allobject[random])

    }
    async function fetchData() {

        let a = await fetch('https://ok.surf/api/v1/cors/news-feed')
        let res = await a.json()
        console.log(res)
        // setnews(res)
        const news = res
        const allobject = []
        for (const category in news) {
            if (news.hasOwnProperty(category)) {
                allobject.push(news[category])
            }
        }
        const random = Math.floor(Math.random() * allobject.length)
        setrandomnews(allobject[random])

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className='w-full bg-[#EEEAEA] my-8 rounded-lg mx-auto h-fit p-2 gap-1 flex flex-col items-center justify-center'>
                <Marquee pauseOnHover>



                    <h1 className='md:text-xl px-5 font-bold flex flex-wrap items-center text-red-700'>News Update
                    {randomnews &&
                            randomnews.map((news, index) => {
                                return (

                            <a key={news.link} href={news.link} target='_blank' className='line-clamp-1 px-6 whitespace-pre-line text-slate-700 font-medium text-base items-center text-ellipsis flex overflow-hidden cursor-pointer'> &nbsp;
                                <img width={25} className='rounded-full object-cover' height={25} src={news.source_icon}></img>&nbsp;{news.source}:-&nbsp;{news.title}</a>
                            )
                            })
                            }
                        </h1>


                </Marquee>


            </div>
        </>
    )
}

export default Header
