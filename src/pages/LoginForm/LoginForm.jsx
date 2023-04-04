import LabelInput from '../../Components/Label-Input/LabelInput'
import { Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { findUser, readExpenses } from '../../GeneralFunctions/Functions'
import { useFormik } from "formik"
import { StyledSignIn , StyledForm , StyledInputDiv , StyledH4} from './LoginForm.styled'
import { loginSchema } from '../../Components/Validation/RegistrationValidation'

const LoginForm = () => {
  const [error,setError] = useState("")
  const [showPassword,setShowPassword] = useState(false)
  const [success,setSuccess] = useState(false)
  const {values,errors, touched ,handleChange,handleSubmit} = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: values => {
      if(findUser(values.email, values.password, readExpenses('users'))){
        window.location.href = "/expenses"
        setError("succesful Log in!")
        setSuccess(true)
      }else {
        setError("user doesn't exist")
        setSuccess(false)
      }
        
      
    }
  })

  const changePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

    
    return(
        <StyledForm onSubmit={handleSubmit} noValidate >
            <h1>Sign In</h1>
            <StyledInputDiv>
            <LabelInput id="email" type="email" name="email" text="Email" value={values.email} onChange={handleChange} className={errors.email && touched.email ? "error-input": ""}/>
            <i className="fa-solid fa-envelope"></i>
            {errors.email && touched.email?<p className="error-text">{errors.email}</p> : <p></p>} 
        </StyledInputDiv>
            <StyledInputDiv>
            <LabelInput id="password" type={showPassword ? "text" : 'password'} name="password" text="Password" value={values.password} onChange={handleChange} className={errors.password && touched.password ? "error-input": ""}/>
            <i className="fa-solid fa-lock"></i>
          <i className={!showPassword ? "fa-sharp fa-solid fa-eye-slash" : "fa-sharp fa-solid fa-eye"} onClick={changePasswordVisibility}></i>
          {errors.password && touched.password?<p className="error-text">{errors.password}</p> : <p></p>} 
        </StyledInputDiv>
        <h4 className={!success ? "red" : "green"}>{error}</h4>
        <StyledSignIn type='submit'>Sign In</StyledSignIn>
        <p>Don't have account? <Link to={"/registration"}>Sign Up</Link></p>
        </StyledForm>
    )
}

export default LoginForm