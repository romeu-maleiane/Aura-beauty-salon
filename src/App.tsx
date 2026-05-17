/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function App() {
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
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[9vw] sm:text-5xl md:text-6xl lg:text-[5.5rem] font-normal tracking-[-0.03em] leading-[0.95]"
          >
            Because Your Skin<br />Deserves the Best
          </motion.h1>
          
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
      <section className="relative z-20 bg-white text-black w-[92%] max-w-6xl lg:max-w-7xl mx-auto rounded-[1.5rem] md:rounded-[2rem] overflow-hidden -mt-12 md:-mt-16 lg:-mt-40 shadow-2xl">
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
    </div>
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
