import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Container,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  OutlinedInput,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("")

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const isUnused = () => {
    if (email == password == "") {
      return true
    } else {
      return false
    }
  }

  useEffect(() => {
    isUnused()
  }, [email, password]
  )

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(password);
    console.log(email);
  };

  return (
    <form>
      <Container
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <TextField
          {...error ? error : null}
          type="email"
          id="email"
          label="email"
          variant="outlined"
          sx={{ width: "100%" }}
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          helperText={error}
          required
        />
        <FormControl 
        sx={{ width: "100%" }} 
        required
        variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <Button
          variant="outlined"
          onClick={handleLogin}
          type="submit"
          sx={{ marginTop: "10px", width: "max-content", padding: "7px" }}
          disabled={isUnused}
        >
          Login
        </Button>
      </Container>
    </form>
  );
};

export default LoginForm;
