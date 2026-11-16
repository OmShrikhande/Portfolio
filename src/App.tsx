import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navigation from '@components/Navigation'
import Footer from '@components/Footer'
import CustomCursor from '@components/CustomCursor'
import LoadingScreen from '@components/LoadingScreen'
import BackToTop from '@components/BackToTop'
import SeasonalAtmosphere from '@components/SeasonalAtmosphere'
import { SeasonProvider } from '@context/SeasonContext'
import Home from '@pages/Home'
import About from '@pages/About'
import Projects from '@pages/Projects'
import Contact from '@pages/Contact'
import Terminal from '@pages/Terminal'
import NotFound from '@pages/NotFound'
import { useSmoothScroll } from '@hooks/useSmoothScroll'

function AnimatedRoutes() {
  const location = useLocation()

  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
  }

  const pageTransition = {
    duration: 0.35,
    ease: [0.16, 1, 0.3, 1],
  }

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <Projects />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <Contact />
            </motion.div>
          }
        />
        <Route
          path="/terminal"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <Terminal />
            </motion.div>
          }
        />
        <Route
          path="*"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <NotFound />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

function MainApp() {
  useSmoothScroll()

  return (
    <div className="min-h-screen bg-dark-bg text-slate-100 flex flex-col relative overflow-x-hidden selection:bg-sky-500/20 selection:text-white">
      <CustomCursor />
      <SeasonalAtmosphere />
      <LoadingScreen />
      <Navigation />
      <main className="flex-1 relative z-10">
        <AnimatedRoutes />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default function App() {
  return (
    <SeasonProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <MainApp />
      </Router>
    </SeasonProvider>
  )
}
