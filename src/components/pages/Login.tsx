import React, { useState } from "react";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useFormContext } from "react-hook-form";
import {
  TextField,
  Stack,
  Box,
  Typography,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const handleVisibility = () => {
    setVisible((prev) => !prev);
  };
  const handleConfirmVisibility = () => {
    setConfirmVisible((prev) => !prev);
  };

  return (
    <Stack spacing={1} justifyContent="center" alignItems="center">
      <TextField
        label="Username"
        type="text"
        color="secondary"
        sx={{
          "& fieldset": {
            borderColor: "#9c27b0",
          },
          width: "400px",
        }}
        {...register("userName", { required: "This field is required" })}
        error={!!errors.userName}
        helperText={
          errors.userName ? (errors.userName.message as React.ReactNode) : ""
        }
      />
      <TextField
        label="Email"
        type="email"
        color="secondary"
        sx={{
          "& fieldset": {
            borderColor: "#9c27b0",
          },
          width: "400px",
        }}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "Invalid email format",
          },
        })}
        error={!!errors.email}
        helperText={
          errors.email ? (errors.email.message as React.ReactNode) : ""
        }
      />

      <TextField
        label="Password"
        type={visible ? "text" : "password"}
        color="secondary"
        sx={{
          "& fieldset": {
            borderColor: "#9c27b0",
          },
          width: "400px",
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" onClick={handleVisibility}>
              {visible ? <VisibilityOff /> : <Visibility />}
            </InputAdornment>
          ),
        }}
        {...register("password", {
          required: "This field is required",
          pattern: {
            value:
              /^(?=.*)(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,16}$/,
            message:
              "Password should be 7-16 characters and include at least 1 uppercase letter, 1 number and 1 special character",
          },
        })}
        error={!!errors.password}
        helperText={
          errors.password ? (errors.password.message as React.ReactNode) : ""
        }
      />
      <TextField
        label="Confirm Password"
        type={confirmVisible ? "text" : "password"}
        color="secondary"
        sx={{
          "& fieldset": {
            borderColor: "#9c27b0",
          },
          width: "400px",
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" onClick={handleConfirmVisibility}>
              {confirmVisible ? <VisibilityOff /> : <Visibility />}
            </InputAdornment>
          ),
        }}
        {...register("confirmPassword", {
          required: "This field is required",
        })}
        error={!!errors.confirmPassword}
        helperText={
          errors.confirmPassword
            ? (errors.confirmPassword.message as React.ReactNode)
            : ""
        }
      />
      <Box width="500px" justifyContent="center" alignItems="center">
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          doloribus animi asperiores tempora eaque doloremque similique dolor
          repellat aspernatur.
        </Typography>
        <FormControlLabel
          label="I accept terms and conditions"
          sx={{ textAlign: "center" }}
          control={
            <Checkbox
              size="small"
              color="secondary"
              {...register("acceptTerms", {
                required: "You must accept the terms and conditions",
              })}
            />
          }
        />
        {errors.acceptTerms && (
          <FormHelperText error>
            {errors.acceptTerms
              ? (errors.acceptTerms.message as React.ReactNode)
              : ""}
          </FormHelperText>
        )}
      </Box>
    </Stack>
  );
};

export default Login;
