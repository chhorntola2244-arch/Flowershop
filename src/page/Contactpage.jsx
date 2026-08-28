import React from "react";

function Contact() {
  return (
    <div className="bg-white min-h-screen">

      {/* Header */}
      <div className="bg-gray-200 py-16 text-center">
        <h1 className="text-6xl font-bold text-slate-800">
          Contact Us
        </h1>

        <p className="text-xl text-slate-600 mt-4">
          We'd love to hear from you
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Get In Touch 
            </h2>

            <p className="text-lg text-gray-600 leading-8 mb-8">
              Have a question about our flowers or your order?
              Feel free to contact us. We are always happy to help.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-5">
                <div className="bg-pink-100 w-14 h-14 rounded-full
                  flex items-center justify-center text-2xl">
                  📍
                </div>

                <div>
                  <h3 className="font-bold text-xl text-slate-800">
                    Address
                  </h3>
                  <p className="text-gray-600">
                    Phnom Penh, Cambodia
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="bg-pink-100 w-14 h-14 rounded-full
                  flex items-center justify-center text-2xl">
                  📞
                </div>

                <div>
                  <h3 className="font-bold text-xl text-slate-800">
                    Phone
                  </h3>
                  <p className="text-gray-600">
                    +855 12 345 678
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="bg-pink-100 w-14 h-14 rounded-full
                  flex items-center justify-center text-2xl">
                  ✉️
                </div>

                <div>
                  <h3 className="font-bold text-xl text-slate-800">
                    Email
                  </h3>
                  <p className="text-gray-600">
                    flowershop@gmail.com
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-pink-50 p-8 rounded-2xl shadow-lg">

            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-5">

              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-5 py-3 rounded-lg border
                  border-gray-300 focus:outline-none
                  focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-3 rounded-lg border
                  border-gray-300 focus:outline-none
                  focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full px-5 py-3 rounded-lg border
                  border-gray-300 focus:outline-none
                  focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-5 py-3 rounded-lg border
                  border-gray-300 focus:outline-none
                  focus:ring-2 focus:ring-pink-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600
                text-white py-3 rounded-full text-lg font-semibold
                transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;