import React from 'react'

const AccountSettings = () => {
  return (
    <div>
        <div class="p-4 mb-2 bg-white border rounded-lg dark:text-gray-400 dark:bg-gray-900 dark:border-gray-800">
            <h1 class="text-2xl font-bold">User Settings</h1>
        </div>
        <div class="flex flex-row items-end mb-2 overflow-auto text-sm font-bold text-gray-700 uppercase bg-white border rounded-lg whitespace-nowrap lg:items-start lg:flex-col dark:bg-gray-900 dark:border-gray-800 dark:text-gray-400">
            <a class="hover:bg-[#f3f4f6] px-3 md:px-6 py-4 w-full flex flex-row items-center text-accent-blue-A700" href="/settings">
                <svg  class="w-6 h-6 mr-4 opacity-75 fill-current" viewBox="0 0 496 512">
                    <path fill='blue' d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm128 421.6c-35.9 26.5-80.1 42.4-128 42.4s-92.1-15.9-128-42.4V416c0-35.3 28.7-64 64-64 11.1 0 27.5 11.4 64 11.4 36.6 0 52.8-11.4 64-11.4 35.3 0 64 28.7 64 64v13.6zm30.6-27.5c-6.8-46.4-46.3-82.1-94.6-82.1-20.5 0-30.4 11.4-64 11.4S204.6 320 184 320c-48.3 0-87.8 35.7-94.6 82.1C53.9 363.6 32 312.4 32 256c0-119.1 96.9-216 216-216s216 96.9 216 216c0 56.4-21.9 107.6-57.4 146.1zM248 120c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88zm0 144c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z"></path>
                </svg>
                <span className='text-blue-600'>Profile</span>
            </a>
            <a class="hover:bg-[#f3f4f6] px-3 md:px-6 py-4 w-full flex flex-row items-center text-accent-blue-A700" href="/settings">
                <svg class="w-6 h-6 mr-4 opacity-75 fill-current" viewBox="0 0 512 512"><path d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"></path>
                </svg>
                <span>Email Notifications</span>
            </a>
            <a class="hover:bg-[#f3f4f6] px-3 md:px-6 py-4 w-full flex flex-row items-center text-accent-blue-A700" href="/settings">
            <svg class="w-6 h-6 mr-4 opacity-75 fill-current" viewBox="0 0 576 512"><path d="M228.5 511.8l-25-7.1c-3.2-.9-5-4.2-4.1-7.4L340.1 4.4c.9-3.2 4.2-5 7.4-4.1l25 7.1c3.2.9 5 4.2 4.1 7.4L235.9 507.6c-.9 3.2-4.3 5.1-7.4 4.2zm-75.6-125.3l18.5-20.9c1.9-2.1 1.6-5.3-.5-7.1L49.9 256l121-102.5c2.1-1.8 2.4-5 .5-7.1l-18.5-20.9c-1.8-2.1-5-2.3-7.1-.4L1.7 252.3c-2.3 2-2.3 5.5 0 7.5L145.8 387c2.1 1.8 5.3 1.6 7.1-.5zm277.3.4l144.1-127.2c2.3-2 2.3-5.5 0-7.5L430.2 125.1c-2.1-1.8-5.2-1.6-7.1.4l-18.5 20.9c-1.9 2.1-1.6 5.3.5 7.1l121 102.5-121 102.5c-2.1 1.8-2.4 5-.5 7.1l18.5 20.9c1.8 2.1 5 2.3 7.1.4z"></path></svg>
                <span>Developer</span>
            </a>
            <a class="hover:bg-[#f3f4f6] px-3 md:px-6 py-4 w-full flex flex-row items-center text-accent-blue-A700" href="/settings">
                <svg class="w-6 h-6 mr-4 opacity-75 fill-current" viewBox="0 0 512 512"><path d="M168 255.1c0-47.7 39.4-88 88-88s88 40.3 88 88c0 49.5-39.4 88.9-88 88.9s-88-39.4-88-88.9zm88-56c-30.9 0-56 26-56 56 0 31.8 25.1 56 56 56s56-24.2 56-56c0-30-25.1-56-56-56zM65.67 230.6l-40.33-36.8c-11.12-10.1-13.68-26.6-6.16-39.6l30.24-52.4c7.52-13.02 23.09-19.05 37.42-14.48l51.96 16.58c13.4-10.34 28.2-18.94 44-25.47l11.7-53.27C197.7 10.47 210.7 0 225.8 0h60.4c15.1 0 28.1 10.47 31.3 25.16l11.7 53.27c14.9 6.53 30.6 15.13 44 25.47l52-16.58c14.3-4.57 29.9 1.46 37.4 14.48l30.2 52.4c7.5 13 5 29.5-6.1 39.6l-40.4 36.8c1.1 8.3 1.7 16.8 1.7 24.5 0 9.5-.6 18-1.7 26.3l40.4 36.8c11.1 10.1 13.6 26.6 6.1 39.6l-30.2 52.4c-7.5 13-23.1 19-37.4 14.5l-52-16.6c-13.4 10.3-29.1 18.9-44 25.5l-11.7 53.2c-3.2 14.7-16.2 25.2-31.3 25.2h-60.4c-15.1 0-28.1-10.5-31.3-25.2l-11.7-53.2c-15.8-6.6-30.6-15.2-44-25.5l-51.96 16.6c-14.33 4.5-29.9-1.5-37.42-14.5l-30.24-52.4c-7.52-13-4.96-29.5 6.16-39.6l40.33-36.8c-1.1-8.3-1.67-16.8-1.67-26.3 0-7.7.57-16.2 1.67-24.5zm92.73-101.4-13.3 10.3-67.97-21.7-30.24 52.4 52.69 48-2.19 16.6c-.92 6.9-1.39 14-1.39 20.3 0 8.1.47 15.2 1.39 22.1l2.19 16.6-52.69 48 30.24 52.4 67.97-21.7 13.3 10.3c11.1 8.6 23.5 15.8 36.6 20.3l15.5 7.3 15.3 69.6h60.4l15.3-69.6 14.6-7.3c14-4.5 26.4-11.7 37.5-20.3l13.3-10.3 68 21.7 30.2-52.4-52.7-48 2.2-16.6c.9-6.9 1.4-14 1.4-21.2 0-7.2-.5-14.3-1.4-21.2l-2.2-16.6 52.7-48-30.2-52.4-68 21.7-13.3-10.3c-11.1-8.6-23.5-15.8-37.5-21.2l-14.6-6.4L286.2 32h-60.4l-15.3 69.6L195 108c-13.1 5.4-25.5 12.6-36.6 21.2z"></path></svg>
                <span>Account</span>
            </a>
            
        </div>
        <div>
            <div class="flex flex-row flex-wrap p-8">
                <div class="w-full lg:w-1/2 lg:pr-10">
                    <h4 class="mb-5 text-xl font-bold text-gray-900 dark:text-gray-100">Basic Info</h4>
                    <div class="mb-6">
                        <label for="nameField" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Full name</label>
                        <input type="text" class="input-text rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" id="nameField" placeholder="Enter your full name" value="Zakaria Abdessamed Brahimi" />
                    </div>
                    <div class="mb-6">
                        <label for="tagline" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Profile Tagline</label>
                        <input type="text" class="input-text rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" id="tagline" placeholder="Software Developer @ …" value="I am Django Back-end Developer looking for real-world opportunities" />
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
                        <input type="text" class="input-text rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" id="location" placeholder="California, US" value="" />
                    </div>
                    <h4 class="mt-10 mb-5 text-xl font-bold text-gray-900 dark:text-gray-100">About You</h4>
                    <div class="mb-6">
                        <label for="moreAboutYou" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Profile Bio (About you)</label>
                        <textarea type="text" class="min-h-[30vh] input-text min-h-30 input-text rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" id="moreAboutYou" placeholder="I am a developer from …" ></textarea>
                    </div>
                <div class="mb-6">
                    <label for="skills" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Tech Stack</label>
                <div class="">
                <div class="relative mb-2">
                    <input type="text" class="input-text rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" id="skills" data-toggle="dropdown" placeholder="Search technologies, topics, more…" />
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
            <label for="availableFor" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Available for</label>
            <textarea type="text" class="input-text min-h-30 available-field input-text rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent min-h-[30vh]" id="availableFor" placeholder="I am available for mentoring, …"></textarea>
            <small class="block mt-1 ml-2 leading-tight text-gray-600">140/140 </small>
        </div>
    </div>
    <div class="w-full lg:w-1/2">
        <h4 class="mb-5 text-xl font-bold text-gray-900 dark:text-gray-100">Social</h4>
        <div class="mb-6">
            <label for="twitter" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Twitter Profile</label>
            <input type="url" pattern="(http|https)://twitter\.com\/(.+)|(http|https)://www\.twitter\.com\/(.+)" class="input-text rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" id="twitter" placeholder="https://twitter.com/johndoe" value=""/>
        </div>
        <div class="mb-6">
            <label for="instagram" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Instagram Profile</label>
            <input type="url" pattern="(http|https)://instagram\.com\/(.+)|(http|https)://www\.instagram\.com\/(.+)" class="input-text rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" id="instagram" placeholder="https://instagram.com/johndoe" value="" />
        </div>
        <div class="mb-6">
            <label for="github" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">GitHub Profile</label>
            <input type="url" pattern="(http|https)://github\.com\/(.+)|(http|https)://www\.github\.com\/(.+)" class="input-text rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" id="github" placeholder="https://github.com/hashnode" value="" />
        </div>
        <div class="mb-6">
            <label for="stackoverflow" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">StackOverflow Profile</label>
            <input type="url" pattern="(http|https)://stackoverflow\.com\/(.+)|(http|https)://www\.stackoverflow\.com\/(.+)" class="input-text rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" id="stackoverflow" placeholder="https://stackoverflow.com/users/22656/jon-skeet" value="" />
        </div>
        <div class="mb-6">
            <label for="facebook" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Facebook Profile</label>
            <input type="url" pattern="(http|https)://facebook\.com\/(.+)|(http|https)://www\.facebook\.com\/(.+)|(http|https)://fb\.com\/(.+)|(http|https)://www\.fb\.com\/(.+)" class="input-text rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" id="facebook" placeholder="https://facebook.com/johndoe" value="" />
        </div>
        <div class="mb-6">
            <label for="website" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Website URL</label>
            <input type="url" class="input-text rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" id="website" placeholder="https://johndoe.com" value="" />
        </div>
        <div class="mb-6">
            <label for="linkedin" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">LinkedIn URL</label>
            <input type="url" pattern="(http|https)://linkedin\.com\/in\/(.+)|(http|https)://www\.linkedin\.com\/in/(.+)|(http|https)://linkedin\.com\/company\/(.+)|(http|https)://www\.linkedin\.com\/company/(.+)" class="input-text rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" id="linkedin" placeholder="https://www.linkedin.com/in/johndoe" value="" />
        </div>
        <div class="mb-6">
            <label for="youtube" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">YouTube Channel</label>
            <input type="url" pattern="(http|https)://youtube\.com\/channel\/(.+)|(http|https)://www\.youtube\.com\/channel\/(.+)|(http|https)://youtube\.com\/c\/(.+)||(http|https)://www\.youtube\.com\/c\/(.+)|" class="input-text rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" id="youtube" placeholder="https://www.youtube.com/channel/channel-name" value="" />
        </div>
        <h4 class="mt-10 mb-5 text-xl font-bold text-gray-900 dark:text-gray-100">Profile Identity</h4>
        <div class="mb-6">
            <label for="username" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Username</label>
            <small class="block mb-2 -mt-2 text-base italic text-gray-500 dark:text-gray-400">You can change username once. This is the last chance.</small>
            <div class="relative">
                <input type="text" class="input-text rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent " id="username" placeholder="" value="ZakariaBrahimi" />
                <div class="absolute top-0 right-0 mt-4 mr-4 z-100"></div>
            </div>
        </div>
        <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300">Email address</label>
            <small class="block mb-2 -mt-2 text-base italic text-gray-500 dark:text-gray-400">Changing your email address might break your OAuth sign-in if your social media accounts do not use the same email address. Please use magic link sign-in if you encounter such an issue.</small>
            <input type="email" class="input-text rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" id="email" placeholder="" value="brahimi.zakaria.abdessamed@gmail.com" />
        </div>
        <div class="form-check">
            <label class="flex flex-row items-center mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300" for="showEmail">
                <input type="checkbox" class="w-4 h-4 mr-2 input-text rounded-md border bg-[#f9fafb] p-4 text-[#111827] outline outline-2 outline-offset-2 outline-transparent focus:border-[#2962ff] focus:bg-transparent" value="" id="showEmail" />
                <span>Show my email on profile page</span>
            </label>
            <small class="block mb-2 -mt-2 text-base italic text-gray-500 dark:text-gray-400">This will publicly show your email address on your profile.</small>
        </div>
    </div>
            </div>
            <div class="pt-4 mt-5">
                <button class="button-primary big px-4 py-2 rounded-full border border-blue-600 ">Update</button>
            </div>
        </div>
    </div>
  )
}

export default AccountSettings