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

  return (
    <Box component="main" sx={{ padding: "2%" }}>
      <Box sx={{display: "flex", alignItems: 'center', width: '100%', justifyContent: 'end', marginBottom: '10px'}}>
        <Typography variant="h4" align='center' sx={{ flex: 1, textTransform: 'uppercase', fontWeight: 'bold' }} >
          Main Dashboard
        </Typography>
        <Box >
          <Fab
            variant="extended"
            size="medium"
            color="secondary"
            // sx={{ position: "absolute", right: "20px", top: "8px" }}
            sx={{ flex: 1 }}
          >
            <LogoutIcon />
            Logout
          </Fab>
        </Box>
      </Box>
      <ClientCreateInputs newClient={addClient} />
      <ClientsTable rows={clients} />
    </Box>
  );
};

export default AdminDashboard;
