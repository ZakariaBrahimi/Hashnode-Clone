import React, {useContext, useState, useEffect} from 'react'
import {axiosAPI} from '../axios'
import AuthContext from '../context/AuthContext'
import { ToastContainer, toast } from 'react-toastify';


const PasswordChange = () => {
    let {passwordChangeHandl} = useContext(AuthContext)
    
    const [old_password, setOld_password] = useState('')
    const [new_password1, setNew_password1] = useState('')
    const [new_password2, setNew_password2] = useState('')
        
    
  return (
    <form onSubmit={(e) => passwordChangeHandl(e, old_password, new_password1, new_password2)} className='bg-white border mb-24 rounded-lg lg:col-span-9 xl:col-span-9 pb-8'>
        <div class="flex flex-row flex-wrap p-8 pb-0 mb-0">
            <div class="w-full lg:w-full">
                <h4 class="mb-5 text-2xl text-center font-bold text-blue-600 dark:text-gray-100">Password Change</h4>
                <div class="mb-6">
                    <label for="old_password" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Ole Password:</label>
                    <input value={old_password}  onChange={(e)=>setOld_password(e.target.value)} type="password" class="input-text w-full rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" id="old_password" placeholder="Enter your Old Password" />
                </div>
                <div class="mb-6">
                    <label for="new_password1" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">New Password:</label>
                    <input value={new_password1}  onChange={(e)=>setNew_password1(e.target.value)} type="password" class="input-text w-full rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" id="new_password1" placeholder="Enter your New Password" />
                </div>
                <div class="mb-6">
                    <label for="new_password2" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Confirm New Password:</label>
                    <input value={new_password2}  onChange={(e)=>setNew_password2(e.target.value)} type="password" class="input-text w-full rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" id="new_password1" placeholder="Confirm your New Password" />
                </div>
            </div>
        <div class="pt-4 mt-5 flex w-full justify-center">
            <button type='submit' class="button-primary big px-4 py-2 rounded-full text-center border border-blue-600 text-blue-600 font-medium text-lg hover:bg-[#e3f2fd]">Change Password</button>
        </div>
        </div>
            
        
        
        
    </form>
  )
}

export default PasswordChange