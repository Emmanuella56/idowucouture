import Promo from '../Components/Header/Promo.jsx'
import Nav from "../Components/Header/Nav.jsx"
// import { Outlet } from 'react-router-dom'
// import Featured from '../Components/Content/Pages/Featured.jsx'
// import ContactUs from '../Components/Footer/ContactUs.jsx'
// import Home from '../Components/Content/Pages/Home.jsx'
const Layout = () =>{
    return(
            <div>
                <div><Promo /></div>
                <div><Nav /></div>
                {/* <div><Home /></div> */}
                {/* <div><Featured /></div> */}
                {/* <div><ContactUs /></div> */}
            </div>
    )
}

export default Layout