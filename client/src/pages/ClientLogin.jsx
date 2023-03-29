import React from 'react'
import { Container, Paper, Typography, Box } from "@mui/material";
import ClientLoginForm from '../components/ClientLoginForm';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

const ClientLogin = () => {
  return (
    <Container
    component="main"
    maxWidth="sm"
    sx={{ marginY: "5%", padding: "5%", borderRadius: '10px' }}
  >
    <Paper elevation={3} sx={{ padding: "20px", display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
      <Typography variant="h4" gutterBottom align="center" marginTop={1} sx={{fontWeight: 'bold', textTransform: 'uppercase'}}>
        Welcome to Warden App
      </Typography>
      <LocalActivityIcon fontSize="large" sx={{marginX: 'auto'}}/>
      <ClientLoginForm />
    </Paper>
  </Container>
  )
}

export default ClientLogin
