import React, {useState, useEffect, useContext} from 'react'
import ArticleCard from './ArticleCard'
import { axiosAPI } from '../axios'
import ArticleCardSkeltons from './skeltons/ArticleCardSkeltons'
import APIContext from '../context/APIContext'


const RecentArticles = () => {
  const [recentArticlesData, setRecentArticlesData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const {draftedArticles} = useContext(APIContext)
  const fetchRecentArticles = async () => {
    try{
        const response = await axiosAPI({
            method: 'get',
            url: 'articles/recent',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        //TODO: the time of loading is a shoooort, test it later with many articles
        // setTimeout(()=>{setIsLoading(false); setRecentArticlesData(response.data)}, 100000)
        setIsLoading(false)
        setRecentArticlesData(response.data)
    }catch(error){}
  }

  useEffect(()=>{
    fetchRecentArticles()
    draftedArticles()
  }, [])
  if (isLoading) return <ArticleCardSkeltons />
  return (
    <div className={`rounded-b-lg`} >
        {recentArticlesData.map((article, index)=>{ 
            return <ArticleCard isLoading={isLoading} article={article} key={article?.id} />         
        })}
    </div>

  )
}
export default RecentArticles