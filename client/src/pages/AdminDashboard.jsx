import React from 'react'
import {Container, Typography, Box} from '@mui/material'
import ClientCreateInputs from '../components/ClientCreateInputs'
import ClientsTable from '../components/ClientsTable'

const AdminDashboard = () => {
  return (
    <Box
      component="main"
      sx={{ padding: "2%"}}
    >
        <Typography variant="h4" gutterBottom align="center">
          Dashboard Admin
        </Typography>
        <ClientCreateInputs />
        <ClientsTable />
    </Box>
  )
}

export default AdminDashboard