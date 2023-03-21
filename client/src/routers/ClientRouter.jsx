import { Route, Routes } from 'react-router-dom'
import { ClientDashboard, ClientRead } from '../pages'

const ClientRouter = () => {
	return (
		<Routes>
			<Route path='home' element={<ClientDashboard />} />
			<Route path='read' element={<ClientRead />} />
		</Routes>
	)
}

export default ClientRouter
