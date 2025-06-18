"use client";
import { motion } from "framer-motion";
import { 
  FiCloud,
  FiArrowRight,
  FiArrowLeft,
  FiCheck,
  FiShield,
  FiZap,
  FiTrendingUp,
  FiClock,
  FiUsers
} from "react-icons/fi";
import { useState } from "react";

export default function SaaSSolutionsPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    "Multi-Tenant Architecture",
    "Scalable Infrastructure", 
    "Automated Updates",
    "Data Security & Compliance",
    "User  Management",
    "Analytics & Reporting",
    "API Integration",
    "Customizable Dashboards"
  ];

  const benefits = [
    {
      icon: <FiZap className="text-3xl" />,
      title: "Cost-Effective Solutions",
      description: "Reduce operational costs with our subscription-based SaaS model."
    },
    {
      icon: <FiShield className="text-3xl" />,
      title: "Enhanced Security",
      description: "Protect your data with industry-leading security measures and compliance."
    },
    {
      icon: <FiTrendingUp className="text-3xl" />,
      title: "Rapid Deployment",
      description: "Get your software up and running quickly without the need for extensive setup."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Needs Assessment",
      description: "We analyze your business requirements to tailor the perfect SaaS solution."
    },
    {
      step: "02", 
      title: "Design & Development",
      description: "Create a user-friendly interface and robust backend for your SaaS application."
    },
    {
      step: "03",
      title: "Testing & Quality Assurance",
      description: "Conduct thorough testing to ensure functionality, performance, and security."
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Launch your SaaS solution and provide ongoing support and updates."
    }
  ];

  const techStack = [
    "AWS", "Azure", "Docker", "Kubernetes", "Node.js", 
    "React", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Back Navigation */}
      <div className="bg-white py-4 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-[#00d8a6] transition-colors duration-300"
          >
            <FiArrowLeft />
            <span>Back to Services</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#00d8a6] to-[#c6e94a] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <FiCloud className="text-6xl" />
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    SaaS Solutions
                  </h1>
                  <p className="text-xl text-green-100 mt-2">Empowering Your Business</p>
                </div>
              </div>
              
              <p className="text-lg mb-8 leading-relaxed opacity-90">
                Transform your business operations with our comprehensive SaaS solutions. We provide scalable, secure, and user-friendly software that enhances productivity and drives growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/Contact"><button className="px-8 py-4 bg-white text-[#00d8a6] rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Get Started
                </button></a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://stepwise.pl/wp-content/uploads/2021/05/Oprogramowanie-cloud-native-w-modelu-SaaS-www-1.jpg" 
                  alt="SaaS Solutions"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "200+", label: "Clients Served" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "50%", label: "Cost Savings" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-4"
              >
                <div className="text-3xl font-bold text-[#00d8a6] mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'features', label: 'Features' },
              { id: 'process', label: 'Process' },
              { id: 'tech', label: 'Technology' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#00d8a6] to-[#c6e94a] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === 'overview' && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Why Choose Our SaaS Solutions?
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Our SaaS solutions are designed to streamline your business processes, enhance collaboration, and improve efficiency. We focus on delivering high-quality, secure, and scalable software that meets your unique needs.
                  </p>
                  
                  <div className="grid gap-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="text-[#00d8a6]">{benefit.icon}</div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                          <p className="text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Project Details</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Timeline:</span>
                      <span className="font-semibold text-gray-800">6-10 weeks</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Starting Price:</span>
                      <span className="font-semibold text-[#00d8a6]">$20,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Team Size:</span>
                      <span className="font-semibold text-gray-800">5-7 experts</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Support:</span>
                      <span className="font-semibold text-gray-800">12 months included</span>
                    </div>
                  </div>
                  
                  <button className="w-full mt-8 bg-gradient-to-r from-[#00d8a6] to-[#c6e94a] text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                    Start Your SaaS Project
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  Comprehensive SaaS Features
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <FiCheck className="text-[#00d8a6] text-xl" />
                        <h3 className="font-semibold text-gray-800">{feature}</h3>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Professional implementation with best practices and security standards.
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'process' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  Our SaaS Development Process
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="text-center"
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-[#00d8a6] to-[#c6e94a] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'tech' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  Technologies & Tools We Use
                </h2>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {techStack.map((tech, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        <span className="font-semibold text-gray-800">{tech}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-12 text-center">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Need a Custom Technology Stack?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We adapt to your existing infrastructure and can work with any technology stack your project requires.
                  </p>
                  <button className="bg-gradient-to-r from-[#00d8a6] to-[#c6e94a] text-white py-3 px-8 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                    Discuss Your Requirements
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#00d8a6] to-[#c6e94a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Elevate Your Business with SaaS?
            </h2>
            <p className="text-white text-xl mb-8 leading-relaxed">
              Let's discuss your SaaS needs and create a solution that drives your business forward.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#00d8a6] font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-[#00d8a6] transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

<div className="bg-gray-50 rounded-2xl p-8">
  <h3 className="text-2xl font-bold text-gray-800 mb-6">Project Details</h3>
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <span className="text-gray-600">Timeline:</span>
      <span className="font-semibold text-gray-800">4-8 weeks</span>
    </div>
    <div className="flex justify-between items-center">
      <span className="text-gray-600">Starting Price:</span>
      <span className="font-semibold text-[#00d8a6]">$5,000</span>
    </div>
    <div className="flex justify-between items-center">
      <span className="text-gray-600">Team Size:</span>
      <span className="font-semibold text-gray-800">2-4 experts</span>
    </div>
    <div className="flex justify-between items-center">
      <span className="text-gray-600">Support:</span>
      <span className="font-semibold text-gray-800">6 months included</span>
    </div>
  </div>
  
  <button className="w-full mt-8 bg-gradient-to-r from-[#00d8a6] to-[#c6e94a] text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
    Start Your Project
  </button>
</div>
    </div>
  );
}
