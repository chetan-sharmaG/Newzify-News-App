import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SearchBlog from '../../components/SearchCompopnent/SearchBlog'
import Footer from '../../components/Footer/Footer'

const NewsSearch = () => {
    return (
        <>
            <div className='relative'>

                <Navbar />
                <div className='w-[90vw] min-screen  mx-auto'>
                    <SearchBlog />
                </div>
                <div className='w-full absolute bottom-0 px-10 bg-[#EEEAEA] '>
                    <Footer />

                </div>
            </div>
        </>
    )
}

export default NewsSearch
