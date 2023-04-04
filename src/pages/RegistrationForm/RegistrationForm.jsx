import { StyledRegistrationForm, StyledNameDiv } from "./RegistrationForm.styled"
import { StyledInputDiv,StyledSignIn } from "../LoginForm/LoginForm.styled"
import LabelInput from "../../Components/Label-Input/LabelInput"
import { Link } from "react-router-dom"
import { useFormik } from "formik"
import { registerSchema } from "../../Components/Validation/RegistrationValidation"
import { generateId, readExpenses,saveExpenses } from "../../GeneralFunctions/Functions"
import { useState } from "react"
const RegistrationForm = () => {
    const [error,setError] = useState("")
  const [showPassword,setShowPassword] = useState(false)
    const {values,errors, touched,handleChange,handleSubmit,resetForm} = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: registerSchema,
        onSubmit: values => {
            const userObj = {
                id: generateId(readExpenses("users")),
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password
            }
            saveExpenses(userObj, "users")
            resetForm()
        setError("successful registration!")
        window.location.href = "/"
    }
    })
    const changePasswordVisibility = () => {
        setShowPassword(!showPassword)
      }
    return(
<StyledRegistrationForm onSubmit={handleSubmit} noValidate>
    <h1>Sign Up</h1>
    <div className="nameDiv">
    <StyledInputDiv>
        <LabelInput id="name" text="Name" type="text" name="firstName" value={values.firstName}  onChange={handleChange} className={errors.firstName && touched.firstName ? "error-input": ""}/>
          {errors.firstName && touched.firstName?<p className="error-text">{errors.firstName}</p> : <p></p>} 
        </StyledInputDiv>
    <StyledInputDiv>
        <LabelInput id="lastName" text="Last Name" type="text" name="lastName" value={values.lastName} onChange={handleChange} className={errors.lastName && touched.lastName ? "error-input": ""}/>
          {errors.lastName && touched.firstName?<p className="error-text">{errors.lastName}</p> : <p></p>} 
        </StyledInputDiv>
        
    </div>
    <StyledInputDiv>
        <LabelInput id="email" text="Email" type="email" name="email" value={values.email} onChange={handleChange} className={errors.email && touched.email ? "error-input": ""}/>
        <i className="fa-solid fa-envelope"></i>
          {errors.email && touched.email?<p className="error-text">{errors.email}</p> : <p></p>} 
    </StyledInputDiv>
    <StyledInputDiv>
        <LabelInput id="password" text="Password" type={showPassword ? "text" : 'password'} name="password" value={values.password} onChange={handleChange} className={errors.password && touched.password ? "error-input": ""}/>
        <i className="fa-solid fa-lock"></i>
        <i className={!showPassword ? "fa-sharp fa-solid fa-eye-slash" : "fa-sharp fa-solid fa-eye"} onClick={changePasswordVisibility}></i>
          {errors.password && touched.password?<p className="error-text">{errors.password}</p> : <p></p>} 
    </StyledInputDiv>
    <StyledInputDiv>
        <LabelInput id="repassword" text="Confirm Password" type={showPassword ? "text" : 'password'} name="confirmPassword" value={values.confirmPassword} onChange={handleChange} className={errors.confirmPassword && touched.confirmPassword ? "error-input": ""}/>
        <i className="fa-solid fa-lock"></i>
        <i className={!showPassword ? "fa-sharp fa-solid fa-eye-slash" : "fa-sharp fa-solid fa-eye"} onClick={changePasswordVisibility}></i>
          {errors.confirmPassword && touched.confirmPassword?<p className="error-text">{errors.confirmPassword}</p> : <p></p>} 
    </StyledInputDiv>
    <h4 className="green">{error}</h4>

    <StyledSignIn>Sign Up</StyledSignIn>
    <p>Already have an account? <Link to="/">Sign in</Link></p>

</StyledRegistrationForm>
    )
}

export default RegistrationForm