import React from 'react'
import LeftSidebar from '../components/LeftSidebar'
import Main from '../components/Main'
import RightSidebar from '../components/RightSidebar'

const HomePage = () => {
  return (
    <div className='grid grid-cols-12 gap-5'>
        <LeftSidebar />
        <Main />
        <RightSidebar />
    </div>
  )
}

export default HomePage