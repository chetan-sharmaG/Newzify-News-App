import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>  
        <div className=' flex flex-col gap-9 justify-center h-[180px]'>

            <div className='flex w-full sm:flex-row flex-col  items-center justify-between '>
                <div className='flex flex-col sm:w-[40%] sm:mb-0 mb-10 w-full] sm:text-start text-center text-sm gap-1 text-red-600'>
                    <h1 className='text-xl font-bold'>Newzify</h1>
                    <h1>Craft narratives that ignite inspiration,
                    </h1>
                    <h1>
                        knowlege
                        book, and
                        entertainment
                        movie-projector
                    </h1>
                </div>
                <div className='flex flex-wrap sm:justify-evenly gap-2 justify-evenly w-[80%] sm:w-full'>
                <Link target='_blank' to='/news/national'>India</Link>
                            <Link target='_blank' to='/news/world'>World</Link>
                            <Link target='_blank' to='/news/politics'>Politics</Link>
                            <Link target='_blank' to='/news/business'>Business</Link>
                            <Link target='_blank' to='/news/entertainment'>Entertainment</Link>
                            <Link target='_blank' to='/news/technology'>Technology</Link>
                            <Link target='_blank' to='/news/startup'>Startup</Link>
                            <Link target='_blank' to='/news/science'>Science</Link>
                            <Link target='_blank' to='/news/automobile'>Auto-Mobile</Link>
                            <Link target='_blank' to='/sports'>Sports</Link>
                </div>
            </div>
            <h1 className='flex w-full justify-between items-center text-sm'>&#169; 2024 Newzify.All rights reserved.

                <div className='flex gap-10'>
                    <button>Terms of Service</button>
                    <button> Policy Service</button>
                    <button>Cookie Policy</button>
                    <button>Partners</button>
                </div>
            </h1>
        </div>
        </>
    )
}

export default Footer
