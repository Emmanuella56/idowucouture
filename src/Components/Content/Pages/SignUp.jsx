import { useState } from 'react';
import Chair from '../../../assets/Chair.jpeg'
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUp = () => {


    const navigate = useNavigate()

    const validationScheme = Yup.object({
        fullname: Yup.string().required("Required"),
        username: Yup.string().required("Your username is required"),
        email: Yup.string().email("Valid email")
                .test("is valid", 
                    "Enter a valid email or username",
                (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)       // ✅ Allows alphanumeric usernames (no spaces) ✅ Valid email check
                ),
        password: Yup.string()
          .required("Password is required")
          .min(8, "Password must be at least 8 characters")
          .matches(/[A-Z]/, "Must contain at least one uppercase letter")
          .matches(/[a-z]/, "Must contain at least one lowercase letter")
          .matches(/[0-9]/, "Must contain at least one number")
          .matches(/[\W_]/, "Must contain at least one special character (!@#$%^&*)")
           
        })
    
        
        
        

         const [passwordValue, setPasswordValue]  = useState("")
        //  const [passwordValueOne, setPasswordValueOne]  = useState("")
        //  const [passwordValueTwo, setPasswordValueTwo]  = useState("")
        //  const [passwordValueTwo, setPasswordValueTwo]  = useState("")

        const [passwordInputType, setPasswordInputType]  = useState('password')
    
    

    
    return(
        <div className="grid md:flex items-center pt-8 md:h-[700px] font-[poppins]">
            <div>

                
                <img src={Chair} alt="" className="md:w-full md:h-full" />
            </div>

            <div  className="">
                <div className="m-7">
                    <h1 className="text-[35px] font-bold my-5">Sign Up </h1>
                    <div className='flex gap-2'>
                        <p className="text-gray-400">Already have an account? </p>
                        <button onClick={() => navigate(-1)} className=" text-emerald-400 underline">Sign In</button>
                    </div>
                    
                    <Formik
                    initialValues={{fullname:"", username:"", email:"", password: ""}}
                    validationScheme={validationScheme}
                    onSubmit={() => 
                        // const user = value.userlogin
                        // setUserDetails(user)
                    navigate("displayafterlogin" )}>
                        
                    {({isSubmitting}) => <Form   className="grid gap-4 ">
                        <div className='border'>
                            <Field  type="text"  name="fullname" placeholder="Your fullname" className="hover:bg-gray-100  p-2 w-[300px]  md:w-[400px] text-[12px]"/>
                            <ErrorMessage name="fullname" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className='border'>
                            <Field  type="text"  name="username"  placeholder="User name" className="hover:bg-gray-100  p-2 w-[300px]  md:w-[400px] text-[12px]" />
                            <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className='border'>
                            <Field type="email"  name="email" placeholder="Email" className="hover:bg-gray-100  p-2 w-[300px]  md:w-[400px] text-[12px]"/>
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                        </div>
                            
                        <div className="flex items-center hover:bg-gray-100 border">
                        <Field  onChange={(e) => setPasswordValue(e.target.value)} type={passwordInputType} name="password" value={passwordValue} placeholder="Password" className="hover:bg-gray-100  p-2 w-[300px]  md:w-[400px] text-[12px]"/>
                        <ErrorMessage name="password" component="div" className="text-red-500 text-sm" /> 
                           <button  onClick={(e) => { 
                            e.preventDefault() 
                            setPasswordInputType(passwordInputType === "password"? "text" :  "password")
                            }}> 
                            {passwordInputType === "password" ? <AiOutlineEyeInvisible />: <AiOutlineEye />   }
                           </button>
                          
                            
                           
                                
                                
                           
                        </div>
                        <p className="text-sm mt-4 text-gray-400 "><input type="checkbox" name="" /> I agree to <span className="font-bold text-black"> <a href="">Privacy Policy</a></span> and <span className="font-bold text-black"> <a href="">Terms of Use</a> </span></p>
                        <button type="submit"  className="w-full p-1 rounded my-5 bg-black text-white hover:bg-gray-800">Sign Up</button>
                    </Form>}
                    </Formik>

                </div>
            </div>
        </div>
    )
}


export default SignUp