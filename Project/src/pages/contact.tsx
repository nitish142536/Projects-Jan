import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-green-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-green-100">
            We’d love to help your restaurant or hotel source fresh raw materials.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Get in Touch
          </h2>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-green-600 text-xl" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-green-600 text-xl" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">support@agrocart.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-green-600 text-xl" />
              <div>
                <p className="font-medium">Office Address</p>
                <p className="text-gray-600">
                  AgroCart Pvt Ltd<br />
                  Industrial Area, Bengaluru<br />
                  Karnataka, India
                </p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-8">
            <div className="w-full h-56 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
              Google Map Placeholder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
