import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard";
import AdminLogin from "../pages/AdminLogin";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<AdminLogin/>}/>
        <Route path='/admin/home' element={<AdminDashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
