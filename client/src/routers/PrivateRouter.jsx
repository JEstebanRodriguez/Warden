import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import AdminDashboard from '../pages/AdminDashboard'

const PrivateRouter = () => {
	const { user } = useContext(UserContext)
	return user.email ? (
		<Routes>
			<Route path='home' element={<AdminDashboard />} />
		</Routes>
	) : (
		<Navigate to='/admin' />
	)
}

export default PrivateRouter
