import React, {useContext, useState} from 'react'
import { Link, Navigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const LoginSignup = () => {
  let {loginUser, user, googleAuth, RegisterUser} = useContext(AuthContext)
  const [signupForm, setSignupForm] = useState(false)

  
  return (
    <div>
        <header className='p-4 border-b bg-white'>
          <div className="w-full mx-auto flex items-center justify-center">
            <Link to="/" className='w-[9rem]'>
                <svg className='w-full' viewBox="0 0 688 118" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.95 38.655c-10.6 10.6-10.6 27.784 0 38.383l30.705 30.706c10.6 10.599 27.784 10.599 38.383 0l30.706-30.706c10.599-10.6 10.599-27.784 0-38.383L77.038 7.95c-10.6-10.599-27.784-10.599-38.383 0L7.95 38.655zm63.33 32.626c7.42-7.42 7.42-19.449 0-26.868-7.419-7.42-19.448-7.42-26.867 0-7.42 7.42-7.42 19.448 0 26.868 7.42 7.419 19.448 7.419 26.868 0z" fill="#2962FF"></path><path d="M161.437 78.362c.043-8.549 5.268-13.558 12.781-13.558 7.47 0 11.874 4.793 11.831 12.954v38.947h18.394V74.476c.043-15.544-9.111-24.957-22.928-24.957-10.06 0-16.796 4.75-19.819 12.565h-.777V28.276h-17.876v88.429h18.394V78.362zM232.967 117.957c9.801 0 16.148-4.275 19.387-10.449h.518v9.197h17.444V71.972c0-15.803-13.385-22.453-28.152-22.453-15.89 0-26.339 7.6-28.887 19.69l17.013 1.381c1.252-4.404 5.181-7.642 11.787-7.642 6.261 0 9.845 3.152 9.845 8.592v.26c0 4.274-4.534 4.835-16.062 5.958-13.127 1.209-24.914 5.613-24.914 20.423 0 13.126 9.369 19.776 22.021 19.776zm5.267-12.695c-5.656 0-9.715-2.633-9.715-7.685 0-5.182 4.275-7.73 10.752-8.636 4.015-.561 10.578-1.511 12.78-2.98V93c0 6.951-5.742 12.262-13.817 12.262zM334.904 69.295c-1.64-12.22-11.485-19.776-28.238-19.776-16.969 0-28.152 7.859-28.109 20.64-.043 9.93 6.218 16.364 19.171 18.955l11.485 2.288c5.786 1.166 8.42 3.282 8.506 6.606-.086 3.93-4.361 6.736-10.794 6.736-6.563 0-10.924-2.806-12.047-8.204l-18.091.95c1.727 12.695 12.521 20.51 30.095 20.51 17.185 0 29.49-8.765 29.534-21.848-.044-9.586-6.304-15.329-19.171-17.962l-12.004-2.418c-6.175-1.339-8.463-3.455-8.42-6.65-.043-3.972 4.448-6.563 10.147-6.563 6.39 0 10.19 3.498 11.097 7.772l16.839-1.036zM361.529 78.362c.043-8.549 5.267-13.558 12.78-13.558 7.47 0 11.874 4.793 11.831 12.954v38.947h18.394V74.476c.043-15.544-9.111-24.957-22.928-24.957-10.06 0-16.796 4.75-19.818 12.565h-.778V28.276h-17.875v88.429h18.394V78.362zM432.54 78.362c.043-8.549 5.138-13.558 12.565-13.558 7.383 0 11.831 4.836 11.787 12.954v38.947h18.394V74.476c0-15.457-9.067-24.957-22.884-24.957-9.845 0-16.969 4.836-19.948 12.565h-.778V50.383h-17.53v66.322h18.394V78.362zM514.885 118c20.122 0 32.643-13.774 32.643-34.197 0-20.553-12.521-34.284-32.643-34.284-20.121 0-32.642 13.731-32.642 34.284 0 20.423 12.521 34.197 32.642 34.197zm.087-14.249c-9.283 0-14.033-8.506-14.033-20.078s4.75-20.12 14.033-20.12c9.11 0 13.86 8.549 13.86 20.12 0 11.572-4.75 20.078-13.86 20.078zM579.064 117.784c10.708 0 16.278-6.174 18.826-11.701h.777v10.622h18.135v-88.43h-18.351v33.248h-.561c-2.462-5.397-7.773-12.004-18.869-12.004-14.551 0-26.857 11.313-26.857 34.111 0 22.194 11.788 34.154 26.9 34.154zm5.829-14.637c-9.024 0-13.947-8.032-13.947-19.603 0-11.486 4.836-19.387 13.947-19.387 8.938 0 13.947 7.556 13.947 19.387 0 11.83-5.096 19.603-13.947 19.603zM657.286 118c16.408 0 27.461-7.988 30.052-20.294l-17.012-1.122c-1.857 5.051-6.606 7.685-12.738 7.685-9.197 0-15.026-6.088-15.026-15.976v-.043h45.165v-5.052c0-22.539-13.645-33.679-31.175-33.679-19.517 0-32.168 13.86-32.168 34.327 0 21.028 12.479 34.154 32.902 34.154zm-14.724-41.149c.389-7.556 6.132-13.601 14.292-13.601 7.988 0 13.515 5.7 13.558 13.601h-27.85z" fill="#333333"></path></svg>          
            </Link>
          </div>
        </header>

        <div className='grid grid-cols-12'>
          <div className=' col-span-12 lg:col-span-6 grid grid-cols-12  min-w-full mx-auto w-full'>
              <div className=' col-span-12 grid grid-cols-12 px-10 py-20 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] lg:min-w-[0px] m-auto'>
                  <div className=' col-start-1 col-end-[-1] flex  flex-col '>
                      <h1 className='flex text-center flex-col text-3xl font-extrabold text-[#0f172a]'>
                        <span className="text-blue-600">Sign up / Log in</span>
                      </h1>
                      <div className='pb-5 my-5 border-b '>
                        <div className='flex flex-wrap justify-center whitespace-nowrap'>
                          <button type='button' onClick={()=>googleAuth()} class="w-full p-2 md:w-[66.666667%]">
                            <span class="hover:bg-[#e2e8f0] p-3 text-[#334155] border text-center underline-offset-2 outline-2 outline-transparent outline flex items-center justify-center w-full py-3 font-semibold bg-white rounded-full">
                              <svg class=" shrink-0 w-4 h-4  mr-2 " viewBox="0 0 128 128"><g clip-rule="evenodd"><path fill="none" d="M0 0h128v128H0z"></path><path d="M27.585 64c0-4.157.69-8.143 1.923-11.881L7.938 35.648C3.734 44.183 1.366 53.801 1.366 64c0 10.191 2.366 19.802 6.563 28.332l21.558-16.503A37.86 37.86 0 0127.585 64" fill="#FBBC05" fill-rule="evenodd"></path><path d="M65.457 26.182c9.031 0 17.188 3.2 23.597 8.436L107.698 16C96.337 6.109 81.771 0 65.457 0 40.129 0 18.361 14.484 7.938 35.648l21.569 16.471a37.77 37.77 0 0135.95-25.937" fill="#EA4335" fill-rule="evenodd"></path><path d="M65.457 101.818a37.77 37.77 0 01-35.949-25.937L7.938 92.349C18.361 113.516 40.129 128 65.457 128c15.632 0 30.557-5.551 41.758-15.951L86.741 96.221c-5.777 3.639-13.052 5.597-21.284 5.597" fill="#34A853" fill-rule="evenodd"></path><path d="M126.634 64c0-3.782-.583-7.855-1.457-11.636h-59.72v24.727h34.376c-1.719 8.431-6.397 14.912-13.092 19.13l20.474 15.828c11.766-10.92 19.419-27.188 19.419-48.049" fill="#4285F4" fill-rule="evenodd"></path></g></svg>
                              <span>Continue with Google</span>
                            </span>
                          </button>
                          <div class="w-full p-2 md:w-[66.666667%]">
                            <a href="/auth/google" data-id="googleAuth" variant="transparent-outline" class="hover:bg-[#e2e8f0] p-3 text-[#334155] border text-center underline-offset-2 outline-2 outline-transparent outline flex items-center justify-center w-full py-3 font-semibold bg-white rounded-full">
                              <svg class=" shrink-0 w-4 h-4  mr-2 " viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                              <span>Continue with GitHub</span>
                            </a>
                          </div>
                          <div class="w-full p-2 md:w-[66.666667%]">
                            <a href="/auth/google" data-id="googleAuth" variant="transparent-outline" class="hover:bg-[#e2e8f0] p-3 text-[#334155] border text-center underline-offset-2 outline-2 outline-transparent outline flex items-center justify-center w-full py-3 font-semibold bg-white rounded-full">
                              <svg fill='#0a66c2' class="shrink-0 w-4 h-4  mr-2" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                              <span>Continue with Linkedin</span>
                            </a>
                          </div>
                          <div class="w-full p-2 md:w-[66.666667%]">
                            <a href="/auth/google" data-id="googleAuth" variant="transparent-outline" class="hover:bg-[#e2e8f0] p-3 text-[#334155] border text-center underline-offset-2 outline-2 outline-transparent outline flex items-center justify-center w-full py-3 font-semibold bg-white rounded-full">
                              <svg fill='#1877f2' class="shrink-0 w-4 h-4  mr-2" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
                              <span>Continue with Facebook</span>
                            </a>
                          </div>
                          <div class="w-full p-2 md:w-[66.666667%]">
                            <a href="/auth/google" data-id="googleAuth" variant="transparent-outline" class="hover:bg-[#e2e8f0] p-3 text-[#334155] border text-center underline-offset-2 outline-2 outline-transparent outline flex items-center justify-center w-full py-3 font-semibold bg-white rounded-full">
                            <svg class="shrink-0 w-4 h-4 mr-2" viewBox="0 0 22.773 22.773"><path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"></path><path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"></path></svg>
                              <span>Continue with Apple</span>
                            </a>
                          </div>
                          
                        </div>
                      </div>
                      
                        {signupForm ?
                          <form onSubmit={(e)=>RegisterUser(e)} action="" className='flex flex-col '>
                            <label htmlFor="" className='font-semibold text-center'>
                              Or sign up using Your Email
                              <input className='w-full md:p-4 placeholder:font-normal outline outline-offset-2 border outline-2 outline-transparent p-3 mt-4 bg-white focus:border-[#3466f6] rounded-full' type="email" placeholder="Enter your email address" name="email" id="email_id" />
                              <input className='w-full md:p-4 placeholder:font-normal outline outline-offset-2 border outline-2 outline-transparent p-3 mt-4 bg-white focus:border-[#3466f6] rounded-full' type="password" placeholder="Enter your Password" name="password_1" id="password_1_id" />
                              <input className='w-full md:p-4 placeholder:font-normal outline outline-offset-2 border outline-2 outline-transparent p-3 mt-4 bg-white focus:border-[#3466f6] rounded-full' type="password" placeholder="Confirm your Password" name="password_2" id="password_2_id" />
                            </label>
                            <h3 className='mt-2'>If you have already registred<span onClick={()=>setSignupForm(false)} className='text-blue-600 cursor-pointer font-bold ml-1'>here</span> .</h3>
                            <button type='submit' className='border md:py-[0.625rem] md:w-auto border-[#3466f6] bg-blue-600 text-sm py-2 font-semibold w-full inline-flex items-center justify-center outline outline-transparent outline-offset-2 outline-2 mt-4 rounded-full self-center px-20 text-white'>Submit</button>
                          </form>
                          
                          :
                          <form onSubmit={(e)=>loginUser(e)} action="" className='flex flex-col '>
                            <label htmlFor="" className='font-semibold text-center'>
                              Or sign in using Your Email
                              <input className='w-full md:p-4 placeholder:font-normal outline outline-offset-2 border outline-2 outline-transparent p-3 mt-4 bg-white focus:border-[#3466f6] rounded-full' type="email" placeholder="Enter your email address" name="email" id="email_id" />
                              <input className='w-full md:p-4 placeholder:font-normal outline outline-offset-2 border outline-2 outline-transparent p-3 mt-4 bg-white focus:border-[#3466f6] rounded-full' type="password" placeholder="Enter your Password" name="password" id="password_id" />
                            </label>
                            <div className='flex justify-between items-center'>
                              <h3 className='mt-2'>If you don't have an account, Register <span onClick={()=>setSignupForm(true)} className='text-blue-600 cursor-pointer font-bold ml-1'>here</span> .</h3>
                              <Link to='/password-reset' className='mt-2'>Forget Password !</Link>
                            </div>
                            <button type='submit' className='border md:py-[0.625rem] md:w-auto border-[#3466f6] bg-blue-600 text-sm py-2 font-semibold w-full inline-flex items-center justify-center outline outline-transparent outline-offset-2 outline-2 mt-4 rounded-full self-center px-20 text-white'>Submit</button>
                          </form>
                        }
                        
                  </div>
              </div>
          </div>
          <div className='col-span-12 lg:mt-24  lg:col-span-6 px-20 py-14 bg-[#f1f5f9] lg:bg-transparent'>
            <section className=''>
              <p className='mb-5 font-semibold italic lg:text-[#334155]'>
                You can start a blog in just a few seconds using Hashnode and then you can move that to your own domain if you get one later. They will even help distribute your articles on their platform. By far the best place to create a blog, imho.
              </p>
            </section>
              <div className='flex h-[3rem]'>
                <div className=' shrink-0 mr-3 rounded-full w-[3rem] h-full'>
                  {/* 
                  <span className=' box-border inline-block overflow-hidden bg-none m-0 b-0 p-0 relative max-w-full '>
                    <span></span>
                  </span>
                  */}
                  <img className='relative block top-0 bottom-0 rounded-full right-0 left-0 box-border h-0 w-0  m-auto p-0 border-none min-h-full max-h-full min-w-full max-w-full' src="data:image/png;base64,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" alt="" />
                </div>
                <div>
                  <p className=' font-bold lg:text-[#64748b]'>Quincy Larson</p>
                  <p className='text-[#94a3b8]'>Founder, freeCodeCamp</p>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default LoginSignup