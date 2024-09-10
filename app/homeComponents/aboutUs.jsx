import React from "react";
import { FaHeart, FaEye, FaHandsHelping } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-sky-800 mb-6">About Us</h2>
        <p className="text-lg text-sky-600 mb-8">
          At Querly, our mission is to bridge the gap between government hospitals and patients by providing transparency about all services, availability, OPD booking, drug stores, and more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-sky-100 to-sky-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center">
            <FaHeart className="text-4xl text-sky-600 mb-4" />
            <h3 className="text-xl font-semibold text-sky-700">Our Vision</h3>
            <p className="text-gray-600">
              To create a healthcare system that is accessible, transparent, and efficient for all patients.
            </p>
          </div>
          <div className="bg-gradient-to-r from-sky-100 to-sky-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center">
            <FaEye className="text-4xl text-sky-600 mb-4" />
            <h3 className="text-xl font-semibold text-sky-700">Our Values</h3>
            <p className="text-gray-600">
              Integrity, Compassion, and Excellence in every aspect of healthcare delivery.
            </p>
          </div>
          <div className="bg-gradient-to-r from-sky-100 to-sky-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center">
            <FaHandsHelping className="text-4xl text-sky-600 mb-4" />
            <h3 className="text-xl font-semibold text-sky-700">Our Commitment</h3>
            <p className="text-gray-600">
              We are committed to improving the health and well-being of our community through quality healthcare services.
            </p>
          </div>
        </div>
      </div>

      {/* Clickable Boxes Section */}
      <div className="max-w-7xl mx-auto mt-12">
        <h2 className="text-3xl font-bold text-sky-800 text-center mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative group cursor-pointer transition-transform transform hover:scale-105">
            <div className="absolute inset-0 bg-cover bg-center h-full w-full rounded-lg opacity-75 transition-opacity duration-300 group-hover:opacity-100" style={{ backgroundImage: "url('/doctor-using-laptop-thinking.jpg')" }}></div>
            <div className="relative p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-sky-700">OPD Booking</h3>
              <p className="text-gray-600">Book your outpatient appointments easily and efficiently.</p>
            </div>
          </div>
          <div className="relative group cursor-pointer transition-transform transform hover:scale-105">
            <div className="absolute inset-0 bg-cover bg-center h-full w-full rounded-lg opacity-75 transition-opacity duration-300 group-hover:opacity-100" style={{ backgroundImage: "url('/young-female-doctor.jpg')" }}></div>
            <div className="relative p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-sky-700">Drug Stores</h3>
              <p className="text-gray-600">Find nearby drug stores and check availability of medications.</p>
            </div>
          </div>
          <div className="relative group cursor-pointer transition-transform transform hover:scale-105">
            <div className="absolute inset-0 bg-cover bg-center h-full w-full rounded-lg opacity-75 transition-opacity duration-300 group-hover:opacity-100" style={{ backgroundImage: "url('/successful-medical-team.jpg')" }}></div>
            <div className="relative p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-sky-700">Health News</h3>
              <p className="text-gray-600">Stay updated with the latest health news and information.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}