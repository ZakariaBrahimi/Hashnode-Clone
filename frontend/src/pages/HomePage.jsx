import LeftSidebar from '../components/LeftSidebar'
import Main from '../components/Main'
import RightSidebar from '../components/RightSidebar'

const HomePage = () => {
  return (
    <div className='grid grid-cols-12 gap-5'>
        <LeftSidebar />
        <Main className='h-screen w-screen lg:col-span-7 lg:w-full' />
          {/* This element will render either <RecentArticles> when the URL is "/recent-articles", <Personalized> at "/personalized-articles", <Personalized> at "/personalized-articles", or null if it is "/" */}
        <RightSidebar />
    </div>
  )
}
export default HomePage