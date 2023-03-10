import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Tours from './Tours/Tours';
import Footer from '../Shared/Footer/Footer';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Tours></Tours>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;