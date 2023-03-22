import React from "react";
import { Box, Paper, IconButton, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import TableTitle from "./TableTitle";

const SentTicketsTable = ({ logs }) => {
  // Dummy data for testing
  // const rows = [
  //   {id: 1, receiverEmail: 'ma@mail.com', quantity: 10},
  //   {id: 2, receiverEmail: 'ma@mail.com', quantity: 15},
  //   {id: 3, receiverEmail: 'ma@mail.com', quantity: 20},
  //   {id: 4, receiverEmail: 'ma@mail.com', quantity: 25}
  // ]

  const columns = [
		{ field: 'id', headerName: 'ID', flex: 1 },
		{ field: 'receiverEmail', headerName: 'Email of Receiver', flex: 3 },
		{ field: 'quantity', headerName: 'Quantity of Tickets', flex: 2 }
		// {
		// 	field: 'actions',
		// 	headerName: 'Actions',
		// 	flex: 2,
		// 	renderCell: (params) => (
		// 		<>
		// 			<IconButton
		// 				// variant='contained'
		// 				// onClick={deleteTickets(eventID)}  // function to delete all tickets to this receiver
		// 				aria-label='delete'
		// 				color='error'>
		// 				<DeleteForeverIcon />
		// 			</IconButton>
		// 		</>
		// 	)
		// }
	]

	return (
		<Box sx={{ marginTop: '20px' }}>
			<Paper sx={{ padding: '20px', height: 700 }}>
				<DataGrid
					// To grab the unique identifier from data
					getRowId={(row) => row.receiverEmail + row.quantity}  
					rows={logs}
					columns={columns}
					checkboxSelection
					slots={{
						toolbar: TableTitle
					}}
				/>
			</Paper>
		</Box>
	)
};

export default SentTicketsTable;
