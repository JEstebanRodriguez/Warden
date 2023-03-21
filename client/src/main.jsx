import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import App from './App'
import './index.css'
import { Toaster } from 'react-hot-toast'

export const ApiURL = axios.create({
	baseURL: import.meta.env.VITE_API_URL
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		<Toaster position='top-center' />
		<App />
	</>
)
