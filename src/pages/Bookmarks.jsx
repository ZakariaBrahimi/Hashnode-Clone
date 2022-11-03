import React from 'react'
import ArticleCard from '../components/ArticleCard'

const Bookmarks = () => {
  return (
    <div>
    <div className='bg-white border rounded-xl py-10 px-6 mb-5 flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold mb-2'>Bookmarks</h1>
      <p className='w-max-[48rem] text-[#374151]'>All articles you have bookmarked on Hashnode</p>
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
    <p className='mt-12 flex justify-center text-xl text-[#616161]  pb-10 '>You've reached the end! 👋</p>
    </div>
    </div>
  )
}

export default Bookmarks