import { MapPin, MessageCircle } from "lucide-react"
import Navbar from "./Navbar/Navbar"
import bg from "../../public/images/bg.png";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-[#e4f0d0] relative overflow-hidden">
        <Navbar/>
        <div
                className="absolute inset-0 opacity-36 pointer-events-none"
                style={{ backgroundImage: `url(${bg})` }}
              ></div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
              <polygon points="30,2 52,15 52,37 30,50 8,37 8,15" fill="none" stroke="white" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">CONTACT US</h1>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            Reach Out to Us – We're Here to Answer Your Questions and Assist You!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Address Card */}
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 10c0 6.075-9 13-9 13s-9-6.925-9-13a9 9 0 1 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Address</h3>
            <p className="text-gray-600 leading-relaxed">
              22, Mohammed Ali Rd, Pydhonie, Mandvi, Mumbai, Maharashtra 400003
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16v16H4z" stroke="none" />
                <path d="M4 4l8 8 8-8" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Email Us</h3>
            <p className="text-gray-600">maulaaliresearchcentrel3@gmail.com</p>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 0 1-1.24 4.41l1.31 4.17-4.36-1.15A8.5 8.5 0 1 1 21 11.5z" />
                <path d="M9.5 10.5l1 1a5.5 5.5 0 0 0 2.5 1l.5-1.5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">WhatsApp Channel</h3>
            <p className="text-gray-600">MARC (مولانا علی ریسرچ سینٹر)</p>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="w-full h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.0234567890123!2d72.8311!3d18.9647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce7c7c7c7c7c%3A0x7c7c7c7c7c7c7c7c!2sMinara%20Masjid!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Minara Masjid Location"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

