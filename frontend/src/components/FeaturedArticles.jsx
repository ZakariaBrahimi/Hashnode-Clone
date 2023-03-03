import React from 'react'
import ArticleCard from './ArticleCard'
import HeadSection from './HeadSection'
import { Link, Outlet } from 'react-router-dom'
import myPicture from '../assets/img/myPicture.jpg'

const FeaturedArticles = () => {
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

export default FeaturedArticles