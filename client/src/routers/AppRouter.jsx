import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserContextProvider from '../context/UserContext'
import PrivateRouter from './PrivateRouter'
import AdminDashboard from '../pages/AdminDashboard'
import AdminLogin from '../pages/AdminLogin'
import ClientDashboard from '../pages/ClientDashboard'
import ClientLogin from '../pages/ClientLogin'
import ClientRead from '../pages/ClientRead'

const AppRouter = () => {
	return (
		<UserContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/admin' element={<AdminLogin />} />
					<Route path='/' element={<ClientLogin />} exact />
					<Route path='/home' element={<ClientDashboard />} />
					<Route path='/read' element={<ClientRead />} />
					<Route path='/admin/*' element={<PrivateRouter />} />
				</Routes>
			</BrowserRouter>
		</UserContextProvider>
	)
}

export default AppRouter
