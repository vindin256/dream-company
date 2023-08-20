import React, { useState } from 'react';

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from 'react-router';
import axios from 'axios';



const Login = () => {

  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let loginDetail = {
      email: data.get("email"),
      password: data.get("password"),
    };

    await axios.post("http://localhost:8081/loginCheck", loginDetail).then(function (res) {
      if (res.data.length) {
        if (res.data[0].role === 'ADMIN') { navigate("/adminHome"); } else { navigate("/home"); }
        setErrMsg("");
      } else {
        setErrMsg("Invalid Credentials!");
      }
    }).catch(function (err) {
      setErrMsg("Invalid Credentials!");
    })

  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          LogIn
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {errMsg ? (<h6>{errMsg}</h6>) : null}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus

          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
// const mapDispatchToProps=(dispatch)=>{
//   return{loginAction:(data)=>{dispatch(loginACtionCreator(data))}}
// }

export default Login;
