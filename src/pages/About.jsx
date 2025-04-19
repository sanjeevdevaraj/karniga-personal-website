import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
          >
            <h1 className="heading-1 mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600">
              Passionate about empowering individuals and organizations through effective learning and development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/images/profile.jpg"
                alt="About Karniga"
                className="rounded-3xl shadow-xl"
              />
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-2 mb-6">
                My Journey
              </h2>
              <div className="prose">
                <p>
                  With over 5 years of experience in corporate training and development, I've had the privilege of working with diverse organizations to enhance their learning initiatives.
                </p>
                <p>
                  My approach combines proven methodologies with innovative techniques to create engaging and effective learning experiences. I believe in the power of continuous learning and its ability to transform both individuals and organizations.
                </p>
                <p>
                  Through my YouTube channel and training programs, I share insights and strategies that help professionals develop their skills and advance their careers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            viewport={{ once: true }}
            transition={fadeIn.transition}
          >
            <h2 className="heading-2 mb-6">Areas of Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized in delivering high-impact training solutions across various domains
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Corporate Training</h3>
              <p className="text-gray-600">
                Customized training programs designed to meet specific organizational needs and objectives.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Leadership Development</h3>
              <p className="text-gray-600">
                Programs focused on building strong leadership skills and fostering effective team management.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Digital Learning</h3>
              <p className="text-gray-600">
                Modern e-learning solutions and blended learning approaches for remote and hybrid teams.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            viewport={{ once: true }}
            transition={fadeIn.transition}
          >
            <h2 className="heading-2 mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to take your team's learning and development to the next level?
            </p>
            <Link to="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About 