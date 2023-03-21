import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard";
import AdminLogin from "../pages/AdminLogin";
import ClientDashboard from "../pages/ClientDashboard";
import ClientLogin from "../pages/ClientLogin";
import ClientRead from "../pages/ClientRead";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<AdminLogin/>}/>
        <Route path='/admin/home' element={<AdminDashboard/>}/>
        <Route path='/' element={<ClientLogin />} exact/>
        <Route path='/home' element={<ClientDashboard />}/>
        <Route path='/read' element={<ClientRead />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
