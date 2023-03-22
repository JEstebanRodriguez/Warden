import React, { useContext, useState } from 'react'
import { Container, Typography, Box, Fab } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import SendTicketsInputs from '../components/SendTicketsInputs'
import SentTicketsTable from '../components/SentTicketsTable'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const ClientDashboard = () => {
	const [logs, setLogs] = useState([])
	const navigate = useNavigate()
	const { user } = useContext(UserContext)

	const handleLogout = () => {
		localStorage.removeItem('user')
		localStorage.removeItem('token')
		navigate('/')
	}

	return (
		<Box component='main' sx={{ padding: '1%' }}>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					marginBottom: '10px',
					gap: '4rem'
				}}>
				<Typography
					variant='h4'
					align='center'
					sx={{
						flex: 3,
						textTransform: 'uppercase',
						fontWeight: 'bold',
						marginLeft: '30px'
					}}>
					Welcome to your event dashboard
				</Typography>
				<Typography
					variant='h6'
					align='center'
					sx={{
						flex: 1,
						textTransform: 'uppercase',
						fontWeight: 'bold',
						marginLeft: '30px'
					}}>
					{user.name}
				</Typography>
				<Typography
					variant='h6'
					align='center'
					sx={{
						flex: 1,
						textTransform: 'uppercase',
						fontWeight: 'bold',
						marginLeft: '30px'
					}}>
					Tickets: {user.maxTickets}
				</Typography>
				<Box>
					<Fab
						onClick={handleLogout}
						variant='extended'
						size='medium'
						color='secondary'
						sx={{ flex: 1 }}>
						<LogoutIcon />
						Logout
					</Fab>
				</Box>
			</Box>
			<SendTicketsInputs logs={logs} set={setLogs} />
			{/* have a function that refreshes the state of register when new mail is sent*/}
			<SentTicketsTable logs={logs} />
		</Box>
	)
}

export default ClientDashboard
