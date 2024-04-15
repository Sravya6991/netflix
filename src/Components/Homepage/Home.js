import React from 'react';
import Header from './Header';
import HeroContent from './HeroContent';
import VideoStreamingContent from "./VideoStreamingContent/VideoStreamingContent" 
import Faqs from "./Faqs";
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <section id="main" className="min-vh-100 position-relative">
        <Header />
        <HeroContent />  
      </section>
      
      <VideoStreamingContent />
      <Faqs />    
      <Footer />
    </>
    
  )
}

export default Home