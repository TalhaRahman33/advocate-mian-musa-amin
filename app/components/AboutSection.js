import React from "react";
import Image from "next/image";
import Link from "next/link";


const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 max-w-6xl">
        
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/musa1.jpg"
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
          <p className="text-gray-700 text-lg leading-7 mb-6">
            Whether you need assistance with criminal defense, family disputes,
            corporate legal issues, or property matters, Advocate Musa Amin is
            committed to providing expert legal advice and representation.
          </p>
          <p className="text-gray-700 text-lg leading-7 mb-6">
            Contact us today to schedule a consultation and let Advocate Musa
            Amin guide you through your legal challenges with confidence and
            expertise.
          </p>
          <p className="text-gray-700 text-lg leading-7 mb-6">
            Advocate Mian Musa Amin is dedicated to ensuring justice and
            protecting your rights with unwavering commitment and professionalism.
          </p>
       
          <Link href="/contact">
          <button className="bg-blue-700 text-white px-6 py-2 rounded-md mt-4 hover:bg-blue-800 transition duration-200">
            Book a Consultation
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
