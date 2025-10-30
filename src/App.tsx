import { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Button } from './components/ui/button';
import { Textarea } from './components/ui/textarea';
import { Sparkles, Stars } from 'lucide-react';
import exampleImage from './assets/0d3c6da9b5ed2400a7b8fc8b5ed06035303b2c71.png';

export default function App() {
  const [question, setQuestion] = useState('');
  const navigate = useNavigate();

  const handleSummon = () => {
    if (question.trim()) {
      // Navigate to reading page with question
      navigate('/reading', { state: { question } });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fractal background image */}
      <div 
        className="fixed inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${exampleImage})`,
          filter: 'blur(40px)',
          transform: 'scale(1.2)',
        }}
      />
      
      {/* Gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f192d]/80 to-[#0a0e1a]" />
      
      {/* Animated particles */}
      <AnimatedBackground />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-3xl w-full space-y-12"
        >
          {/* Header section */}
          <div className="text-center space-y-6">
            {/* Decorative top element */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <Sparkles className="w-12 h-12 text-primary opacity-60" />
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
                  }}
                  className="absolute -top-2 -right-2"
                >
                  <Stars className="w-6 h-6 text-accent" />
                </motion.div>
              </div>
            </motion.div>

            {/* Main title */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="font-cinzel text-5xl md:text-7xl tracking-wide"
              style={{
                background: 'linear-gradient(135deg, #4dd4ff 0%, #d4a574 50%, #4dd4ff 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'gradient 8s ease infinite',
              }}
            >
              How Might Be
            </motion.h1>

            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="font-cinzel text-3xl md:text-3xl tracking-wide"
              style={{
                background: 'linear-gradient(135deg, #4dd4ff 0%, #d4a574 50%, #4dd4ff 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'gradient 8s ease infinite',
              }}
            >
              The IDEO Tarot Experience
            </motion.h3>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="font-cinzel text-xl md:text-xl text-primary/80 tracking-widest"
            >
              Cast your project chaos into the void.
            </motion.p>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            />
          </div>

          {/* Oracle input section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="space-y-8"
          >
            {/* Question input */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg blur-xl" />
              <Textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="What do you need clarity on in your project? (Ex: “Why is this deck not landing?” “What’s blocking the team’s energy?” “Where did the brief go rogue?”)"
                className="relative min-h-[180px] bg-card/60 backdrop-blur-md border-2 border-primary/30 text-foreground placeholder:text-muted-foreground/60 resize-none rounded-lg px-6 py-5 focus:border-primary/60 focus:ring-2 focus:ring-primary/30 transition-all duration-300"
                style={{
                  boxShadow: '0 0 40px rgba(77, 212, 255, 0.1)',
                }}
              />
            </div>

            {/* Summon button */}
            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleSummon}
                  disabled={!question.trim()}
                  className="relative px-12 py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-cinzel tracking-wider overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  style={{
                    boxShadow: '0 0 30px rgba(77, 212, 255, 0.3), 0 0 60px rgba(212, 165, 116, 0.2)',
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <span className="relative z-10 flex items-center gap-3">
                    <Sparkles className="w-5 h-5" />
                    Summon the cards
                    <Sparkles className="w-5 h-5" />
                  </span>
                </Button>
              </motion.div>
            </div>

            {/* Mystical quote */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 1 }}
              className="text-center text-muted-foreground/70 italic text-sm tracking-wide"
            >
              "In the space between strategy and sorcery, answers emerge."
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="fixed top-20 left-10 text-6xl text-primary/20 pointer-events-none"
        >
          ◆
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="fixed bottom-32 right-16 text-5xl text-accent/20 pointer-events-none"
        >
          ✦
        </motion.div>

        <motion.div
          animate={{
            y: [0, -15, 0],
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="fixed top-1/3 right-20 text-4xl text-primary/25 pointer-events-none"
        >
          ◈
        </motion.div>
      </div>

      {/* CSS for gradient animation */}
      <style>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}
