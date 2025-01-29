import { Link } from 'react-router-dom'


const NoPage = () => {

    return(

        <div className='m-30 font-[poppins] font-bold'>
            <h1 className="    text-3xl">Page not found</h1>
            <br/>
            <p>There user thank you for checking out on our store. however, the page you are about routing to cannot be found on our server.</p><br/>
            <p>Kindly, check back later on our new update.</p>

            <h4>Thank You</h4>

            <Link to="/" ><button className=" bg-emerald-400 text-black py-3 px-15 rounded-lg hover:bg-emerald-500">Go Back</button></Link> 
            
        </div>
            
        

    )
}

export default NoPage