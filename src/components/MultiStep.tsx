import { useForm, FormProvider } from "react-hook-form";
import {
  Box,
  Stack,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomStepIcon from "./StepIcon";
import StepperConnector from "./StepperConnector";
import {
  personalInfoSchema,
  contactInfoSchema,
  moreInfoSchema,
  loginSchema,
} from "./ValidationSchema";
import PersonalInformation from "./pages/PersonalInformation";
import ContactInformation from "./pages/ContactInformation";
import MoreInfo from "./pages/MoreInfo";
import Login from "./pages/Login";

const stepSchemas = [
  personalInfoSchema,
  contactInfoSchema,
  moreInfoSchema,
  loginSchema,
];

const MultiStep = () => {
  const [activeStep, setActiveStep] = useState(0);

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(stepSchemas[activeStep]),
  });

  const formSteps = [
    {
      label: "Personal Information",
      content: <PersonalInformation />,
    },
    {
      label: "Contact Information",
      content: <ContactInformation />,
    },
    {
      label: "More Info",
      content: <MoreInfo />,
    },
    {
      label: "Login",
      content: <Login />,
    },
  ];

  const finalStep = formSteps.length;

  const handleNext = () => {
    methods.trigger().then((isValid) => {
      if (isValid) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    });
  };
  const handlePrev = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  const handleSubmit = () => {
    console.log("Form submitted");
  };

  return (
    <Box height={100}>
      <Typography variant="h4" color="secondary">
        MultiStep
      </Typography>
      <Box mx={3} mt={2} mb={3}>
        <Stepper
          activeStep={activeStep}
          connector={<StepperConnector />}
          alternativeLabel
        >
          {formSteps.map((formStep) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};
            return (
              <Step key={formStep.label} {...stepProps}>
                <StepLabel StepIconComponent={CustomStepIcon} {...labelProps}>
                  {formStep.label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>
      <Box sx={{ mt: "7px" }}>
        {activeStep === finalStep ? (
          <Stack>
            <Typography variant="h4" sx={{ mt: 5, mb: 2 }}>
              You have Submitted successfully
            </Typography>
            <Box>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleReset}
                disableRipple
                sx={{
                  "&:focus": {
                    outline: "none",
                  },
                  "&:active": {
                    boxShadow: "none",
                  },
                }}
              >
                Back
              </Button>
            </Box>
          </Stack>
        ) : (
          <>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(handleSubmit)}>
                <Box mt={1}>
                  {formSteps[activeStep].content}

                  <Stack spacing={1} direction="row" display="block" mt={2}>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handlePrev}
                      disabled={activeStep === 0}
                      disableRipple
                      sx={{
                        "&:focus": {
                          outline: "none",
                        },
                        "&:active": {
                          boxShadow: "none",
                        },
                      }}
                    >
                      Prev
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleNext}
                      disableRipple
                      sx={{
                        "&:focus": {
                          outline: "none",
                        },
                        "&:active": {
                          boxShadow: "none",
                        },
                      }}
                    >
                      {activeStep === finalStep - 1 ? "Finish" : "Next"}
                    </Button>
                  </Stack>
                </Box>
              </form>
            </FormProvider>
          </>
        )}
      </Box>
    </Box>
  );
};

export default MultiStep;
