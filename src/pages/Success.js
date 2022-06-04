import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Success() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="500px">
      <Typography color="secondary" variant="h5">Order Placed Successfully</Typography>
    </Box>
  );
}
