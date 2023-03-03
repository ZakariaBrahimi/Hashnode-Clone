import {Route, Navigate} from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import {useContext} from 'react'


const PrivateRoute = ({children})=>{
	const {user} = useContext(AuthContext)
	return user ? children : <Navigate to="/onboard" replace/>
}
export default PrivateRoute;