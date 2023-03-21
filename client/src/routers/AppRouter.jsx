import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContextProvider from '../context/UserContext'
import AdminDashboard from '../pages/AdminDashboard'
import AdminLogin from '../pages/AdminLogin'
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
	return (
		<UserContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/admin' element={<AdminLogin />} />
					<Route path='*' element={<PrivateRouter />} />
				</Routes>
			</BrowserRouter>
		</UserContextProvider>
	)
}

export default AppRouter;
