import {createContext, useState, useEffect} from 'react'
import {axiosAuth, axiosAPI} from '../axios'
import {redirect, useNavigate} from 'react-router-dom'
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
	// const [user, setUser] = useState(()=>localStorage.getItem('accessToken') ? window.localStorage.getItem('accessToken') : null)
	const [authToken, setAuthToken] = useState(()=>localStorage.getItem('accessToken') ? window.localStorage.getItem('accessToken') : null)
    const [authNotifications, setAuthNotifications] = useState([])
    const [userData, setUserData] = useState({})

    useEffect(()=>{
        Object.values(authNotifications).map((notification)=>{
            let [message] = notification
            notifyError(message)
        })
    }, [authNotifications])

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
            window.localStorage.setItem('accessToken', response.data['access_token'])
            setUserData(response.data['user'])
            setAuthToken(response.data['access_token'])
            navigate('/profile')
            notifySuccess('logged in successfully') 
        }).catch((error)=>{
            console.log(error)
            let errorMessage = error.response.data    
            setAuthNotifications(errorMessage)
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
            setAuthNotifications(data)
            
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
            setAuthNotifications(data)
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
    

    const userDetails = ()=>{
        let user = JSON.parse(localStorage.getItem('user'))
        let access_token = localStorage.getItem('accessToken')
        
        axiosAPI({                                                                                                                                                                                                                                                                                                    
            url: `/users/${user['pk']}`,
            method: 'get',
            headers:{
                'Authorization': `Bearer ${access_token}`
            },
        }
        ).then((response)=>{
            // console.log('response')
            // console.log(response)
            setUserData(response.data)
        }).catch((error)=>{
            let data = error.response.data
            console.log('error')
            console.log(error)
            
        })
    }

    const passwordChangeHandl = async (e, old_password, new_password1, new_password2) => {
        e.preventDefault()
        let access_token = localStorage.getItem('accessToken')
        try{
            let response = await axiosAuth({                                                                                                                                                                                                                                                                                                    
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
            // console.log(response.data)
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


	let contextData = {
		// user: user,
        userData:userData,
		authToken: authToken,
		loginUser: loginUser,
		logoutUser:logoutUser,
		googleAuth:googleAuth,
        RegisterUser:RegisterUser,
        passwordReset:passwordReset,
        // userDetails,userDetails,
        passwordChangeHandl:passwordChangeHandl,
	}
	return (
		<AuthContext.Provider value={contextData}>
			{children}
		</AuthContext.Provider>
		)
}