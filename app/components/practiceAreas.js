"use client";
import React from "react";
import { FaGavel, FaUsers, FaBuilding, FaBalanceScale, FaHandshake, FaShieldAlt } from "react-icons/fa";

const practiceAreas = [
  {
    title: "Criminal Law",
    icon: <FaGavel size={45} className="text-blue-700" />,
    description:
      "Providing strong legal defense and expert representation in all types of criminal cases to ensure your rights are protected.",
  },
  {
    title: "Family Law",
    icon: <FaUsers size={45} className="text-blue-700" />,
    description:
      "Compassionate legal support in family matters including divorce, child custody, and guardianship disputes.",
  },
  {
    title: "Corporate Law",
    icon: <FaBuilding size={45} className="text-blue-700" />,
    description:
      "Offering tailored legal advice for businesses on contracts, agreements, mergers, and regulatory compliance.",
  },
  {
    title: "Property Disputes",
    icon: <FaBalanceScale size={45} className="text-blue-700" />,
    description:
      "Assisting clients in resolving real estate and ownership disputes quickly and efficiently.",
  },
  {
    title: "Civil Litigation",
    icon: <FaShieldAlt size={45} className="text-blue-700" />,
    description:
      "Expert representation in civil matters, ensuring fairness and justice are served for every client.",
  },
  {
    title: "Legal Consultation",
    icon: <FaHandshake size={45} className="text-blue-700" />,
    description:
      "Personalized legal guidance to help you make informed decisions and understand your rights clearly.",
  },
];

const PracticeAreasSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-20 px-6">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          Areas of Practice
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our law firm specializes in a wide range of legal services tailored to meet our clients' needs with professionalism, dedication, and integrity.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300 p-8 text-center relative overflow-hidden"
            >
              {/* Hover Accent Bar */}
              <span className="absolute top-0 left-0 w-0 h-1 bg-blue-700 group-hover:w-full transition-all duration-300"></span>
              
              <div className="flex justify-center mb-5">{area.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                {area.title}
              </h3>
              <p className="text-gray-600 text-sm leading-6">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
