import React from "react";
import Image from "next/image";
// Add your lawyer image in public folder

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 max-w-6xl">
        
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/lawyer.jpg"
            width={500}
            height={500}
            alt="Advocate Mian Musa Amin"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            About Advocate Mian Musa Amin
          </h2>
          <p className="text-gray-700 text-lg leading-7 mb-4">
            Advocate Mian Musa Amin is a highly skilled legal professional with
            extensive experience in criminal, family, corporate, and property
            law. Known for his dedication, honesty, and client-focused approach,
            he has successfully represented clients in a wide range of legal
            matters.
          </p>
          <p className="text-gray-700 text-lg leading-7 mb-4">
            With over 10 years of practice, Advocate Musa Amin ensures every case
            is handled with precision, integrity, and the highest level of
            professionalism to achieve the best possible outcome for his clients.
          </p>
          <button className="bg-blue-700 text-white px-6 py-2 rounded-md mt-4 hover:bg-blue-800 transition duration-200">
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
