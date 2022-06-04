import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
// Actions
import { getProductDetails } from "../Redux/Product/productActions";

export default function Details() {
  const params = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductDetails(params.productId));
  }, [params]);

  return (
    <Container>
      <Box>
        <img src={product.image} alt="" />
        <Typography variant="h5">{product.name}</Typography>
        <Typography>Category: <span style={{color:'red'}}>{product.category}</span> </Typography>
      </Box>
      <Box mt={1}>
        <Typography>{product.description}</Typography>
        <Typography>Price: <span style={{fontWeight:'500', color:'blue'}}>{product.price}</span> </Typography>
      </Box>
    </Container>
  );
}
