import React, {useContext, useState, useEffect} from 'react'
import {axiosAPI} from '../axios'
import AuthContext from '../context/AuthContext'
import { ToastContainer, toast } from 'react-toastify';


const EditProfile = () => {
    let {userData} = useContext(AuthContext)
    useEffect(() => {
        console.log(userData);
    }, [])
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
    const [fullname, setFullname] = useState(userData['fullname'])
    const [email, setEmail] = useState(userData['email'])
    const [bio, setBio] = useState(userData['bio'])
    const [profile_tagline, setProfile_tagline] = useState(userData['profile_tagline'])
    const [instagram, setInstagram] = useState(userData['instagram'])
    const [github, setGithub] = useState(userData['github'])
    const [facebook, setFacebook] = useState(userData['facebook'])
    const [website, setWebsite] = useState(userData['website'])
    const [youtube, setYoutube] = useState(userData['youtube'])
    const [linkedin, setLinkedin] = useState(userData['linkedin'])
    const [available_for, setAvailable_for] = useState(userData['available_for'])
    const [location, setLocation] = useState(userData['location'])
    const [stackOverflow, setStackOverflow] = useState(userData['stackOverflow'])
    const [twitter, setTwitter] = useState(userData['twitter'])

    const profileEdit = async (e) => {
        e.preventDefault()
        let access_token = localStorage.getItem('accessToken')
        try{
            let response = await axiosAPI({                                                                                                                                                                                                                                                                                                    
            url: '/profile-edit',
            method: 'post',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`
            },
            data:{
                "fullname": fullname,
                "email": email,
                "bio": bio,
                "profile_tagline": profile_tagline,
                "instagram": instagram,
                "gitHub": github,
                "facebook": facebook,
                "website": website,
                "youtube": youtube,
                "linkedin": linkedin,
                "available_for": available_for,
                "location": location,
                "twitter": twitter,
                "stackOverflow": stackOverflow,
            }
        })
        let data = response.data
        setFullname(data['fullname'])
        setEmail(data['email'])
        setBio(data['bio'])
        setProfile_tagline(data['profile_tagline'])
        setInstagram(data['instagram'])
        setGithub(data['github'])
        setFacebook(data['facebook'])
        setWebsite(data['website'])
        setYoutube(data['youtube'])
        setLinkedin(data['linkedin'])
        setAvailable_for(data['available_for'])
        setLocation(data['location'])
        setTwitter(data['stackOverflow'])
        }catch(error){
            if (error.response.status==401){
                // notifyError('Unautherized! You can not ')
            }
            console.log(error.response.status)
        }
    }
  return (
    <form onSubmit={(e) => profileEdit(e)} className='bg-white border mb-24 rounded-lg lg:col-span-9 xl:col-span-9 pb-8'>
            <div class="flex flex-row flex-wrap p-8 pb-0 mb-0">
                <div class="w-full lg:w-1/2 lg:pr-10">
                    <h4 class="mb-5 text-xl font-bold text-gray-900 dark:text-gray-100">Basic Info</h4>
                    <div class="mb-6">
                        <label for="full_name" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Full name</label>
                        <input value={fullname}  onChange={(e)=>setFullname(e.target.value)} type="text" class="input-text w-full rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" id="full_name" placeholder="Enter your full name" />
                    </div>
                    <div class="mb-6">
                        <label for="profile_tagline" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Profile Tagline</label>
                        <input value={profile_tagline}  onChange={(e)=>setProfile_tagline(e.target.value)} type="text" class="input-text w-full rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" id="profile_tagline" placeholder="Software Developer @ …" />
                    </div>
                    <div class="mb-6">
                        <label for="customFile" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Profile Photo</label>
                        <div class="relative block w-40 h-40 bg-gray-100 rounded-full shadow-xl">
                            <a href="5" target="_blank" class="block overflow-hidden rounded-full">
                                <img class="block" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1664521932605/W2LISThd6.jpeg?w=600&amp;h=600&amp;fit=crop&amp;crop=faces&amp;auto=compress" alt='red' />
                            </a>
                            <button class="absolute top-0 right-0 z-10 p-2 text-gray-700 bg-white border rounded-full">
                                <svg class="w-4 h-4 fill-current" viewBox="0 0 448 512"><path d="M296 432h16a8 8 0 008-8V152a8 8 0 00-8-8h-16a8 8 0 00-8 8v272a8 8 0 008 8zm-160 0h16a8 8 0 008-8V152a8 8 0 00-8-8h-16a8 8 0 00-8 8v272a8 8 0 008 8zM440 64H336l-33.6-44.8A48 48 0 00264 0h-80a48 48 0 00-38.4 19.2L112 64H8a8 8 0 00-8 8v16a8 8 0 008 8h24v368a48 48 0 0048 48h288a48 48 0 0048-48V96h24a8 8 0 008-8V72a8 8 0 00-8-8zM171.2 38.4A16.1 16.1 0 01184 32h80a16.1 16.1 0 0112.8 6.4L296 64H152zM384 464a16 16 0 01-16 16H80a16 16 0 01-16-16V96h320zm-168-32h16a8 8 0 008-8V152a8 8 0 00-8-8h-16a8 8 0 00-8 8v272a8 8 0 008 8z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="mb-6">
                        <label for="location" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Location</label>
                        <input value={location}  onChange={(e)=>setLocation(e.target.value)} type="text" class="input-text rounded-md w-full border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" id="location" placeholder="California, US" />
                    </div>
                    <h4 class="mt-10 mb-5 text-xl font-bold text-gray-900 dark:text-gray-100">About You</h4>
                    <div class="mb-6">
                        <label for="bio" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Profile Bio (About you)</label>
                        <textarea value={bio}  onChange={(e)=>setBio(e.target.value)} type="text" class="min-h-[30vh] input-text w-full min-h-30 input-text rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" id="bio" placeholder="I am a developer from …" ></textarea>
                    </div>
                <div class="mb-6">
                    <label for="skills" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Tech Stack</label>
                <div class="">
                <div class="relative mb-2">
                    <input type="text" class="input-text rounded-md border w-full bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" id="skills" data-toggle="dropdown" placeholder="Search technologies, topics, more…" />
                    <div class="absolute top-100 right-0 w-full h-auto bg-white dark:bg-brand-dark-grey-900 rounded-lg shadow-lg z-10" style={{"display":"none"}}></div>
                </div>
                <div class="flex flex-row flex-wrap">
                    <div class="button-primary small mr-2 mb-2 flex flex-row items-center  px-2 text-sm rounded-full border border-blue-600 bg-transparent text-blue-600 py-1 font-medium hover:bg-[#e3f2fd]">
                        <a href="0" class="mr-2">
                            <span>Python 3</span>
                        </a>
                        <button data-index="0">
                            <svg class="w-4 h-4 fill-current" viewBox="0 0 320 512"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></svg>
                        </button>
                    </div>
                    <div class="button-primary small mr-2 mb-2 flex flex-row items-center  px-2 text-sm rounded-full border border-blue-600 bg-transparent text-blue-600 py-1 font-medium hover:bg-[#e3f2fd]">
                        <a href="0" class="mr-2">
                            <span>React</span>
                        </a>
                        <button data-index="1">
                            <svg class="w-4 h-4 fill-current" viewBox="0 0 320 512"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></svg>
                        </button>
                    </div>
                    <div class="button-primary small mr-2 mb-2 flex flex-row items-center  px-2 text-sm rounded-full border border-blue-600 bg-transparent text-blue-600 py-1 font-medium hover:bg-[#e3f2fd]">
                        <a href="5" class="mr-2">
                            <span>PostgreSQL</span>
                        </a>
                        <button data-index="2">
                            <svg class="w-4 h-4 fill-current" viewBox="0 0 320 512"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></svg>
                        </button>
                    </div>
                    <div class="button-primary small mr-2 mb-2 flex flex-row items-center  px-2 text-sm rounded-full border border-blue-600 bg-transparent text-blue-600 py-1 font-medium hover:bg-[#e3f2fd]">
                        <a href="5" class="mr-2">
                            <span>Django</span>
                        </a>
                        <button data-index="3">
                            <svg class="w-4 h-4 fill-current" viewBox="0 0 320 512"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></svg>
                        </button>
                    </div>
                    <div class="button-primary small mr-2 mb-2 flex flex-row items-center  px-2 text-sm rounded-full border border-blue-600 bg-transparent text-blue-600 py-1 font-medium hover:bg-[#e3f2fd]">
                        <a href="5" class="mr-2">
                            <span>django rest framework</span>
                        </a>
                        <button data-index="4">
                            <svg class="w-4 h-4 fill-current" viewBox="0 0 320 512"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-6">
            <label for="available_for" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Available for</label>
            <textarea value={available_for}  onChange={(e)=>setAvailable_for(e.target.value)} type="text" class="input-text w-full min-h-30 available-field input-text rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent min-h-[30vh]" id="available_for" placeholder="I am available for mentoring, …"></textarea>
            <small class="block mt-1 ml-2 leading-tight text-gray-600">140/140 </small>
        </div>
                </div>
                <div class="w-full lg:w-1/2">
                    <h4 class="mb-5 text-xl font-bold text-gray-900 dark:text-gray-100">Social</h4>
                    <div class="mb-6">
                        <label for="twitter" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Twitter Profile</label>
                        <input value={twitter}  onChange={(e)=>setTwitter(e.target.value)} type="url" pattern="(http|https)://twitter\.com\/(.+)|(http|https)://www\.twitter\.com\/(.+)" class="w-full input-text rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" id="twitter" placeholder="https://twitter.com/johndoe"/>
                    </div>
                    <div class="mb-6">
                        <label for="instagram" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Instagram Profile</label>
                        <input value={instagram}  onChange={(e)=>setInstagram(e.target.value)} type="url" pattern="(http|https)://instagram\.com\/(.+)|(http|https)://www\.instagram\.com\/(.+)" class="w-full input-text rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" id="instagram" placeholder="https://instagram.com/johndoe"/>
                    </div>
                    <div class="mb-6">
                        <label for="github" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">GitHub Profile</label>
                        <input value={github}  onChange={(e)=>setGithub(e.target.value)} type="url" pattern="(http|https)://github\.com\/(.+)|(http|https)://www\.github\.com\/(.+)" class="w-full input-text rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" id="github" placeholder="https://github.com/hashnode" />
                    </div>
                    <div class="mb-6">
                        <label for="stackoverflow" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">StackOverflow Profile</label>
                        <input value={stackOverflow}  onChange={(e)=>setStackOverflow(e.target.value)} type="url" pattern="(http|https)://stackoverflow\.com\/(.+)|(http|https)://www\.stackoverflow\.com\/(.+)" class="w-full input-text rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" id="stackoverflow" placeholder="https://stackoverflow.com/users/22656/jon-skeet"/>
                    </div>
                    <div class="mb-6">
                        <label for="facebook" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Facebook Profile</label>
                        <input value={facebook}  onChange={(e)=>setFacebook(e.target.value)} type="url" pattern="(http|https)://facebook\.com\/(.+)|(http|https)://www\.facebook\.com\/(.+)|(http|https)://fb\.com\/(.+)|(http|https)://www\.fb\.com\/(.+)" class="w-full input-text rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" id="facebook" placeholder="https://facebook.com/johndoe" />
                    </div>
                    <div class="mb-6">
                        <label for="website" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Website URL</label>
                        <input value={website}  onChange={(e)=>setWebsite(e.target.value)} type="url" class="input-text rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent w-full " id="website" placeholder="https://johndoe.com"/>
                    </div>
                    <div class="mb-6">
                        <label for="linkedin" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">LinkedIn URL</label>
                        <input value={linkedin}  onChange={(e)=>setLinkedin(e.target.value)} type="url" pattern="(http|https)://linkedin\.com\/in\/(.+)|(http|https)://www\.linkedin\.com\/in/(.+)|(http|https)://linkedin\.com\/company\/(.+)|(http|https)://www\.linkedin\.com\/company/(.+)" className=" w-full input-text rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" id="linkedin" placeholder="https://www.linkedin.com/in/johndoe" />
                    </div>
                    <div class="mb-6">
                        <label for="youtube" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">YouTube Channel</label>
                        <input value={youtube}  onChange={(e)=>setYoutube(e.target.value)} type="url" pattern="(http|https)://youtube\.com\/channel\/(.+)|(http|https)://www\.youtube\.com\/channel\/(.+)|(http|https)://youtube\.com\/c\/(.+)||(http|https)://www\.youtube\.com\/c\/(.+)|" class=" w-full input-text rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" id="youtube" placeholder="https://www.youtube.com/channel/channel-name" />
                    </div>
                    <h4 class="mt-10 mb-5 text-xl font-bold text-gray-900 dark:text-gray-100">Profile Identity</h4>
                    <div class="mb-6">
                        <label for="username" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Username</label>
                        <small class="block mb-2 -mt-2 text-base italic text-gray-500 dark:text-gray-400">You can change username once. This is the last chance.</small>
                        <div class="relative">
                            <input type="text" class="input-text rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent w-full  " id="username" placeholder="" value="ZakariaBrahimi" />
                            <div class="absolute top-0 right-0 mt-4 mr-4 z-100"></div>
                        </div>
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Email address</label>
                        <small class="block mb-2 -mt-2 text-base italic text-gray-500 dark:text-gray-400">Changing your email address might break your OAuth sign-in if your social media accounts do not use the same email address. Please use magic link sign-in if you encounter such an issue.</small>
                        <input value={email}  onChange={(e)=>setEmail(e.target.value)}  type="email" class="input-text rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent w-full " id="email" placeholder=""/>
                    </div>
                    <div class="form-check">
                        <label class="flex flex-row items-center mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300" for="showEmail">
                            <input type="checkbox" class="w-4 h-4 mr-2 input-text  rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" value="" id="showEmail" />
                            <span>Show my email on profile page</span>
                        </label>
                        <small class="block mb-2 -mt-2 text-base italic text-gray-500 dark:text-gray-400">This will publicly show your email address on your profile.</small>
                    </div>
                </div>
                <div class="pt-4 mt-5">
                    <button type='submit' class="button-primary big px-4 py-2 rounded-full border border-blue-600 text-blue-600 font-medium text-lg hover:bg-[#e3f2fd]">Update</button>
                </div>
            </div>
        
    </form>
  )
}

export default EditProfile