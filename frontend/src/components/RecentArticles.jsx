import React, {useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import ArticleCard from './ArticleCard'
import HeadSection from './HeadSection'
import { axiosAPI } from '../axios'


const RecentArticles = () => {
  const [recentArticlesData, setRecentArticlesData] = useState([])
  const fetchRecentArticles = async () => {
    try{
        const response = await axiosAPI({
            method: 'get',
            url: 'articles/recent',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
        setRecentArticlesData(response.data)
    }catch(error){}
  }
  useEffect(()=>{
    fetchRecentArticles()
  }, [])

  return (
    <>
    
    <div className='rounded-b-lg '>
        {recentArticlesData.map((article, index)=>{ 
            
            return (<>
              <ArticleCard article={article} key={article?.id} />
            </>)
                        
        })}
    </div>
    </>
  )
}

export default RecentArticles