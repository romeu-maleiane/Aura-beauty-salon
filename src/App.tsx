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
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-1 items-center pl-2 text-white"
          >
            <span className="text-lg md:text-xl font-medium tracking-tight">
              <span className="font-light opacity-90">Aura</span>Beauty
            </span>
          </motion.div>

          {/* Navigation */}
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-none items-center gap-8 px-8 py-3.5 bg-white text-black rounded-full shadow-lg"
          >
            <a href="#" className="text-[10px] xl:text-xs font-semibold uppercase tracking-[0.15em] opacity-70 hover:opacity-100 transition-opacity">Sobre Nós</a>
            <a href="#" className="text-[10px] xl:text-xs font-semibold uppercase tracking-[0.15em] opacity-70 hover:opacity-100 transition-opacity">Serviços</a>
            <a href="#" className="text-[10px] xl:text-xs font-semibold uppercase tracking-[0.15em] opacity-70 hover:opacity-100 transition-opacity">Feedback</a>
            <a href="#" className="text-[10px] xl:text-xs font-semibold uppercase tracking-[0.15em] opacity-70 hover:opacity-100 transition-opacity">Contactos</a>
          </motion.nav>

          {/* Action */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-1 justify-end items-center"
          >
            <button className="hidden md:flex items-center gap-3 bg-white/20 border border-white/20 backdrop-blur-md text-white pl-6 pr-2 py-2 rounded-full hover:bg-white/30 transition-all">
              <span className="text-[10px] font-semibold uppercase tracking-widest pl-1">Reservar</span>
              <div className="bg-white text-black p-1.5 rounded-full">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
            <button className="md:hidden text-[10px] font-semibold uppercase tracking-[0.15em] text-white bg-white/20 px-4 py-2 rounded-full backdrop-blur-md">Menu</button>
          </motion.div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center mb-10 md:mb-26">
          <RevealTitle 
            as="h1"
            className="text-[9vw] sm:text-5xl md:text-6xl lg:text-[5.5rem] font-normal tracking-[-0.03em] leading-[0.95]"
            text={["A Sua Beleza", "Merece o Melhor"]}
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-3 mt-10 md:mt-12 w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-medium text-xs hover:scale-105 active:scale-95 transition-all duration-300">
              Agendar Consultoria
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-medium text-xs hover:bg-white/10 hover:border-white/50 active:scale-95 transition-all duration-300 backdrop-blur-sm">
              Ver Serviços
            </button>
          </motion.div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="relative z-20 bg-white text-black w-[92%] max-w-6xl lg:max-w-7xl mx-auto rounded-[1.5rem] md:rounded-[2rem] overflow-hidden -mt-32 md:-mt-36 lg:-mt-40 shadow-2xl">
         <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10">
            <InfoCard 
              label="Sobre Nós"
              title={<>Saiba Como Re-inventamos<br/>a Arte da Beleza</>}
              imageSrc="https://res.cloudinary.com/dsifzbr67/image/upload/v1779131054/ChatGPT_Image_May_18_2026_09_03_11_PM_lqmlvd.png"
            />
            <InfoCard 
              label="Especialidades"
              title={<>Descubra os Nossos<br/>Tratamentos Exclusivos</>}
              imageSrc="https://i.pinimg.com/webp/1200x/8c/9f/a7/8c9fa7dbc6e87d9a2d83c5bf0acf7874.webp"
            />
            <InfoCard 
              label="Novidades"
              title={<>As Últimas Tendências<br/>Diretamente de Lisboa</>}
              imageSrc="https://i.pinimg.com/webp/1200x/00/25/66/002566c1d46efb2ec06062c16ef73518.webp"
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
              <span className="text-xs font-medium uppercase tracking-widest">Aura Lisboa</span>
            </div>
            <RevealTitle
              as="h2"
              text="Somos mais do que um salão, somos o seu refúgio de luxo no Chiado"
              className="text-[1.75rem] md:text-4xl lg:text-[2.75rem] leading-[1.1] font-normal tracking-tight max-w-lg"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-sm lg:text-base text-black/60 leading-relaxed max-w-md">
                No Aura, cada detalhe é pensado para proporcionar uma experiência de bem-estar inigualável. Dos cortes de tendência aos tratamentos estéticos mais avançados, celebramos a sua individualidade.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <button className="mt-8 px-7 py-2.5 rounded-full border border-black/20 text-sm hover:bg-black hover:text-white transition-colors duration-300">
                Conheça-nos
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
               <span className="text-xs font-medium uppercase tracking-widest">Serviços</span>
             </div>
             <RevealTitle
               as="h2"
               text={["As Nossas", "Transformações"]}
               className="text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.1] font-normal tracking-tight"
             />
           </div>
           <button className="mt-8 md:mt-0 px-8 py-3 rounded-full border border-black/20 text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 active:scale-95">
             Ver Todos
           </button>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <ServiceTextCard title={<>Design de<br/>Corte & Cor</>} icon={Sparkles} />
            <ServiceImageCard src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800" alt="Corte e Cor" />
            <ServiceTextCard title={<>Estética<br/>Facial</>} icon={Zap} />
            
            <ServiceImageCard src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800" alt="Tratamento Facial" />
            <ServiceTextCard title={<>Manicura &<br/>Pedicura</>} icon={CircleDot} />
            <ServiceImageCard src="https://i.pinimg.com/736x/f2/d3/79/f2d3790051f13cf6e28d3693fa26bf8e.jpg" alt="Manicura" />
            
            <ServiceTextCard title={<>Tratamentos<br/>Capilares</>} icon={Sparkles} />
            <ServiceImageCard src="https://i.pinimg.com/736x/6e/8e/a8/6e8ea8a9ea1fb93bb107c77a33b103ef.jpg" alt="Tratamento Facial" />
            <ServiceTextCard title={<>Maquilhagem<br/>Profissional</>} icon={Sparkles} />
         </div>
      </section>

      {/* Feedback Section */}
      <section className="relative z-20 w-[92%] max-w-6xl lg:max-w-7xl mx-auto py-10 md:py-20 mb-20 md:mb-32 flex flex-col gap-8 md:gap-12 lg:gap-16">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
            <span className="text-xs font-medium uppercase tracking-widest">Feedback</span>
          </div>
          <RevealTitle
            as="h2"
            text={["O que dizem as", "Nossas Clientes"]}
            className="text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.1] font-normal tracking-tight"
          />
        </div>

        <div className="relative flex flex-col md:block">
          {/* Image */}
          <div className="w-full md:w-[55%] lg:w-[45%] h-[45vh] md:h-[500px] lg:h-[600px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden">
            <img 
              src="https://i.pinimg.com/736x/50/42/65/5042657d5f82939e090a5f85611b2179.jpg" 
              alt="Retrato de cliente" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Content Box */}
          <div className="w-[90%] mx-auto md:mx-0 md:w-[60%] lg:w-[65%] xl:w-[60%] md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 bg-white rounded-[1.5rem] md:rounded-[2rem] p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20 z-10 -mt-16 md:mt-0">
            <RevealTitle
              as="h2"
              text="&quot;A atenção ao detalhe no Aura é incrível&quot;"
              className="text-[1.75rem] md:text-3xl lg:text-[2.75rem] leading-[1.1] md:leading-[1.15] font-normal tracking-tight text-black"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 md:mt-8 text-sm lg:text-base text-black/70 leading-relaxed font-normal">
                Sempre que venho ao Aura, sinto-me revitalizada. O atendimento é personalizado e o profissionalismo da equipa é visível em cada gesto. Recomendo vivamente a todos em Lisboa.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 md:mt-10 flex items-center gap-3 text-sm font-medium text-black">
                <span>Ana Silva</span>
                <span className="text-black/20 font-light">—</span>
                <span className="text-black/60 font-normal">Lisboa</span>
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
              alt="Retrato de cliente" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Content Box */}
          <div className="w-[90%] mx-auto md:mx-0 md:w-[60%] lg:w-[65%] xl:w-[60%] md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 bg-white rounded-[1.5rem] md:rounded-[2rem] p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20 z-10 -mt-16 md:mt-0">
            <RevealTitle
              as="h2"
              text="&quot;A experiência mais relaxante da minha vida&quot;"
              className="text-[1.75rem] md:text-3xl lg:text-[2.75rem] leading-[1.1] md:leading-[1.15] font-normal tracking-tight text-black"
            />
            <p className="mt-6 md:mt-8 text-sm lg:text-base text-black/70 leading-relaxed font-normal">
              Desde a maquilhagem ao corte de cabelo, saí do Aura a sentir-me uma pessoa nova. O ambiente é sofisticado mas muito acolhedor. Tornou-se o meu salão de eleição.
            </p>
            <div className="mt-8 md:mt-10 flex items-center gap-3 text-sm font-medium text-black">
              <span>Beatriz Costa</span>
              <span className="text-black/20 font-light">—</span>
              <span className="text-black/60 font-normal">Cascais</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="relative z-20 w-[92%] max-w-6xl lg:max-w-7xl mx-auto mb-20 md:mb-32">
        <div className="flex flex-col items-center justify-center text-center mb-10 md:mb-14">
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
            <span className="text-xs font-medium uppercase tracking-widest">Visite-nos</span>
          </div>
          <RevealTitle
            as="h2"
            text="Visite o nosso salão no Chiado"
            className="text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.1] font-normal tracking-tight"
          />
        </div>

        {/* Full Image */}
        <Reveal className="w-full h-[30vh] md:h-[400px] lg:h-[500px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden">
          <img 
            src="https://res.cloudinary.com/dsifzbr67/image/upload/v1779132188/ChatGPT_Image_18_05_2026_21_22_47_rgbwjm.png" 
            alt="Interior do salão" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </Reveal>
        
        {/* Info Box */}
        <div className="bg-white w-[90%] md:w-[85%] lg:w-[75%] mx-auto rounded-[1.5rem] md:rounded-[2rem] relative z-20 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col md:flex-row gap-8 md:gap-16 -mt-2 md:-mt-16 justify-between items-center sm:items-start md:items-center">
          <Reveal className="w-full md:w-[45%] lg:w-[40%] text-center sm:text-left">
            <h3 className="text-2xl md:text-3xl lg:text-[2.2rem] leading-[1.2] font-normal tracking-tight mb-4 md:mb-6 text-black">
              Chiado, Lisboa
            </h3>
            <p className="text-sm md:text-base text-black/70 leading-relaxed font-normal">
              Estamos localizados no coração de Lisboa, prontos para lhe oferecer um momento único de cuidado e sofisticação.
            </p>
          </Reveal>
          
          <Reveal delay={0.1} className="w-full md:w-[50%] flex flex-col gap-6 justify-center text-[13px] md:text-sm lg:text-[15px] font-medium text-black/80 tracking-wide">
            <ul className="space-y-4 md:space-y-6">
              <li className="flex items-start gap-4">
                <span className="w-1 h-1 rounded-full bg-black mt-[0.625rem] shrink-0 opacity-70"></span>
                <span>Rua Garrett, 55. Chiado,<br/>Lisboa 1200-203, Portugal</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-1 h-1 rounded-full bg-black mt-[0.625rem] shrink-0 opacity-70"></span>
                <span>+351 210 000 000</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-1 h-1 rounded-full bg-black mt-[0.625rem] shrink-0 opacity-70"></span>
                <div className="flex flex-col xl:flex-row xl:items-center gap-2 xl:gap-8">
                   <span>Seg - Sex: 09h - 20h</span>
                   <span>Sáb: 10h - 18h</span>
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
              <span className="text-xs font-medium uppercase tracking-widest">Contacto</span>
            </div>
            <RevealTitle
              as="h2"
              text={["Agende a sua", "consultoria"]}
              className="text-[1.75rem] md:text-4xl lg:text-[2.75rem] xl:text-[3.5rem] leading-[1.1] font-normal tracking-tight mb-6"
            />
            <Reveal delay={0.1}>
              <p className="text-black/70 mb-8 md:mb-10 leading-relaxed max-w-md text-sm md:text-base">
                Deixe os seus dados abaixo e a nossa equipa entrará em contacto para confirmar o seu agendamento e esclarecer qualquer dúvida.
              </p>
            </Reveal>
            
            <Reveal delay={0.2} className="w-full">
              <form className="flex flex-col gap-6 w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
               <div className="relative">
                  <input 
                    type="text"
                    placeholder="O Seu Nome"
                    className="w-full bg-transparent border-b border-black/20 py-3 text-sm focus:outline-none focus:border-black transition-colors placeholder:text-black/40"
                    required
                  />
               </div>
               <div className="relative">
                  <input 
                    type="tel"
                    placeholder="Telemóvel"
                    className="w-full bg-transparent border-b border-black/20 py-3 text-sm focus:outline-none focus:border-black transition-colors placeholder:text-black/40"
                    required
                  />
               </div>
               <CustomSelect />
               
               <button type="submit" className="mt-6 md:mt-8 px-8 py-3.5 w-fit rounded-full bg-black text-white text-sm font-medium hover:bg-black/80 transition-all duration-300 tracking-wide">
                 Enviar Pedido
               </button>
              </form>
            </Reveal>
          </div>
          <Reveal delay={0.3} className="w-full md:w-1/2 mt-10 md:mt-0 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden aspect-square md:aspect-[4/5]">
            <img 
              src="https://i.pinimg.com/1200x/5b/a2/28/5ba228447fa451c9a2c3f68fc1ab0800.jpg" 
              alt="Salão Aura" 
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
               title="Técnicas e truques para um visual moderno e sofisticado" 
            />
            
            <div className="bg-transparent rounded-[1rem] md:rounded-[2rem] p-4 md:p-6 flex flex-col items-center justify-center text-center aspect-[4.5/5]">
               <div className="flex items-center gap-2 mb-4 md:mb-6">
                 <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                 <span className="text-xs font-medium uppercase tracking-widest">Blog</span>
               </div>
               <RevealTitle
                 as="h2"
                 text={["Novidades &", "Tendências"]}
                 className="text-3xl md:text-3xl lg:text-[2.25rem] leading-[1.1] font-normal tracking-tight text-black"
               />
            </div>
            
            <ArticleCard 
               src="https://i.pinimg.com/736x/ba/63/e7/ba63e7b35ca4a83351ea2ee8ee080616.jpg" 
               title="As últimas tendências de maquilhagem para a estação" 
            />
            
            <div className="hidden md:block bg-transparent aspect-[4.5/5]"></div>
            
            <ArticleCard 
               src="https://i.pinimg.com/736x/86/43/21/864321464d21424d88491d3cb01b6421.jpg" 
               title="Como manter a saúde capilar com tratamentos modernos" 
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
                    <span>+351 210 000 000</span>
                    <span>hello@aurabeauty.pt</span>
                </div>
                
                {/* Center Links */}
                <nav className="flex flex-wrap lg:flex-nowrap justify-center gap-6 md:gap-10 text-sm text-[#5d4037] font-medium pt-1">
                    <a href="#" className="hover:text-black transition-colors">Sobre Nós</a>
                    <a href="#" className="hover:text-black transition-colors">Serviços</a>
                    <a href="#" className="hover:text-black transition-colors">Testemunhos</a>
                    <a href="#" className="hover:text-black transition-colors">Contactos</a>
                </nav>
                
                {/* Right */}
                <div className="flex flex-col gap-2 text-sm text-[#5d4037] font-medium tracking-wide md:text-right">
                    <span>Rua Garrett, 55. Chiado, Lisboa</span>
                    <span>Diariamente das 09:00 às 20:00</span>
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
                <span>Política de Privacidade</span>
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
        viewport={{ once: true, margin: "0px" }}
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
                          transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } 
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
          alt="Destaque"
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
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function InfoCard({ label, title, imageSrc }: { label: string, title: React.ReactNode, imageSrc: string }) {
  return (
    <Reveal className="group flex flex-col h-full bg-white hover:bg-zinc-50 transition-colors duration-500 cursor-pointer">
      <div className="p-5 md:p-6 lg:p-8 flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-start mb-8 lg:mb-10">
          <span className="text-[9px] md:text-[10px] lg:text-xs uppercase tracking-widest font-medium opacity-80">{label}</span>
          <ArrowUpRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </div>
        <h3 className="text-lg md:text-xl lg:text-[1.35rem] leading-[1.2] font-medium tracking-tight pb-1 text-black">
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
    </Reveal>
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
    { value: "corte", label: "Corte & Cor" },
    { value: "facial", label: "Estética Facial" },
    { value: "nail", label: "Manicura & Pedicura" },
    { value: "hair-care", label: "Tratamento Capilar" },
    { value: "makeup", label: "Maquilhagem" }
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
        <span>{selected ? options.find(o => o.value === selected)?.label : "Selecionar Serviço"}</span>
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

