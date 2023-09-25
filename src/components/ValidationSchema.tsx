import * as yup from "yup";

export const personalInfoSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  country: yup.string().required("This field is required"),
  city: yup.string().required("This field is required"),
  dob: yup.string().required("This field is required"),
});

export const contactInfoSchema = yup.object().shape({
  mobileNumber: yup.string().required("This field is required"),
  homeNumber: yup.string().required("This field is required"),
  street: yup.string().required("This field is required"),
  province: yup.string().required("This field is required"),
  state: yup.string().required("This field is required"),
});

export const moreInfoSchema = yup.object().shape({
  school: yup.string().required("This field is required"),
});

export const loginSchema = yup.object().shape({
  userName: yup.string().required("User Name is required"),
  email: yup
    .string()
    .email("Email format is not valid")
    .required("Email is required"),
  password: yup.string().required("This field is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match"),
  acceptTerms: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions"),
});
