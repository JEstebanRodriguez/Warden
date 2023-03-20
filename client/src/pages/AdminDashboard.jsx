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


  const handleLogout = () => {
    // user logout endopoint call
    console.log('user Logout')
  }

  const addClient = (data) => {
    console.log(data);
    data.id = counter;
    setCounter(counter + 1);
    // clients.push(data);
    setClients([...clients, data]);
    console.log(clients);
  };

  return (
    <Box component="main" sx={{ padding: "2%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: '5px'
        }}
      >
        <Typography
          variant="overline"
          component="h3"
          gutterBottom
          align="left"
          fontWeight='bold'
          marginLeft={1}
          color='secondary'
        >
          Hello Admin, welcome to the dashboard
        </Typography>
        <Fab variant="extended" size="medium" color="secondary"
          onClick={handleLogout}
          >
          <LogoutIcon sx={{ mr: 1 }} />
          Logout
        </Fab>
      </Box>
      <ClientCreateInputs newClient={addClient} />
      <ClientsTable rows={clients} />
    </Box>
  );
};

export default AdminDashboard;
