"use client";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-[#f7fafd] min-h-screen w-full">
      {/* Map Section */}
      <div className="relative w-full h-[340px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2294415337057!2d73.856743!3d18.5204303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c08744a74c81%3A0x4cbe7e56a3d1a1a9!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1633958808463!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full"
          title="Quore B2B Marketing Location Map"
        ></iframe>
        {/* Cards */}
        <div className="absolute w-full top-1/2 left-0 flex flex-col md:flex-row justify-center items-center gap-8 z-10 transform -translate-y-1/2">
          {/* India Address */}
          <div className="bg-white rounded-2xl shadow-lg p-8 w-[320px] max-w-full flex flex-col items-center">
            <div className="flex items-center justify-center mb-4">
              <span className="bg-[#00d8a6] text-white rounded-full p-3 mr-3">
                <FaMapMarkerAlt className="text-xl" />
              </span>
              <span className="font-semibold text-lg text-gray-800">India Office</span>
            </div>
            <div className="text-gray-700 text-center text-sm">
              Marvel Fuego Office, 7140 seventh floor,<br />
              opposite We Work, Magarpatta road,<br />
              Hadapsar, Pune 411028
            </div>
          </div>
          {/* USA Address */}
          <div className="bg-white rounded-2xl shadow-lg p-8 w-[320px] max-w-full flex flex-col items-center">
            <div className="flex items-center justify-center mb-4">
              <span className="bg-[#00d8a6] text-white rounded-full p-3 mr-3">
                <FaMapMarkerAlt className="text-xl" />
              </span>
              <span className="font-semibold text-lg text-gray-800">USA Office</span>
            </div>
            <div className="text-gray-700 text-center text-sm">
              539 W. Commerce St #2577<br />
              Dallas, TX 75208
            </div>
          </div>
          {/* Phone/Email */}
          <div className="bg-white rounded-2xl shadow-lg p-8 w-[320px] max-w-full flex flex-col items-center">
            <div className="flex items-center justify-center mb-4">
              <span className="bg-[#00d8a6] text-white rounded-full p-3 mr-3">
                <FaPhoneAlt className="text-xl" />
              </span>
              <span className="font-semibold text-lg text-gray-800">Contact</span>
            </div>
            <div className="text-gray-700 text-center text-sm mb-2">
              +1 332-231-0404
            </div>
            <div className="flex items-center justify-center">
              <span className="bg-[#00d8a6] text-white rounded-full p-2 mr-2">
                <FaEnvelope className="text-lg" />
              </span>
              <span className="text-gray-700 text-sm">contactus@quoreb2b.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full max-w-[1600px] mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Please get in <span className="text-[#00d8a6]">touch</span>
            <br />
            with <span className="text-[#00d8a6]">us</span>
          </h2>
          <div className="h-1 w-16 bg-[#00d8a6] my-6 rounded"></div>
          <p className="text-gray-500 text-sm">
            We’re here to help you grow your business. Fill out the form or reach out using the details above and our team will get back to you as soon as possible.
          </p>
        </div>
        {/* Right Side - Form */}
        <form className="w-full">
          <h3 className="text-2xl font-bold mb-6">Send message</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Full Name"
              className="border-b border-gray-400 bg-transparent outline-none py-2 px-1 text-base"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="border-b border-gray-400 bg-transparent outline-none py-2 px-1 text-base"
              required
            />
            <input
              type="text"
              placeholder="Phone number"
              className="border-b border-gray-400 bg-transparent outline-none py-2 px-1 text-base md:col-span-2"
            />
          </div>
          <textarea
            placeholder="Message"
            className="border-b border-gray-400 bg-transparent outline-none py-2 px-1 w-full mb-6 resize-none"
            rows={3}
            required
          ></textarea>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#00d8a6] text-white px-8 py-2 rounded-full font-semibold hover:bg-[#00c49a] transition"
            >
              SEND NOW
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}