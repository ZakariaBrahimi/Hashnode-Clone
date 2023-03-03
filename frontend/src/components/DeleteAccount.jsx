import React from 'react'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import {axiosAPI} from '../axios'



const DeleteAccount = () => {
  const navigate = useNavigate()
  const notifyError = (message) => toast.error(message, {
        position: "top-left",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
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
  /*
  0. Make this page PRIVATE
  1. create asyncrouse function called deleteUserAccount
  
  2. send post request (inside try statment block) to the server on URL: http://127.0.0.1:8000/hashnode/api/user-delete
  3. with the following headers:
    - Content-Type: application/json
    - Authorization: Berear <ACCESS TOKEN FROM THE LOCAL STORAGE>
  
  4. wait for the response.data
  5. push notification to the client + remove the local storage and logout + redirect to the onboard page
  
  6. Catch the error inside catch statment block and push notification 
  */

  const deleteUserAccount = async () => {
    let access_token = localStorage.getItem('accessToken')
    try{
      let response = await axiosAPI('/user-delete', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${access_token}`,
        }
      })
      let success_message = response.data // use ? because it not always returns a data it could be anything else if the user unautherized
      localStorage.removeItem('accessToken')
      localStorage.removeItem('user')
      navigate('/onboard')
      notifySuccess(success_message)
    }catch(error){
      navigate('/onboard')
      notifyError('You are not Authorized to access')
    }

  }


  return (
    <div class="mb-24 p-8 lg:col-span-8 xl:col-span-9 pb-8 text-gray-900 bg-white border rounded-lg dark:text-gray-200 dark:bg-gray-900 dark:border-gray-800">
        <h2 class="mb-4 text-xl font-semibold text-[#ff654e]">Delete account</h2>
        <p class="mb-2">Your Hashnode account administers these blogs:<strong> alg.hashnode.dev</strong></p>
        <p class="mb-10">Your personal data will be deleted permanently when you delete your account on Hashnode. This action is irreversible. </p>
        <button onClick={deleteUserAccount} type='button' class="text-white button-transparent bg-[#ff654e] dark:text-white rounded-lg px-3 py-2 font-medium hover:bg-red-600">Delete your account</button>
    </div>
  )
}

export default DeleteAccount