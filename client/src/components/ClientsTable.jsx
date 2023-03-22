import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Box, Button, Paper } from '@mui/material'
import { getValueFromValueOptions } from '@mui/x-data-grid/components/panel/filterPanel/filterPanelUtils'
import { ApiURL } from '../main'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import Swal from 'sweetalert2'
import { toast } from 'react-hot-toast'

const ClientsTable = () => {
	const [events, setEvents] = useState([])

	const handleEventDelete = async (id) => {
		Swal.fire({
			title: `Are you sure to delete this event?`,
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then(async (result) => {
			if (result.isConfirmed) {
				const { data: event } = await ApiURL.delete(`/events/delete/${id}`)
				toast.success(event.data)
			}
		})
	}

	const columns = [
		{ field: 'username', headerName: 'Username', flex: 3 },
		{ field: 'userPassword', headerName: 'Password', flex: 3 },
		{ field: 'eventName', headerName: 'Event Name', flex: 5 },
		{ field: 'maxTickets', headerName: 'Tickets', flex: 3 },
		{
			field: 'actions',
			headerName: 'Actions',
			flex: 3,
			renderCell: (params) => (
				<>
					<Button
						variant='contained'
						onClick={() => handleEventDelete(params.id)}
						color='error'>
						<DeleteForeverIcon />
					</Button>
				</>
			)
		}
	]

	const getEvents = async () => {
		try {
			const { data: events } = await ApiURL.get('/events/all')
			setEvents(events.data)
		} catch (err) {
			console.error(err)
		}
	}

	const loadRows = () => {
		let rows = []
		events?.map((event) => {
			rows.push({
				id: event._id,
				username: event.userName,
				userPassword: event.password,
				eventName: event.eventName,
				maxTickets: event.maxTickets
			})
		})
		return rows
	}

	useEffect(() => {
		getEvents()
	}, [events])

	return (
		<Box sx={{ marginTop: '20px' }}>
			<Paper sx={{ padding: '20px', height: 700 }}>
				<DataGrid
					rows={loadRows()}
					columns={columns}
					// pageSize={5} feature not available for community version
					// rowsPerPageOptions={5}  feature not available for community version
					checkboxSelection
				/>
			</Paper>
		</Box>
	)
}

export default ClientsTable
