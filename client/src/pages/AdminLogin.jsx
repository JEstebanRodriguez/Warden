import React from "react";
import { Container, Paper, Typography } from "@mui/material";
import LoginForm from "../components/LoginForm";
import SupervisedUserCircleSharpIcon from "@mui/icons-material/SupervisedUserCircleSharp";

const AdminLogin = () => {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ marginY: "5%", padding: "5%", borderRadius: '10px' }}
    >
      <Paper elevation={3} sx={{ padding: "20px", display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
        <Typography variant="h4" gutterBottom align="center">
          Sign in Admin
        </Typography>
        <SupervisedUserCircleSharpIcon fontSize="large" sx={{marginX: 'auto'}}/>
        <LoginForm />
      </Paper>
    </Container>
  );
};

export default AdminLogin;
