"use client";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="bg-[#f7fafd] w-full min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] bg-gradient-to-b from-[#00d8a6] to-[#c6e94a] rounded-b-3xl flex items-center justify-center px-6">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="text-center md:text-left">
            <h1 className="text-white text-5xl font-bold">Get in Touch</h1>
            <p className="text-white mt-4 text-xl">
              Want to get in touch? We'd love to hear from you. Here's how you can reach us.
            </p>
          </div>
          <div className="relative w-[300px] h-[400px] md:w-[450px] md:h-[650px]">
            <Image
              src="/image/cartoons.webp"
              alt="Contact Illustration"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* India Office */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(0,216,166,0.15)] cursor-pointer">
          <div className="bg-[#00d8a6] text-white p-4 rounded-full shadow-md mb-4">
            <FaMapMarkerAlt className="text-2xl" />
          </div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">India Office</h4>
          <p className="text-sm text-gray-600">
            Marvel Fuego Office, 7140 seventh floor,<br />
            opposite We Work, Magarpatta road,<br />
            Hadapsar, Pune 411028
          </p>
        </div>

        {/* USA Office */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(0,216,166,0.15)] cursor-pointer">
          <div className="bg-[#00d8a6] text-white p-4 rounded-full shadow-md mb-4">
            <FaMapMarkerAlt className="text-2xl" />
          </div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">USA Office</h4>
          <p className="text-sm text-gray-600">
            539 W. Commerce St #2577<br />
            Dallas, TX 75208
          </p>
        </div>

        {/* Contact Details */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(0,216,166,0.15)] cursor-pointer">
          <div className="bg-[#00d8a6] text-white p-4 rounded-full shadow-md mb-4">
            <FaPhoneAlt className="text-2xl" />
          </div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Contact</h4>
          <a href="tel:+13322310404" className="text-sm text-gray-600 mb-4 hover:text-[#00d8a6] transition">
            +1 332-231-0404
          </a>
          <div className="flex items-center gap-2 justify-center">
            <div className="bg-[#00d8a6] text-white p-3 rounded-full">
              <FaEnvelope className="text-xl" />
            </div>
            <a
              href="mailto:contactus@quoreb2b.com"
              className="text-sm text-gray-600 hover:text-[#00d8a6] transition"
            >
              contactus@quoreb2b.com
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Let’s <span className="text-[#00d8a6]">Connect</span>
          </h2>
          <div className="h-1 w-16 bg-[#00d8a6] my-4 rounded"></div>
          <p className="text-gray-500 text-sm leading-relaxed">
            We’d love to hear from you. Fill out the form, and our team will get in touch soon. Whether you have a
            question, feedback, or want to collaborate — we’re ready.
          </p>
        </div>

        {/* Right Side Form */}
        <form
          className="bg-white p-6 rounded-2xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(0,216,166,0.15)] cursor-pointer"
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            formData.append("access_key", "a8fe8c95-167c-41a6-bd53-987b128dff69");
            formData.append("subject", "Contact Form Message");

            const res = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              body: formData,
            });

            if (res.ok) {
              setIsSubmitted(true);
            } else {
              alert("Submission failed. Please try again.");
            }
          }}
        >
          <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
          {isSubmitted ? (
            <p className="text-green-500 font-medium">✅ Thank you! We'll get back to you soon.</p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#00d8a6]"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#00d8a6]"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#00d8a6] md:col-span-2"
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                className="mt-4 border border-gray-300 rounded-md px-3 py-2 w-full text-sm outline-none resize-none focus:ring-2 focus:ring-[#00d8a6]"
                required
              ></textarea>
              <button
                type="submit"
                className="mt-4 w-full bg-[#00d8a6] hover:bg-[#00c49a] text-white font-semibold py-2 rounded-full transition"
              >
                SEND MESSAGE
              </button>
            </>
          )}
        </form>
      </div>

      {/* Map Section */}
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-6">
          Find us on the Map
        </h2>
        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-md border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2294415337057!2d73.856743!3d18.5204303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c08744a74c81%3A0x4cbe7e56a3d1a1a9!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1633958808463!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Google Map"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
