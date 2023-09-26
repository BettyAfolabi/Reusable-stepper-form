import * as React from "react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import {
  TextField,
  Stack,
  Box,
  Typography,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

type useFormContext = {
  mobileNumber: string;
  homeNumber: string;
  province: string;
  street: string;
  state: string;
};

const ContactInformation = () => {
  const [radio, setRadio] = useState("");

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadio(e.target.value);
  };

  return (
    <Stack spacing={1}>
      <Box width="300px">
        <FormControl>
          <FormLabel
            id="preferredAddress-label"
            sx={{ fontSize: "20px", color: "purple" }}
          >
            Preferred Contact Address
          </FormLabel>
          <RadioGroup
            name="preferredAddress"
            aria-labelledby="preferredAddress-label"
            value={radio}
            color="secondary"
            onChange={handleRadioChange}
          >
            <FormControlLabel
              control={<Radio size="medium" color="secondary" />}
              label="Home"
              value="home"
            />
            <FormControlLabel
              control={<Radio size="medium" color="secondary" />}
              label="Work"
              value="work"
            />
            <FormControlLabel
              control={<Radio size="medium" color="secondary" />}
              label="Other"
              value="other"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2, gap: 10 }}>
        <TextField
          label="Mobile Number"
          type="number"
          id="mobileNumber"
          color="secondary"
          fullWidth
          sx={{
            "& fieldset": {
              borderColor: "#9c27b0",
            },
          }}
          {...register("mobileNumber", {
            required: "Please provide your mobile number",
          })}
          error={!!errors.mobileNumber}
          helperText={
            errors.mobileNumber
              ? (errors.mobileNumber.message as React.ReactNode)
              : ""
          }
        />
        <TextField
          label="Home Telephone Number"
          fullWidth
          id="homeNumber"
          type="number"
          color="secondary"
          sx={{
            "& fieldset": {
              borderColor: "#9c27b0",
            },
          }}
          {...register("homeNumber", {
            required: "Please provide your home number",
          })}
          error={!!errors.homeNumber}
          helperText={
            errors.homeNumber
              ? (errors.homeNumber.message as React.ReactNode)
              : ""
          }
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h5" color="secondary">
          Address
        </Typography>
        <TextField
          label="Street Address"
          type="text"
          id="street"
          color="secondary"
          fullWidth
          sx={{
            "& fieldset": {
              borderColor: "#9c27b0",
            },
          }}
          {...register("street", {
            required: "This field is required",
          })}
          error={!!errors.street}
          helperText={
            errors.street ? (errors.street.message as React.ReactNode) : ""
          }
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2, gap: 10 }}>
        <TextField
          label="Province"
          type="text"
          id="province"
          fullWidth
          color="secondary"
          sx={{
            "& fieldset": {
              borderColor: "#9c27b0",
            },
          }}
          {...register("province", { required: "This field is required" })}
          error={!!errors.province}
          helperText={
            errors.province ? (errors.province.message as React.ReactNode) : ""
          }
        />
        <TextField
          label="State"
          type="text"
          id="state"
          fullWidth
          color="secondary"
          sx={{
            "& fieldset": {
              borderColor: "#9c27b0",
            },
          }}
          {...register("state", { required: "This field is required" })}
          error={!!errors.state}
          helperText={
            errors.state ? (errors.state.message as React.ReactNode) : ""
          }
        />
      </Box>
    </Stack>
  );
};

export default ContactInformation;
