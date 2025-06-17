"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

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
  FiShield
} from "react-icons/fi";
import { useState } from "react";

export default function TechConsulting() {
  const [activeService, setActiveService] = useState(0);
  const router = useRouter();

  const services = [
    {
      icon: <FiSmartphone className="text-4xl" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.",
      features: ["Native iOS & Android", "React Native", "Flutter Development", "App Store Optimization"],
      techStack: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase"],
      deliverables: ["App Design", "Development", "Testing", "Deployment", "Maintenance"],
      slug: "Mobile-Apps"
    },
    {
      icon: <FiMonitor className="text-4xl" />,
      title: "Web Apps",
      description: "Scalable web applications built with modern frameworks and technologies for optimal performance and user engagement.",
      features: ["Progressive Web Apps", "Single Page Applications", "Responsive Design", "Cloud Deployment"],
      techStack: ["React", "Next.js", "Vue.js", "Node.js", "Python"],
      deliverables: ["Frontend Development", "Backend APIs", "Database Design", "Hosting Setup", "Performance Optimization"],
      slug: "Web-Apps"
    },
    {
      icon: <FiPenTool className="text-4xl" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetic appeal with intuitive functionality to enhance user satisfaction.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      techStack: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"],
      deliverables: ["User Research", "Wireframes", "High-Fidelity Designs", "Prototypes", "Design Guidelines"],
      slug: "UI-UX-Design"
    },
    {
      icon: <FiShoppingCart className="text-4xl" />,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with secure payment processing, inventory management, and conversion optimization.",
      features: ["Payment Integration", "Inventory Management", "Order Processing", "Analytics Dashboard"],
      techStack: ["Shopify", "WooCommerce", "Magento", "Stripe", "PayPal"],
      deliverables: ["Store Setup", "Payment Gateway", "Product Catalog", "Admin Panel", "SEO Optimization"],
      slug: "Ecommerce-Solutions"
    },
    {
      icon: <FiLink className="text-4xl" />,
      title: "API Integration",
      description: "Seamless integration of third-party services and custom API development to enhance functionality and data flow.",
      features: ["RESTful APIs", "GraphQL", "Webhook Integration", "API Documentation"],
      techStack: ["REST", "GraphQL", "Postman", "Swagger", "Zapier"],
      deliverables: ["API Development", "Integration Setup", "Documentation", "Testing", "Monitoring"],
      slug: "Api-Integration"
    },
    {
      icon: <FiCloud className="text-4xl" />,
      title: "SaaS Solutions",
      description: "End-to-end Software as a Service platforms with subscription management, multi-tenancy, and scalable architecture.",
      features: ["Multi-tenant Architecture", "Subscription Billing", "User Management", "Analytics"],
      techStack: ["AWS", "Azure", "Docker", "Kubernetes", "MongoDB"],
      deliverables: ["Platform Development", "Billing System", "User Dashboard", "Admin Console", "Deployment"],
      slug: "Saas-Solutions"
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "5+", label: "Years Experience" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, define project scope, and create a detailed roadmap for success."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our team creates wireframes, mockups, and interactive prototypes to visualize your solution."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development process with continuous testing to ensure quality and performance."
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Smooth deployment process followed by ongoing maintenance and support services."
    }
  ];

const handleServiceNavigation = (slug) => {
  router.push(`/Services/Tech-Consulting/${slug}`);
};


  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#00d8a6] to-[#c6e94a] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Transform Your
                <span className=" bg-clip-text bg-gradient-to-r  text-[#c6e94a]">Digital Vision</span>
              </h1>
              <p className="text-xl  mb-8 leading-relaxed">
                Partner with our expert tech consulting team to build innovative solutions that drive growth, enhance user experiences, and accelerate your digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-[#00d8a6] to-[#c6e94a] rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Start Your Project
                </button>
                <button className="px-8 py-4 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-cyan-500 transition-all duration-300">
                  View Our Work
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Image Placeholder */}
              <div className="w-full h-96 bg-gray-100 rounded-3xl border border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <FiCode className="text-6xl text-[#00d8a6] mx-auto mb-4" />
                  <p className="text-gray-600">Hero Image Placeholder</p>
                  <p className="text-sm text-gray-500">Tech team collaboration or modern workspace</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
              Our <span className="text-[#00d8a6] bg-clip-text bg-gradient-to-r">Impressive Numbers</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <div className="text-teal-600 font-medium text-2xl mx-auto">{stat.number}</div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">{stat.label}</h3>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d8a6] to-[#c6e94a]">Services</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 border border-gray-300 rounded-2xl hover:border-[#00d8a6] hover:shadow-2xl hover:scale-105 transition-all duration-300 relative"
                >
                  <div>
                    {service.icon}
                    <h3 className="text-2xl font-bold mt-4 mb-2 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div>
                      <h4 className="text-teal-500 font-medium">Features</h4>
                      <ul className="text-sm text-gray-600 mt-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="mb-1">• {feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-teal-500 font-medium">Tech Stack</h4>
                      <ul className="text-sm text-gray-600 mt-2">
                        {service.techStack.map((tech, i) => (
                          <li key={i} className="mb-1">• {tech}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="text-teal-500 font-medium">Deliverables</h4>
                    <ul className="text-sm text-gray-600 mt-2">
                      {service.deliverables.map((deliverable, i) => (
                        <li key={i} className="mb-1">• {deliverable}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Learn More Button */}
                  <div className="mt-8 pt-4 border-t border-gray-200">
                    <button
                      onClick={() => handleServiceNavigation(service.slug)}
                      className="w-full bg-gradient-to-r from-[#00d8a6] to-[#c6e94a] text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Learn More
                      <FiArrowRight className="text-lg" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="bg-white py-20 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-500">Work Process</span>
            </h2>
            <div className="flex flex-col lg:flex-row gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="flex flex-col space-y-4"
                >
                  <div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center">
                    <span>{step.step}</span>
                  </div>
                  <h3 className="text-2xl font-medium text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4" style={{backgroundColor: 'white'}}>
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d8a6] to-[#c6e94a]">Featured Projects</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Array.from({ length: 4 }).map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  {/* Image Placeholder */}
                  <div className="relative h-64 w-full rounded-3xl overflow-hidden" style={{ backgroundColor: 'rgb(0 130 197 / 20%)' }}>
                    <img src="https://via.placeholder.com/350x150" alt="Project Screenshot" className="object-cover w-full h-full" />
                    <div className="absolute bottom-0 w-full p-6 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white">Project Name</h3>
                      <div className="flex flex-col gap-2 mt-2 text-white">
                        <p className="text-gray-400 text-sm font-medium">Client Name</p>
                        <button className="bg-[#00d8a6] hover:bg-[#00d8a6] text-white py-2 px-4 rounded-md font-medium">
                          View Project
                          <FiArrowRight className="ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              {[
                {
                  icon: <FiUsers className="text-5xl" />,
                  title: "Expert Team",
                  description: "Experienced developers, designers, and consultants with proven track records."
                },
                {
                  icon: <FiTrendingUp className="text-5xl" />,
                  title: "Proven Results",
                  description: "Successful delivery of 150+ projects with measurable business impact."
                },
                {
                  icon: <FiShield className="text-5xl" />,
                  title: "Quality Assurance",
                  description: "Rigorous testing and quality control processes ensure reliable solutions."
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  {benefit.icon}
                  <div>
                    <h3 className="text-2xl font-medium">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              background: 'linear-gradient(to right, #00d8a6, #c6e94a)',
              padding: '10px 15px',
              borderRadius: '10px',
              margin: '0 auto',
              width: 'max-content',
              color: 'white',
              textAlign: 'center'
            }}
          >
            <span className="text-white font-medium text-5xl p-6 mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center justify-center gap-2 mb-4">
                  <span>{stat.number}</span>
                  <span className="text-sm font-medium">{stat.label}</span>
                </div>
              ))}
            </span>
          </motion.div>
        </div>
      </section>

{/* CTA Section */}
<section
  className="py-20 px-4"
  style={{ backgroundColor: 'white' }}
>
  <div
    className="max-w-4xl mx-auto text-center rounded-3xl px-8 py-12 shadow-xl"
    style={{ backgroundColor: 'rgb(0 130 197 / 40%)' }}
  >
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Ready to Start Your Project?
      </h2>
      <p className="text-white text-2xl mb-8 leading-relaxed">
        Let's discuss your ideas and create something amazing together.
        Our team is ready to bring your vision to life.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/Contact"
          className="bg-white text-[#0082c5] font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#0082c5] hover:text-white transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </motion.div>
  </div>
</section>
    </div>
  );
}