import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector, useDispatch } from "react-redux";
// Actins
import {removeFromCart} from '../Redux/Cart/cartActions'
import {incrementItem,decrementItem} from '../Redux/Cart/cartActions'

export default function Cart() {
  const dispatch = useDispatch();
  // State
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <Container>
      <Box component={Paper} my={2}>
        <Box p={1}>
          <Typography variant="h5">Cart</Typography>
        </Box>
        <Divider />
        {cartItems.map((item, index) => (
          <Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={1}
             
            >
                <Box width="250px">
                     <Typography>{item.name}</Typography>
                </Box>
             
              <Box display="flex" alignItems="center">
                <IconButton onClick={()=>dispatch(incrementItem(item.id))}>
                  <AddIcon />
                </IconButton>
                <Box>{item.qty}</Box>
                <IconButton onClick={()=>dispatch(decrementItem(item.id))}>
                  <RemoveIcon />
                </IconButton>
              </Box>

              <Box display="flex" alignItems="center">
                <Box mr={2}>{item.qty *  item.price}</Box>
                <IconButton onClick={()=>dispatch(removeFromCart(item.id))}>
                  <HighlightOffIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        ))}
        <Divider/>
        <Box display={"flex"} justifyContent="end">
            <Box width="200px" p={2} alignSelf="end">
               <Typography align="end">Total: <span style={{fontWeight:'bold'}}>{cartItems.reduce((acc,item)=>acc + (item.qty * item.price),0)}</span> </Typography> 
            </Box>
        </Box>
      </Box>
    </Container>
  );
}
