import React from 'react'
import ArticleCard from './ArticleCard'

function Personalized() {
  return (
    <div>
        {
                [4,5,6,9].map((article)=>{
                    return <ArticleCard />
                })

            }
    </div>
  )
}

export default Personalized