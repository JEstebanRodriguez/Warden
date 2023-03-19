import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Paper } from "@mui/material";

const ClientsTable = ({rows}) => {
  const columns = [
    { field: "id", headerName: "ID", flex: 2 },
    { field: "username", headerName: "Username", flex: 3},
    { field: "userPassword", headerName: "Password", flex: 3 },
    { field: "eventName", headerName: "Event Name", flex: 5},
    { field: "maxTickets", headerName: "Tickets", flex: 3 },
  ];

  // const rows = [
  //   {
  //     id: 1,
  //     username: "Snow",
  //     password: "hashedpassword",
  //     eventName: "Bithday",
  //     maxTickets: 10,
  //   },
  //   {
  //     id: 2,
  //     username: "Aira",
  //     password: "hashedpassword",
  //     eventName: "Bithday",
  //     maxTickets: 10,
  //   },
  //   {
  //     id: 3,
  //     username: "Zayn",
  //     password: "hashedpassword",
  //     eventName: "Bithday",
  //     maxTickets: 10,
  //   },
  //   {
  //     id: 4,
  //     username: "Banana",
  //     password: "hashedpassword",
  //     eventName: "Bithday",
  //     maxTickets: 10,
  //   },
  //   {
  //     id: 5,
  //     username: "Snow",
  //     password: "hashedpassword",
  //     eventName: "Bithday",
  //     maxTickets: 10,
  //   },
  //   {
  //     id: 6,
  //     username: "Snow",
  //     password: "hashedpassword",
  //     eventName: "Bithday",
  //     maxTickets: 10,
  //   },
  //   {
  //     id: 7,
  //     username: "Snow",
  //     password: "hashedpassword",
  //     eventName: "Bithday",
  //     maxTickets: 10,
  //   },
  //   {
  //     id: 8,
  //     username: "Snow",
  //     password: "hashedpassword",
  //     eventName: "Bithday",
  //     maxTickets: 10,
  //   },
  //   {
  //     id: 9,
  //     username: "Snow",
  //     password: "hashedpassword",
  //     eventName: "Bithday",
  //     maxTickets: 10,
  //   },
  //   {
  //     id: 10,
  //     username: "Snow",
  //     password: "hashedpassword",
  //     eventName: "Bithday",
  //     maxTickets: 10,
  //   },
  //   {
  //     id: 11,
  //     username: "Snow",
  //     password: "hashedpassword",
  //     eventName: "Bithday",
  //     maxTickets: 10,
  //   },
  //   {
  //     id: 12,
  //     username: "Snow",
  //     password: "hashedpassword",
  //     eventName: "Bithday",
  //     maxTickets: 10,
  //   },
  //   {
  //     id: 13,
  //     username: "Snow",
  //     password: "hashedpassword",
  //     eventName: "Bithday",
  //     maxTickets: 10,
  //   },
  //   {
  //     id: 14,
  //     username: "Snow",
  //     password: "hashedpassword",
  //     eventName: "Bithday",
  //     maxTickets: 10,
  //   },
  // ];



  return (
    <Box sx={{ marginTop: "20px" }}>
      <Paper sx={{ padding: "20px", height: 700 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          // pageSize={5} feature not available for community version
          // rowsPerPageOptions={5}  feature not available for community version
          checkboxSelection
        />
      </Paper>
    </Box>
  );
};

export default ClientsTable;
