import * as React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
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
      
    };
     dispatch(addToCart(product,1));
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`/product/${id}`}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
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
        <Button size="small" onClick={handleCart}>
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}
