import React from 'react'

const Contact = () => {
  return (
    <div>
        <section className="bg-gray-100 py-16 px-6">
        <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            Contact Us
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Have a legal inquiry or need a consultation? Fill out the form below and we’ll respond promptly.
          </p>

          <form
            action="https://formsubmit.co/YOUR_EMAIL_HERE"
            method="POST"
            className="space-y-6"
          >
            {/* Prevent spam */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://yourwebsite.com/thank-you"
            />

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
