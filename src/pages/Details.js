import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
// Actions
import { getProductDetails } from "../Redux/Product/productActions";
import { addToCart } from "../Redux/Cart/cartActions";

export default function Details() {
  const params = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);
  // Add To Cart
  const handleCart = () => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      image: product.image,
    };
    dispatch(addToCart(item, 1));
  };

  useEffect(() => {
    dispatch(getProductDetails(params.productId));
  }, [params]);

  return (
    <Container>
      <Box>
        <img src={product.image} alt="" />
        <Typography variant="h5">{product.name}</Typography>
        <Typography>
          Category: <span style={{ color: "red" }}>{product.category}</span>{" "}
        </Typography>
      </Box>
      <Box mt={1}>
        <Typography>{product.description}</Typography>
        <Typography>
          Price:{" "}
          <span style={{ fontWeight: "500", color: "blue" }}>
            {product.price}
          </span>{" "}
        </Typography>
      </Box>
      <Box mt={2}>
        <Button size="small" onClick={handleCart} variant="contained">
          Add To Cart
        </Button>
      </Box>
    </Container>
  );
}
