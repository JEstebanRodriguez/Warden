import React from "react";
import { Divider, Typography, Box } from "@mui/material";

const TableTitle = () => {
  return (
    <Box>
      <Typography
        variant="button"
        display="block"
        align="center"
        sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
      >
        List of Mails and tickets sent
      </Typography>
      <Divider />
    </Box>
  );
};

export default TableTitle;
