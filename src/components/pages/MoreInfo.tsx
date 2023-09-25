import React, { useState } from "react";
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
  MenuItem,
  InputLabel,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const MoreInfo = () => {
  const [radio, setRadio] = useState("");
  const [education, setEducation] = React.useState("");

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadio(e.target.value);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setEducation(event.target.value as string);
  };

  return (
    <Stack spacing={2}>
      <FormControl sx={{ mt: "20px" }}>
        <InputLabel id="education-select-label">
          Highest Level of Education
        </InputLabel>
        <Select
          labelId="education-select-label"
          id="education-select"
          color="secondary"
          value={education}
          sx={{
            "& fieldset": {
              borderColor: "#9c27b0",
            },
            width: "600px",
          }}
          label="Select a gender"
          onChange={handleChange}
        >
          <MenuItem value="Bsc">BSc.</MenuItem>
          <MenuItem value="Master">Masters</MenuItem>
          <MenuItem value="Phd">PHD</MenuItem>
          <MenuItem value="Undergrad">Undergraduate</MenuItem>{" "}
        </Select>
      </FormControl>

      <Box width="300px">
        <FormControl>
          <FormLabel
            id="employment-status-label"
            sx={{ fontSize: "20px", color: "purple" }}
          >
            Employment Status
          </FormLabel>
          <RadioGroup
            name="employment-status"
            aria-labelledby="employment-status-label"
            value={radio}
            onChange={handleRadioChange}
          >
            <FormControlLabel
              control={<Radio size="medium" color="secondary" />}
              label="Employed"
              value="employed"
            />
            <FormControlLabel
              control={<Radio size="medium" color="secondary" />}
              label="Not Employed"
              value="nilemploy"
            />
            <FormControlLabel
              control={<Radio size="medium" color="secondary" />}
              label="Student"
              value="student"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2, gap: 10 }}>
        <TextField
          label="Name of School"
          type="text"
          id="school"
          color="secondary"
          sx={{
            "& fieldset": {
              borderColor: "#9c27b0",
            },
            width: "600px",
          }}
          {...register("school", { required: "First Name is required" })}
          error={!!errors.school}
          helperText={
            errors.school ? (errors.school.message as React.ReactNode) : ""
          }
        />
        <TextField
          label="Name of Organisation"
          type="text"
          helperText="If applicable"
          color="secondary"
          sx={{
            "& fieldset": {
              borderColor: "#9c27b0",
            },
            width: "600px",
          }}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", pt: 2 }}>
        <Typography variant="h5" color="secondary">
          More About You
        </Typography>
        <TextField
          type="text"
          color="secondary"
          fullWidth
          sx={{
            "& fieldset": {
              borderColor: "#9c27b0",
            },
            height: "50px",
          }}
        />
      </Box>
    </Stack>
  );
};

export default MoreInfo;
