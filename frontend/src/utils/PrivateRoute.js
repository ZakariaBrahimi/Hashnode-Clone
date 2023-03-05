import {Route, Navigate} from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import {useContext} from 'react'


const PrivateRoute = ({children})=>{
	const {authToken} = useContext(AuthContext)
	return authToken ? children : <Navigate to="/onboard" replace/>
}
export default PrivateRoute;