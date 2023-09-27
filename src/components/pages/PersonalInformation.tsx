import * as React from "react";
import { useFormContext } from "react-hook-form";
import {
  TextField,
  Stack,
  MenuItem,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type useFormContext = {
  firstname: string;
  lastName: string;
  city: string;
  country: string;
  dob: Date;
};

const PersonalInformation = () => {
  const [gender, setGender] = React.useState("");

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };
  return (
    <Stack spacing={1}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          pt: 2,
          gap: 10,
        }}
      >
        <TextField
          label="First Name"
          type="text"
          id="firstName"
          color="secondary"
          fullWidth
          sx={{
            "& fieldset": {
              borderColor: "#9c27b0",
            },
          }}
          {...register("firstName", { required: "First Name is required" })}
          error={!!errors.firstName}
          helperText={
            errors.firstName
              ? (errors.firstName.message as React.ReactNode)
              : ""
          }
        />
        <TextField
          label="Last Name"
          type="text"
          id="lastName"
          color="secondary"
          variant="outlined"
          fullWidth
          sx={{
            "& fieldset": {
              borderColor: "#9c27b0",
            },
          }}
          {...register("lastName", { required: "Last Name is required" })}
          error={!!errors.lastName}
          helperText={
            errors.lastName ? (errors.lastName.message as React.ReactNode) : ""
          }
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2, gap: 10 }}>
        <FormControl sx={{ mt: "20px" }}>
          <InputLabel id="gender-select-label">Gender</InputLabel>
          <Select
            labelId="gender-select-label"
            id="gender-select"
            color="secondary"
            value={gender}
            sx={{
              "& fieldset": {
                borderColor: "#9c27b0",
              },
              width: "470px",
            }}
            label="Select a gender"
            onChange={handleChange}
          >
            <MenuItem value="Fm">Female</MenuItem>
            <MenuItem value="Ma">Male</MenuItem>
            <MenuItem value="Nil">Rather not Say</MenuItem>
          </Select>
        </FormControl>

        <Stack>
          <Typography>Date of Birth</Typography>
          <TextField
            type="date"
            id="dob"
            color="secondary"
            sx={{
              "& fieldset": {
                borderColor: "#9c27b0",
              },
              width: "300px",
            }}
            {...register("dob", { required: "This field is required" })}
            error={!!errors.dob}
            helperText={
              errors.dob ? (errors.dob.message as React.ReactNode) : ""
            }
          />
        </Stack>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2, gap: 10 }}>
        <TextField
          label="City"
          type="text"
          id="city"
          fullWidth
          color="secondary"
          sx={{
            "& fieldset": {
              borderColor: "#9c27b0",
            },
          }}
          {...register("city", { required: "This field is required" })}
          error={!!errors.city}
          helperText={
            errors.city ? (errors.city.message as React.ReactNode) : ""
          }
        />
        <TextField
          label="Country"
          type="text"
          id="country"
          color="secondary"
          sx={{
            "& fieldset": {
              borderColor: "#9c27b0",
            },
          }}
          fullWidth
          {...register("country", { required: "This field is required" })}
          error={!!errors.country}
          helperText={
            errors.country ? (errors.country.message as React.ReactNode) : ""
          }
        />
      </Box>
    </Stack>
  );
};

export default PersonalInformation;
