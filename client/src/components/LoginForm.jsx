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
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  watch("email");
  const onSubmit = (data) => {
    console.log(data);
    // Send data to Endpoint Login user
    try {
      // success alert
    } catch (err) {
      // error alert
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <TextField
          {...register("email", {
            required: true,
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: "Please enter a valid mail",
            },
          })}
          type="email"
          id="email"
          label="email"
          variant="outlined"
          sx={{ width: "100%" }}
          margin="normal"
          required
        />
        <FormControl sx={{ width: "100%" }} required variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            {...register("password", { required: true })}
            id="password"
            type={showPassword ? "text" : "password"}
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
          type="submit"
          sx={{ marginTop: "10px", width: "max-content", padding: "7px" }}
        >
          Login
        </Button>
      </Container>
    </form>
  );
};

export default LoginForm;
