import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserContextProvider from '../context/UserContext'
import AuthRouter from './AuthRouter'
import { ClientLogin, AdminLogin } from '../pages'
import ClientRouter from './ClientRouter'

const AppRouter = () => {
	return (
		<UserContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<ClientLogin />} exact />
					<Route path='/*' element={<ClientRouter />} />
					<Route path='/admin' element={<AdminLogin />} />
					<Route path='/admin/*' element={<AuthRouter />} />
				</Routes>
			</BrowserRouter>
		</UserContextProvider>
	)
}

export default AppRouter
