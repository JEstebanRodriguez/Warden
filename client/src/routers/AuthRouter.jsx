import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { AdminDashboard } from '../pages'

const AuthRouter = () => {
	const { user } = useContext(UserContext)
	return user.type === 'admin' ? (
		<Routes>
			<Route path='home' element={<AdminDashboard />} />
		</Routes>
	) : (
		<Navigate to='/admin' />
	)
}

export default AuthRouter
