import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const Contact = () => {
  const formRef = useRef()
  const fileInputRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    inquiryType: '',
    message: '',
    attachment: null
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const inquiryTypes = [
    { value: 'corporate_training', label: 'Corporate Training' },
    { value: 'leadership_development', label: 'Leadership Development' },
    { value: 'speaking_engagement', label: 'Speaking Engagement' },
    { value: 'youtube_collaboration', label: 'YouTube Collaboration' },
    { value: 'other', label: 'Other' }
  ]

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'attachment') {
      // Check file size (max 5MB)
      if (files[0] && files[0].size > 5 * 1024 * 1024) {
        setErrorMessage('File size should be less than 5MB')
        return
      }
      setFormData(prev => ({
        ...prev,
        attachment: files[0]
      }))
      setErrorMessage('')
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorMessage('')

    try {
      // Convert file to base64 if exists
      let attachmentData = ''
      if (formData.attachment) {
        attachmentData = await new Promise((resolve) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result)
          reader.readAsDataURL(formData.attachment)
        })
      }

      // Initialize EmailJS with your user ID
      // Replace 'YOUR_USER_ID' with your actual EmailJS user ID
      emailjs.init('YOUR_USER_ID')

      // Send email using EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          inquiry_type: formData.inquiryType,
          message: formData.message,
          attachment: attachmentData,
        }
      )

      setSubmitStatus('success')
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        inquiryType: '',
        message: '',
        attachment: null
      })
      fileInputRef.current.value = ''

    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
      setErrorMessage('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-xl text-white/90">
              Have a question or want to work together? I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {/* Contact Information */}
              <div className="md:col-span-2">
                <motion.div 
                  className="card p-6 glass sticky top-24"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="heading-2 mb-6">Contact Info</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Email</h3>
                      <a 
                        href="mailto:karniga.p@gmail.com"
                        className="text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        karniga.p@gmail.com
                      </a>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Response Time</h3>
                      <p className="text-gray-600">
                        I typically respond within 24-48 hours during business days.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Social Media</h3>
                      <div className="flex space-x-4">
                        <a
                          href="https://www.linkedin.com/in/karniga-p-05114b169/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110"
                          aria-label="LinkedIn"
                        >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                        <a
                          href="https://www.youtube.com/@karniga03"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-red-600 transition-colors transform hover:scale-110"
                          aria-label="YouTube"
                        >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Contact Form */}
              <motion.div 
                className="md:col-span-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <form ref={formRef} onSubmit={handleSubmit} className="card p-6">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="label">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="input"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="label">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="input"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="inquiryType" className="label">Type of Inquiry</label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                        className="input"
                      >
                        <option value="">Select an option</option>
                        {inquiryTypes.map(type => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="subject" className="label">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="input"
                        placeholder="What is this regarding?"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="label">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="input"
                        placeholder="Your message here..."
                      />
                    </div>
                    <div>
                      <label htmlFor="attachment" className="label">
                        Attachment (optional, max 5MB)
                      </label>
                      <input
                        type="file"
                        id="attachment"
                        name="attachment"
                        onChange={handleChange}
                        ref={fileInputRef}
                        className="input file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
                          file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700
                          hover:file:bg-blue-100"
                        accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                      />
                      {errorMessage && (
                        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
                      )}
                    </div>
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full justify-center"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : 'Send Message'}
                      </button>
                    </div>
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-green-50 text-green-600 rounded-lg text-center font-medium"
                      >
                        Message sent successfully! I'll get back to you soon.
                      </motion.div>
                    )}
                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-red-50 text-red-600 rounded-lg text-center font-medium"
                      >
                        {errorMessage}
                      </motion.div>
                    )}
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 