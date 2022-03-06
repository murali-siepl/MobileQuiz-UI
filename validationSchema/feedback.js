import * as yup from "yup";

export const feedbackValidationSchema = yup.object().shape({
  name: yup.string().required("Name is Required"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),

  subject: yup.string().required("Subject is Required"),
  message: yup.string().required("Message is Required"),
});
