import * as yup from "yup";

const signupValidationSchema = yup.object().shape({
  fullName: yup.string().required("Full Name is Required"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(3, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords mush match")
    .required("Password is required"),
  location: yup.string().required("location is Required"),
  dateOfBirth: yup.string().required("date of birth is required"),
});
export default signupValidationSchema;
