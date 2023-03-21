import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { ClientDashboard, ClientRead } from '../pages'

const ClientRouter = () => {
	const { user } = useContext(UserContext)
	return user.type === 'client' ? (
		<Routes>
			<Route path='home' element={<ClientDashboard />} />
			<Route path='read' element={<ClientRead />} />
		</Routes>
	) : (
		<Navigate to='/' />
	)
}

export default ClientRouter
