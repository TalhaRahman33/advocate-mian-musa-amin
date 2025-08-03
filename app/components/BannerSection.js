"use client";
import React from "react";
import Link from "next/link";
import Slider from "react-slick";

const bannerSlides = [
  {
    title: "Professional Legal Services",
    subtitle: "Experienced Lawyers Dedicated to Justice",
    image:
      "https://images.unsplash.com/photo-1589820296156-2454c0c04d0b?auto=format&fit=crop&w=1920&q=80",
  },
  {
    title: "Expert in Criminal & Family Law",
    subtitle: "Providing Strong Representation in Every Case",
    image:
      "https://images.unsplash.com/photo-1555371368-5a7c90e1c60e?auto=format&fit=crop&w=1920&q=80",
  },
  {
    title: "Your Trusted Legal Partner",
    subtitle: "Guiding You Through Complex Legal Matters",
    image:
      "https://images.unsplash.com/photo-1589829085413-56a2b79e42e3?auto=format&fit=crop&w=1920&q=80",
  },
];

const BannerSection = () => {
  const settings = {
    dots: false, // ✅ removed dots
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  };

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <Slider {...settings} className="h-full">
        {bannerSlides.map((slide, index) => (
          <div key={index} className="relative w-full h-[80vh]">
            {/* Background image full cover */}
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark overlay */}
              <div className="w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>
               <Link href="/contact">
  <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-200">
    Book a Consultation
  </button>
</Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default BannerSection;
