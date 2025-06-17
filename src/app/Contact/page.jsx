"use client";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Head from 'next/head';

const faqData = [
  {
    question: "How soon can I expect a response?",
    answer:
      "Our team usually responds within 24-48 hours during business days. We appreciate your patience.",
  },
  {
    question: "Can I schedule a meeting directly?",
    answer:
      "Yes, once you contact us, we can arrange a meeting at a time that suits you best.",
  },
  {
    question: "Where are your offices located?",
    answer:
      "We have offices in Pune, India, and Dallas, USA. You can find the addresses on our contact page.",
  },
  {
    question: "Do you provide support for international clients?",
    answer:
      "Absolutely! We support clients globally and offer tailored solutions to meet diverse needs.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of services including consulting, data analytics, and software development tailored to your business.",
  },
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (<>
      <Head>
        <title>Contact</title>
        <meta property="og:title" content="Contact" />
        <meta property="og:description" content="Connect wit us." />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="QuoreB2B marketing" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    <div className="bg-[#f7fafd] w-full min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] bg-gradient-to-b from-[#00d8a6] to-[#c6e94a] rounded-b-3xl flex items-center justify-center px-6 shadow-md mb-2">
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

      {/* Map Section */}
      <div className="relative w-full min-h-[480px] flex flex-col items-center justify-center z-0">
        <div className="w-full h-[420px] rounded-t-3xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.1793079333634!2d73.93027927385937!3d18.520797569169968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1e490827b59%3A0xc6891bc6deabc8be!2sQuore%20B2B%20Private%20Limited!5e0!3m2!1sen!2sin!4v1739178092301!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Map"
            className="w-full h-full grayscale contrast-125 brightness-75"
          />
        </div>

        {/* Office Cards */}
<div className="relative w-full -mt-20 sm:-mt-16 flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 px-4 z-10">

          {/* India Office */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full sm:w-[280px] md:w-[300px] lg:w-[320px]"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 flex flex-col items-center text-center h-[240px] sm:h-[260px] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(0,216,166,0.15)] cursor-pointer">
              <div className="bg-[#00d8a6] text-white p-3 sm:p-4 rounded-full shadow-md mb-3 sm:mb-4">
                <FaMapMarkerAlt className="text-xl sm:text-2xl" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">India Office</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Marvel Fuego Office, 7140 seventh floor,
                <br />
                opposite We Work, Magarpatta road,
                <br />
                Hadapsar, Pune 411028
              </p>
            </div>
          </motion.div>

          {/* USA Office */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full sm:w-[280px] md:w-[300px] lg:w-[320px]"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 flex flex-col items-center text-center h-[240px] sm:h-[260px] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(0,216,166,0.15)] cursor-pointer">
              <div className="bg-[#00d8a6] text-white p-3 sm:p-4 rounded-full shadow-md mb-3 sm:mb-4">
                <FaMapMarkerAlt className="text-xl sm:text-2xl" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">USA Office</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                539 W. Commerce St #2577
                <br />
                Dallas, TX 75208
              </p>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full sm:w-[280px] md:w-[300px] lg:w-[320px]"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 flex flex-col items-center text-center h-[240px] sm:h-[260px] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(0,216,166,0.15)] cursor-pointer">
              <div className="bg-[#00d8a6] text-white p-3 sm:p-4 rounded-full shadow-md mb-3 sm:mb-4">
                <FaPhoneAlt className="text-xl sm:text-2xl" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Contact</h4>
              <a
                href="tel:+13322310404"
                className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 hover:text-[#00d8a6] transition"
              >
                +1 332-231-0404
              </a>
              <div className="flex items-center gap-2 justify-center">
                <div className="bg-[#00d8a6] text-white p-2 sm:p-3 rounded-full">
                  <FaEnvelope className="text-lg sm:text-xl" />
                </div>
                <a
                  href="mailto:contactus@quoreb2b.com"
                  className="text-xs sm:text-sm text-gray-600 hover:text-[#00d8a6] transition"
                >
                  contactus@quoreb2b.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Spacer for overlap */}
        <div className="h-[120px] md:h-[100px]" />
      </div>

      {/* Contact Form Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 mt-30 mb-16">
        {/* Left: Image and Text */}
        <div className="flex-1 max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Let's <span className="text-[#00d8a6]">Connect</span>
          </h2>
          <div className="h-1 w-16 bg-[#00d8a6] my-4 rounded" />
          <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-md">
            We'd love to hear from you. Fill out the form and our team will reach out soon.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-[#00d8a6]/20 hover:shadow-2xl transition-all duration-300 max-h-[400px]">
            <Image
              src="/image/lets-connect_image.jpg"
              alt="Connect With Us"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right: Form */}
        <form
          className="flex-1 bg-white/80 backdrop-blur-lg border border-[#00d8a6]/10 shadow-2xl rounded-2xl p-8 flex flex-col gap-4 max-w-md w-full"
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            formData.append("access_key", "a8fe8c95-167c-41a6-bd53-987b128dff69");
            formData.append("subject", "Contact Form Message");

            const res = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              body: formData,
            });

            if (res.ok) setIsSubmitted(true);
            else alert("Submission failed. Please try again.");
          }}
        >
          <h3 className="text-2xl font-bold mb-2 text-gray-800">Send us a message</h3>
          {isSubmitted ? (
            <p className="text-green-500 font-medium">✅ Thank you! We'll get back to you soon.</p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="border border-gray-200 rounded-lg px-4 py-3 text-base outline-none bg-white/70 focus:bg-white focus:border-[#00d8a6] focus:ring-2 focus:ring-[#00d8a6]/30 transition-all duration-200 md:col-span-2"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="border border-gray-200 rounded-lg px-4 py-3 text-base outline-none bg-white/70 focus:bg-white focus:border-[#00d8a6] focus:ring-2 focus:ring-[#00d8a6]/30 transition-all duration-200 md:col-span-2"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="border border-gray-200 rounded-lg px-4 py-3 text-base outline-none bg-white/70 focus:bg-white focus:border-[#00d8a6] focus:ring-2 focus:ring-[#00d8a6]/30 transition-all duration-200 md:col-span-2"
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                className="mt-2 border border-gray-200 rounded-lg px-4 py-3 text-base outline-none bg-white/70 focus:bg-white focus:border-[#00d8a6] focus:ring-2 focus:ring-[#00d8a6]/30 transition-all duration-200 resize-none w-full"
              />
              <button
                type="submit"
                className="mt-2 w-full bg-[#00d8a6] hover:bg-[#00c49a] text-white font-semibold py-3 rounded-full shadow-md transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-[#00d8a6]/40"
              >
                SEND MESSAGE
              </button>
            </>
          )}
        </form>
      </div>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-20 mb-20">
        <h2 className="text-4xl font-bold text-center mb-8">
          Frequently Asked <span className="text-[#00d8a6]">Questions</span>
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer border border-transparent hover:border-[#00d8a6] transition-colors duration-300"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleFAQ(index);
                }
              }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#00d8a6] text-2xl select-none"
                >
                  +
                </motion.span>
              </div>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-3 text-gray-600 text-sm leading-relaxed"
                id={`faq-answer-${index}`}
              >
                <p>{item.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
}