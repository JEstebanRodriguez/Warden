import React, { useState } from "react";
import { Container, Typography, Box, Fab } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import SendTicketsInputs from "../components/SendTicketsInputs";
import SentTicketsTable from "../components/SentTicketsTable";
import { useNavigate } from 'react-router-dom'

const ClientDashboard = () => {
	const [logs, setLogs] = useState([])
	const navigate = useNavigate()

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
					justifyContent: 'end',
					marginBottom: '10px'
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
					Welcome to your dashboard
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
			<SendTicketsInputs logs={logs} set={setLogs} />{' '}
			{/* have a function that refreshes the state of register when new mail is sent*/}
			<SentTicketsTable logs={logs} />
		</Box>
	)
}

export default ClientDashboard;
