import LeftSidebar from '../components/LeftSidebar'
//import Main from '../components/Main'
import RightSidebar from '../components/RightSidebar'
import myPicture from '../assets/img/myPicture.jpg'
import ArticleCard from '../components/ArticleCard'
import {Link, Outlet} from "react-router-dom";

const HomePage = () => {
  return (
    <div className='grid grid-cols-12 gap-5'>
        <LeftSidebar />
        <main className='h-screen w-screen lg:col-span-7 lg:w-full '>
        {/* featured users */}
        {/*
        <div className=' flex py-4 px-5 shadow gap-3 mb-5 bg-white rounded-lg'>
            <div className='relative'>
                <a href="">
                    <img className='w-12 h-12 rounded-full border' src={myPicture} alt="" />
                </a>
                <span className='bg-[#fbbf24] p-1 absolute rounded-full top-0 right-0'>
                    <svg fill='white' className="w-3 h-3" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                </span>
            </div>
            <div className='relative'>
                <a href="">
                    <img className='w-12 h-12 rounded-full border' src={myPicture} alt="" />
                </a>
                <span className='bg-[#fbbf24] p-1 absolute rounded-full top-0 right-0'>
                    <svg fill='white' className="w-3 h-3" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                </span>
            </div>
            <div className='relative'>
                <a href="">
                    <img className='w-12 h-12 rounded-full border' src={myPicture} alt="" />
                </a>
                <span className='bg-[#fbbf24] p-1 absolute rounded-full top-0 right-0'>
                    <svg fill='white' className="w-3 h-3" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                </span>
            </div>
            <div className='relative'>
                <a href="">
                    <img className='w-12 h-12 rounded-full border' src={myPicture} alt="" />
                </a>
                <span className='bg-[#fbbf24] p-1 absolute rounded-full top-0 right-0'>
                    <svg fill='white' className="w-3 h-3" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                </span>
            </div>
            <div className='relative'>
                <a href="">
                    <img className='w-12 h-12 rounded-full border' src={myPicture} alt="" />
                </a>
                <span className='bg-[#fbbf24] p-1 absolute rounded-full top-0 right-0'>
                    <svg fill='white' className="w-3 h-3" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                </span>
            </div>
            <div className='relative'>
                <a href="">
                    <img className='w-12 h-12 rounded-full border' src={myPicture} alt="" />
                </a>
                <span className='bg-[#fbbf24] p-1 absolute rounded-full top-0 right-0'>
                    <svg fill='white' className="w-3 h-3" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                </span>
            </div>
            <div className='relative'>
                <a href="">
                    <img className='w-12 h-12 rounded-full border' src={myPicture} alt="" />
                </a>
                <span className='bg-[#fbbf24] p-1 absolute rounded-full top-0 right-0'>
                    <svg fill='white' className="w-3 h-3" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                </span>
            </div>
            <div className='relative'>
                <a href="">
                    <img className='w-12 h-12 rounded-full border' src={myPicture} alt="" />
                </a>
                <span className='bg-[#fbbf24] p-1 absolute rounded-full top-0 right-0'>
                    <svg fill='white' className="w-3 h-3" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                </span>
            </div>
            <div className='relative'>
                <a href="">
                    <img className='w-12 h-12 rounded-full border' src={myPicture} alt="" />
                </a>
                <span className='bg-[#fbbf24] p-1 absolute rounded-full top-0 right-0'>
                    <svg fill='white' className="w-3 h-3" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                </span>
            </div>
            <div className='relative'>
                <a href="">
                    <img className='w-12 h-12 rounded-full border' src={myPicture} alt="" />
                </a>
                <span className='bg-[#fbbf24] p-1 absolute rounded-full top-0 right-0'>
                    <svg fill='white' className="w-3 h-3" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                </span>
            </div>
        </div>
        {/* head section 
        <div className='bg-white rounded-lg'>
            <div className='flex px-5 pt-3 border-b'>
                <Link to="" className='flex px-2 py-3 gap-2 text-[#4b5563] border-b-blue-600 border-b-2 hover:bg-[#e5e7eb] rounded-t-lg mx-1'>
                    <svg fill='#2563eb' className="w-5 h-5" viewBox="0 0 576 512"><path d="m492.3 12.28 39.4 39.44c15.6 15.62 15.6 40.94 0 56.58L140.3 499.7c-15.6 15.6-40.96 15.6-56.58 0l-39.44-39.4c-15.62-15.6-15.62-41 0-56.6L435.7 12.28c15.6-15.617 41-15.617 56.6 0zm-34 22.63L337.9 155.3l50.8 50.8L509.1 85.66c3.1-3.13 3.1-8.19 0-11.32l-39.4-39.43a8.112 8.112 0 0 0-11.4 0zM66.91 437.7l39.39 39.4c3.2 3.1 8.2 3.1 11.4 0l248.4-248.4-50.8-50.8L66.91 426.3a8.112 8.112 0 0 0 0 11.4zM128 127.1h48c8.8 0 16 8.1 16 16 0 9.7-7.2 16-16 16h-48v48c0 9.7-7.2 16-16 16s-16-6.3-16-16v-48H48c-8.84 0-16-6.3-16-16 0-7.9 7.16-16 16-16h48v-48c0-7.94 7.2-16 16-16s16 8.06 16 16v48zm336 192c8.8 0 16 8.1 16 16.9v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-48c0-8.8 7.2-16.9 16-16.9zM252.2 35.84H272c6.7 0 12.2 5.44 12.2 11.26 0 7.62-5.5 13.06-12.2 13.06h-19.8V79.1c0 7.62-5.5 13.06-12.2 13.06-6.7 0-12.2-5.44-12.2-13.06V60.16H208c-6.7 0-12.2-5.44-12.2-13.06 0-5.82 5.5-11.26 12.2-11.26h19.8V15.1c0-5.816 5.5-11.26 12.2-11.26 6.7 0 12.2 5.444 12.2 11.26v20.74z"></path></svg>
                    <span className='text-blue-600 font-medium'>Personalized</span>
                </Link>
                <Link to="feature" className='flex px-2 py-3 gap-2 text-[#4b5563] hover:bg-[#e5e7eb] rounded-t-lg mx-1'>
                    <svg fill='#4b5563' className="w-5 h-5" viewBox="0 0 576 512"><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM405.8 317.9l27.8 162L288 403.5 142.5 480l27.8-162L52.5 203.1l162.7-23.6L288 32l72.8 147.5 162.7 23.6-117.7 114.8z"></path></svg>
                    <span>Feature</span>
                </Link>
                <Link to="/recent" className='flex px-2 py-3 gap-2 text-[#4b5563] hover:bg-[#e5e7eb] rounded-t-lg mx-1'>
                    <svg fill='#4b5563' className="w-5 h-5" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-148.9 88.3l-81.2-59c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h14c6.6 0 12 5.4 12 12v146.3l70.5 51.3c5.4 3.9 6.5 11.4 2.6 16.8l-8.2 11.3c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg>
                    <span>Recent</span>
                </Link>
            </div>

            {/* articles 
            

        </div>
        */}
    <Outlet />{/* This element will render either <RecentArticles> when the URL is
              "/recent-articles", <Personalized> at "/personalized-articles", <Personalized> at "/personalized-articles", or null if it is "/"
              */}
        </main>

        <RightSidebar />

    </div>
  )
}

export default HomePage