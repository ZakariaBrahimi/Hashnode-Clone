import React, {useContext, useEffect} from 'react'
import LeftSidebar from '../components/LeftSidebar'
import MyPicture from '../assets/img/myPicture.jpg'
import AuthContext from '../context/AuthContext'
import Moment from 'react-moment';
import {Link} from 'react-router-dom'


const Profile = () => {
    let {userDetails, userData} = useContext(AuthContext)
    useEffect(() => {
        userDetails();
    }, [])
  return (
    <div className='grid grid-cols-12 gap-6'>
        <LeftSidebar/>

        <section className='bg-white border rounded-lg px-5 border-b-0 lg:col-span-10 col-span-full'>
            <div className='py-5 mt-6 mb-4 flex flex-col gap-2 md:flex-row md:justify-between'>
                <div className='mb-5 flex gap-8 flex-col md:flex-row'>
                    <img className='rounded-full w-24 h-24' src={MyPicture} alt="" />
                    <div className='text-[#111827]'>
                        <h1 className='text-3xl font-bold'>{userData['fullname']}</h1>
                        <p className='mt-3 text-lg'>{userData['profile_tagline']}</p>
                    </div>
                </div>
                <div className='mt-2 flex gap-4'>
                    <Link to='/settings'>
                        <button className='text-white flex items-center gap-2 py-2 px-5 w-fit h-fit bg-blue-600 border rounded-full'>
                            <svg fill='white' className="w-4 h-4" viewBox="0 0 512 512"><path d="M493.255 56.236l-37.49-37.49c-24.993-24.993-65.515-24.994-90.51 0L12.838 371.162.151 485.346c-1.698 15.286 11.22 28.203 26.504 26.504l114.184-12.687 352.417-352.417c24.992-24.994 24.992-65.517-.001-90.51zM164.686 347.313c6.249 6.249 16.379 6.248 22.627 0L368 166.627l30.059 30.059L174 420.745V386h-48v-48H91.255l224.059-224.059L345.373 144 164.686 324.687c-6.249 6.248-6.249 16.378 0 22.626zm-38.539 121.285l-58.995 6.555-30.305-30.305 6.555-58.995L63.255 366H98v48h48v34.745l-19.853 19.853zm344.48-344.48l-49.941 49.941-82.745-82.745 49.941-49.941c12.505-12.505 32.748-12.507 45.255 0l37.49 37.49c12.506 12.506 12.507 32.747 0 45.255z"></path></svg>
                                <span>Edit</span>
                        </button>
                    </Link>
                    <button className=' w-fit h-fit font-medium p-3 rounded-full border hover:bg-[#e5e7eb]'>
                        <svg fill='' class="w-5 h-5" viewBox="0 0 500 500"><path d="M432.31 135.261h-47.672a17.595 17.595 0 0 0-12.442 30.039c3.3 3.3 7.775 5.154 12.442 5.154h30.075v294.353H86.193V170.454h30.085a17.595 17.595 0 0 0 12.442-30.039 17.595 17.595 0 0 0-12.442-5.154H68.596A17.61 17.61 0 0 0 51 152.858v329.546A17.597 17.597 0 0 0 68.596 500H432.31a17.586 17.586 0 0 0 17.596-17.596V152.858a17.597 17.597 0 0 0-17.596-17.597Z" fill="inherit"></path><path d="M204.521 95.101a17.553 17.553 0 0 0 12.81-5.53l26.083-27.652v206.13a17.595 17.595 0 0 0 30.039 12.442c3.3-3.3 5.154-7.775 5.154-12.442V61.809L304.75 89.59a17.609 17.609 0 0 0 12.332 5.711 17.6 17.6 0 0 0 16.733-10.43 17.61 17.61 0 0 0 .301-13.588 17.603 17.603 0 0 0-3.755-5.825L274.997 6.717a18.147 18.147 0 0 0-1.809-2.011A17.51 17.51 0 0 0 263.223.06h-.503l-.955-.06h-2.283c-.271 0-.543.06-.814.09-.272.03-.593.08-.885.141l-.845.171-.824.221c-.282.08-.553.161-.825.262-.271.1-.543.18-.804.291l-.784.332-.785.382-.744.413-.744.442-.724.503-.663.503c-.252.2-.493.402-.724.613l-.413.352-.17.18c-.232.222-.443.453-.664.695-.221.241-.372.392-.543.593-.171.201-.302.382-.453.583L191.771 65.49a17.59 17.59 0 0 0-3.321 18.98 17.588 17.588 0 0 0 16.071 10.632Z" fill="inherit"></path></svg>
                    </button>
                </div>
            </div>
            <div className='px-4 py-7 mb-5 border opacity-60 rounded-lg flex gap-3 items-center md:justify-center'>
                <svg className="w-4 h-4" viewBox="0 0 448 512"><path d="M400 64h-48V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H128V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h352c8.8 0 16 7.2 16 16v48H32v-48c0-8.8 7.2-16 16-16zm352 384H48c-8.8 0-16-7.2-16-16V192h384v272c0 8.8-7.2 16-16 16zM148 320h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 96h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm192 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12z"></path></svg>
                <span>Member Since</span>
                <Moment fromNow>{userData['date_joined']}</Moment> 
                {/*TODO: there are -in- added auto to after since --> remove it later inshallah*/}
            </div>
            <div className='px-4 py-7 mb-5 border rounded-lg flex flex-col gap-3 opacity-80 min-h-[30vh]'>
                <p className=' text-xl font-bold mb-3'>About Me</p>
                {!userData['bio'] &&
                    <Link to='/settings#bio'>
                        <button className='flex gap-2 py-1 px-3 font-medium border rounded-full w-fit hover:bg-[#e5e7eb]'>
                            <svg class="w-5 h-5" viewBox="0 0 384 512"><path d="M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path></svg>
                            <span className='opacity-90'>Add Bio</span>
                        </button>
                    </Link>
                }
                
                
                {userData['bio'] ? 
                    <p>{userData['bio']}</p>
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


                {!userData['available_for'] &&
                    <Link to='/settings#availableFor'>
                    <button className='flex gap-2 py-1 px-3 font-medium border rounded-full w-fit hover:bg-[#e5e7eb]'>
                        <svg class="w-5 h-5" viewBox="0 0 384 512"><path d="M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path></svg>
                        <span className='opacity-90'>Add Available for</span>
                    </button>
                </Link>
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