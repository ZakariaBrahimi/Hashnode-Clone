import {createContext, useState, useEffect} from 'react'
import {axiosAuth, axiosAPI} from '../axios'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {toast } from 'react-toastify';



const AuthContext = createContext();
export default AuthContext;


export const AuthProvider = ({children})=>{
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
    const notifyWarning = (message) => toast.warning(message, {
        position: "top-left",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
	const [authToken, setAuthToken] = useState(()=>localStorage.getItem('accessToken') ? localStorage.getItem('accessToken')      : null)
    const [userData, setUserData]   = useState(()=>localStorage.getItem('user')        ? JSON.parse(localStorage.getItem('user')) : null)

	const loginUser = (e)=>{
        e.preventDefault()
        axiosAuth({                                                                                                                                                                                                                                                                                                    
            url: '/login/',
            method: 'post',
            headers:{
                'Content-Type': 'application/json',
            },
            data:{
                "email": e.target.email.value,
                "password": e.target.password.value
            }
        }
        ).then((response)=>{
            console.log(response)
            window.localStorage.setItem('accessToken', response.data['access'])
            window.localStorage.setItem('refreshToken', response.data['refresh'])
            window.localStorage.setItem('user', JSON.stringify(response.data['user']))
            setUserData(response.data['user'])
            setAuthToken(response.data['access'])
            navigate(`/profile/${response.data['user']?.id}`)
            notifySuccess('logged in successfully') 
        }).catch((error)=>{
            let errors = error.response.data
            console.log(errors)
            Object.entries(errors).forEach(([field, errors_arr])=>{
                if(field==='password' || field==='email'){
                    errors_arr.map(errorMessage=>{
                     notifyError(`${field}: ${errorMessage}`)
                     return 0
                })}else{
                    errors_arr.map(errorMessage=>{
                        notifyError(errorMessage)
                        return 0
                   })
                }
            })              
        })
    }

    const RegisterUser = (e)=>{
        e.preventDefault()
        axiosAuth({                                                                                                                                                                                                                                                                                                    
            url: '/registration/',
            method: 'post',
            headers:{
                'Content-Type': 'application/json',
            },
            data:{
                "email": e.target.email.value,
                "password1": e.target.password_1.value,
                "password2": e.target.password_2.value,
                "first_name": 'e.target.password.value',
                "last_name": 'e.target.password.value',
            }
        }
        ).then((response)=>{
            navigate('/')
            notifySuccess('A verification Email have sent successfully, take a look.')
        }).catch((error)=>{
            let data = error.response.data
            
        })
    }

    const passwordReset = (e)=>{
        e.preventDefault()
        axiosAuth({                                                                                                                                                                                                                                                                                                    
            url: '/password/reset/',
            method: 'post',
            headers:{
                'Content-Type': 'application/json',
            },
            data:{
                "email": e.target.email.value,
            }
        }
        ).then((response)=>{
            let successMessage = response.data.detail
            navigate('/')
            notifySuccess(successMessage)
        }).catch((error)=>{
            let data = error.response.data
        })
    }

    const logoutUser = (e)=>{
        e.preventDefault()
        axiosAuth({                                                                                                                                                                                                                                                                                                    
            url: '/logout/',
            method: 'post',
        }
        ).then((response)=>{
            window.localStorage.removeItem('accessToken')
            window.localStorage.removeItem('user')
            // setUser(null)
            setAuthToken(null)
            // It's recommended to use redirect in loaders and actions rather than useNavigate in your components, 
            // When the redirect is in response to data
            navigate('onboard')
            notifySuccess('You loged out successfully.')
        }).catch((err)=>{
            console.log("this is error")
            notifyError('Something went wrong when you logged out')
        })
    }

    const googleAuth = (e)=>{
        // e.preventDefault()
        console.log('befoore the request')
        axios({                                                                                                                                                                                                                                                                                                    
            url: 'https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:3000/profile&prompt=consent&response_type=code&client_id=364518760835-va6gt8v3223himdaj36javrcag0t05gr.apps.googleusercontent.com&scope=openid%20email%20profile&access_type=offline',
            method: 'post',
            headers:{
                'Content-Type': 'application/json',
            },
        }
        ).then((response)=>{
            console.log('Response')
            console.log(response)
        }).catch((error)=>{
            console.log("this is error")
            console.log(error)
        })
    }
    
    const get_user_data = async () => {
        try{
            let {data} = await axiosAPI({                                                                                                                                                                                                                                                                                                    
                url: `/users/${userData?.id}/`,
                method: 'get',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                
            })
            setUserData(data)
            localStorage.setItem('user', JSON.stringify(data));
        }catch(error){
            console.log(error)
            console.log(authToken)
        }
    }
    const passwordChangeHandl = async (e, old_password, new_password1, new_password2) => {
        e.preventDefault()
        let access_token = localStorage.getItem('accessToken')
        try{
            let {data} = await axiosAuth({                                                                                                                                                                                                                                                                                                    
                url: '/password/change/',
                method: 'post',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${access_token}`
                },
                data:{
                    "old_password" : old_password,
                    "new_password1": new_password1,
                    "new_password2": new_password2
                }
            })
            // console.log('response.data')
            console.log(data)
            notifySuccess(data?.detail)
            // let {old_password, new_password1, new_password2} = response.data
            // notifySuccess(old_password)
            // notifySuccess(new_password1)
            // notifySuccess(new_password2)
        }catch(error){
            if (error.response.status==401){
                notifyError('Unautherized! You can not ')
            }else{
                Object.values(error.response.data).map((err) => {
                    notifyWarning(err[0])
            })
            }
            
        }
    }
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(userData))
    }, [userData])
	let contextData = {
        userData:userData,
        setUserData:setUserData,
		authToken: authToken,
		loginUser: loginUser,
		logoutUser:logoutUser,
		googleAuth:googleAuth,
        RegisterUser:RegisterUser,
        passwordReset:passwordReset,
        get_user_data:get_user_data,
        passwordChangeHandl:passwordChangeHandl,
	}
	return (
		<AuthContext.Provider value={contextData}>
			{children}
		</AuthContext.Provider>
		)
}