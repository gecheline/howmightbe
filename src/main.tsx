
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import App from "./App.tsx";
import { Reading } from "./pages/Reading.tsx";  
import "./index.css";

function RouterWithAnimation() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, filter: 'blur(10px)' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<App />} />
          <Route 
            path="/reading" 
            element={<ReadingPage />} 
          />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function ReadingPage() {
  const location = useLocation();
  const question = (location.state as { question?: string })?.question || '';
  
  return <Reading question={question} />;
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <RouterWithAnimation />
  </BrowserRouter>
);
  