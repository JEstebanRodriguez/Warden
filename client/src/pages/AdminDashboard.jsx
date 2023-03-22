import React, { useContext, useEffect, useState } from 'react'
import { Container, Typography, Box, Fab } from '@mui/material'
import ClientCreateInputs from '../components/ClientCreateInputs'
import ClientsTable from '../components/ClientsTable'
import LogoutIcon from '@mui/icons-material/Logout'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { ApiURL } from '../main'

const AdminDashboard = () => {
	const { user } = useContext(UserContext)
	const [clients, setClients] = useState([])
	const [events, setEvents] = useState([])
	const [counter, setCounter] = useState(1)

	const navigate = useNavigate()
	// let clients = [];

	// Needs UseEffect to fetch data with each submit and reset clients state

	// const addClient = (data) => {
	// 	console.log(data)
	// 	data.id = counter
	// 	setCounter(counter + 1)
	// 	// clients.push(data);
	// 	setClients([...clients, data])
	// 	console.log(clients)
	// }

	const handleLogout = () => {
		localStorage.removeItem('user')
		localStorage.removeItem('token')
		navigate('/admin')
	}

	const getEvents = async () => {
		try {
			const { data: eventData } = await ApiURL.get('/events/all')
			setEvents(eventData.data)
		} catch (err) {
			console.error(err)
		}
	}

	useEffect(() => {
		getEvents()
	}, [])

	return (
		<Box component='main' sx={{ padding: '2%' }}>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					width: '100%',
					justifyContent: 'end',
					marginBottom: '10px'
				}}>
				<Typography
					variant='h4'
					align='center'
					sx={{ flex: 1, textTransform: 'uppercase', fontWeight: 'bold' }}>
					Active Session: {user?.name}
				</Typography>
				<Box>
					<Fab
						onClick={handleLogout}
						variant='extended'
						size='medium'
						color='secondary'
						// sx={{ position: "absolute", right: "20px", top: "8px" }}
						sx={{ flex: 1 }}>
						<LogoutIcon />
						Logout
					</Fab>
				</Box>
			</Box>
			{/* <Typography variant="h4" gutterBottom align="center">
        Admin Dashboard
      </Typography> */}
			<ClientCreateInputs setEvents={setEvents} />
			<ClientsTable events={events} setEvents={setEvents} />
		</Box>
	)
}

export default AdminDashboard
