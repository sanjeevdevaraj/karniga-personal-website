import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeIn = (direction, delay) => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      duration: 1.5,
      delay: delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Content */}
            <motion.div 
              className="md:w-1/2 text-center md:text-left"
              variants={fadeIn('left', 0.5)}
              initial="hidden"
              animate="show"
            >
              <h1 className="heading-1 mb-6">
                Empowering Growth Through Learning
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Dynamic leader and innovative trainer helping organizations enhance employee skills through expertly designed training modules and motivational speaking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/contact" className="btn-primary">
                  Work With Me
                </Link>
                <Link to="/youtube" className="btn-secondary">
                  Watch My Videos
                </Link>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              variants={fadeIn('left', 0.5)}
              initial="hidden"
              animate="show"
              className="relative w-full md:w-1/2"
            >
              <div className="relative max-w-lg mx-auto">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src="/images/profile.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full opacity-50 blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Training Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Corporate Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Students Trained</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6">
              Featured Content
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Discover my latest training modules, YouTube videos, and insights on learning and development.
            </p>
            <Link to="/youtube" className="btn-primary">
              Explore My Content
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6">
              Ready to Transform Your Team?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's work together to create impactful learning experiences that drive growth and success.
            </p>
            <Link to="/contact" className="btn-primary">
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home 