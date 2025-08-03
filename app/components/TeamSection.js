"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";

const teamMembers = [
  {
    name: "Advocate Mian Musa Amin",
    role: "Founder & Senior Lawyer",
    image: "/images/musa1.jpg",
    description:
      "Specialist in Criminal and Family Law with 10+ years of experience providing professional legal advice and representation.",
  },
  {
    name: "Sarah Khan",
    role: "Associate Lawyer",
    image: "/images/musa2.jpg",
    description:
      "Expert in Corporate and Contract Law, dedicated to delivering strategic solutions for business clients.",
  },
  {
    name: "Ali Raza",
    role: "Legal Advisor",
    image: "/images/musa3.jpg",
    description:
      "Focused on Property Disputes and Civil Litigation, ensuring clients receive fair representation and justice.",
  },
  {
    name: "Maria Ahmed",
    role: "Junior Lawyer",
    image: "/images/musa4.jpg",
    description:
      "Assists in legal research, documentation, and client representation in civil and corporate cases.",
  },
  {
    name: "Hassan Malik",
    role: "Legal Consultant",
    image: "/images/musa1.jpg",
    description:
      "Provides expert consultation and guidance for clients dealing with complex litigation and arbitration cases.",
  },
];

const TeamSection = () => {
  const settings = {
    dots: false, // Removed dots
    infinite: true,
    speed: 2000, // Transition speed
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Immediate transition
    cssEase: "linear", // Smooth scrolling effect
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Meet Our Legal Experts
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our team of dedicated and experienced lawyers is here to provide you
          with professional legal guidance and representation.
        </p>

        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="px-3">
              <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition duration-300 p-5">
                <div className="w-full h-56 relative mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-800">
                  {member.name}
                </h3>
                <p className="text-sm text-yellow-600 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TeamSection;
