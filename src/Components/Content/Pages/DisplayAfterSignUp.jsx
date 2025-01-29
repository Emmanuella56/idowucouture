import { useNavigate } from "react-router-dom"



const DisplayAfterSignUp = () => {

 const navigate = useNavigate()
  return(
    <div className="flex flex-col text-gray-700 pt-60 font-[poppins] h-[700px] items-center text-center ">
      <h4 className="text-4xl  ">Welcome to Idowucuture where you find all your golf items 😄</h4>
      <br/>
      <p>We have you are looking for in our store</p>
      <p>Shop Now</p>
      <button onClick={() => {navigate('/')}} className="p-5 px-10 rounded bg-emerald-400"><i>Let's play golf!</i> {"\uD83C\uDFCC️"} </button>
    </div>
  )
}

export default DisplayAfterSignUp