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
        <main className='h-screen w-screen lg:col-span-7 lg:w-full'>
        
    {/* This element will render either <RecentArticles> when the URL is "/recent-articles", <Personalized> at "/personalized-articles", <Personalized> at "/personalized-articles", or null if it is "/" */}
    <Outlet />
        </main>

        <RightSidebar />

    </div>
  )
}

export default HomePage