import { useState, useEffect } from 'react';
import { deck, Card } from '../data/deck';
import { AnimatedBackground } from '../components/AnimatedBackground';

interface ReadingProps {
  question: string;
}

export function Reading({ question }: ReadingProps) {
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [visibleTitles, setVisibleTitles] = useState<Set<number>>(new Set());

  useEffect(() => {
    const drawRandomCard = (suitSlug: string): Card | null => {
      const suit = deck.find(s => s.slug === suitSlug);
      if (!suit || suit.cards.length === 0) return null;
      const randomIndex = Math.floor(Math.random() * suit.cards.length);
      return suit.cards[randomIndex];
    };

    const suitSlugs = ['methods-of-delusion', 'beings-of-complication', 'sacred-saviors'];
    const drawnCards = suitSlugs.map(suitSlug => drawRandomCard(suitSlug)!);
    setSelectedCards(drawnCards);
  }, []);

  useEffect(() => {
    if (selectedCards.length === 0) return;

    const flipDelay = 1000;
    const flipInterval = 4000;
    let currentIndex = -1;
    let intervalId: NodeJS.Timeout | null = null;
    let titleTimeoutId: NodeJS.Timeout | null = null;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        currentIndex++;
        if (currentIndex >= selectedCards.length) {
          if (intervalId) clearInterval(intervalId);
          return;
        }
        // Show title 0.5s before flipping
        titleTimeoutId = setTimeout(() => {
          setVisibleTitles(prev => {
            const newSet = new Set(prev);
            newSet.add(currentIndex);
            return newSet;
          });
        }, flipDelay-1000);

        setFlippedCards(prev => {
          const newSet = new Set(prev);
          newSet.add(currentIndex);
          return newSet;
        });
      }, flipInterval);
    }, flipDelay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
      if (titleTimeoutId) clearTimeout(titleTimeoutId);
    };
  }, [selectedCards]);

  const titleTexts = [
    "The chaos was unleashed through this method of delusion...",
    "The chaos now lives on in this being of complication...",
    "Shhh... there's hope! The chaos can be tamed by this sacred savior..."
  ];

  return (
    <>
      <style>{`
        .card-grid {
          display: flex;
          gap: 0rem;
          justify-content: center;
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          padding: 0 0rem;
        }
        .card-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }
        .card-title-above {
          text-align: center;
          opacity: 0;
          transition: opacity 0.5s ease, transform 0.5s ease;
          transform: translateY(-10px);
          max-width: 450px;
        }
        .card-title-above.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .card {
          width: 450px;
          height: 600px;
          perspective: 1200px;
          cursor: pointer;
          position: relative;
        }
        .card-inner {
          width: 100%;
          height: 100%;
          position: relative;
          transition: transform 0.8s ease-in-out;
          transform-style: preserve-3d;
          transform-origin: center;
        }
        .card.flip .card-inner {
          transform: rotateY(180deg);
          transform-origin: center;
        }
        .front, .back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        //   border-radius: 1rem;
        //   box-shadow: 0 0 40px rgba(77, 212, 255, 0.4);
          overflow: hidden;
        }
        .front {
          position: relative;
          overflow: hidden;
          transform: rotateY(180deg);
          background: transparent;
        }
        .front img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 0.5rem;
          user-select: none;
          pointer-events: none;
          z-index: 0;
        }
        .card-content {
          position: absolute;
          inset: 0;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }
        .card-content-inner {
          width: 95%;
          height: 95%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 0.25rem;
          box-sizing: border-box;
        }
        .card-title, .card-tagline {
          width: 75%;
          text-align: center;
          justify-content: center;
          align-items: center;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .card-title {
          font-size: 1.1rem;
        }
        .card-tagline {
          font-size: 0.85rem}
        .card-video {
          width: 75%;
          max-height: 80%;
          height: auto;
          object-fit: contain;
          border-radius: 1rem;
        }
        .back {
          transform: rotateY(0deg);
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .back img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 1rem;
          user-select: none;
          pointer-events: none;
        }
      `}</style>
      <div className="min-h-screen relative overflow-hidden">
        {/* Same background as App */}
        <div
          className="fixed inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
          style={{
            filter: 'blur(40px)',
            transform: 'scale(1.2)',
          }}
        />
        <div className="fixed inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f192d]/80 to-[#0a0e1a]" />

        {/* Animated particles */}
        <AnimatedBackground />

        {/* Main content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen bg-[#0a0e1a] px-12 py-24">
          <div className="card-grid">
            {selectedCards.map((card, i) => (
              <div key={i} className="card-wrapper">
                <p className={`card-title-above${visibleTitles.has(i) ? ' visible' : ''} text-center text-muted-foreground/70 italic text-sm tracking-wide`}>
                  {titleTexts[i]}
                </p>
                <div
                  className={`card${flippedCards.has(i) ? ' flip' : ''}`}
                >
                  <div className="card-inner">
                    <div className="back">
                      <img src="/pictures/cardback.png" alt={`Card back ${i}`} draggable={false} />
                    </div>
                    <div className="front">
                      <img src="/pictures/cardfront.png" alt={`Card front ${i}`} draggable={false} />
                      <div className="card-content">
                        <div className="card-content-inner">
                          <div
                              className="card-title font-cinzel"
                              style={{
                                background: 'linear-gradient(135deg, #4dd4ff 0%, #d4a574 50%, #4dd4ff 100%)',
                                backgroundSize: '200% 200%',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                animation: 'gradient 8s ease infinite',
                              }}
                            >
                              {card.title}
                            </div>
                          <video
                            className="card-video"
                            src={`/videos/${card.file}`}
                            controls={false}
                            muted
                            autoPlay
                            loop
                            playsInline
                            preload="auto"
                          />
                          <div
                            className="card-tagline font-cinzel"
                            style={{
                              background: 'linear-gradient(135deg, #4dd4ff 0%, #d4a574 50%, #4dd4ff 100%)',
                              backgroundSize: '200% 200%',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                              animation: 'gradient 8s ease infinite',
                            }}
                          >
                            {card.tagline}
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}