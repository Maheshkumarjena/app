import "@styles/globals.css";
import React from 'react'
import Typewriter from '@components/Typewriter'
import AboutUs from "@components/AboutUs";
import Footer from '@components/Footer';
const Home = () => {
  return (
    <section className='w-full z-9000  flex-center flex-col'>
        <Typewriter/>
        <AboutUs/>
        <Footer/>
    </section>
)

}

export default Home