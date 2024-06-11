import React, { useEffect, useState } from 'react'
import getRelativeTime from '../../Utils/CommonFunc'
import { useSelector, useDispatch } from 'react-redux'
import { fetch_miscelleneous_news } from '../../Redux/slice/miscelleneousnews'
const TopHeadline = () => {

    // const [headlines, setHeadlines] = useState([
    //     {
    //         "author": "Anmol Sharma",
    //         "content": "Pakistan dismissed India for 119 runs in 19 overs in their T20 World Cup 2024 match in New York. It's the first time that India have lost all their 10 wickets in a T20I against Pakistan. Further, it's the lowest first-innings total for India against Pakistan in T20Is. Pakistan pacers Naseem Shah and Haris Rauf took three wickets each.",
    //         "date": "Sunday, 09 June, 2024",
    //         "id": "78f1d49b95a2450f8760012df65a9a0e",
    //         "imageUrl": "https://nis-gs.pix.in/inshorts/images/v1/variants/jpg/m/2024/06_jun/9_sun/img_1717955913402_330.jpg?",
    //         "readMoreUrl": "https://www.espncricinfo.com/series/icc-men-s-t20-world-cup-2024-1411166/india-vs-pakistan-19th-match-group-a-1415719/live-cricket-score?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
    //         "time": "11:33 pm",
    //         "title": "India lose all 10 wickets against Pakistan in a T20I for the first time",
    //         "url": "https://shrts.in/3KuaX"
    //     },
    //     {
    //         "author": "Nakul Ahuja",
    //         "content": "Union Minister Amit Shah has reacted to the terror attack in J&K that left at least 10 people dead and 33 others injured. \"The culprits of this dastardly attack will not be spared and will face the wrath of the law. May the almighty give the loved ones of the deceased the strength to bear this pain,\" he said. ",
    //         "date": "Sunday, 09 June, 2024",
    //         "id": "da94c14e13774232a8c87d0fd17a9490",
    //         "imageUrl": "https://nis-gs.pix.in/inshorts/images/v1/variants/jpg/m/2024/06_jun/9_sun/img_1717954763567_986.jpg?",
    //         "readMoreUrl": "https://x.com/amitshah/status/1799846208380526944?s=61&t=pXTmgnZkIDuwpv5qtjXwJA&utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
    //         "time": "11:21 pm",
    //         "title": "Culprits behind attack won't be spared: Shah on J&K terror attack",
    //         "url": "https://shrts.in/hXqTt"
    //     },
    //     {
    //         "author": "Arnab Mukherji ",
    //         "content": "Former world number one tennis player John McEnroe termed Carlos Alcaraz as his favourite player. \"He's better than Roger Federer, Rafael Nadal, and Novak Djokovic at 21 for me. Alcaraz is a unique individual that we need around in the sport for long time. You gotta love what he brings to the sport,\" he stated. Alcaraz won French Open 2024.",
    //         "date": "Sunday, 09 June, 2024",
    //         "id": "a22b8bc2e76d4b239ab4dd393847ede4",
    //         "imageUrl": "https://nis-gs.pix.in/inshorts/images/v1/variants/jpg/m/2024/06_jun/9_sun/img_1717953842266_917.jpg?",
    //         "readMoreUrl": "https://www.sportskeeda.com/tennis/news-carlos-alcaraz-better-federer-nadal-djokovic-21-john-mcenroe?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
    //         "time": "11:14 pm",
    //         "title": "Alcaraz is better than Federer, Nadal, and Djokovic at 21: McEnroe",
    //         "url": "https://shrts.in/4joS5"
    //     },
    //     {
    //         "author": "Anmol Sharma",
    //         "content": "World number three Carlos Alcaraz defeated Alexander Zverev 6-3, 2-6, 5-7, 6-1, 6-2 in Roland-Garros 2024 final to win French Open for the first time. With this, the 21-year-old became the youngest man to win Grand Slam final on all three surfaces (clay, grass and hard). He had won Wimbledon final in 2023 and US Open final in 2022.",
    //         "date": "Sunday, 09 June, 2024",
    //         "id": "126e691ab3fb4834a4ad641985672efd",
    //         "imageUrl": "https://nis-gs.pix.in/inshorts/images/v1/variants/jpg/m/2024/06_jun/9_sun/img_1717954754099_729.jpg?",
    //         "readMoreUrl": "https://www.rolandgarros.com/en-us/article/rg2024-day-15-as-it-happens---sunday-june-9?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
    //         "time": "11:13 pm",
    //         "title": "Alcaraz wins French Open, becomes youngest man to win Grand Slam final on all 3 surfaces ",
    //         "url": "https://shrts.in/TZz1h"
    //     },
    //     {
    //         "author": "Hiral",
    //         "content": "Microsoft CEO Satya Nadella attended the T20 World Cup 2024 match between India and Pakistan in New York on Sunday. Venture capital firm Afore Capital's Co-founder Gaurav Jain took to X to share a picture with Nadella, in which both of them were seen wearing Team India jerseys. Notably, Nadella invested in US' Major League Cricket and co-owns Seattle Orcas.",
    //         "date": "Sunday, 09 June, 2024",
    //         "id": "cc9bb404bfb0406f8b87d254185a4ff8",
    //         "imageUrl": "https://nis-gs.pix.in/inshorts/images/v1/variants/jpg/m/2024/06_jun/9_sun/img_1717954124245_61.jpg?",
    //         "readMoreUrl": "https://www.hindustantimes.com/trending/satya-nadella-attends-india-vs-pakistan-t20-world-cup-2024-match-101717946170411-amp.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
    //         "time": "11:09 pm",
    //         "title": "Satya Nadella seen wearing India jersey at India-Pakistan match in New York",
    //         "url": "https://shrts.in/r2sWh"
    //     },
    //     {
    //         "author": "Medhaa Gupta",
    //         "content": "South Korea will, for the first time in six years, resume loudspeaker propaganda broadcasts directed at North Korea, the former's National Security Council said. This comes after Pyongyang launched hundreds of balloons carrying faeces, cigarette butts, cloth, paper waste, plastic and other trash towards Seoul. Earlier, South Korea had issued emergency alerts over the balloons.",
    //         "date": "Sunday, 09 June, 2024",
    //         "id": "a5113fd4bbd542acaf43a3c94325d9ac",
    //         "imageUrl": "https://nis-gs.pix.in/inshorts/images/v1/variants/jpg/m/2024/06_jun/9_sun/img_1717953173075_961.jpg?",
    //         "readMoreUrl": "https://www.reuters.com/world/asia-pacific/south-korea-begin-loudspeaker-broadcasts-directed-north-korea-2024-06-09/?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
    //         "time": "11:08 pm",
    //         "title": "S Korea to do loudspeaker broadcasts at N Korea over poop balloons",
    //         "url": "https://shrts.in/EBT8B"
    //     },
    //     {
    //         "author": "Bhawana Chaudhary",
    //         "content": "When asked about his fallout with Karan Johar over 'Dostana 2', actor Kartik Aaryan said, \"I was silent when the news came out and I choose to stay silent even now.\" \"Many a time, there is miscommunication and things are blown out of proportion,\" he told The Lallantop. 'Dostana 2' was shelved in 2021 after a few weeks of shooting.",
    //         "date": "Sunday, 09 June, 2024",
    //         "id": "188aecb9833b4a37a6510c6c3a05625f",
    //         "imageUrl": "https://nis-gs.pix.in/inshorts/images/v1/variants/jpg/m/2024/06_jun/9_sun/img_1717953129212_391.jpg?",
    //         "readMoreUrl": "https://indianexpress.com/article/entertainment/bollywood/kartik-aaryan-breaks-silence-fallout-with-karan-johar-exit-dostana-2-9381385/lite/?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
    //         "time": "11:07 pm",
    //         "title": "I was silent then, I'm silent now: Kartik on 'Dostana 2' fallout",
    //         "url": "https://shrts.in/ydSah"
    //     },
    //     {
    //         "author": "Arnab Mukherji ",
    //         "content": "Former Team India all-rounder Irfan Pathan said Pakistan's fielding in their T20 World Cup 2024 match against India has been horrible. \"Pakistan's fielding hasn't improved since inception,\" he added. \"Ouch. Fielding like they are allergic to the ball,\" read a reaction on Irfan's tweet. \"That is their USP,\" read another reaction on Irfan's tweet.",
    //         "date": "Sunday, 09 June, 2024",
    //         "id": "3d939807350547a2a8e9ab75ca88f155",
    //         "imageUrl": "https://nis-gs.pix.in/inshorts/images/v1/variants/jpg/m/2024/06_jun/9_sun/img_1717953230028_603.jpg?",
    //         "readMoreUrl": "https://x.com/IrfanPathan/status/1799844467064930328?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
    //         "time": "11:06 pm",
    //         "title": "Pak's fielding horrible, it hasn’t improved since inception: Irfan",
    //         "url": "https://shrts.in/KQrNp"
    //     },
    //     {
    //         "author": "Nakul Ahuja",
    //         "content": "Jailed Khalistani leader Amritpal Singh will write to the Punjab government to seek temporary release from jail to take oath as MP. Amritpal, who won the Khadoor Sahib Lok Sabha seat after fighting the polls as an Independent, defeated Congress' Kulbir Singh Zira. The jailed Khalistani leader won by a margin of 1,97,120 votes. ",
    //         "date": "Sunday, 09 June, 2024",
    //         "id": "4cab915255e547eeac9ce5c44c5f1a55",
    //         "imageUrl": "https://nis-gs.pix.in/inshorts/images/v1/variants/jpg/m/2024/06_jun/9_sun/img_1717953439981_691.jpg?",
    //         "readMoreUrl": "https://www.news18.com/amp/india/jailed-radical-preacher-amritpal-singh-seeks-temporary-release-to-take-oath-8926991.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
    //         "time": "11:05 pm",
    //         "title": "Amritpal to seek temporary release from jail to take oath as MP",
    //         "url": "https://shrts.in/36FS5"
    //     },
    //     {
    //         "author": "Bhawana Chaudhary",
    //         "content": "Actress Avneet Kaur, who made her debut at Cannes this year, said it's unfortunate that people questioned her presence at the film festival. \"People do ask me, 'Yeh kyun chali gayi waha? Iska kya jana bana? (Why did she go there? What was the need?)'\" she said. Avneet had gone for the poster launch of her film 'Love in Vietnam'.",
    //         "date": "Sunday, 09 June, 2024",
    //         "id": "e9d5ec642a994464a684de99e93deac5",
    //         "imageUrl": "https://nis-gs.pix.in/inshorts/images/v1/variants/jpg/m/2024/06_jun/9_sun/img_1717952247134_35.jpg?",
    //         "readMoreUrl": "https://www.hindustantimes.com/entertainment/bollywood/avneet-kaur-says-many-told-her-yeh-kyu-chali-gayi-waha-after-her-cannes-film-festival-appearance-this-year-101717640638377-amp.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
    //         "time": "11:04 pm",
    //         "title": "People said 'Why did she go to Cannes? What was the need?': Avneet",
    //         "url": "https://shrts.in/PuYiU"
    //     }
    // ])
    const dispatch = useDispatch()
    const miscelleneousnewsState = useSelector(state => state.miscelleneousnews)
    const [headlines, setHeadlines] = useState()

    console.log(miscelleneousnewsState)

    useEffect(() => {
        if (miscelleneousnewsState.data.length == 0) {
            dispatch(fetch_miscelleneous_news())
        }
        else {
            setHeadlines(miscelleneousnewsState.data)
        }
    }, [miscelleneousnewsState])

    function popArray() {
        setHeadlines(prevArray => {
            if (prevArray.length == 0)
                return prevArray
            const newArray = [...prevArray]
            const lastElement = newArray.pop()
            newArray.unshift(lastElement);
            return newArray
        })

    }
    function pushArray() {
        setHeadlines(prevArray => {
            if (prevArray.length == 0)
                return prevArray
            const newArray = [...prevArray]
            const firstElement = newArray.shift()
            newArray.push(firstElement);
            return newArray
        })
    }

    return (
        <>


{headlines &&
                <div className='flex mt-5 md:my-0 my-40 md:flex-col flex-col min-h-[300px] md:w-full lg:flex-row lg:w-full md:h-fit lg:h-[550px] lg:gap-3 lg:p-2 relative z-10 '>
                    <div className=' lg:min-h-[70%] md:top-[0px] top-[300px] md:w-[50%] md:h-[400px] lg:w-[33%] absolute lg:top-[50%] -left-[0%]  z-20 lg:translate-y-[-50%] '>
                        <div className='w-full h-full flex flex-col bg-[#F6F6F6] rounded-xl'>
                            <div className=' gap-3 overflow-hidden w-full flex p-1  h-full'>
                                <div className='flex w-full gap-4 flex-col p-7'>
                                    <div className='flex w-full gap-4 flex-col'>
                                        <span className='flex gap-2 mt-1 items-center '><h1 className='font-medium text-slate-700 lg:text-2xl md:text-lg' >Inshort</h1><span className='opacity-75'>&#x2022;&nbsp;{getRelativeTime(headlines[0].date, headlines[0].time)}</span></span>
                                        <h1 className='md:line-clamp-4 font-semibold font-poppins  whitespace-pre-line  text-ellipsis overflow-hidden lg:text-4xl line-clamp-4 md:text-xl'>{headlines[0].title}</h1>
                                        <h2 className='md:line-clamp-3 line-clamp-3 whitespace-pre-line opacity-55 text-ellipsis overflow-hidden lg:text-base md:text-sm'>{headlines[0].content}</h2>
                                    </div>
                                    <h2 className='text-sm flex justify-between items-center '>-&nbsp;{headlines[0].date}
                                        <div className='flex gap-2  '>
                                            <img onClick={() => popArray()} className='cursor-pointer hover:scale-125' width="15" height="15" src="https://img.icons8.com/ios/15/back--v1.png" alt="back--v1" />
                                            <img onClick={pushArray} className='cursor-pointer hover:scale-125' width="15" height="15" src="https://img.icons8.com/ios/20/forward--v1.png" alt="forward--v1" />
                                        </div>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-[55%] h-[300px] lg:h-[550px] md:w-full md:h-[400px] lg:ml-[10%] bg-white  rounded-xl relative'>
                        <img src={headlines[0].imageUrl} className='w-full relative  hover:cursor-cell h-full object-cover rounded-xl'></img>
                    </div>
                    <div className='lg:w-[40%] md:w-full bg-white lg:h-[550px] md:h-[400px] lg:my-0 md:my-10 flex lg:flex-col md:flex-row'>
                        {headlines.map((news, index) => {
                            if (index > 0 && index < 5) {
                                return (
                                    <>
                                        <a key={news.id}  href={news.readMoreUrl} className=' gap-3 md:w-[25%] overflow-hidden lg:w-full flex lg:flex-row md:flex-col p-1  lg:h-[25%]'>
                                            <img src={news.imageUrl} className='lg:w-[30%] md:w-full md:h-[50%] lg:h-full object-center object-cover rounded-xl' />
                                            <div className='flex lg:w-[60%] md:w-full md:h-[50%] lg:h-full gap-2 flex-col'>
                                                <span className='flex gap-2 mt-1  md:text-sm text-[#ADADAD]'><h1 className='font-medium text-slate-700 lg:text-base' >Inshort</h1>&#x2022;&nbsp;{getRelativeTime(news.date, news.time)}</span>
                                                <h1 className='line-clamp-2 font-semibold font-poppins  whitespace-pre-line  text-ellipsis overflow-hidden '>{news.title}</h1>
                                                <h2 className='text-sm '>-&nbsp;{news.author}</h2>
                                            </div>
                                        </a>

                                    </>
                                )
                            }
                        })}
                        {/* <div className='bg-red-400 w-full m-1 h-[25%]'></div>
                <div className='bg-red-400 w-full m-1 h-[25%]'></div>
                <div className='bg-red-400 w-full m-1 h-[25%]'></div> */}

                    </div>
                </div>
            }

            
        </>
    )
}

export default TopHeadline
