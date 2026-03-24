"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import SmoothButton from "@/Share/SmoothButton";
import { useMutation } from "@/hooks/useApi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    designation: "",
    companyName: "",
    country: "",
    companyType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [trigger] = useMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      let clientId;
      
      // Try to create new client first
      const clientResponse = await trigger("/our-client", {
        method: "POST",
        body: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone || "",
          designation: formData.designation || "",
          companyName: formData.companyName || "",
        },
      });

      // Check if email already exists (statusCode 409)
      if (clientResponse.error && clientResponse.error.statusCode === 409) {
        // Email already exists, find the existing client
        try {
          const clientsResponse = await trigger("/our-client", {
            method: "GET",
          });

          if (!clientsResponse.error) {
            const clientsData = clientsResponse.data;
            const clients = clientsData?.data || clientsData || [];
            
            // Find client with this email
            const existingClient = clients.find(
              (client) => client.email?.toLowerCase() === formData.email.toLowerCase()
            );

            if (existingClient) {
              // Use existing client ID
              clientId = existingClient.id;
            } else {
              throw new Error("Client with this email not found");
            }
          } else {
            throw new Error("Failed to fetch existing clients");
          }
        } catch (error) {
          throw new Error("Failed to find existing client: " + error.message);
        }
      } else if (clientResponse.error) {
        // Other errors
        throw new Error(clientResponse.error.message || "Failed to create client");
      } else {
        // Client created successfully
        clientId = clientResponse.data?.data?.id || clientResponse.data?.id;
        
        if (!clientId) {
          throw new Error("Client ID not received from API");
        }
      }

      // Step 2: Create service request with packageId as null
      const serviceRequestResponse = await trigger("/service-request", {
        method: "POST",
        body: {
          clientId: clientId,
          pricePackageId: null,
          serviceType: formData.companyType || "General Inquiry",
          message: formData.message || `Contact form submission from ${formData.country || "Unknown"}`,
        },
      });

      if (serviceRequestResponse.error) {
        throw new Error(serviceRequestResponse.error.message || "Failed to submit service request");
      }

      // Success
      setSubmitSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        designation: "",
        companyName: "",
        country: "",
        companyType: "",
        message: "",
      });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      setSubmitError(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-11/12 md:max-w-[1280px] mx-auto py-30">
      {/* Header Section */}
      <div className="flex flex-col mt-9 items-center justify-center text-center gap-6 mb-16 relative">
        <div className="flex justify-center items-center  mb-10">
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 px-1.5 py-1.5 pr-4 rounded-full mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-[#d946ef] text-white text-xs font-bold px-3 py-1 rounded-full">
              <MessageCircle size={15} className="text-black" />
            </span>
            <span className="text-gray-300 text-sm font-medium">
              24/7 Collaborate With Us
            </span>
          </motion.div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-7xl font-medium text-white leading-tight"
        >
          Have Any Doubts? We <br />
          are Ready to Help.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-base md:text-lg max-w-lg"
        >
          Whether you need guidance, support, or a fresh start, our team is
          ready to assist you.
        </motion.p>

        <SmoothButton> Fill The Form Out!</SmoothButton>

        {/* Background glow for header */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-[#d946ef] to-[#f97316] blur-[100px] pointer-events-none -z-10" />
      </div>

      {/* Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        {/* Glow effect behind form */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#d946ef] to-[#f97316] blur-[60px] rounded-[2rem] transform scale-95 translate-y-4 pointer-events-none" />

        <div className="relative bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-6 md:p-12 lg:p-16 overflow-hidden">
          {/* Subtle top gradient inside card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/4 bg-gradient-to-r from-[#d946ef] to-[#f97316] blur-[80px] pointer-events-none" />

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10">
            {/* First Name */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium ml-1">
                First name*
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Jane"
                required
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#d946ef]/50 focus:ring-1 focus:ring-[#d946ef]/50 transition-all"
              />
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium ml-1">
                Last Name*
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Smith"
                required
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#d946ef]/50 focus:ring-1 focus:ring-[#d946ef]/50 transition-all"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium ml-1">
                How can we reach you?*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@framer.com"
                required
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#d946ef]/50 focus:ring-1 focus:ring-[#d946ef]/50 transition-all"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium ml-1">
                Phone Number*
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                required
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#d946ef]/50 focus:ring-1 focus:ring-[#d946ef]/50 transition-all"
              />
            </div>

            {/* Designation */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium ml-1">
                Designation*
              </label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                placeholder="e.g., CEO, Manager, Developer"
                required
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#d946ef]/50 focus:ring-1 focus:ring-[#d946ef]/50 transition-all"
              />
            </div>

            {/* Company Name */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium ml-1">
                Company Name*
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Your Company Name"
                required
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#d946ef]/50 focus:ring-1 focus:ring-[#d946ef]/50 transition-all"
              />
            </div>

            {/* Country */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium ml-1">
                Where Are you from?*
              </label>
              <div className="relative">
                <select 
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-gray-400 focus:outline-none focus:border-[#d946ef]/50 focus:ring-1 focus:ring-[#d946ef]/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select your country...</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.5L6 6.5L11 1.5"
                      stroke="#666"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Company Type */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium ml-1">
                What's the type of your company?*
              </label>
              <div className="relative">
                <select 
                  name="companyType"
                  value={formData.companyType}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-gray-400 focus:outline-none focus:border-[#d946ef]/50 focus:ring-1 focus:ring-[#d946ef]/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select category</option>
                  <option value="tech">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.5L6 6.5L11 1.5"
                      stroke="#666"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-gray-300 text-sm font-medium ml-1">
                Message*
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Type your message..."
                required
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#d946ef]/50 focus:ring-1 focus:ring-[#d946ef]/50 transition-all resize-none"
              ></textarea>
            </div>

            {/* Success/Error Messages */}
            {submitSuccess && (
              <div className="md:col-span-2">
                <div className="bg-green-500/20 border border-green-500/50 text-green-400 px-4 py-3 rounded-xl">
                  Thank you! Your message has been submitted successfully.
                </div>
              </div>
            )}

            {submitError && (
              <div className="md:col-span-2">
                <div className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-xl">
                  {submitError}
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#d946ef] to-[#f97316] hover:from-[#d946ef] hover:to-[#f97316] text-white font-medium transition-all shadow-lg shadow-[#d946ef]/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Now"}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
