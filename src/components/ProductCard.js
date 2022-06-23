import * as React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";

export default function ProductCard({
  name,
  image,
  price,
  id,
  category,
  addToCart,
}) {
  const dispatch = useDispatch();

  const handleCart = () => {
    const product = {
      id,
      name,
      price,
      category,
      image,
      qty:1
    };
    dispatch(addToCart(product));
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ color: "black" }}
          >
            {name}
          </Typography>
          <Typography gutterBottom component="div">
            Price: <span style={{ color: "red" }}>{price}</span>
          </Typography>
          <Typography gutterBottom component="div">
            Category: <span style={{ color: "blue" }}>{category}</span>
          </Typography>
        </CardContent>
      </Link>

      <CardActions>
        <Box display="flex" justifyContent="center" width="100%">
          <Button size="small" onClick={handleCart} variant="contained">
            Add To Cart
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
