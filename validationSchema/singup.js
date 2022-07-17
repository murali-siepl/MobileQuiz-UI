import moment from "moment";
import * as yup from "yup";

const signupValidationSchema = yup.object().shape({
  fullName: yup
    .string()
    .min(3, ({ min }) => `Full name must be at least ${min} characters`)
    .required("Full Name is Required"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, 'Password must be at least 8 characters long with 1 uppercase, 1 lowercase,1 special character & 1 numeric character.')
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords mush match")
    .required("Password is required"),
  location: yup.string().required("location is Required"),
  dateOfBirth: yup
    .string()
    .test(
      "DOB",
      "Age should be between 18-25 years",
      value => {
        if(value){
          const selectedDate = value.split("/").reverse().join("-")
          return moment().diff(moment(new Date(selectedDate)),'years') >= 18 && moment().diff(moment(new Date(selectedDate)),'years') <= 25;
        }else{
          return true
        }
      }
    )
    .required("date of birth is required"),
});
export default signupValidationSchema;
