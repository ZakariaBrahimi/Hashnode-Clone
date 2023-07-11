import React, {useEffect, useState,} from 'react'
import ArticleCard from '../components/ArticleCard'
import { axiosAPI } from '../axios';


const Bookmarks = () => {
  const [bookmarkedList, setBookmarkedList] = useState(null)
  const BookmarkedArticles = async (event)=>{
    try{
      const {data} = await axiosAPI({
        method: 'get',
        url: `/bookmarked-articles-list`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      setBookmarkedList(data)
      console.log(data)
    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    BookmarkedArticles()
}, [])
useEffect(()=>{
    console.log(bookmarkedList)
  }, [bookmarkedList,])
  return (

    <div>
    <div className='bg-white border rounded-xl py-10 px-6 mb-5 flex flex-col justify-center md:items-center'>
      <h1 className='md:text-3xl text-lg font-bold mb-2'>Bookmarks</h1>
      <p className='w-max-[48rem] text-[#374151]'>All articles you have bookmarked on Hashnode </p>
    </div>
    {/* articles */}
    <div className='border-b rounded-xl bg-white border mb-5'>
    <div className='  '>
    {
        bookmarkedList && bookmarkedList.map((article)=>{
            return <ArticleCard article={article} />
        })

            }
    </div>
    <p className='mt-12 flex justify-center text-xl text-[#616161]  pb-10 '>You've reached the end!  👋</p>
    </div>
    </div>
  )}


export default Bookmarks