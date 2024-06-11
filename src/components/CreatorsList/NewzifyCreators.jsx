import React from 'react'

const NewzifyCreators = () => {
    return (

        <>
            <span className=' flex w-full items-center p-1 justify-between  mt-20 mb-10 '>
                <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold'>Newzify's Creators</h1>
                <h1 className='flex gap-1 hover:scale-110 cursor-pointer'>See all <img width="30" height="30" src="https://img.icons8.com/laces/30/arrow.png" alt="arrow" /></h1></span>
            <div className="flex my-10 flex-wrap md:justify-start justify-center gap-y-5 gap-10 ">
               <span className='flex gap-2 items-center'>
               <div className='w-[50px] h-[50px] rounded-full'>
                    <img className='rounded-full h-full w-full border border-red-300' src='https://chetan-portfolio-woad.vercel.app/static/media/userImage.2e104f080288a4123dde.JPG' ></img>
                </div>
                <h1 className='md:flex hidden text-xl font-bold'>Chetan Sharma</h1>
               </span>
              
            </div>
        </>
    )
}

export default NewzifyCreators
