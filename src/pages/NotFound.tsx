import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          404
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
            Page Not Found
          </h2>
          
          <p className="text-gray-400 text-lg mb-8">
            Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
          </p>
          
          <p className="text-gray-500 text-sm mb-8">
            If this is your site, and you weren't expecting a 404 for this path, please visit Netlify's "page not found" support guide for troubleshooting tips.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
