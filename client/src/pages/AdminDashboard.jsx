import React, { useState } from "react";
import { Container, Typography, Box, Fab } from "@mui/material";
import ClientCreateInputs from "../components/ClientCreateInputs";
import ClientsTable from "../components/ClientsTable";
import LogoutIcon from "@mui/icons-material/Logout";

const AdminDashboard = () => {
  const [clients, setClients] = useState([]);
  const [counter, setCounter] = useState(1);
  // let clients = [];

  // Needs UseEffect to fetch data with each submit and reset clients state

  const addClient = (data) => {
    console.log(data);
    data.id = counter;
    setCounter(counter + 1);
    // clients.push(data);
    setClients([...clients, data]);
    console.log(clients);
  };

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    
  }

  return (
    <Box component="main" sx={{ padding: "2%" }}>
      <Fab onClick={handleLogout} variant="extended" size="medium" color='secondary' sx={{position: 'absolute', right: '20px', top: '8px'}}>
        <LogoutIcon sx={{ mr: 1}} />
        Logout
      </Fab>
      <Typography variant="h4" gutterBottom align="center">
        Dashboard Admin
      </Typography>
      <ClientCreateInputs newClient={addClient} />
      <ClientsTable rows={clients} />
    </Box>
  );
};

export default AdminDashboard;
