import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import TopHeadline from '../../components/TopNewsHeadline/TopHeadline'
import LatestNews from '../../components/LatestNewsSection/LatestNews'
import Global from '../../components/GlobalNews/Global'
import Picks from '../../components/Newzify/Picks'
import Header from '../../components/PageHeader/Header'
import Sports from '../../components/Sports/Sports'
import Business from '../../components/Business/Business'
import NewzifyCreators from '../../components/CreatorsList/NewzifyCreators'
import Subscribe from '../../components/Subscribe/Subscribe'
import Footer from '../../components/Footer/Footer'
const Homepage = () => {
    return (
        <div className='w-full'>
            <Navbar />
            <div className='lg:w-[90vw] w-[90vw] mx-auto '>
                <Header />
                <TopHeadline />
                <Global/>
                <Picks/>
                <div className='flex w-full lg:flex-row flex-col mt-40 h-fit'>
                    <Business />
                    <Sports />
                </div>
               
                <NewzifyCreators />
                <Subscribe />
            </div>
                <Footer />
        </div>

    )
}

export default Homepage
