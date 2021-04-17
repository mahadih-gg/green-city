import React from 'react';
import Category from '../Category/Category';
import Footer from '../Footer/Footer';
import HeaderSlider from '../HeaderSlider/HeaderSlider';
import LatestBlog from '../LatestBlog/LatestBlog';
import NewsLatter from '../NewsLatter/NewsLatter';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import SpecialProduct from '../SpecialProducts/SpecialProduct';
import './Home.css'

const Home = () => {
    return (
        <div>
            <HeaderSlider></HeaderSlider>
            <Category></Category>
            <SpecialProduct></SpecialProduct>
            <Services></Services>
            <LatestBlog></LatestBlog>
            <Reviews></Reviews>
            <NewsLatter></NewsLatter>
            <Footer></Footer>
        </div>
    );
};

export default Home;