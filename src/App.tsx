import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navigation from '@components/Navigation'
import Footer from '@components/Footer'
import CustomCursor from '@components/CustomCursor'
import LoadingScreen from '@components/LoadingScreen'
import BackToTop from '@components/BackToTop'
import Home from '@pages/Home'
import About from '@pages/About'
import Projects from '@pages/Projects'
import Contact from '@pages/Contact'
import { useSmoothScroll } from '@hooks/useSmoothScroll'

function AnimatedRoutes() {
  const location = useLocation()
  
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  }
  
  const pageTransition = {
    duration: 0.5,
    ease: "easeInOut"
  }

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <Home />
          </motion.div>
        } />
        <Route path="/about" element={
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <About />
          </motion.div>
        } />
        <Route path="/projects" element={
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <Projects />
          </motion.div>
        } />
        <Route path="/contact" element={
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <Contact />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  useSmoothScroll()
  
  return (
    <Router>
      <LoadingScreen />
      <div className="min-h-screen bg-dark-bg flex flex-col relative overflow-x-hidden cursor-none">
        <CustomCursor />
        <Navigation />
        <main className="flex-1 relative">
          <AnimatedRoutes />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  )
}
