import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';  
import { fetch_gnews_headlines } from '../../Redux/slice/gnewsHeadlines';


const SearchBlog = () => {

    const dispatch = useDispatch()
    const gnewsHeadlines = useSelector((state) => state.gnews)
    

    const { search } = useParams()
    const [searchText, setsearchText] = useState(search)
    const [searchResponse, setsearchResponse] = useState({
        "loading": true,
        "totalArticles": 0,
        "articles": []
    })
    const [topHeadlines, settopHeadlines] = useState({
        "isloading": true,
        "totalArticles": 0,
        "articles": [],
        "isError":false
    })

    useEffect(() => {
        
        
        
         fetchSearchNews ()
        // fetchTopHeadlines()
        
    }, [])

    useEffect(() => {
        if(gnewsHeadlines.data?.articles?.length > 0){
            settopHeadlines(gnewsHeadlines.data.articles)
        }else{
            console.log("dispatching")
            dispatch(fetch_gnews_headlines())
        }
    },[gnewsHeadlines.isloading])

    const fetchTopHeadlines = async () => {
        var headline = {
            "totalArticles": 110402,
            "articles": [
                {
                    "title": "Xiaomi 14 Civi India launch today: How to watch live stream, expected price and specifications",
                    "description": "Xiaomi is launching the 14 Civi in India today, featuring a quad-curved display and powerful Snapdragon 8s Gen 3 chipset. Watch the livestream on Xiaomi India's YouTube page at 12 noon for all the details.",
                    "content": "Xiaomi Civi is all set to debut in India today. The Xiaomi 14 Civi, will be the first device under the Civi series to be launched in India. The Civi series is expected to be a powerful mid-ranger. It is expected to be powered by the Snapdragon 8s gen... [2405 chars]",
                    "url": "https://www.indiatoday.in/technology/news/story/xiaomi-14-civi-india-launch-today-how-to-watch-live-stream-expected-price-and-specifications-2552096-2024-06-12",
                    "image": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/xiaomi-14-civi-125624472-16x9_1.jpg?VersionId=cICaw5PPt90yBrOBUi3SnGmRiTAlrHBk",
                    "publishedAt": "2024-06-12T04:30:19Z",
                    "source": {
                        "name": "India Today",
                        "url": "https://www.indiatoday.in"
                    }
                },
                {
                    "title": "Chandrababu Naidu swearing-in: 17 fresh faces among 25 ministers to take oath; Pawan Kalyan to be Dy CM. Full list here",
                    "description": "Chandrababu Naidu swearing-in: Out of 24 ministers in Naidu's cabinet, 17 are newcomers. The cabinet includes three women, eight Backward Class leaders, two SCs, one ST and one Muslim.",
                    "content": "Telugu Desam Party (TDP) president N Chandrababu Naidu will take oath as Chief Minister of Andhra Pradesh along with 24 ministers in his cabinet today, June 12. The event will be held at 11.27 am at Kesarapalli IT Park near Gannavaram airport in Kris... [2195 chars]",
                    "url": "https://www.livemint.com/politics/chandrababu-naidu-swearing-in-17-fresh-faces-among-25-ministers-to-take-oath-pawan-kalyan-to-be-dy-cm-full-list-here-11718163123669.html",
                    "image": "https://www.livemint.com/lm-img/img/2024/06/12/1600x900/PTI06-11-2024-000305B-0_1718163914328_1718163985645.jpg",
                    "publishedAt": "2024-06-12T03:54:47Z",
                    "source": {
                        "name": "Mint",
                        "url": "https://www.livemint.com"
                    }
                },
                {
                    "title": "Chandrababu Naidu swearing-in ceremony: Celebrities who are expected to attend the event",
                    "description": "Chandrababu Naidu oath ceremony: Megastars Chiranjeevi, his son Ram Charan, and Allu Arjun are likely to attend the oath-taking ceremony. | Latest News India",
                    "content": "Nara Chandrababu Naidu, who led the Telugu Desam Party-Bharatiya Janata Party-Janasena alliance to a massive win in the Andhra Pradesh assembly elections, will be sworn in as the chief minister of the southern state on Wednesday. June 12. The grand c... [2008 chars]",
                    "url": "https://www.hindustantimes.com/india-news/chandrababu-naidu-swearing-in-ceremony-june-12-celebrities-to-attend-chiranjeevi-ram-charan-allu-arjun-101718155529928.html",
                    "image": "https://www.hindustantimes.com/ht-img/img/2024/06/12/1600x900/Ram_Charan_Chiranjeevi_1661166971382_1718155639333.jpg",
                    "publishedAt": "2024-06-12T02:48:20Z",
                    "source": {
                        "name": "Hindustan Times",
                        "url": "https://www.hindustantimes.com"
                    }
                },
                {
                    "title": "Odisha’s first BJP CM, Deputy CMs to take oath today: Who are Mohan Charan Majhi, K V Singh Deo, Pravati Parida?",
                    "description": "The BJP has struck a regional balance with its choices. While Majhi, the CM-elect, is from Keonjhar in north Odisha, Singh Deo is from the erstwhile royal family of Patnagarh in west Odisha, and Pardi is from the coastal Puri district.",
                    "content": "The BJP on Tuesday picked four-time Keonjhar MLA Mohan Charan Majhi who is from the tribal Santhal community as Odisha’s Chief Minister. Majhi will take oath along with Deputy CMs K V Singh Deo and Pravati Parida, who will become the first woman Depu... [3483 chars]",
                    "url": "https://indianexpress.com/article/political-pulse/odisha-bjp-cm-deputy-oath-today-mohan-charan-majhi-k-v-singh-deo-pravati-parida-9386962/",
                    "image": "https://images.indianexpress.com/2024/06/Mohan-Charan-Majhi-K-V-Singh-Deo-Pravati-Parida.jpg",
                    "publishedAt": "2024-06-12T02:08:58Z",
                    "source": {
                        "name": "The Indian Express",
                        "url": "https://indianexpress.com"
                    }
                },
                {
                    "title": "Odisha CM oath-taking ceremony LIVE Updates: BJP leader Mohan Majhi new Odisha CM, to take oath today",
                    "description": "Odisha CM swearing-in ceremony LIVE Updates: Stay informed with BJP leader Mohan Majhi taking oath as the Chief Minister of Odisha on June 11 from The Hindu.",
                    "content": "The swearing-in ceremony for the first BJP Government in Odisha, headed by Mohan Majhi, will take place today (June 12).\nThe first legislature party meeting of the newly elected members of Odisha took place on June 11 in which Mr. Majhi, a four time ... [766 chars]",
                    "url": "https://www.thehindu.com/elections/odisha-assembly/odisha-cm-mohan-majhi-oath-taking-ceremony-live-updates-bjp-june-12-2024/article68277246.ece",
                    "image": "https://th-i.thgim.com/public/incoming/c3ffkb/article68279927.ece/alternates/LANDSCAPE_1200/PTI06_11_2024_000356B.jpg",
                    "publishedAt": "2024-06-12T02:03:00Z",
                    "source": {
                        "name": "The Hindu",
                        "url": "https://www.thehindu.com"
                    }
                },
                {
                    "title": "Hamas proposes 'amendments' to Gaza truce deal, Israel calls it 'rejection'",
                    "description": "Palestinian militant group Hamas has submitted its response to the US-backed proposal for a ceasefire in Gaza, seeking \"amendments\" to the deal. Israel, however, views the response as tantamount to a rejection.",
                    "content": "Palestinian militant group Hamas has submitted its response to the US-backed proposal for a ceasefire in Gaza, seeking \"amendments\" to the deal. The response, received by mediators Qatar and Egypt, falls short of an outright acceptance but keeps nego... [2631 chars]",
                    "url": "https://www.indiatoday.in/world/story/hamas-proposes-amendments-gaza-truce-deal-israel-calls-it-rejection-2552058-2024-06-12",
                    "image": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/israel-hamas-war-120158577-16x9_0.jpg?VersionId=h31odcAchFLsDI7LJW5Exokz1pdPtspo",
                    "publishedAt": "2024-06-12T02:02:25Z",
                    "source": {
                        "name": "India Today",
                        "url": "https://www.indiatoday.in"
                    }
                },
                {
                    "title": "Munjya box office collection day 5: Sharvari, Mona Singh-starrer remains steady, collects ₹4 cr",
                    "description": "Munjya box office collection day 5: The horror comedy has been directed by Aditya Sarpotdar, and produced by Dinesh Vijan’s Maddock Films and Amar Kaushik. | Bollywood",
                    "content": "Munjya box office collection day 5: Munjya has been performing well at the box office in India. Starring Sharvari, Mona Singh and Abhay Varma, the horror comedy opened to mixed reviews from critics. Now, as per the latest report on Sacnilk.com, the f... [1700 chars]",
                    "url": "https://www.hindustantimes.com/entertainment/bollywood/munjya-box-office-collection-day-5-sharvari-mona-singh-starrer-remains-steady-collects-rs-4-cr-101718156359501.html",
                    "image": "https://www.hindustantimes.com/ht-img/img/2024/06/12/1600x900/Munjya_Stree_1717922393837_1718156788781.jpg",
                    "publishedAt": "2024-06-12T02:02:22Z",
                    "source": {
                        "name": "Hindustan Times",
                        "url": "https://www.hindustantimes.com"
                    }
                },
                {
                    "title": "Stock market today: Trade setup for Nifty 50 to global markets, five stocks to buy or sell on Wednesday - June 12",
                    "description": "Stocks to buy today: Experts recommend buying these 5 buy or sell stocks — Polycab India, Whirlpool, ICICI Bank, Berger Paints, and Tata Motors",
                    "content": "Stock market today: Following the mixed trend in the global markets, the Indian stock market erased all its gains in the closing bell on Tuesday. The Nifty 50 index, which represents the performance of the top 50 companies listed on the National Stoc... [5045 chars]",
                    "url": "https://www.livemint.com/market/stock-market-news/stock-market-today-trade-setup-for-nifty-50-to-global-markets-five-stocks-to-buy-or-sell-on-wednesday-june-12-11718156383153.html",
                    "image": "https://www.livemint.com/lm-img/img/2024/06/12/1600x900/Stock_market_today_Stocks_to_Buy_or_sell_Nifty_50_1718157021601_1718157021863.jpg",
                    "publishedAt": "2024-06-12T01:57:00Z",
                    "source": {
                        "name": "Mint",
                        "url": "https://www.livemint.com"
                    }
                },
                {
                    "title": "Mohan Bhagwat’s remarks on table as BJP works on rejig, review, and choosing next president",
                    "description": "“This kind of public expression means there is a problem in communication between the Sangh and the party. Bhagwatji rarely criticises BJP leaders publicly.\"",
                    "content": "Even as the Ministers in the new NDA government took charge Tuesday, the BJP has begun to set in motion the process of re-jigging its organisation nationwide and, simultaneously, reviewing its Lok Sabha performance.\nThis exercise is expected to begin... [4259 chars]",
                    "url": "https://indianexpress.com/article/political-pulse/mohan-bhagwats-remarks-on-table-as-bjp-works-on-rejig-review-and-choosing-next-president-9386659/",
                    "image": "https://images.indianexpress.com/2024/06/Mohan-Bhagwat.jpg",
                    "publishedAt": "2024-06-12T01:55:31Z",
                    "source": {
                        "name": "The Indian Express",
                        "url": "https://indianexpress.com"
                    }
                },
                {
                    "title": "BTS: Jin Breaks Down as He Gets Discharged From Military, Members Host Epic Welcome Back Meet",
                    "description": "BTS singer Jin has been discharged from his military training. Members RM, Suga, J-Hope, Jimin, V and Jungkook welcomed him back.",
                    "content": "BTS member Jin has been discharged from the military. The singer enlisted in December 2022 and has now completed his compulsory military training. His discharge ceremony was an emotional event not just for fans who have been waiting for his return bu... [2758 chars]",
                    "url": "https://www.news18.com/movies/bts-jin-breaks-down-as-he-gets-discharged-from-military-members-host-epic-welcome-back-meet-watch-8929778.html",
                    "image": "https://images.news18.com/ibnlive/uploads/2024/06/bts-jin-discharged-2024-06-f57a2d48aa2adb65f3c047140e02762f-16x9.jpg?impolicy=website&width=1200&height=675",
                    "publishedAt": "2024-06-12T01:42:36Z",
                    "source": {
                        "name": "News18",
                        "url": "https://www.news18.com"
                    }
                }
            ]
        }
        settopHeadlines({ ...headline, loading: false })
    }
    const fetchSearchNews = async () => {
        let a = await fetch('https://gnews.io/api/v4/search?lang=en&country=in&max=20&apikey=19e94d6a4144d4dbf91e5d5cae139578&q=' + searchText)
        let res = await a.json()
        console.log(res)
        setsearchResponse({ ...res, loading: false })
    }

    function timeAgo(isoTimestamp) {
        // Create a date object from the ISO 8601 timestamp
        const date = new Date(isoTimestamp);

        // Get the current date and time
        const now = new Date();

        // Calculate the difference in milliseconds
        const diff = now - date;

        // Convert difference to minutes
        const minutes = Math.round(diff / 60000);

        // Create an instance of Intl.RelativeTimeFormat
        const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

        // Determine the appropriate unit and value for display
        if (minutes < 60) {
            return rtf.format(-minutes, 'minute');
        } else if (minutes < 1440) { // less than 1 day
            const hours = Math.round(minutes / 60);
            return rtf.format(-hours, 'hour');
        } else if (minutes < 10080) { // less than 1 week
            const days = Math.round(minutes / 1440);
            return rtf.format(-days, 'day');
        } else {
            const weeks = Math.round(minutes / 10080);
            return rtf.format(-weeks, 'week');
        }
    }




    const submitSearch = (e) => {
        e.preventDefault();
        if (searchText) {
            console.log("asjdhams");
            //    navigate(`/search-result/${searchText}/`)
            window.open('/search-result/' + searchText, '_self')
        }
    }

    const handleFormChange = (e) => {

        setsearchText(e.target.value)
        console.log(searchText)
    }


    return (
        <>
            <div className="form relative my-5 w-[70%]">

                <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
                    <svg
                        width="17"
                        height="16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-labelledby="search"
                        className="w-5 h-5 text-gray-700"
                    >
                        <path
                            d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                            stroke="currentColor"
                            strokeWidth="1.333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                </button>
                <input
                    className=" rounded-full w-full  px-8 py-3 border-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
                    placeholder="Search..."
                    required={true}
                    onChange={handleFormChange}
                    value={searchText ? searchText : ""}
                    type="text"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            console.log("enter")
                            submitSearch(e)
                        }
                    }}
                />
                <button type="reset" onClick={() => setFormData("")} className="absolute right-3 -translate-y-1/2 top-1/2 p-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>
            </div>
            <h1>Showing {searchResponse.articles.length > 0 ? 10 : 0} Search results for {search}</h1>

            {(searchResponse.articles.length == 0 && !searchResponse.loading) &&
                <div>No search results</div>
            }
            <div className='flex gap-3 relative justify-between  divide-x-[2px] '>
                <div className='flex flex-row flex-wrap  divide-y-4  my-5 w-[70%]  gap-3'>
                    {searchResponse.loading &&
                        <div className='flex items-center justify-center w-full h-[300px]'>
                            <div role="status">
                                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    }
                    {searchResponse &&
                        searchResponse.articles.map((item, index) => {
                            if (index == 0)
                                return (
                                    <a key={item.url} href={item.url} target='_blank' className='flex group w-full my-5 gap-3 h-[300px] flex-row'>
                                        <div className=' w-1/2 h-full '>
                                            <img className='w-full h-full object-cover group-hover:brightness-95 ' src={item.image} alt="image" />
                                        </div>
                                        <div className='bg-white flex h-full gap-5 flex-col p-3 w-1/2 '>

                                            <span className='flex gap-3 text-xl '><h1>{item.source.name}</h1>{timeAgo(item.publishedAt)}</span>
                                            <span className='text-2xl line-clamp-3   whitespace-pre-line  text-ellipsis overflow-hidden  group-hover:underline font-poppins font-semibold'>{item.title}</span>
                                            <span className='line-clamp-4   whitespace-pre-line  text-ellipsis overflow-hidden text-base'>{item.content}</span>
                                        </div>
                                    </a>
                                )
                            return (
                                <a key={item.url} href={item.url} className='flex group even:flex-row-reverse pt-4  gap-3 flex-row w-full h-[185px]'>
                                    <img src={item.image} alt="image" className='f-full object-cover group-hover:brightness-95 ' />
                                    <div className='flex flex-col gap-2'>
                                        <span className='flex gap-3 text-base '><h1>{item.source.name}</h1>{timeAgo(item.publishedAt)}</span>
                                        <span className='text-xl line-clamp-2   whitespace-pre-line  text-ellipsis overflow-hidden  group-hover:underline font-poppins font-semibold'>{item.title}</span>
                                        <span className='line-clamp-2   whitespace-pre-line  text-ellipsis overflow-hidden text-base'>{item.description}
                                        </span>
                                    </div>
                                </a>
                            )
                        })}
                </div>
                <div className={`w-[26%]  gap-4 overflow-y-clip ${searchResponse.length > 0 ? "" : "h-[500px]"}  justify-start flex flex-col  `}>
                    <h1 className='text-xl'>Top Headlines</h1>
                    {topHeadlines.length > 0 &&
                       topHeadlines.map((item, index) => {
                           return (
                           
                            <a key={item.url} href='{item.url}' target='_blank' className='flex group flex-row w-full p-1 gap-2 h-[100px] '>
                                <div className='w-1/2 h-full '>
                                    <img src={item.image} alt="image" className='w-full h-full object-cover group-hover:brightness-95 ' />
                                </div>
                                <div className='flex flex-col gap-2 py-1 h-full w-1/2'>
                                <span className='text-sm line-clamp-4 group-hover:underline  whitespace-pre-line  text-ellipsis overflow-hidden'>{item.title}</span>
                                </div>
                            </a>
                            
                            
                           )
                       })
                    }
                </div>
            </div>
        </>
    )
}

export default SearchBlog
