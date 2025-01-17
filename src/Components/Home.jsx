import React from 'react'
import Promo from '../Pages/Header/Promo.jsx'
import Nav from '../Pages/Header/Nav.jsx'
import HomeImage from '../Pages/Content/HomeImage.jsx'
import Featured from '../Pages/Content/Featured.jsx'
import Categories from '../Pages/Content/Categories.jsx'
import PromoTimer from '../Pages/Content/PromoTimer.jsx'
import ShopCollection from '../Pages/Content/ShopCollection.jsx'
import LatestArticle from "../Pages/Content/LatestArticles.jsx"
import NewsLetter from '../Pages/Content/NewsLetter.jsx'
import NewsFeed from '../Pages/Content/NewsFeed.jsx'
import ContactUs from '../Pages/Footer/ContactUs.jsx'

const Home = () =>{
    return(
        <>
        <Promo />
        <Nav />
        <HomeImage />
        <Featured />
        <Categories />
        <PromoTimer />
        <ShopCollection />
        <LatestArticle />
        <NewsLetter />
        <NewsFeed />
        <ContactUs />
        </>

    )
}

export default Home