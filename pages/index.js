import {useEffect, useState} from "react";
import BaseURL, {apiKey} from "../util/BaseURL";
import FeedArticle from "../components/FeedArticle";

export default function Home() {

     useEffect(async () => {
          let isSubscribed = true
          const response = await fetch(`${BaseURL}/top-headlines?country=ca&apiKey=${apiKey}`)
          const data = await response.json()
          if (isSubscribed){
               setArticles(data.articles)
          }
          return () => {
               isSubscribed = false
          }
     },[])
     const [articles,setArticles] = useState([])
     return (
          <div className='w-screen h-screen p-4 overflow-y-scroll'>
               <div className='flex flex-col w-full items-center justify-center'>
                    {
                         articles.map((article,index) => {
                              return(<FeedArticle key={index} post={article}/>)
                         })
                    }
               </div>
          </div>
     )
}
