"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { FiTarget, FiBarChart2, FiFilter, FiUsers, FiRefreshCw, FiShield } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";



export default function LeadGeneration() {
    const steps = [
    {
      title: "Strategy Development",
      description:
        "We analyze your ideal customer profile, value proposition, and competitive landscape to create a customized lead generation strategy.",
      points: ["Buyer persona development", "Messaging framework", "Channel selection"],
    },
    {
      title: "Target Identification",
      description:
        "Using advanced data mining and intent signals, we build your target prospect list with verified contact information.",
      points: ["Firmographic filtering", "Technographic analysis", "Intent data integration"],
    },
    {
      title: "Multi-Channel Outreach",
      description:
        "We engage prospects through carefully sequenced emails, calls, and social touches designed to generate responses.",
      points: ["Personalized email campaigns","Strategic call cadence","LinkedIn engagement"],
    },
    {
      title: "Lead Qualification",
      description:
        "Every lead is scored based on budget, authority, need, and timeline (BANT) before being delivered to your team.",
      points: ["BANT qualification", "Lead scoring system", "CRM integration"],
    },
    {
      title: "Performance Optimization",
      description:
        "Continuous A/B testing and data analysis ensures improving results over time.",
      points: ["Conversion analytics", "Campaign refinement", "Monthly strategy reviews"],
    },
  ];
  
  return (
    <section className="bg-[#fafcfa] py-16 px-2 md:px-0">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 mr-3">
            Target. Engage. Convert <br />
            <span className="text-[#00D2C5]">- The Quoreb2b Way</span>
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mr-6">
            At <span className="text-[#00D2C5] font-semibold">Quoreb2b</span>, we specialize in result-driven lead generation strategies to help businesses connect with high-quality prospects. Our data-driven approach, powered by AI and analytics, ensures targeted outreach and maximum conversions. We optimize customer acquisition with precise segmentation, engagement, and nurturing techniques.
            <br /><br />
            With our multi-channel marketing strategies, including email campaigns, social media outreach, and intent-based targeting, we generate leads that convert into long-term customers. Our expert team continuously refines strategies through real-time analytics, ensuring your business stays ahead of the competition.
          </p>
        </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/image/team-discussion.jpg"
            alt="Team discussing strategy"
            width={1000}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
        </motion.div>
      </div>

      <div className="max-w-10xl mx-20 flex flex-col md:flex-row items-center gap-12 mt-60">
        {/* Left Content */}
        <div className="flex-1 bg-white rounded-3xl shadow-xl p-10 md:pl-14 md:pr-8 relative overflow-hidden">
          {/* Accent bar */}
          <div className="absolute left-0 top-8 h-32 w-2 rounded-full bg-gradient-to-b from-[#00d8a6] to-[#c6e94a]"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Transform Your Lead Generation Strategy
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Fuel your business growth with our comprehensive lead generation solutions. We implement proven strategies to attract and qualify prospects who are genuinely interested in your offerings.
          </p>
          {/* Features */}
          <ul className="space-y-6 mb-10">
            <li className="flex items-start gap-4">
              <span className="mt-1">
                <FaCheckCircle className="text-3xl text-[#00d8a6] bg-gradient-to-br from-[#00d8a6] to-[#c6e94a] rounded-full shadow" />
              </span>
              <span>
                <span className="font-bold text-xl text-gray-800">200% Higher Conversion</span>
                <br />
                <span className="text-gray-500 text-base">Our targeted approach delivers better quality leads</span>
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1">
                <FaCheckCircle className="text-3xl text-[#00d8a6] bg-gradient-to-br from-[#00d8a6] to-[#c6e94a] rounded-full shadow" />
              </span>
              <span>
                <span className="font-bold text-xl text-gray-800">40% Lower Cost</span>
                <br />
                <span className="text-gray-500 text-base">Advanced automation reduces your cost-per-lead</span>
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1">
                <FaCheckCircle className="text-3xl text-[#00d8a6] bg-gradient-to-br from-[#00d8a6] to-[#c6e94a] rounded-full shadow" />
              </span>
             <span>
                <span className="font-bold text-xl text-gray-800">Faster Results</span>
                <br />
                <span className="text-gray-500 text-base">See qualified leads within 2-3 weeks of launch</span>
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1">
                <FaCheckCircle className="text-3xl text-[#00d8a6] bg-gradient-to-br from-[#00d8a6] to-[#c6e94a] rounded-full shadow" />
              </span>
              <span>
                <span className="font-bold text-xl text-gray-800">Seamless Integration</span>
                <br />
                <span className="text-gray-500 text-base">Works with your existing CRM and tools</span>
              </span>
            </li>
          </ul>
          {/* Button */}
          <a href="/Contact">
          <button className="mt-2 w-[260px] rounded-full bg-gradient-to-r from-[#c6e94a] to-[#00d8a6] text-white text-lg font-semibold py-4 shadow-lg hover:scale-105 transition-all duration-200">
            Get Started
          </button>
          </a>
        </div>
        {/* Right Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-black max-w-2xl">
            <Image
              src="/image/lead_generation.jpg"
              alt="Lead Generation Tablet"
              width={800}
              height={1000}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col items-center justify-center px-4 py-20 bg-[#f7fafd]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 mt-30">
          Why Our Lead Generation{" "}
          <span className="text-[#00d8a6] underline underline-offset-8 decoration-[#00d8a6]">
            Delivers Results
          </span>
        </h2>
        <p className="text-2xl text-gray-500 text-center mb-12 max-w-3xl">
          We go beyond basic contact lists to provide sales-ready prospects
        </p>

        {/* Centered Card Container */}
        <div className="w-full max-w-[1700px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col gap-4 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]">
            <FiTarget className="text-3xl text-[#00d8a6]" />
            <h3 className="text-2xl font-bold text-gray-800 mt-2">Precision Targeting</h3>
            <p className="text-gray-500 text-lg">
              We identify and reach decision-makers in your ideal customer profile using advanced firmographics and intent data.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col gap-4 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]">
            <FiBarChart2 className="text-3xl text-[#00d8a6]" />
            <h3 className="text-2xl font-bold text-gray-800 mt-2">Performance Tracking</h3>
            <p className="text-gray-500 text-lg">
              Real-time dashboards show lead quality scores, engagement levels, and conversion metrics.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col gap-4 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]">
            <FiFilter className="text-3xl text-[#00d8a6]" />
            <h3 className="text-2xl font-bold text-gray-800 mt-2">Multi-Stage Verification</h3>
            <p className="text-gray-500 text-lg">
              Each lead passes through 5 verification steps including email validation and phone screening.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col gap-4 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]">
            <FiUsers className="text-3xl text-[#00d8a6]" />
            <h3 className="text-2xl font-bold text-gray-800 mt-2">Decision-Maker Access</h3>
            <p className="text-gray-500 text-lg">
              Direct contacts to C-level executives and department heads with purchasing authority.
            </p>
          </div>
          {/* Card 5 */}
          <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col gap-4 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]">
            <FiRefreshCw className="text-3xl text-[#00d8a6]" />
            <h3 className="text-2xl font-bold text-gray-800 mt-2">Continuous Optimization</h3>
            <p className="text-gray-500 text-lg">
              Our algorithms constantly refine targeting based on conversion performance data.
            </p>
          </div>
          {/* Card 6 */}
          <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col gap-4 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]">
            <FiShield className="text-3xl text-[#00d8a6]" />
            <h3 className="text-2xl font-bold text-gray-800 mt-2">GDPR Compliance</h3>
            <p className="text-gray-500 text-lg">
              All data collection and processing meets strict international privacy regulations.
            </p>
          </div>
        </div>
      </div>
      
      {/* Steps */}
      <div className="bg-[#f7fafd] py-20 px-4 flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Proven{" "}
          <span className="text-[#00d8a6] underline underline-offset-8 decoration-[#00d8a6]">
            Lead Generation Process
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-500 text-center mb-16 max-w-3xl">
          A systematic approach that consistently delivers qualified prospects
        </p>

        {/* Steps */}
        <div className="w-full max-w-7xl flex flex-col gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start md:items-center gap-6 md:gap-10 w-full"
            >
              {/* Number Circle */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#00d8a6] text-white font-bold flex items-center justify-center text-2xl md:text-3xl shadow-md">
                {index + 1}
              </div>

              {/* Step Card */}
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md w-full border-l-4 border-[#00d8a6]">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4 text-base md:text-lg">{step.description}</p>
                <ul className="space-y-2">
                  {step.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-600 text-sm md:text-base"
                    >
                      <FaCheck className="text-[#00d8a6]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lead Generation Specialties */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-[#00d8a6] underline underline-offset-8 decoration-[#00d8a6]">Lead Generation</span> Specialties
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* B2B Leads */}
            <div className="border-2 border-[#00d8a6] rounded-2xl p-8">
              <div className="w-16 h-16 bg-[#ffffffdd] bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#00d8a6]" fill="#00d8a6" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">B2B Leads</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-gray-600">
                  <FaCheck className="text-[#00d8a6] text-sm" />
                  <span>Verified decision-makers</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <FaCheck className="text-[#00d8a6] text-sm" />
                  <span>Company firmographics</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <FaCheck className="text-[#00d8a6] text-sm" />
                  <span>Intent data included</span>
                </li>
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-[#00d8a6] font-bold text-lg">+85% Accuracy</span>
                <span className="text-gray-600">500-5,000/month</span>
              </div>
            </div>
            
            {/* Sales Appointments */}
            <div className="border-2 border-[#00d8a6] rounded-2xl p-8">
              <div className="w-16 h-16 bg-[#ffffffdd] bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#00d8a6]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sales Appointments</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-gray-600">
                  <FaCheck className="text-[#00d8a6] text-sm" />
                  <span>Pre-qualified meetings</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <FaCheck className="text-[#00d8a6] text-sm" />
                  <span>Calendar integration</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <FaCheck className="text-[#00d8a6] text-sm" />
                  <span>30-60 min slots</span>
                </li>
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-[#00d8a6] font-bold text-lg">92% Show Rate</span>
                <span className="text-gray-600">10-100/week</span>
              </div>
            </div>
            
            {/* Consumer Leads */}
            <div className="border-2 border-[#00d8a6] rounded-2xl p-8">
              <div className="w-16 h-16 bg-[#ffffffdd] bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#00d8a6]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Consumer Leads</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-gray-600">
                  <FaCheck className="text-[#00d8a6] text-sm" />
                  <span>Demographic targeting</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <FaCheck className="text-[#00d8a6] text-sm" />
                  <span>Interest-based segmentation</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <FaCheck className="text-[#00d8a6] text-sm" />
                  <span>Real-time delivery</span>
                </li>
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-[#00d8a6] font-bold text-lg">+65% Conversion</span>
                <span className="text-gray-600">1,000-50,000/month</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Delivery Options */}
      <div className="bg-[#f7fafd] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Flexible <span className="text-[#00d8a6] underline underline-offset-8 decoration-[#00d8a6]">Lead Delivery</span> Options
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Real-Time API */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center border-b-4 border-[#00d8a6] pb-4">
                Real-Time API
              </h3>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Instant Lead Notifications</h4>
                <p className="text-gray-600 mb-6">
                  Get leads delivered to your systems in real-time via our robust API. Perfect for time-sensitive campaigns and immediate follow-up.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#00d8a6] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-semibold">Instant delivery</span>
                      <span className="text-gray-600"> - leads arrive within seconds</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#00d8a6] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-semibold">Developer-friendly</span>
                      <span className="text-gray-600"> - comprehensive documentation</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#00d8a6] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-semibold">Two-way sync</span>
                      <span className="text-gray-600"> - update lead status in your CRM</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Batch Delivery */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center border-b-4 border-[#00d8a6] pb-4">
                Batch Delivery
              </h3>
              <div className="mb-6">
                <p className="text-gray-600 text-center mb-4">
                  Receive your leads in scheduled batches that suit your workflow.
                  Ideal for teams preferring consolidated data processing.
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#00d8a6] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Scheduled delivery intervals</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#00d8a6] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Download via secure CSV or Excel files</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#00d8a6] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Ideal for internal review & reporting</span>
                </li>
              </ul>
            </div>

      {/* CRM Integration */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center border-b-4 border-[#00d8a6] pb-4">
          CRM Integration
        </h3>

        <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-6 mb-6">
          <div className="text-center mb-4">
            <div className="text-4xl font-bold text-blue-600 mb-2">API</div>
            <p className="text-gray-700 text-sm">Seamlessly connect with your CRM</p>
          </div>

          <div className="flex justify-center space-x-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                WA
              </div>
              <span className="text-xs text-gray-600">WEB APP</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                EX
              </div>
              <span className="text-xs text-gray-600">EXCHANGE</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                IN
              </div>
              <span className="text-xs text-gray-600">INTEGRATION</span>
            </div>
          </div>
        </div>

        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-[#00d8a6] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="..." clipRule="evenodd" />
            </svg>
            <span>Connect with Salesforce, HubSpot, Zoho, etc.</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-[#00d8a6] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="..." clipRule="evenodd" />
            </svg>
            <span>Real-time syncing of lead statuses</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-[#00d8a6] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="..." clipRule="evenodd" />
            </svg>
            <span>Custom field mapping supported</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

{/* Quality Standards Comparison */}
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Lead <span className="text-[#00d8a6] underline underline-offset-8 decoration-[#00d8a6]">Quality Standards</span>
        </h2>
        <p className="text-xl text-gray-500 text-center mb-12">
          How we compare to typical lead generation services
        </p>
        
        <div className="overflow-x-auto rounded-2xl">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-[#00d8a6] to-[#c6e94a] text-white">
                <th className="px-6 py-4 text-left font-bold text-lg">Feature</th>
                <th className="px-6 py-4 text-center font-bold text-lg">Standard Leads</th>
                <th className="px-6 py-4 text-center font-bold text-lg">Our Leads</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Contact Accuracy</td>
                <td className="px-6 py-4 text-center text-gray-600">60-75%</td>
                <td className="px-6 py-4 text-center font-bold text-[#00d8a6]">95-98%</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Decision-Maker Contacts</td>
                <td className="px-6 py-4 text-center text-gray-600">20-30%</td>
                <td className="px-6 py-4 text-center font-bold text-[#00d8a6]">85-90%</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">BANT Qualification</td>
                <td className="px-6 py-4 text-center text-gray-600">Not Included</td>
                <td className="px-6 py-4 text-center font-bold text-[#00d8a6]">Fully Qualified</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Lead Scoring</td>
                <td className="px-6 py-4 text-center text-gray-600">Basic</td>
                <td className="px-6 py-4 text-center font-bold text-[#00d8a6]">Advanced AI Scoring</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Follow-up Support</td>
                <td className="px-6 py-4 text-center text-gray-600">None</td>
                <td className="px-6 py-4 text-center font-bold text-[#00d8a6]">Dedicated Specialist</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

{/* Lead Sources Section */}
    <div className="bg-[#f7fafd] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Where Our <span className="text-[#00d8a6] underline underline-offset-8 decoration-[#00d8a6]">Leads Come From</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Organic Search */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#00d8a6]">
            <div className="w-16 h-16 bg-[#ffffffdd] bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#00d8a6]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Organic Search</h3>
            <div className="flex justify-between items-center mb-2">
              <span className="text-2xl font-bold text-[#00d8a6]">23%</span>
              <span className="text-2xl font-bold text-[#00d8a6]">62%</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-4">
              <span>of total leads</span>
              <span>conversion rate</span>
            </div>
            <p className="text-gray-600 text-sm">
              Targeted visitors from search engines who match your ideal customer profile through intent-based keywords.
            </p>
          </div>
          
          {/* Paid Advertising */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#00d8a6]">
            <div className="w-16 h-16 bg-[#ffffffdd] bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#00d8a6]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Paid Advertising</h3>
            <div className="flex justify-between items-center mb-2">
              <span className="text-2xl font-bold text-[#00d8a6]">35%</span>
              <span className="text-2xl font-bold text-[#00d8a6]">58%</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-4">
              <span>of total leads</span>
              <span>conversion rate</span>
            </div>
            <p className="text-gray-600 text-sm">
              Hyper-targeted campaigns on Google, LinkedIn, and Facebook using lookalike audiences and retargeting.
            </p>
          </div>
          
          {/* Content Syndication */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#00d8a6]">
            <div className="w-16 h-16 bg-[#ffffffdd] bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#00d8a6]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1h-1v-1z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Content Syndication</h3>
            <div className="flex justify-between items-center mb-2">
              <span className="text-2xl font-bold text-[#00d8a6]">18%</span>
              <span className="text-2xl font-bold text-[#00d8a6]">71%</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-4">
              <span>of total leads</span>
              <span>conversion rate</span>
            </div>
            <p className="text-gray-600 text-sm">
              High-intent leads from whitepaper downloads, webinar attendance, and case study engagements.
            </p>
          </div>
          
          {/* Partner Network */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#00d8a6]">
            <div className="w-16 h-16 bg-[#ffffffdd] bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#00d8a6]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Partner Network</h3>
            <div className="flex justify-between items-center mb-2">
              <span className="text-2xl font-bold text-[#00d8a6]">24%</span>
              <span className="text-2xl font-bold text-[#00d8a6]">83%</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-4">
              <span>of total leads</span>
              <span>conversion rate</span>
            </div>
            <p className="text-gray-600 text-sm">
              Pre-qualified referrals from our network of complementary service providers and industry partners.
            </p>
          </div>
        </div>
      </div>
    </div>

{/* ROI Calculator Section */}
<div className="w-full flex justify-center items-center py-15 bg-transparent">
  <div className="w-full max-w-7xl bg-gradient-to-br from-[#00d8a6] to-[#6ee94a] px-6 md:px-20 py-10 md:py-8 flex flex-col">
    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
      Calculate Your Potential ROI
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left: Inputs */}
      <div className="flex flex-col gap-12 justify-center">
        {/* Monthly Website Visitors */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg md:text-xl text-white font-medium">Monthly Website Visitors</span>
            <span className="text-lg md:text-xl text-white font-bold">15,000</span>
          </div>
          <div className="w-full h-2 bg-white/60 rounded-full">
            <div className="h-2 bg-white rounded-full" style={{ width: "80%" }} />
          </div>
        </div>
        {/* Current Conversion Rate */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg md:text-xl text-white font-medium">Current Conversion Rate</span>
            <span className="text-lg md:text-xl text-white font-bold">2.5%</span>
          </div>
          <div className="w-full h-2 bg-white/60 rounded-full">
            <div className="h-2 bg-white rounded-full" style={{ width: "25%" }} />
          </div>
        </div>
        {/* Average Deal Size */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg md:text-xl text-white font-medium">Average Deal Size ($)</span>
            <span className="text-lg md:text-xl text-white font-bold">$5,000</span>
          </div>
          <div className="w-full h-2 bg-white/60 rounded-full">
            <div className="h-2 bg-white rounded-full" style={{ width: "50%" }} />
          </div>
        </div>
      </div>
      {/* Right: Results */}
      <div className="flex flex-col gap-8 justify-center">
        <div className="rounded-xl bg-white/10 border border-white/20 px-8 py-6 mb-2 md:mb-0">
          <p className="text-white text-lg mb-2">Your Current Leads</p>
          <p className="text-3xl md:text-4xl font-bold text-white">375</p>
        </div>
        <div className="rounded-xl bg-white/10 border border-white/20 px-8 py-6 mb-2 md:mb-0">
          <p className="text-white text-lg mb-2">Potential With Our Help</p>
          <p className="text-3xl md:text-4xl font-bold text-white">1,125</p>
        </div>
        <div className="rounded-xl bg-white/10 border border-white/30 px-8 py-6">
          <p className="text-white text-lg mb-2">Estimated Monthly Revenue Increase</p>
          <p className="text-4xl md:text-5xl font-bold text-white">$5,625,000</p>
        </div>
      </div>
    </div>
  </div>
</div>


    </section>
  );
}
