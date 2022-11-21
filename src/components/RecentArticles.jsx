import React from 'react'
import { Outlet } from 'react-router-dom'
import ArticleCard from './ArticleCard'
import HeadSection from './HeadSection'

const RecentArticles = () => {
  return (
    <>
    
    <div className='rounded-b-lg '>
        {
                [4,5,6,9].map((article)=>{
                    return <ArticleCard />
                })

            }
    </div>
    </>
  )
}

export default RecentArticles