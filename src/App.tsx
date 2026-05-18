/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ArrowRight, CircleDot, Zap, Waves, Sparkles, Ban, ChevronDown, Check, Instagram, Facebook, MessageCircle, Send } from "lucide-react";
import Lenis from 'lenis';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FDF9F5] text-black font-sans overflow-x-hidden selection:bg-black selection:text-white">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-24 pb-20 px-6 text-white">
        {/* Background Image Container */}
        <div className="absolute inset-2 md:inset-4 z-0 bg-[#e5e5e5] rounded-[1rem] md:rounded-[2rem] overflow-hidden">
          <img
            src="https://res.cloudinary.com/dsifzbr67/image/upload/v1779055396/ChatGPT_Image_May_18_2026_12_02_03_AM_ewcnpn.png"
            alt="Beauty treatment close up"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Minimalist Top Navigation */}
        <header className="absolute top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-screen-xl z-20 flex justify-between items-center px-2 md:px-4 py-2">
          {/* Logo */}
          <div className="flex flex-1 items-center pl-2 text-white">
            <span className="text-lg md:text-xl font-medium tracking-tight">
              <span className="font-light opacity-90">Aura</span>Beauty
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex flex-none items-center gap-8 px-8 py-3.5 bg-white text-black rounded-full shadow-lg">
            <a href="#" className="text-[10px] xl:text-xs font-semibold uppercase tracking-[0.15em] opacity-70 hover:opacity-100 transition-opacity">About Us</a>
            <a href="#" className="text-[10px] xl:text-xs font-semibold uppercase tracking-[0.15em] opacity-70 hover:opacity-100 transition-opacity">Our Services</a>
            <a href="#" className="text-[10px] xl:text-xs font-semibold uppercase tracking-[0.15em] opacity-70 hover:opacity-100 transition-opacity">Our Client's</a>
            <a href="#" className="text-[10px] xl:text-xs font-semibold uppercase tracking-[0.15em] opacity-70 hover:opacity-100 transition-opacity">Contacts</a>
          </nav>

          {/* Action */}
          <div className="flex flex-1 justify-end items-center">
            <button className="hidden md:flex items-center gap-3 bg-white/20 border border-white/20 backdrop-blur-md text-white pl-6 pr-2 py-2 rounded-full hover:bg-white/30 transition-all">
              <span className="text-[10px] font-semibold uppercase tracking-widest pl-1">Book Now</span>
              <div className="bg-white text-black p-1.5 rounded-full">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
            <button className="md:hidden text-[10px] font-semibold uppercase tracking-[0.15em] text-white bg-white/20 px-4 py-2 rounded-full backdrop-blur-md">Menu</button>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center mb-10 md:mb-26">
          <RevealTitle 
            as="h1"
            className="text-[9vw] sm:text-5xl md:text-6xl lg:text-[5.5rem] font-normal tracking-[-0.03em] leading-[0.95]"
            text={["Because Your Skin", "Deserves the Best"]}
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-3 mt-10 md:mt-12 w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-medium text-xs hover:scale-105 active:scale-95 transition-all duration-300">
              Book a Consultation
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-medium text-xs hover:bg-white/10 hover:border-white/50 active:scale-95 transition-all duration-300 backdrop-blur-sm">
              Explore Services
            </button>
          </motion.div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="relative z-20 bg-white text-black w-[92%] max-w-6xl lg:max-w-7xl mx-auto rounded-[1.5rem] md:rounded-[2rem] overflow-hidden -mt-32 md:-mt-36 lg:-mt-40 shadow-2xl">
         <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10">
            <InfoCard 
              label="About Us"
              title={<>Learn How We<br/>Transform Skin Care</>}
              imageSrc="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800"
            />
            <InfoCard 
              label="Our Services"
              title={<>Explore Our Expert<br/>Skin Care Services</>}
              imageSrc="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800"
            />
            <InfoCard 
              label="Clinic Updates"
              title={<>Stay Updated with<br/>the Latest in Skincare</>}
              imageSrc="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800"
            />
         </div>
      </section>

      {/* About Section */}
      <section className="relative z-20 w-[92%] max-w-6xl lg:max-w-7xl mx-auto py-20 md:py-32">
        <div className="bg-white h-[700px] rounded-[1rem] md:rounded-[2rem] p-8 sm:p-10 md:p-16 lg:p-20 flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          
          <div className="w-full md:w-1/2 relative aspect-[4/3] md:aspect-[4.5/5] lg:aspect-[4.5/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden">
            <img 
              src="https://res.cloudinary.com/dsifzbr67/image/upload/v1779059776/ChatGPT_Image_May_18_2026_01_15_38_AM_iumdge.png"
              alt="Hair stylist with client"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-start text-black">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
              <span className="text-xs font-medium uppercase tracking-widest">About</span>
            </div>
            <RevealTitle
              as="h2"
              text="We are more than a beauty salon, we are a place where you can enjoy and relax"
              className="text-[1.75rem] md:text-4xl lg:text-[2.75rem] leading-[1.1] font-normal tracking-tight max-w-lg"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-sm lg:text-base text-black/60 leading-relaxed max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit egestas egestas viverra turpis habitant eu sociis fermentum felis at vene.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <button className="mt-8 px-7 py-2.5 rounded-full border border-black/20 text-sm hover:bg-black hover:text-white transition-colors duration-300">
                About us
              </button>
            </Reveal>
          </div>

        </div>
      </section>

      {/* Services Grid Section */}
      <section className="relative z-20 w-[92%] max-w-6xl lg:max-w-7xl mx-auto py-10 md:py-20 mb-20 md:mb-32">
         {/* Services Header */}
         <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16">
           <div className="flex flex-col">
             <div className="flex items-center gap-2 mb-4 md:mb-6">
               <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
               <span className="text-xs font-medium uppercase tracking-widest">Services</span>
             </div>
             <RevealTitle
               as="h2"
               text={["Our Most Popular", "Skin Transformations"]}
               className="text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.1] font-normal tracking-tight"
             />
           </div>
           <button className="mt-8 md:mt-0 px-8 py-3 rounded-full border border-black/20 text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 active:scale-95">
             View All
           </button>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <ServiceTextCard title={<>Acne<br/>Treatment</>} icon={CircleDot} />
            <ServiceImageCard src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800" alt="Acne Treatment" />
            <ServiceTextCard title={<>Laser Skin<br/>Resurfacing</>} icon={Zap} />
            
            <ServiceImageCard src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800" alt="Massage" />
            <ServiceTextCard title={<>Tattoo<br/>Removal</>} icon={Waves} />
            <ServiceImageCard src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800" alt="Eye Mask" />
            
            <ServiceTextCard title={<>Laser Hair<br/>Removal</>} icon={Sparkles} />
            <ServiceImageCard src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800" alt="Facial cream" />
            <ServiceTextCard title={<>Mole and Skin<br/>Tag Removal</>} icon={Ban} />
         </div>
      </section>

      {/* Feedback Section */}
      <section className="relative z-20 w-[92%] max-w-6xl lg:max-w-7xl mx-auto py-10 md:py-20 mb-20 md:mb-32 flex flex-col gap-8 md:gap-12 lg:gap-16">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
            <span className="text-xs font-medium uppercase tracking-widest">Testimonials</span>
          </div>
          <RevealTitle
            as="h2"
            text={["What Our Clients", "Say About Us"]}
            className="text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.1] font-normal tracking-tight"
          />
        </div>

        <div className="relative flex flex-col md:block">
          {/* Image */}
          <div className="w-full md:w-[55%] lg:w-[45%] h-[45vh] md:h-[500px] lg:h-[600px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden">
            <img 
              src="https://i.pinimg.com/736x/50/42/65/5042657d5f82939e090a5f85611b2179.jpg" 
              alt="Client portrait" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Content Box */}
          <div className="w-[90%] mx-auto md:mx-0 md:w-[60%] lg:w-[65%] xl:w-[60%] md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 bg-white rounded-[1.5rem] md:rounded-[2rem] p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20 z-10 -mt-16 md:mt-0">
            <RevealTitle
              as="h2"
              text="&quot;Aura's attention to detail is unmatched&quot;"
              className="text-[1.75rem] md:text-3xl lg:text-[2.75rem] leading-[1.1] md:leading-[1.15] font-normal tracking-tight text-black"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 md:mt-8 text-sm lg:text-base text-black/70 leading-relaxed font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit egestas viverra turpis habitant eu sociis fermentum felis posuere fermentum at fringilla pellentesque commodo posuere quisque eget massa bibendum.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 md:mt-10 flex items-center gap-3 text-sm font-medium text-black">
                <span>Sophie Moore</span>
                <span className="text-black/20 font-light">—</span>
                <span className="text-black/60 font-normal">New York</span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Reverted Layout Feedback */}
        <div className="relative flex flex-col md:block">
          {/* Image */}
          <div className="w-full md:w-[55%] lg:w-[45%] h-[45vh] md:h-[500px] lg:h-[600px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden md:ml-auto">
            <img 
              src="https://i.pinimg.com/736x/0a/22/ea/0a22ea88dd2183e465c9df6b54e5453a.jpg" 
              alt="Client portrait" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Content Box */}
          <div className="w-[90%] mx-auto md:mx-0 md:w-[60%] lg:w-[65%] xl:w-[60%] md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 bg-white rounded-[1.5rem] md:rounded-[2rem] p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20 z-10 -mt-16 md:mt-0">
            <RevealTitle
              as="h2"
              text="&quot;The most relaxing experience of my life&quot;"
              className="text-[1.75rem] md:text-3xl lg:text-[2.75rem] leading-[1.1] md:leading-[1.15] font-normal tracking-tight text-black"
            />
            <p className="mt-6 md:mt-8 text-sm lg:text-base text-black/70 leading-relaxed font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit egestas viverra turpis habitant eu sociis fermentum felis posuere fermentum at fringilla pellentesque commodo posuere quisque eget massa bibendum.
            </p>
            <div className="mt-8 md:mt-10 flex items-center gap-3 text-sm font-medium text-black">
              <span>Elena Rostova</span>
              <span className="text-black/20 font-light">—</span>
              <span className="text-black/60 font-normal">Los Angeles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="relative z-20 w-[92%] max-w-6xl lg:max-w-7xl mx-auto mb-20 md:mb-32">
        <div className="flex flex-col items-center justify-center text-center mb-10 md:mb-14">
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
            <span className="text-xs font-medium uppercase tracking-widest">Visit Us</span>
          </div>
          <RevealTitle
            as="h2"
            text="Stop by our flagship salon"
            className="text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.1] font-normal tracking-tight"
          />
        </div>

        {/* Full Image */}
        <Reveal className="w-full h-[30vh] md:h-[400px] lg:h-[500px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=80&w=1200" 
            alt="Salon interior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </Reveal>
        
        {/* Info Box */}
        <div className="bg-white w-[90%] md:w-[85%] lg:w-[75%] mx-auto rounded-[1.5rem] md:rounded-[2rem] relative z-20 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col md:flex-row gap-8 md:gap-16 -mt-2 md:-mt-16 justify-between items-center sm:items-start md:items-center">
          <Reveal className="w-full md:w-[45%] lg:w-[40%] text-center sm:text-left">
            <h3 className="text-2xl md:text-3xl lg:text-[2.2rem] leading-[1.2] font-normal tracking-tight mb-4 md:mb-6 text-black">
              New York, NY
            </h3>
            <p className="text-sm md:text-base text-black/70 leading-relaxed font-normal">
              Sociis fermentum posuere fermentum fringilla pellentesque commodo posuere quisque eget massa bibendum vehicula.
            </p>
          </Reveal>
          
          <Reveal delay={0.1} className="w-full md:w-[50%] flex flex-col gap-6 justify-center text-[13px] md:text-sm lg:text-[15px] font-medium text-black/80 tracking-wide">
            <ul className="space-y-4 md:space-y-6">
              <li className="flex items-start gap-4">
                <span className="w-1 h-1 rounded-full bg-black mt-[0.625rem] shrink-0 opacity-70"></span>
                <span>55 East Birchwood Ave. Brooklyn,<br/>New York 11201, United States</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-1 h-1 rounded-full bg-black mt-[0.625rem] shrink-0 opacity-70"></span>
                <span>(487) 870 - 1087</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-1 h-1 rounded-full bg-black mt-[0.625rem] shrink-0 opacity-70"></span>
                <div className="flex flex-col xl:flex-row xl:items-center gap-2 xl:gap-8">
                   <span>Mon - Fri: 10am - 6pm</span>
                   <span>Sat - Sun: 10am - 6pm</span>
                </div>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="relative z-20 w-[92%] max-w-6xl lg:max-w-7xl mx-auto py-10 md:py-20 mb-20 md:mb-32">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
          <div className="w-full md:w-1/2 flex flex-col items-start text-black">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
              <span className="text-xs font-medium uppercase tracking-widest">Contact Us</span>
            </div>
            <RevealTitle
              as="h2"
              text={["Book your", "consultation"]}
              className="text-[1.75rem] md:text-4xl lg:text-[2.75rem] xl:text-[3.5rem] leading-[1.1] font-normal tracking-tight mb-6"
            />
            <Reveal delay={0.1}>
              <p className="text-black/70 mb-8 md:mb-10 leading-relaxed max-w-md text-sm md:text-base">
                Leave your details below and our team will get back to you shortly to confirm your booking and answer any questions.
              </p>
            </Reveal>
            
            <Reveal delay={0.2} className="w-full">
              <form className="flex flex-col gap-6 w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
               <div className="relative">
                  <input 
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-black/20 py-3 text-sm focus:outline-none focus:border-black transition-colors placeholder:text-black/40"
                    required
                  />
               </div>
               <div className="relative">
                  <input 
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-transparent border-b border-black/20 py-3 text-sm focus:outline-none focus:border-black transition-colors placeholder:text-black/40"
                    required
                  />
               </div>
               <CustomSelect />
               
               <button type="submit" className="mt-6 md:mt-8 px-8 py-3.5 w-fit rounded-full bg-black text-white text-sm font-medium hover:bg-black/80 transition-all duration-300 tracking-wide">
                 Submit Request
               </button>
              </form>
            </Reveal>
          </div>
          <Reveal delay={0.3} className="w-full md:w-1/2 mt-10 md:mt-0 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden aspect-square md:aspect-[4/5]">
            <img 
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200" 
              alt="Salon interior" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </Reveal>
        </div>
      </section>

      {/* News and Articles Section */}
      <section className="relative z-20 w-[92%] max-w-6xl lg:max-w-7xl mx-auto py-10 md:py-20 mb-20 md:mb-32">
         <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <ArticleCard 
               src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800" 
               title="Techniques and tricks for a glamorous and modern look" 
            />
            
            <div className="bg-transparent rounded-[1rem] md:rounded-[2rem] p-4 md:p-6 flex flex-col items-center justify-center text-center aspect-[4.5/5]">
               <div className="flex items-center gap-2 mb-4 md:mb-6">
                 <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                 <span className="text-xs font-medium uppercase tracking-widest">Articles</span>
               </div>
               <RevealTitle
                 as="h2"
                 text={["News &", "Articles"]}
                 className="text-3xl md:text-3xl lg:text-[2.25rem] leading-[1.1] font-normal tracking-tight text-black"
               />
            </div>
            
            <ArticleCard 
               src="https://i.pinimg.com/736x/ba/63/e7/ba63e7b35ca4a83351ea2ee8ee080616.jpg" 
               title="The latest beauty trends for the upcoming season" 
            />
            
            <div className="hidden md:block bg-transparent aspect-[4.5/5]"></div>
            
            <ArticleCard 
               src="https://i.pinimg.com/736x/86/43/21/864321464d21424d88491d3cb01b6421.jpg" 
               title="Maintaining hair health through modern treatments" 
            />
            
            <div className="hidden md:block bg-transparent aspect-[4.5/5]"></div>
         </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-[#f4ece3] pt-12 md:pt-16 pb-6 md:pb-8 mt-10 md:mt-20">
        <div className="w-[92%] max-w-6xl lg:max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">
            
            {/* Top Section */}
            <Reveal className="flex flex-col md:flex-row justify-between items-start md:items-start gap-8 md:gap-0">
                {/* Left */}
                <div className="flex flex-col gap-2 text-sm text-[#5d4037] font-medium tracking-wide">
                    <span>+1 (487) 870-1087</span>
                    <span>hello@aurabeauty.com</span>
                </div>
                
                {/* Center Links */}
                <nav className="flex flex-wrap lg:flex-nowrap justify-center gap-6 md:gap-10 text-sm text-[#5d4037] font-medium pt-1">
                    <a href="#" className="hover:text-black transition-colors">About Us</a>
                    <a href="#" className="hover:text-black transition-colors">Our Services</a>
                    <a href="#" className="hover:text-black transition-colors">Our Clients</a>
                    <a href="#" className="hover:text-black transition-colors">Contact Us</a>
                </nav>
                
                {/* Right */}
                <div className="flex flex-col gap-2 text-sm text-[#5d4037] font-medium tracking-wide md:text-right">
                    <span>55 East Birchwood Ave, Brooklyn, NY</span>
                    <span>Daily from 9:00am to 8:00pm</span>
                </div>
            </Reveal>

            {/* Middle Section */}
            <div className="flex flex-col relative items-center justify-center py-10 md:py-16">
                {/* Social Left */}
                <div className="absolute left-0 flex gap-3 z-10 hidden lg:flex">
                    <a href="#" className="w-12 h-12 rounded-full bg-[#7a5948] flex items-center justify-center text-white hover:bg-[#684b3c] transition-colors">
                        <MessageCircle className="w-5 h-5 fill-current" />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-[#7a5948] flex items-center justify-center text-white hover:bg-[#684b3c] transition-colors">
                        <Send className="w-5 h-5 fill-current" />
                    </a>
                </div>
                
                {/* BIG TEXT */}
                <Reveal>
                  <h1 className="text-[28vw] md:text-[24vw] lg:text-[18rem] xl:text-[22rem] leading-[0.8] font-normal tracking-tight text-white select-none text-center w-full">
                    A<span className="inline-block bg-clip-text text-transparent bg-cover bg-center bg-no-repeat relative -top-[0.02em]" style={{ backgroundImage: "url('https://i.pinimg.com/webp/1200x/bb/be/51/bbbe516d255e3266f767e430fed8b528.webp')" }}>U</span>RA
                  </h1>
                </Reveal>
                
                {/* Mobile socials */}
                <div className="flex lg:hidden gap-4 mt-8 z-10 w-full justify-between">
                    <div className="flex gap-3">
                       <a href="#" className="w-12 h-12 rounded-full bg-[#7a5948] flex items-center justify-center text-white hover:bg-[#684b3c] transition-colors">
                           <MessageCircle className="w-5 h-5 fill-current" />
                       </a>
                       <a href="#" className="w-12 h-12 rounded-full bg-[#7a5948] flex items-center justify-center text-white hover:bg-[#684b3c] transition-colors">
                           <Send className="w-5 h-5 fill-current" />
                       </a>
                    </div>
                    <div className="flex gap-3">
                        <a href="#" className="w-12 h-12 rounded-full bg-[#7a5948] flex items-center justify-center text-white hover:bg-[#684b3c] transition-colors">
                           <Instagram className="w-5 h-5" />
                       </a>
                       <a href="#" className="w-12 h-12 rounded-full bg-[#7a5948] flex items-center justify-center text-white hover:bg-[#684b3c] transition-colors">
                           <Facebook className="w-5 h-5 fill-current" />
                       </a>
                    </div>
                </div>

                {/* Social Right */}
                <div className="absolute right-0 flex gap-3 z-10 hidden lg:flex">
                    <a href="#" className="w-12 h-12 rounded-full bg-[#7a5948] flex items-center justify-center text-white hover:bg-[#684b3c] transition-colors">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-[#7a5948] flex items-center justify-center text-white hover:bg-[#684b3c] transition-colors">
                        <Facebook className="w-5 h-5 fill-current" />
                    </a>
                </div>
            </div>

            {/* Bottom Section */}
            <Reveal delay={0.2} className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#5d4037]/60 font-medium">
                <span>Designed & Developed with ❤️ by <a href="https://contra.com/ram_qkk76ltz/work?r=ram_qkk76ltz" target="_blank" rel="noreferrer" className="underline hover:text-black transition-colors">Romeu M.</a></span>
                <span>Privacy Policy</span>
            </Reveal>
            
        </div>
      </footer>
    </div>
  );
}

function RevealTitle({ text, className, as: Component = "h2", delay = 0 }: { text: string | string[], className?: string, as?: React.ElementType, delay?: number }) {
  const lines = Array.isArray(text) ? text : [text];
  return (
    <Component className={className}>
      <span className="sr-only">{lines.join(" ")}</span>
      <motion.span 
        aria-hidden="true" 
        className="block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={{
          visible: { transition: { staggerChildren: 0.03, delayChildren: delay } }
        }}
      >
        {lines.map((line, lineIndex) => (
          <span key={lineIndex} className="block">
            {line.split(" ").map((word, wordIndex) => (
              <React.Fragment key={wordIndex}>
                <span className="inline-flex overflow-hidden pb-4 -mb-4 pt-2 -mt-2">
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      variants={{
                        hidden: { y: "110%", opacity: 0 },
                        visible: { 
                          y: "0%", 
                          opacity: 1,
                          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
                        }
                      }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
                {wordIndex !== line.split(" ").length - 1 && "\u00A0"}
              </React.Fragment>
            ))}
          </span>
        ))}
      </motion.span>
    </Component>
  );
}

