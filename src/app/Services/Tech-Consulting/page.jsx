"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Head from 'next/head';
import { 
  FiSmartphone, 
  FiMonitor, 
  FiPenTool, 
  FiShoppingCart, 
  FiLink, 
  FiCloud,
  FiArrowRight,
  FiCode,
  FiUsers,
  FiTrendingUp,
  FiShield,
  FiStar,
  FiCheck,
  FiPlay,
  FiZap,
  FiTarget,
  FiAward
} from "react-icons/fi";
import { useState } from "react";

export default function TechConsulting() {
  const [activeService, setActiveService] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const router = useRouter();

  const services = [
    {
      icon: <FiSmartphone className="text-4xl" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.",
      features: ["Native iOS & Android", "React Native", "Flutter Development", "App Store Optimization"],
      techStack: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase"],
      deliverables: ["App Design", "Development", "Testing", "Deployment", "Maintenance"],
      slug: "Mobile-Apps",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <FiMonitor className="text-4xl" />,
      title: "Web Apps",
      description: "Scalable web applications built with modern frameworks and technologies for optimal performance and user engagement.",
      features: ["Progressive Web Apps", "Single Page Applications", "Responsive Design", "Cloud Deployment"],
      techStack: ["React", "Next.js", "Vue.js", "Node.js", "Python"],
      deliverables: ["Frontend Development", "Backend APIs", "Database Design", "Hosting Setup", "Performance Optimization"],
      slug: "Web-Apps",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: <FiPenTool className="text-4xl" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetic appeal with intuitive functionality to enhance user satisfaction.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      techStack: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"],
      deliverables: ["User Research", "Wireframes", "High-Fidelity Designs", "Prototypes", "Design Guidelines"],
      slug: "UI-UX-Design",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: <FiShoppingCart className="text-4xl" />,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with secure payment processing, inventory management, and conversion optimization.",
      features: ["Payment Integration", "Inventory Management", "Order Processing", "Analytics Dashboard"],
      techStack: ["Shopify", "WooCommerce", "Magento", "Stripe", "PayPal"],
      deliverables: ["Store Setup", "Payment Gateway", "Product Catalog", "Admin Panel", "SEO Optimization"],
      slug: "Ecommerce-Solutions",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: <FiLink className="text-4xl" />,
      title: "API Integration",
      description: "Seamless integration of third-party services and custom API development to enhance functionality and data flow.",
      features: ["RESTful APIs", "GraphQL", "Webhook Integration", "API Documentation"],
      techStack: ["REST", "GraphQL", "Postman", "Swagger", "Zapier"],
      deliverables: ["API Development", "Integration Setup", "Documentation", "Testing", "Monitoring"],
      slug: "Api-Integration",
      color: "from-indigo-500 to-blue-600"
    },
    {
      icon: <FiCloud className="text-4xl" />,
      title: "SaaS Solutions",
      description: "End-to-end Software as a Service platforms with subscription management, multi-tenancy, and scalable architecture.",
      features: ["Multi-tenant Architecture", "Subscription Billing", "User Management", "Analytics"],
      techStack: ["AWS", "Azure", "Docker", "Kubernetes", "MongoDB"],
      deliverables: ["Platform Development", "Billing System", "User Dashboard", "Admin Console", "Deployment"],
      slug: "Saas-Solutions",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Delivered", icon: <FiTarget /> },
    { number: "98%", label: "Client Satisfaction", icon: <FiStar /> },
    { number: "24/7", label: "Support Available", icon: <FiShield /> },
    { number: "5+", label: "Years Experience", icon: <FiAward /> }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, define project scope, and create a detailed roadmap for success.",
      icon: <FiTarget />
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our team creates wireframes, mockups, and interactive prototypes to visualize your solution.",
      icon: <FiPenTool />
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development process with continuous testing to ensure quality and performance.",
      icon: <FiCode />
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Smooth deployment process followed by ongoing maintenance and support services.",
      icon: <FiZap />
    }
  ];

  const handleServiceNavigation = (slug) => {
    router.push(`/Services/Tech-Consulting/${slug}`);
  };

  return (
    <>
      <Head>
        <title>Contact</title>
        <meta property="og:title" content="Tech-Consulting" />
        <meta property="og:description" content="Tech consulting section" />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="QuoreB2B marketing" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

    <div className="bg-gray-50 min-h-screen overflow-hidden">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-[#00d8a6] to-[#c6e94a] rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#00d8a6] via-[#00c49a] to-[#c6e94a] text-white py-24 px-4 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/10"></div>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              animate={{
                y: [0, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${100 + Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium"
                >
                  <FiZap className="text-yellow-300" />
                  Premium Tech Solutions
                </motion.div>
                
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  Transform Your
                  <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Digital Vision
                  </span>
                </h1>
              </div>

              <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                Partner with our expert tech consulting team to build innovative solutions that drive growth, enhance user experiences, and accelerate your digital transformation journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-white text-[#00d8a6] rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Start Your Project
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 border-2 border-white/30 backdrop-blur-sm rounded-2xl font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FiPlay className="text-lg" />
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                {/* Main Card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="w-full h-96 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 shadow-2xl"
                >
                  <div className="h-full flex flex-col justify-center items-center text-center space-y-6">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-20 h-20 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-2xl flex items-center justify-center"
                    >
                      <FiCode className="text-3xl text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Next-Gen Solutions</h3>
                      <p className="text-white/80">Building the future of technology</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <FiZap className="text-2xl text-gray-800" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <FiTarget className="text-2xl text-[#00d8a6]" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        </section>

      {/* Stats Section */}
      <section className="relative -mt-16 pb-20 px-4 z-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center group hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#00d8a6] to-[#c6e94a] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00d8a6] to-[#c6e94a] text-white rounded-full px-6 py-2 text-sm font-medium mb-4">
              <FiZap />
              Our Services
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              What We <span className="bg-gradient-to-r from-[#00d8a6] to-[#c6e94a] bg-clip-text text-transparent">Deliver</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to propel your business forward
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative"
              >
                <div className="h-full bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Service Icon & Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                  </div>

                  <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>

                  {/* Features Grid */}
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-[#00d8a6] font-semibold mb-3 flex items-center gap-2">
                        <FiCheck className="text-sm" />
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.slice(0, 3).map((feature, i) => (
                          <div key={i} className="text-sm text-gray-600 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#00d8a6] rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[#c6e94a] font-semibold mb-3 flex items-center gap-2">
                        <FiCode className="text-sm" />
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.techStack.slice(0, 3).map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleServiceNavigation(service.slug)}
                    className={`w-full bg-gradient-to-r ${service.color} text-white py-4 px-6 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group`}
                  >
                    Explore Service
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Hover Effect Background */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: hoveredCard === index ? 0.1 : 0,
                    scale: hoveredCard === index ? 1 : 0.8
                  }}
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-3xl -z-10`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00d8a6] to-[#c6e94a] text-white rounded-full px-6 py-2 text-sm font-medium mb-4">
              <FiTarget />
              Our Process
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              How We <span className="bg-gradient-to-r from-[#00d8a6] to-[#c6e94a] bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery every time
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-center">
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#00d8a6] to-[#c6e94a] rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      className="absolute inset-0 bg-gradient-to-r from-[#00d8a6] to-[#c6e94a] rounded-full opacity-20"
                    />
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>

                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#00d8a6] to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#00d8a6] to-[#c6e94a] relative overflow-hidden">
        {/* Animated Background */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-32 h-32 border-2 border-white/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-10 w-24 h-24 border-2 border-white/20 rounded-full"
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8"
            >
              <FiZap className="text-3xl text-white" />
            </motion.div>

            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Start Your
              <span className="block">Digital Journey?</span>
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your ideas and create something amazing together. 
              Our team is ready to bring your vision to life with cutting-edge technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white text-[#00d8a6] font-bold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FiUsers className="text-xl" />
                Schedule Consultation
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-white text-white font-bold px-10 py-4 rounded-2xl hover:bg-white hover:text-[#00d8a6] transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FiPlay className="text-xl" />
                View Portfolio
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-80">
              <div className="flex items-center gap-2">
                <FiShield className="text-xl" />
                <span className="text-sm font-medium">Secure & Reliable</span>
              </div>
              <div className="flex items-center gap-2">
                <FiAward className="text-xl" />
                <span className="text-sm font-medium">Award Winning</span>
              </div>
              <div className="flex items-center gap-2">
                <FiUsers className="text-xl" />
                <span className="text-sm font-medium">150+ Happy Clients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00d8a6] to-[#c6e94a] text-white rounded-full px-6 py-2 text-sm font-medium mb-4">
                <FiUsers />
                Frequently Asked Questions
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Got <span className="bg-gradient-to-r from-[#00d8a6] to-[#c6e94a] bg-clip-text text-transparent">Questions?</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-xl mx-auto">
                Here are some of the most common questions we get from our clients.
              </p>
            </motion.div>
            {[
              {
                question: "How do you ensure project success?",
                answer: "We follow a proven methodology with transparent communication, agile development, and rigorous testing to ensure outcomes meet expectations."
              },
              {
                question: "Can you help with ongoing support after deployment?",
                answer: "Absolutely. We offer comprehensive maintenance and support plans to keep your systems running smoothly."
              },
              {
                question: "Do you work with startups and small businesses?",
                answer: "Yes, we customize our services to suit startups and SMEs, providing flexible and scalable solutions."
              }
            ].map((faq, index) => (
              <motion.details
                key={index}
                className="border border-gray-200 rounded-xl p-6 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <summary className="cursor-pointer font-semibold text-lg text-gray-800 flex justify-between items-center group-open:text-[#00d8a6]">
                  {faq.question}
                  <span className="ml-2 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </section>
      </div>
</>
  );
}


