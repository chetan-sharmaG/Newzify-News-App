import React ,{useState}from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const searchNews = (e)=>{
        e.preventDefault();
        window.open('/search-result/' + search, '_self')

    }
    return (
        <>
            <nav className='w-full h-[80px] bg-[#1F1F1F]' >
                <div className='w-[95%] mx-auto   md:px-0 px-1 h-full flex  justify-between items-center'>
                    <div className='flex gap-10   items-center text-white '>
                        <Link to='/' className='text-white text-2xl font-poppins font-bold'>Newzify</Link>
                        <div className='lg:flex hidden lg:w-[100%] lg:flex-wrap gap-x-10 gap-y-2 items-center text-white'>
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
                    <div className='flex items-center gap-5'>
                        <div className="container1">
                            <input type="text" name="text" className="input" onKeyDown={(e) => e.key === 'Enter' && searchNews(e)} required="" value={search} onChange={handleSearch} placeholder="Type to search news..." />
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                    <title>Search</title>
                                    <path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"></path>
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"></path>
                                </svg>
                            </div>
                        </div>
                        <svg className='lg:hidden' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 40 40">
                            <path fill="#dff0fe" stroke="#7496c4" strokeMiterlimit="10" d="M1.5,18.5h37v3h-37V18.5z"></path><path fill="#dff0fe" stroke="#7496c4" strokeMiterlimit="10" d="M1.5,8.5h37v3h-37V8.5z"></path><path fill="#dff0fe" stroke="#7496c4" strokeMiterlimit="10" d="M1.5,28.5h37v3h-37V28.5z"></path>
                        </svg>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
