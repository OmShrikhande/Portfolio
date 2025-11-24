import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from '@components/Navigation'
import Footer from '@components/Footer'
import Home from '@pages/Home'
import About from '@pages/About'
import Projects from '@pages/Projects'
import Contact from '@pages/Contact'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
