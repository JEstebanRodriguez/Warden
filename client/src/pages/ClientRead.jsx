import React from "react";
import { Container, Paper } from "@mui/material";
import {QrScanner} from '@yudiel/react-qr-scanner';

const ClientRead = () => {
  const [data, setData] = useState("No result");
  const [resultScan, setResultScan] = useState(null);
  // const [permission, setPermission] = useState(false);


  // if resultScan is positive (confirmation with backend)
  // permission is set to true

  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{ marginY: "5%", padding: "5%", borderRadius: "10px" }}
    >
      <Paper elevation={2} sx={{ padding: "20px" }}>
        <QrScanner
          scanDelay={500}
          onDecode={(result) => console.log(result)}
          onError={(error) => console.log(error?.message)}
          style={{ width: "100%" }}
        />
        <p>{data}</p>
        {resultScan === null && (
          <h3>Please scan your code to see if you have permission to enter</h3>
        )}
        
      </Paper>
    </Container>
  );
};

export default ClientRead;
