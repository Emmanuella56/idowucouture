import Chair from '../../../assets/Chair.jpeg'
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
// import DisplayAfterSignUp from './DisplayAfterSignUp.jsx'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignIn = () => {

    const navigate = useNavigate()

    const validationScheme = Yup.object({
        userlogin: Yup.string().required("Your username or email is required")
        .test("is valid", 
            "Enter a valid email or username",
        (value) => /^[a-zA-Z0-9_]+$/.test(value) ||                           // ✅ Allows alphanumeric usernames (no spaces)
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)          // ✅ Valid email check
        ),
        password: Yup.string()
        .required("password is required")
        .min(8, "password must be atleast eight characters")
        .matches(/[A-Z]/, "Must contain atleast one uppercase letter")
        .matches(/[a-z]/, "Must contain atleast one lower letter")
        .matches(/[0-9]/, "Must contain atleast one number")
        .matches(/[\W_]/, "Must contain atleast one special character (!@#$%^&*),")
    })



    const [passwordInputType, setPasswordInputType]  = useState('password')
        
    // const [userdetails, setUserDetails] = useState("")
    
    return(

        <div className="grid md:flex items-center pt-8 md:h-[700px] font-[poppins]">
            <div className="h-full w-full "> 
                <img src={Chair} className="w-full h-full" />
            </div>

            <div>
                <div className="m-7">
                    
                    <h1 className="text-[35px] font-bold my-5">Sign In</h1>
                    
                    <div className='flex gap-2'>
                        <p className="text-gray-400">Dont have an account yet? </p>
                        <button onClick={() => navigate('signup')} className=" text-emerald-400 underline">Sign Up</button>
                    </div>

                    <Formik 
                    initialValues={{userlogin: "", password: ""}} 
                    validationScheme={validationScheme}
                    onSubmit={() => {
                            // const user = value.userlogin
                            // setUserDetails(user)
                        navigate("displayafterlogin" )
                    }}>
                            {({isSubmitting}) => <Form className="grid gap-4 ">
                               
                                {/* My Sign-in Field (Accepts Email or Username) */}
                                <div className="flex items-center hover:bg-gray-100 border  md:w-[400px]">
                            <Field type="text" name="userlogin" placeholder="Your username or email address" className="hover:bg-gray-100 p-2 w-[318px] md:w-[400px]  text-[12px]"/>
                            <ErrorMessage name="userlogin" component="div" className="text-red-500 text-sm" />
                            </div> 
                            
                            {/* My Password Field */}
                            <div className="flex items-center hover:bg-gray-100 border  md:w-[400px]">
                                <Field type={passwordInputType} name="password" placeholder="Password" className="hover:bg-gray-100  p-2 w-[300px]  md:w-[400px] text-[12px]"/>
                                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                            
                            <button onClick={(e) => {
                                e.preventDefault()
                                setPasswordInputType(passwordInputType === "password" ? "text" : "password"
                            )}}>
                                {passwordInputType === "password"? <AiOutlineEyeInvisible /> : <AiOutlineEye />  }
                                </button> 
                                
                                                        
                            </div>

                            <div className="flex justify-between items-center text-sm mt-4 text-black font-bold text-black">
                                <p><input type="checkbox"  name="authenticate" /> Remember me</p>
                                <p><a href="">Forgotten Password</a> </p>
                            </div>
                            
                            <button type="submit"  disabled={isSubmitting}  className="w-full p-1 rounded my-5 bg-black text-white hover:bg-gray-800"> Sign In </button>
                            </Form>}
                    
                      
                    
                    </Formik>
                
                </div>

            </div>

            {/* <DisplayAfterSignUp  username={userdetails}/> */}
        </div>
    )
}


export default SignIn