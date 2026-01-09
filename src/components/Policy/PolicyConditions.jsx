"use client";
import React from "react";
import { motion } from "framer-motion";

const PolicyConditions = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-white font-medium mb-2">Personal Information</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              We may collect personal details like your name, email address, phone number, and payment information to process transactions, provide customer support, and offer personalized experiences.
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">Device and Usage Data</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              We automatically gather data on how you interact with our services, including your IP address, device type, operating system, browser type, and site navigation.
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">Cookies and tracking technologies</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              We use cookies and similar technologies to enhance your experience, remember preferences, and analyze site traffic. You can manage cookie settings through your browser.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2. How We Use Your Information",
      content: (
        <div className="space-y-4">
          <p className="text-gray-400 text-sm leading-relaxed">
            We use your information to enhance your experience and improve our services:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm ml-2">
            <li><span className="text-white font-medium">Service Delivery:</span> Your data helps us provide personalized responses, suggestions, and other features of Fluctus.</li>
            <li><span className="text-white font-medium">Improvement and Development:</span> We analyze usage data to improve Fluctus's features and functionality.</li>
            <li><span className="text-white font-medium">Customer Support:</span> If you contact us for support, we may use your information to address and resolve your concerns.</li>
            <li><span className="text-white font-medium">Security:</span> We use information to maintain the safety and security of Fluctus, including monitoring for suspicious activities and preventing fraud detection.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "3. Data Sharing and Disclosure",
      content: (
        <div className="space-y-4">
          <p className="text-gray-400 text-sm leading-relaxed">
            We do not sell or rent your personal information to third parties. However, we may share data under the following circumstances:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm ml-2">
            <li><span className="text-white font-medium">Service Providers:</span> We may share your data with third-party vendors who assist in operating Fluctus or improving the services, such as hosting, analytics, or customer support.</li>
            <li><span className="text-white font-medium">Legal Requirements:</span> We may disclose information if required to do so by law or in response to valid legal requests.</li>
            <li><span className="text-white font-medium">Business Transfers:</span> In the event of a merger, acquisition, or asset sale, your information may be transferred.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "4. Data Security",
      content: (
        <p className="text-gray-400 text-sm leading-relaxed">
          We take reasonable measures to protect your data from unauthorized access, disclosure, or alteration. However, no online service is entirely secure, and we cannot guarantee the absolute security of your information.
        </p>
      ),
    },
    {
      title: "5. Your Data Rights",
      content: (
        <div className="space-y-4">
          <p className="text-gray-400 text-sm leading-relaxed">
            You have rights regarding your personal information, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm ml-2">
            <li><span className="text-white font-medium">Access:</span> You may request access to the data we hold about you.</li>
            <li><span className="text-white font-medium">Correction:</span> If your data is inaccurate, you can request corrections.</li>
            <li><span className="text-white font-medium">Deletion:</span> You can request the deletion of your personal information, subject to legal obligations.</li>
            <li><span className="text-white font-medium">Opt-Out:</span> You can opt out of data collection for certain uses like personalized marketing.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "6. Third-Party Links",
      content: (
        <p className="text-gray-400 text-sm leading-relaxed">
          Fluctus may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these external sites.
        </p>
      ),
    },
    {
      title: "7. Children's Privacy",
      content: (
        <p className="text-gray-400 text-sm leading-relaxed">
          Fluctus is not intended for use by individuals under the age of 13. We do not knowingly collect personal data neither from children. If we learn that we have collected data from a child without parental consent, we will take steps to delete that information.
        </p>
      ),
    },
    {
      title: "8. Changes to This Privacy Policy",
      content: (
        <p className="text-gray-400 text-sm leading-relaxed">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the updated date will be reflected at the top. We encourage you to review this policy periodically to stay informed about how we protect your information.
        </p>
      ),
    },
    {
      title: "9. Contact Us",
      content: (
        <div className="space-y-4">
          <p className="text-gray-400 text-sm leading-relaxed">
            If you have any questions or concerns about this Privacy Policy or Fluctus's data practices, please contact us at support@fluctus.com.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            By using Fluctus, you agree to the terms outlined in this Privacy Policy.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-transparent min-h-screen py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFFC76] text-black text-xs font-medium mb-12"
        >
          <span className="bg-black text-white px-1.5 py-0.5 rounded text-[10px] uppercase tracking-wider">New</span>
          <span>Latest Policy</span>
        </motion.div>

        {/* Updated Date */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-500 text-xs mb-12"
        >
            Updated Date: Oct 26, 2024, 09:30 AM
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-16">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h2 className="text-2xl md:text-3xl font-medium text-white mb-6 tracking-tight">
                {section.title}
              </h2>
              {section.content}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolicyConditions;
