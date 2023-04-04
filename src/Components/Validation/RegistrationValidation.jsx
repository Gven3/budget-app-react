
import * as yup from "yup";


export const registerSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup
    .string("email should be a string")
    .email("please provide a valid email address")
    .required("email address is required"),
  password: yup
    .string("password should be a string")
    .min(5, "should be at least 5 letters")
    .required("password is required"),
  confirmPassword: yup
    .string("password should be a string")
    .oneOf([yup.ref("password"),null],"Doesn't match")
    .required("confirm password is required"),
  });

  export const loginSchema = yup.object().shape({
    email: yup
    .string("email should be a string")
    .email("please provide a valid email")
    .required("email address is required"),
  password: yup
    .string("password should be a string")
    .min(5, "should be at least 5 letters")
    .required("password is required")
  })