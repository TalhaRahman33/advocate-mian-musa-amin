"use client";
import React from "react";
import { FaBalanceScale, FaUsers, FaBuilding, FaGavel, FaHandshake, FaShieldAlt } from "react-icons/fa";

const services = [
  {
    title: "Criminal Law",
    icon: <FaGavel size={40} className="text-blue-700" />,
    description:
      "Expert defense and representation in all types of criminal cases with a proven track record of success.",
  },
  {
    title: "Family Law",
    icon: <FaUsers size={40} className="text-blue-700" />,
    description:
      "Compassionate and professional handling of family disputes, divorce, child custody, and guardianship matters.",
  },
  {
    title: "Corporate Law",
    icon: <FaBuilding size={40} className="text-blue-700" />,
    description:
      "Providing businesses with expert legal advice on contracts, agreements, and regulatory compliance.",
  },
  {
    title: "Property Disputes",
    icon: <FaBalanceScale size={40} className="text-blue-700" />,
    description:
      "Helping clients resolve property ownership and real estate disputes efficiently and effectively.",
  },
  {
    title: "Legal Consultation",
    icon: <FaHandshake size={40} className="text-blue-700" />,
    description:
      "Personalized one-on-one consultation to assess your case and provide clear legal guidance.",
  },
  {
    title: "Civil Litigation",
    icon: <FaShieldAlt size={40} className="text-blue-700" />,
    description:
      "Strong representation in civil cases ensuring fairness and justice for our clients.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 ">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          Our Legal Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 px-2">
          We offer a wide range of legal services tailored to meet your needs with professionalism and integrity.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 sm:p-8 hover:shadow-lg transition duration-300 text-center"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-6">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
