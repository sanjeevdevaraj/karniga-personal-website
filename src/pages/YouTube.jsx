import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const YouTube = () => {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: Fetch YouTube videos using the API
    // For now, we'll show a placeholder state
    setLoading(false)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-[#2D2B3A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2D2B3A]/90"></div>
        <div className="container relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
          >
            <motion.div
              className="w-64 h-64 mx-auto mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src="/images/hello_with_karni.png"
                alt="Hello with Karni"
                className="w-full h-full object-contain animate-float"
              />
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              My YouTube Content
            </h1>
            <p className="text-xl text-white/90">
              Discover valuable insights and training content on corporate development and leadership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Videos Grid Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          {loading ? (
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
            </div>
          ) : (
            <div className="auto-grid">
              {/* Placeholder Cards */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="card group">
                  <div className="aspect-video bg-gray-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">Coming Soon</h3>
                    <p className="text-gray-600">
                      YouTube integration will be implemented soon. Stay tuned for exciting content!
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#2D2B3A]">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            viewport={{ once: true }}
            transition={fadeIn.transition}
          >
            <div className="card p-8 glass">
              <h2 className="heading-2 mb-6">
                Subscribe to My Channel
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Get notified when new training content is available!
              </p>
              <a
                href="https://www.youtube.com/@karniga03"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary animate-float"
              >
                Visit My Channel
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default YouTube 