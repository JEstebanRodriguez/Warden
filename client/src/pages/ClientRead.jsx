import React, { useContext, useState } from "react";
import { Container, Paper } from "@mui/material";
import { QrScanner } from "@yudiel/react-qr-scanner";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import Swal from 'sweetalert2'

const ClientRead = () => {
  const { user } = useContext(UserContext);
  const [code, setCode] = useState("");
  const [scanned, setScanned] = useState(false);
  const [resultScan, setResultScan] = useState(null);


  const handleDecode = async (result) => {
    try {
      if (scanned == false) {
        setCode(result);
        setScanned(true);
        console.log("result is:", result, "Scanned is: ", scanned);
        const useTicket = await axios.put(`${import.meta.env.VITE_API_URL}/tickets/use`, {_id: result, event_id: user._id})
        console.log(useTicket)
        if (useTicket.status == 201) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'You can enter',
            showConfirmButton: false,
            timer: 1500
          })
        }
      }
      
    } catch (err) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: err?.response.data.message,
        showConfirmButton: false,
        timer: 1500
      })
      // alert(err?.response.data.message)
    }
  };


  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{ marginY: "1%", padding: "1%", borderRadius: "10px" }}
    >
      <Paper elevation={2} sx={{ padding: "20px" }}>
        <QrScanner
          scanDelay={500}
          onDecode={handleDecode}
          onError={(error) => console.log(error?.message)}
          style={{ width: "100%" }}
        />
        <p>{code}</p>
        {resultScan === null && (
          <h3>Please scan your code to see if you have permission to enter</h3>
        )}
      </Paper>
    </Container>
  );
};

export default ClientRead;
