"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useMutation } from "@/hooks/useApi";

const AppointmentModal = ({ isOpen, onClose, pricePackageId, serviceType = "Web Development" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
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
  console.log(formData);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      // Step 1: Check if client exists by email or create new client
      let clientId;
      
      // Try to create new client first
      const clientResponse = await trigger("/our-client", {
        method: "POST",
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          companyName: formData.companyName,
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

      // Step 2: Create service request
      const serviceRequestResponse = await trigger("/service-request", {
        method: "POST",
        body: {
          clientId: clientId,
          pricePackageId: pricePackageId,
          serviceType: serviceType,
          message: formData.message || `I'm interested in ${serviceType} services.`,
        },
      });

      if (serviceRequestResponse.error) {
        throw new Error(serviceRequestResponse.error.message || "Failed to create service request");
      }

      // Success
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        message: "",
      });

      // Close modal after 2 seconds
      setTimeout(() => {
        onClose();
        setSubmitSuccess(false);
      }, 2000);
    } catch (error) {
      setSubmitError(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-80 flex items-center justify-center p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl w-full max-w-2xl h-[85vh] sm:h-[650px] max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                  Book an Appointment
                </h2>
                <p className="text-gray-400 mb-6">
                  Fill out the form below and we'll get back to you soon.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="text-gray-300 text-sm font-medium mb-2 block">
                      Name*
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#d946ef]/50 focus:ring-1 focus:ring-[#d946ef]/50 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-gray-300 text-sm font-medium mb-2 block">
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#d946ef]/50 focus:ring-1 focus:ring-[#d946ef]/50 transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-gray-300 text-sm font-medium mb-2 block">
                      Phone*
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+1 234 567 8900"
                      className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#d946ef]/50 focus:ring-1 focus:ring-[#d946ef]/50 transition-all"
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="text-gray-300 text-sm font-medium mb-2 block">
                      Company Name*
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      placeholder="Company Inc."
                      className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#d946ef]/50 focus:ring-1 focus:ring-[#d946ef]/50 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-gray-300 text-sm font-medium mb-2 block">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Tell us about your project requirements..."
                      className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#d946ef]/50 focus:ring-1 focus:ring-[#d946ef]/50 transition-all resize-none"
                    />
                  </div>

                  {/* Error Message */}
                  {submitError && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/50 text-red-400 text-sm">
                      {submitError}
                    </div>
                  )}

                  {/* Success Message */}
                  {submitSuccess && (
                    <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/50 text-green-400 text-sm">
                      Appointment booked successfully! We'll contact you soon.
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 py-3 rounded-xl font-medium text-sm md:text-base text-white bg-white/5 hover:bg-white/10 transition-all border border-white/10"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3 rounded-xl font-medium text-sm md:text-base text-white bg-gradient-to-r from-[#d946ef] to-[#f97316] hover:from-[#d946ef] hover:to-[#f97316] transition-all duration-300 shadow-lg shadow-[#d946ef]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Book Appointment"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AppointmentModal;
