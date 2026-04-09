/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Heart, 
  Music, 
  Star, 
  Crown, 
  Calendar, 
  Camera, 
  Volume2, 
  VolumeX,
  ChevronRight,
  ChevronLeft,
  Sparkles
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";

const IMAGES = [
  "sam1.jpeg",
  "sam2.jpeg",
  "sam3.jpeg",
  "sam4.jpeg",
  "sam5.jpeg",
  "sam6.jpeg",
  "sam7.jpeg",
  "sam8.jpeg",
  "sam9.jpeg",
  "sam10.jpeg",
  "sam11.jpeg",
  "sam12.jpeg"
];

const BIRTHDAY_DATE = new Date("2026-04-10T00:00:00");

export default function App() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMuted, setIsMuted] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = BIRTHDAY_DATE.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    // Initial confetti burst
    const fireConfetti = () => {
<<<<<<< HEAD
      if (typeof window === 'undefined') return;
      
      try {
        // Create a dedicated confetti instance to avoid global conflicts
        const myConfetti = confetti.create(undefined, {
          resize: true,
          useWorker: true
        });
        
        myConfetti({
=======
      try {
        confetti({
>>>>>>> 8d862baa3fd80c69915c3a47ab764b18c3b851bc
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#4B0082', '#FFFFFF'],
          zIndex: 1000
        });
      } catch (err) {
        console.error("Confetti error:", err);
      }
    };

<<<<<<< HEAD
    // Use requestAnimationFrame to ensure we are in a valid paint cycle
    const confettiTimer = setTimeout(() => {
      requestAnimationFrame(fireConfetti);
    }, 1500);

    const confettiTimer2 = setTimeout(() => {
      requestAnimationFrame(fireConfetti);
    }, 2500);
=======
    const confettiTimer = setTimeout(fireConfetti, 1500);
    const confettiTimer2 = setTimeout(fireConfetti, 2500);
>>>>>>> 8d862baa3fd80c69915c3a47ab764b18c3b851bc

    return () => {
      clearInterval(timer);
      clearTimeout(confettiTimer);
      clearTimeout(confettiTimer2);
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(e => console.log("Audio play blocked", e));
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);

  return (
    <div className="min-h-screen bg-royal-black overflow-x-hidden selection:bg-royal-gold selection:text-black">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-royal-purple/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-royal-gold/10 blur-[120px] rounded-full" />
      </div>

      {/* Music Player */}
      <div className="fixed top-6 right-6 z-50">
        <button 
          onClick={toggleMusic}
          className="p-4 glass-card hover:bg-white/10 transition-all duration-300 group relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-royal-gold to-royal-purple rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          {isMuted ? <VolumeX className="w-6 h-6 text-royal-gold" /> : <Volume2 className="w-6 h-6 text-royal-gold animate-pulse" />}
        </button>
        <audio 
          ref={audioRef} 
          loop 
          src="/og-bgm.mp3" 
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <Crown className="w-16 h-16 text-royal-gold mx-auto mb-4" />
          </motion.div>
          
          <h2 className="font-royal text-royal-gold tracking-[0.3em] text-sm md:text-base uppercase mb-4">Celebrating 18 Years of Greatness</h2>
          
          <h1 className="font-serif text-6xl md:text-9xl font-black mb-8 leading-tight">
            <span className="gold-gradient-text block">HAPPY</span>
            <span className="text-white block">18TH BIRTHDAY</span>
            <span className="gold-gradient-text block uppercase tracking-tighter">SAMPREETH</span>
          </h1>

          {/* Countdown */}
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mt-12">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Mins", value: timeLeft.minutes },
              { label: "Secs", value: timeLeft.seconds },
            ].map((item, i) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="glass-card p-4 md:p-6 flex flex-col items-center justify-center border-royal-gold/20"
              >
                <span className="text-2xl md:text-4xl font-bold text-white font-mono">{String(item.value).padStart(2, '0')}</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-royal-gold mt-2">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">Scroll to Explore</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-royal-gold to-transparent"
          />
        </motion.div>
      </section>

      {/* Heartfelt Message Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-16 relative overflow-hidden group border-royal-gold/30"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Crown className="w-32 h-32 text-royal-gold" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-royal-gold" />
                <span className="font-royal text-royal-gold tracking-widest text-sm uppercase">The Sampreeth Chronicle</span>
              </div>

              <h3 className="font-royal text-3xl md:text-5xl mb-8 gold-gradient-text">Happy Birthday</h3>
              
              <p className="font-serif text-2xl md:text-4xl leading-relaxed text-white/90 italic mb-8">
                "Sampreeth, you are not only my younger brother, but you have always been like an elder one to me."
              </p>

              <p className="font-serif text-xl md:text-2xl text-white/70 leading-relaxed mb-12">
                "I am really happy to have you as my brother in my life. Make sure you enjoy this milestone a lot with lots of happiness and great memories. I love you, my brother."
              </p>
              
              <div className="mt-12 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-royal-gold to-royal-purple flex items-center justify-center shadow-lg shadow-royal-gold/20">
                  <Heart className="w-7 h-7 text-white fill-white" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">With Eternal Love</p>
                  <p className="text-sm text-royal-gold uppercase tracking-[0.2em] font-royal">Your Sister, Aishwarya</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="font-royal text-royal-gold tracking-widest text-sm mb-4">MEMORIES & MILESTONES</h2>
              <h3 className="font-serif text-5xl md:text-7xl font-bold">The Journey <br/> of a Legend</h3>
            </div>
          </div>

          <div className="relative aspect-[16/9] md:min-h-[600px] overflow-hidden rounded-3xl group bg-black/40">
            {/* Navigation Buttons Inside Container */}
            <div className="absolute inset-y-0 left-4 z-40 flex items-center">
              <button 
                onClick={prevImage} 
                className="p-3 md:p-4 rounded-full glass-card border-white/10 hover:bg-royal-gold/20 hover:border-royal-gold/50 transition-all duration-300 group/btn"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover/btn:text-royal-gold transition-colors" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-4 z-40 flex items-center">
              <button 
                onClick={nextImage} 
                className="p-3 md:p-4 rounded-full glass-card border-white/10 hover:bg-royal-gold/20 hover:border-royal-gold/50 transition-all duration-300 group/btn"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover/btn:text-royal-gold transition-colors" />
              </button>
            </div>

            {/* Blurred Background for Aspect Ratio Gaps */}
            <AnimatePresence mode="wait">
              <motion.img
                key={`bg-${currentImageIndex}`}
                src={IMAGES[currentImageIndex]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={IMAGES[currentImageIndex]}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 z-20" />
            
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end z-30">
              <div className="glass-card px-6 py-3 border-white/20">
                <span className="text-sm font-medium tracking-widest uppercase">Memory {currentImageIndex + 1} of {IMAGES.length}</span>
              </div>
              <div className="flex gap-2">
                {IMAGES.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1 transition-all duration-300 rounded-full ${i === currentImageIndex ? 'w-8 bg-royal-gold' : 'w-2 bg-white/20'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Masonry Grid for more photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {IMAGES.slice(0, 8).map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                className="aspect-square rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
                onClick={() => setCurrentImageIndex(i)}
              >
                <img src={img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Sparkles className="w-12 h-12 text-royal-gold mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-4">Energetic & Curious</h2>
            <p className="text-white/60 max-w-2xl mx-auto">Always learning, always growing, and always bringing life to every room he enters.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Star, title: "Energetic", desc: "A powerhouse of positivity and drive." },
              { icon: Music, title: "Music Lover", desc: "Vibing to the best beats of life." },
              { icon: Star, title: "Lifelong Learner", desc: "Constantly seeking new knowledge and skills." },
            ].map((trait, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-card p-8 text-center border-white/5 hover:border-royal-gold/30 transition-colors"
              >
                <trait.icon className="w-12 h-12 text-royal-gold mx-auto mb-6" />
                <h4 className="font-royal text-xl mb-4">{trait.title}</h4>
                <p className="text-white/60">{trait.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-royal-purple/5 pointer-events-none" />
        <div className="relative z-10 px-6">
          <h2 className="font-royal text-royal-gold tracking-[0.5em] text-xs uppercase mb-8">April 10, 2026</h2>
          <p className="font-serif text-3xl md:text-5xl font-bold mb-12">The Best is Yet to Come.</p>
          <div className="flex justify-center gap-8 mb-12">
            <Heart className="w-6 h-6 text-royal-gold animate-pulse" />
            <Star className="w-6 h-6 text-royal-gold animate-bounce" />
            <Sparkles className="w-6 h-6 text-royal-gold animate-pulse" />
          </div>
          <p className="text-white/30 text-xs tracking-widest uppercase">Created with love for a special brother</p>
        </div>
      </footer>
    </div>
  );
}
