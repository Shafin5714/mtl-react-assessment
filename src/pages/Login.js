import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// Actions
// import { login } from "../Redux/User/userActions";
import {login} from '../features/user/userSlice'

export default function Register() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userInfo } = useSelector((state) => state.user);

  const [errors, setError] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (userInfo) {
      history("/");
    }
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!email) {
      setError((prevState) => ({
        ...prevState,
        email: "Email is required!",
      }));
    }
    if (!password) {
      setError((prevState) => ({
        ...prevState,
        password: "Password is required!",
      }));
    } else if (!regex.test(email)) {
      setError((prevState) => ({
        ...prevState,
        email: "This is not a valid email format!",
      }));
    } else {
      dispatch(login({email, password}));
    }
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
                error={errors.email}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                helperText={errors.email}
              />
            </Box>
            <Box my={2}>
              <TextField
                error={errors.password}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                value={password}
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                helperText={errors.password}
              />
            </Box>
            <Box mt={4}>
              <Button fullWidth variant="contained" type="submit">
                Submit
              </Button>
            </Box>
          </form>
          <Box my={2}>
            <Typography>
              If You Dont Have An Account Please{" "}
              <Link to="/register">Register</Link>{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
