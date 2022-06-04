import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
// Actions
import {login} from '../Redux/User/userActions'



export default function Register() {
  const dispatch = useDispatch()
  const history = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {userInfo} = useSelector(state=>state.userLogin)
 



  useEffect(()=>{
    if(userInfo){
        history('/')
    }

},[userInfo])

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };
  return (
    <Container>
      <Box display={"flex"} justifyContent="center" my={5}>
        <Box width={"600px"} boxShadow={1} p={5}>
          <Box my={2}>
            <Typography align="center" variant="h5">
              Login
            </Typography>
          </Box>

          <form onSubmit={submitHandler}>
            <Box my={3}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box my={2}>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                value={password}
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
            <Box mt={4}>
              <Button fullWidth variant="contained" type="submit">
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Container>
  );
}
