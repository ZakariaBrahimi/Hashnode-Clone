import { Outlet } from 'react-router-dom'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'

const LeftRightSides = () => {
  return (
    <div className='grid grid-cols-12 gap-5'>
        <LeftSidebar />
        <main className='h-screen w-screen lg:col-span-7 lg:w-full' >
          {/* This element will render either <RecentArticles> when the URL is "/recent-articles", <Personalized> at "/personalized-articles", <Personalized> at "/personalized-articles", or null if it is "/" */}
            <Outlet />
        </main>
        <RightSidebar />
    </div>
  )
}

export default LeftRightSides