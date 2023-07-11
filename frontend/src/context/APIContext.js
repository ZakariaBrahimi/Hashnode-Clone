import React, { createContext, useEffect, useState } from 'react';
import { axiosAPI } from '../axios';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

const APIContext = createContext();
export default APIContext

export const APIProvider = ({ children }) => {
    const [isBookmarked, setIsBookmarked] = useState(false)
    const navigate = useNavigate()
    const [draftedList, setDraftedList] = useState(null)
    const [deleteDraftedArticlePopup, setDeleteDraftedArticlePopup] = useState(false)
    const notifySuccess = (message) => toast.success(message, {
        position: "top-left",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    const bookmarkHandler = async (event, article)=>{
    try{
        const {data} = await axiosAPI({
        method: 'post',
        url: `/add-or-remove-bookmark`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }, 
        params: {
            articleID: article?.id,
            }
        })
        if (data==='bookmarked'){
        setIsBookmarked(true)
        }else{
        setIsBookmarked(false)
        }
    }catch(error){
        console.log(error)
    }
    }

    const deleteArticle = async (event, article_id)=>{
    event.preventDefault()
    try{
        const {data} = await axiosAPI({
        method: 'post',
        url: `/article/delete/${article_id}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
        })
        navigate('/')
        notifySuccess('your article has been deleted successfully.')
    }catch(error){
        console.log(error)
    }
    }

    const draftedArticles = async (event)=>{
        try{
          const {data} = await axiosAPI({
            method: 'get',
            url: `/drafted-articles-list`,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
          })
          setDraftedList(data)
          console.log(data)
          setDeleteDraftedArticlePopup(false)
        }catch(error){
          console.log(error)
        }
      }


    let contextData = {
        setIsBookmarked: setIsBookmarked,
        bookmarkHandler: bookmarkHandler,
        isBookmarked: isBookmarked,
        deleteArticle: deleteArticle,
        draftedArticles: draftedArticles,
        setDraftedList: setDraftedList,
        draftedList: draftedList,
        setDeleteDraftedArticlePopup: setDeleteDraftedArticlePopup,
        deleteDraftedArticlePopup: deleteDraftedArticlePopup,
	}

  return (
    <APIContext.Provider value={contextData}>
      {children}
    </APIContext.Provider>
  );
};


