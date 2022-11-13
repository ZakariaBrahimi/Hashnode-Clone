import React from 'react'
import { Outlet } from 'react-router-dom'
import ArticleCard from './ArticleCard'
import HeadSection from './HeadSection'

const RecentArticles = () => {
  return (
    <>
    <HeadSection />
    <div className='rounded-b-lg '>
        {
                [4,5,6,9].map((article)=>{
                    return <ArticleCard />
                })

            }
    </div>
    <Outlet />
    </>
  )
}

export default RecentArticles