import React, {useContext,} from 'react'
import ArticleCard from '../components/ArticleCard'
import AuthContext from '../context/AuthContext'
import { useNavigate, Navigate } from "react-router-dom";



const Bookmarks = () => {
  let {user} = useContext(AuthContext)
  
  return (

    <div>
    {user==null && <h1 className='text-lg font-extrabold'> There is no user </h1>}
    <div className='bg-white border rounded-xl py-10 px-6 mb-5 flex flex-col justify-center md:items-center'>
      <h1 className='md:text-3xl text-lg font-bold mb-2'>Bookmarks</h1>
      <p className='w-max-[48rem] text-[#374151]'>All articles you have bookmarked on Hashnode </p>
    </div>
    {/* articles */}
    <div className='border-b rounded-xl bg-white border mb-5'>
    <div className='  '>
    {
                [4,5,6,9].map((article)=>{
                    return <ArticleCard />
                })

            }
    </div>
    <p className='mt-12 flex justify-center text-xl text-[#616161]  pb-10 '>You've reached the end!  👋</p>
    </div>
    </div>
  )}


export default Bookmarks