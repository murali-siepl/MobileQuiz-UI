import * as yup from "yup";

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(3, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});
export default loginValidationSchema;

export const ForgetValidationSchemaForEmail = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
});

export const ForgetValidationSchemaForMobile = yup.object().shape({
  phone: yup
    .string()

    .required("Mobile number is required"),
});

export const ResetValidationSchema = yup.object().shape({
  token: yup.string().required("Email Address is Required"),
  password: yup
    .string()
    .min(3, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords mush match")
    .required("Password is required"),
});
ResetValidationSchema;
