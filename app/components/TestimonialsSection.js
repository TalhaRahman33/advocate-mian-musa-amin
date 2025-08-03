"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Client - Family Law Case",
    image: "/images/client1.jpg",
    message:
      "Advocate Mian Musa Amin handled my family case with utmost professionalism. His dedication and legal expertise made a huge difference, and I got the best possible outcome.",
  },
  {
    name: "Fatima Ali",
    role: "Client - Property Dispute",
    image: "/images/client2.jpg",
    message:
      "I was facing a long-standing property dispute, but thanks to Advocate Musa Amin, it was resolved quickly and fairly. Highly recommend his services!",
  },
  {
    name: "Bilal Ahmed",
    role: "Client - Criminal Defense",
    image: "/images/client3.jpg",
    message:
      "Mr. Musa Amin is a highly skilled lawyer who genuinely cares about his clients. He guided me through every step and fought hard for my case.",
  },
  {
    name: "Sana Malik",
    role: "Client - Corporate Law",
    image: "/images/client4.jpg",
    message:
      "His understanding of corporate laws and attention to detail saved my business from a major legal issue. A trustworthy and reliable advocate!",
  },
];

const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We value the trust of our clients and strive to deliver the best legal services.
        </p>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-blue-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-6">
                  “{testimonial.message}”
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;
