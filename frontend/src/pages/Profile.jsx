import React, {useContext, useEffect, useState} from 'react'
import LeftSidebar from '../components/LeftSidebar'
import MyPicture from '../assets/img/myPicture.jpg'
import AuthContext from '../context/AuthContext'
import Moment from 'react-moment';
import {Link, useParams} from 'react-router-dom'
import { axiosAPI } from '../axios';


const Profile = () => {
    const [profileData, setProfileData] = useState(null)
    const { user_id } = useParams();
    const get_profile_data = async () => {
        try{
            let {data} = await axiosAPI({                                                                                                                                                                                                                                                                                                    
                url: `/users/${user_id}/`,
                method: 'get',
                headers:{
                    'Content-Type': 'application/json',
                },
            })
            setProfileData(data)
            
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() =>{
        get_profile_data()
    }, [])


  return (
    <div className='grid grid-cols-12 gap-6'>
        <LeftSidebar/>
        <section className='bg-white border rounded-lg px-5 border-b-0 lg:col-span-10 col-span-full'>
            <div className='py-5 mt-6 mb-4 flex flex-col gap-2 md:flex-row md:justify-between'>
                <div className='mb-5 flex gap-8 flex-col md:flex-row'>
                    <img className='rounded-full w-24 h-24' src={'http://127.0.0.1:8000' + profileData?.img} alt="" />
                    <div className='text-[#111827]'>
                        <h1 className='text-3xl font-bold'>{profileData?.fullname}</h1>
                        <p className='mt-3 text-lg'>{profileData?.profile_tagline}</p>
                    </div>
                </div>
                <div className='mt-2 flex gap-4'>
                    <Link to='/settings'>
                        <button className='text-white flex items-center gap-2 py-2 px-5 w-fit h-fit bg-blue-600 border rounded-full'>
                            <svg fill='white' className="w-4 h-4" viewBox="0 0 512 512"><path d="M493.255 56.236l-37.49-37.49c-24.993-24.993-65.515-24.994-90.51 0L12.838 371.162.151 485.346c-1.698 15.286 11.22 28.203 26.504 26.504l114.184-12.687 352.417-352.417c24.992-24.994 24.992-65.517-.001-90.51zM164.686 347.313c6.249 6.249 16.379 6.248 22.627 0L368 166.627l30.059 30.059L174 420.745V386h-48v-48H91.255l224.059-224.059L345.373 144 164.686 324.687c-6.249 6.248-6.249 16.378 0 22.626zm-38.539 121.285l-58.995 6.555-30.305-30.305 6.555-58.995L63.255 366H98v48h48v34.745l-19.853 19.853zm344.48-344.48l-49.941 49.941-82.745-82.745 49.941-49.941c12.505-12.505 32.748-12.507 45.255 0l37.49 37.49c12.506 12.506 12.507 32.747 0 45.255z"></path></svg>
                                <span>Edit</span>
                        </button>
                    </Link>
                    <button type='button' onClick={()=>navigator.clipboard.writeText(window.location.href)} className=' w-fit h-fit font-medium p-3 rounded-full border hover:bg-[#e5e7eb]'>
                        <svg fill='' class="w-5 h-5" viewBox="0 0 500 500"><path d="M432.31 135.261h-47.672a17.595 17.595 0 0 0-12.442 30.039c3.3 3.3 7.775 5.154 12.442 5.154h30.075v294.353H86.193V170.454h30.085a17.595 17.595 0 0 0 12.442-30.039 17.595 17.595 0 0 0-12.442-5.154H68.596A17.61 17.61 0 0 0 51 152.858v329.546A17.597 17.597 0 0 0 68.596 500H432.31a17.586 17.586 0 0 0 17.596-17.596V152.858a17.597 17.597 0 0 0-17.596-17.597Z" fill="inherit"></path><path d="M204.521 95.101a17.553 17.553 0 0 0 12.81-5.53l26.083-27.652v206.13a17.595 17.595 0 0 0 30.039 12.442c3.3-3.3 5.154-7.775 5.154-12.442V61.809L304.75 89.59a17.609 17.609 0 0 0 12.332 5.711 17.6 17.6 0 0 0 16.733-10.43 17.61 17.61 0 0 0 .301-13.588 17.603 17.603 0 0 0-3.755-5.825L274.997 6.717a18.147 18.147 0 0 0-1.809-2.011A17.51 17.51 0 0 0 263.223.06h-.503l-.955-.06h-2.283c-.271 0-.543.06-.814.09-.272.03-.593.08-.885.141l-.845.171-.824.221c-.282.08-.553.161-.825.262-.271.1-.543.18-.804.291l-.784.332-.785.382-.744.413-.744.442-.724.503-.663.503c-.252.2-.493.402-.724.613l-.413.352-.17.18c-.232.222-.443.453-.664.695-.221.241-.372.392-.543.593-.171.201-.302.382-.453.583L191.771 65.49a17.59 17.59 0 0 0-3.321 18.98 17.588 17.588 0 0 0 16.071 10.632Z" fill="inherit"></path></svg>
                    </button>
                </div>
            </div>
            <div className='flex flex-col-reverse sm:flex-row-reverse justify-center items-start sm:items-center gap-4 px-4 py-7 mb-5 border opacity-60 rounded-lg'>
                <div className='flex flex-col sm:flex-row justify-center items-start sm:items-center gap-4'>
                    {/* LOCATION */}
                    <div className='flex gap-2 items-center md:justify-center w-fit'>
                        <svg class="w-5 h-5" viewBox="0 0 384 512"><path d="M192 96c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64zm0-256C85.961 0 0 85.961 0 192c0 77.413 26.97 99.031 172.268 309.67 9.534 13.772 29.929 13.774 39.465 0C357.03 291.031 384 269.413 384 192 384 85.961 298.039 0 192 0zm0 473.931C52.705 272.488 32 256.494 32 192c0-42.738 16.643-82.917 46.863-113.137S149.262 32 192 32s82.917 16.643 113.137 46.863S352 149.262 352 192c0 64.49-20.692 80.47-160 281.931z"></path></svg>
                        <span> {profileData?.location} </span>
                    </div>
                    {/* MEMBER SINCE */}
                    <div className='flex gap-3 items-center md:justify-center'>
                        <svg className="w-4 h-4" viewBox="0 0 448 512"><path d="M400 64h-48V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H128V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h352c8.8 0 16 7.2 16 16v48H32v-48c0-8.8 7.2-16 16-16zm352 384H48c-8.8 0-16-7.2-16-16V192h384v272c0 8.8-7.2 16-16 16zM148 320h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 96h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm192 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12z"></path></svg>
                        <div>
                            <span>Member Since </span>
                            <Moment fromNow>{profileData?.date_joined}</Moment> 
                            {/*TODO: there are -in- added auto to after since --> remove it later inshallah*/}
                        </div>
                    </div>
                </div>
                {/* SOCIAL MEDIA ACCOUNTS */}
                <div className='flex justify-start sm:justify-center items-center gap-1'>
                    {/* LINKEDIN */}
                    <Link target="_blank" rel="noopener noreferrer" href={profileData?.linkedin} className='flex gap-3 items-center md:justify-center p-2 hover:bg-slate-200 rounded-full w-fit'>
                        <svg class="w-5 h-5" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                    </Link>
                    {/* GITHUB */}
                    <a target="_blank" rel="noopener noreferrer" href={profileData?.github}  className='flex items-center md:justify-center p-2 hover:bg-slate-200 rounded-full w-fit'>
                        <svg class="w-5 h-5" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                    </a>
                    {/* STACKOVERFLOW */}
                    <a target="_blank" rel="noopener noreferrer" href={profileData?.stackOverflow} className='flex items-center md:justify-center p-2 hover:bg-slate-200 rounded-full w-fit'>
                        <svg class="h-5 w-5" viewBox="0 0 24 24"><path d="M17.36 20.2v-5.38h1.79V22H3v-7.18h1.8v5.38h12.56M6.77 14.32l.37-1.76 8.79 1.85-.37 1.76-8.79-1.85m1.16-4.21l.76-1.61 8.14 3.78-.76 1.62-8.14-3.79m2.26-3.99l1.15-1.38 6.9 5.76-1.15 1.37-6.9-5.75m4.45-4.25L20 9.08l-1.44 1.07-5.36-7.21 1.44-1.07M6.59 18.41v-1.8h8.98v1.8H6.59z"></path></svg>
                    </a>
                    {/* INSTAGRAM */}
                    <a target="_blank" rel="noopener noreferrer" href={profileData?.instagram} className='flex items-center md:justify-center p-2 hover:bg-slate-200 rounded-full w-fit'>
                        <svg class="w-5 h-5" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
                    </a>
                    {/* TWITTER */}
                    <a target="_blank" rel="noopener noreferrer" href={profileData?.twitter} className='flex items-center md:justify-center p-2 hover:bg-slate-200 rounded-full w-fit'>
                        <svg class="h-5 w-5" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                    </a>
                </div>
            </div>
            <div className='px-4 py-7 mb-5 border rounded-lg flex flex-col gap-3 opacity-80 min-h-[30vh]'>
                <p className=' text-xl font-bold mb-3'>About Me</p>
                {!profileData?.bio &&
                    <Link to='/settings#bio'>
                        <button className='flex gap-2 py-1 px-3 font-medium border rounded-full w-fit hover:bg-[#e5e7eb]'>
                            <svg class="w-5 h-5" viewBox="0 0 384 512"><path d="M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path></svg>
                            <span className='opacity-90'>Add Bio</span>
                        </button>
                    </Link>
                }
                
                
                {profileData?.bio ? 
                    <p>{profileData?.bio}</p>
                        : 
                    <p className='opacity-75'>Your bio is empty. Tell the world who you are by writing a short description about you.</p>}
            </div>
            <div className='px-4 py-7 mb-5 border rounded-lg flex flex-col gap-3 opacity-80 min-h-[30vh]'>
                <p className=' text-xl font-bold mb-3'>My Tech Stack</p>
                <div className='flex flex-wrap'>
                    <a className='p-2 mb-2  mr-2 border rounded-lg bg-[#f3f4f6] hover:border-[#6b7280]' href="5">Python 3</a>
                    <a className='p-2 mb-2  mr-2 border rounded-lg bg-[#f3f4f6] hover:border-[#6b7280]' href="5">React</a>
                    <a className='p-2 mb-2  mr-2 border rounded-lg bg-[#f3f4f6] hover:border-[#6b7280]' href="5">PostgreSQL</a>
                    <a className='p-2 mb-2  mr-2 border rounded-lg bg-[#f3f4f6] hover:border-[#6b7280]' href="5">Django</a>
                    <a className='p-2 mb-2  mr-2 border rounded-lg bg-[#f3f4f6] hover:border-[#6b7280]' href="5">Django rest framework</a>
                </div>
            </div>
            <div className='px-4 py-7 mb-5 border rounded-lg flex flex-col gap-3 opacity-80 min-h-[30vh]'>
                <p className=' text-xl font-bold mb-3'>I am available for</p>


                {!profileData?.available_for ?
                    <Link to='/settings#availableFor'>
                        <button className='flex gap-2 py-1 px-3 font-medium border rounded-full w-fit hover:bg-[#e5e7eb]'>
                            <svg class="w-5 h-5" viewBox="0 0 384 512"><path d="M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path></svg>
                            <span className='opacity-90'>Add Available for</span>
                        </button>
                    </Link>
                    :
                    <p>{profileData?.available_for}</p>
                }
            </div>
            <footer className='flex flex-col items-center justify-center gap-4 mt-16'>
                <div class="flex flex-col items-center justify-center gap-5 mb-8 text-[#4b5563]">
                    <p class="css-fwylhz">© Hashnode 2022</p>
                    <div className='flex gap-6'>
                        <a href="/privacy" class="css-3lg6qr">Privacy Policy</a>
                        <a href="/terms" class="css-3lg6qr">Terms</a>
                        <a href="/code-of-conduct" class="css-3lg6qr">Code of Conduct</a>
                    </div>
                </div>
                <div class="css-17b2io4">
                    <button type='button' className="w-46">
                        <svg viewBox="0 0 688 118" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.95 38.655c-10.6 10.6-10.6 27.784 0 38.383l30.705 30.706c10.6 10.599 27.784 10.599 38.383 0l30.706-30.706c10.599-10.6 10.599-27.784 0-38.383L77.038 7.95c-10.6-10.599-27.784-10.599-38.383 0L7.95 38.655zm63.33 32.626c7.42-7.42 7.42-19.449 0-26.868-7.419-7.42-19.448-7.42-26.867 0-7.42 7.42-7.42 19.448 0 26.868 7.42 7.419 19.448 7.419 26.868 0z" fill="#2962FF"></path><path d="M161.437 78.362c.043-8.549 5.268-13.558 12.781-13.558 7.47 0 11.874 4.793 11.831 12.954v38.947h18.394V74.476c.043-15.544-9.111-24.957-22.928-24.957-10.06 0-16.796 4.75-19.819 12.565h-.777V28.276h-17.876v88.429h18.394V78.362zM232.967 117.957c9.801 0 16.148-4.275 19.387-10.449h.518v9.197h17.444V71.972c0-15.803-13.385-22.453-28.152-22.453-15.89 0-26.339 7.6-28.887 19.69l17.013 1.381c1.252-4.404 5.181-7.642 11.787-7.642 6.261 0 9.845 3.152 9.845 8.592v.26c0 4.274-4.534 4.835-16.062 5.958-13.127 1.209-24.914 5.613-24.914 20.423 0 13.126 9.369 19.776 22.021 19.776zm5.267-12.695c-5.656 0-9.715-2.633-9.715-7.685 0-5.182 4.275-7.73 10.752-8.636 4.015-.561 10.578-1.511 12.78-2.98V93c0 6.951-5.742 12.262-13.817 12.262zM334.904 69.295c-1.64-12.22-11.485-19.776-28.238-19.776-16.969 0-28.152 7.859-28.109 20.64-.043 9.93 6.218 16.364 19.171 18.955l11.485 2.288c5.786 1.166 8.42 3.282 8.506 6.606-.086 3.93-4.361 6.736-10.794 6.736-6.563 0-10.924-2.806-12.047-8.204l-18.091.95c1.727 12.695 12.521 20.51 30.095 20.51 17.185 0 29.49-8.765 29.534-21.848-.044-9.586-6.304-15.329-19.171-17.962l-12.004-2.418c-6.175-1.339-8.463-3.455-8.42-6.65-.043-3.972 4.448-6.563 10.147-6.563 6.39 0 10.19 3.498 11.097 7.772l16.839-1.036zM361.529 78.362c.043-8.549 5.267-13.558 12.78-13.558 7.47 0 11.874 4.793 11.831 12.954v38.947h18.394V74.476c.043-15.544-9.111-24.957-22.928-24.957-10.06 0-16.796 4.75-19.818 12.565h-.778V28.276h-17.875v88.429h18.394V78.362zM432.54 78.362c.043-8.549 5.138-13.558 12.565-13.558 7.383 0 11.831 4.836 11.787 12.954v38.947h18.394V74.476c0-15.457-9.067-24.957-22.884-24.957-9.845 0-16.969 4.836-19.948 12.565h-.778V50.383h-17.53v66.322h18.394V78.362zM514.885 118c20.122 0 32.643-13.774 32.643-34.197 0-20.553-12.521-34.284-32.643-34.284-20.121 0-32.642 13.731-32.642 34.284 0 20.423 12.521 34.197 32.642 34.197zm.087-14.249c-9.283 0-14.033-8.506-14.033-20.078s4.75-20.12 14.033-20.12c9.11 0 13.86 8.549 13.86 20.12 0 11.572-4.75 20.078-13.86 20.078zM579.064 117.784c10.708 0 16.278-6.174 18.826-11.701h.777v10.622h18.135v-88.43h-18.351v33.248h-.561c-2.462-5.397-7.773-12.004-18.869-12.004-14.551 0-26.857 11.313-26.857 34.111 0 22.194 11.788 34.154 26.9 34.154zm5.829-14.637c-9.024 0-13.947-8.032-13.947-19.603 0-11.486 4.836-19.387 13.947-19.387 8.938 0 13.947 7.556 13.947 19.387 0 11.83-5.096 19.603-13.947 19.603zM657.286 118c16.408 0 27.461-7.988 30.052-20.294l-17.012-1.122c-1.857 5.051-6.606 7.685-12.738 7.685-9.197 0-15.026-6.088-15.026-15.976v-.043h45.165v-5.052c0-22.539-13.645-33.679-31.175-33.679-19.517 0-32.168 13.86-32.168 34.327 0 21.028 12.479 34.154 32.902 34.154zm-14.724-41.149c.389-7.556 6.132-13.601 14.292-13.601 7.988 0 13.515 5.7 13.558 13.601h-27.85z" fill="#333333"></path></svg>          
                    </button>
                </div>
            </footer>
        </section>
    </div>
  )
}

export default Profile