function ArticleCard({ title, src }: { title: string, src: string }) {
  return (
    <div className="relative group rounded-[1rem] md:rounded-[2rem] overflow-hidden aspect-[4.5/5] cursor-pointer">
      <Reveal className="w-full h-full">
        <img
          src={src}
          alt="Article thumbnail"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </Reveal>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 z-10">
         <Reveal delay={0.1}>
           <h3 className="text-white text-lg md:text-xl lg:text-[1.65rem] font-medium leading-[1.2] max-w-[80%]">
             {title}
           </h3>
         </Reveal>
         <Reveal delay={0.2}>
           <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/80 flex items-center justify-center text-white/90 hover:bg-white hover:text-black transition-colors shrink-0 mb-1">
             <ArrowUpRight className="w-5 h-5 opacity-90" />
           </button>
         </Reveal>
      </div>
    </div>
  );
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function InfoCard({ label, title, imageSrc }: { label: string, title: React.ReactNode, imageSrc: string }) {
  return (
    <div className="group flex flex-col h-full bg-white hover:bg-zinc-50 transition-colors duration-500 cursor-pointer">
      <div className="p-5 md:p-6 lg:p-8 flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-start mb-8 lg:mb-10">
          <span className="text-[9px] md:text-[10px] lg:text-xs uppercase tracking-widest font-medium opacity-80">{label}</span>
          <ArrowUpRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </div>
        <h3 className="text-lg md:text-xl lg:text-[1.35rem] leading-[1.2] font-medium tracking-tight pb-1">
          {title}
        </h3>
      </div>
      <div className="relative w-full aspect-[4/3] overflow-hidden mt-auto">
         <img 
            src={imageSrc} 
            alt={label} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            referrerPolicy="no-referrer" 
         />
      </div>
    </div>
  );
}

function ServiceTextCard({ title, icon: Icon }: { title: React.ReactNode, icon: React.ElementType }) {
  return (
    <Reveal className="bg-white rounded-[1rem] md:rounded-[2rem] p-4 md:p-6 flex flex-col items-center justify-center text-center aspect-[4.5/5] hover:shadow-sm transition-shadow group cursor-pointer border border-black/5">
      <Icon className="w-6 h-6 md:w-8 md:h-8 mb-3 md:mb-5 opacity-60 stroke-[1.2] group-hover:scale-110 transition-transform duration-500" />
      <h4 className="text-[13px] md:text-base lg:text-[1.1rem] font-medium leading-[1.2] tracking-tight">{title}</h4>
    </Reveal>
  );
}

function ServiceImageCard({ src, alt }: { src: string, alt: string }) {
  return (
    <Reveal className="rounded-[1rem] md:rounded-[2rem] overflow-hidden aspect-[4.5/5] ">
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
        referrerPolicy="no-referrer" 
      />
    </Reveal>
  );
}

function CustomSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    { value: "acne", label: "Acne Treatment" },
    { value: "laser-skin", label: "Laser Skin Resurfacing" },
    { value: "tattoo", label: "Tattoo Removal" },
    { value: "laser-hair", label: "Laser Hair Removal" },
    { value: "mole", label: "Mole and Skin Tag Removal" }
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div 
        className={`w-full bg-transparent border-b border-black/20 py-3 text-sm focus:outline-none transition-colors cursor-pointer flex justify-between items-center select-none ${isOpen ? 'border-black' : 'hover:border-black/50'} ${!selected ? 'text-black/40' : 'text-black'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected ? options.find(o => o.value === selected)?.label : "Select Service"}</span>
        <ChevronDown className={`w-4 h-4 text-black/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[calc(100%+8px)] left-0 w-full bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-black/5 overflow-hidden z-50 py-2"
          >
            {options.map((option) => (
              <div 
                key={option.value}
                className="px-4 py-3 text-sm cursor-pointer hover:bg-[#FDF9F5] transition-colors flex items-center justify-between group"
                onClick={() => {
                  setSelected(option.value);
                  setIsOpen(false);
                }}
              >
                <span className={`transition-colors ${selected === option.value ? 'text-black font-medium' : 'text-black/70 group-hover:text-black'}`}>
                  {option.label}
                </span>
                {selected === option.value && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Check className="w-4 h-4 text-black" />
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

