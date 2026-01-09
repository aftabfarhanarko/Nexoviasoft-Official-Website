"use client";
import React from "react";
import { motion } from "framer-motion";

const TermsPages = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: (
        <p className="text-gray-400 text-sm leading-relaxed">
          By using SquadLog, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, as well as our Privacy Policy. These terms apply to all users of the platform, including visitors, registered users, and any others who access SquadLog.
        </p>
      ),
    },
    {
      title: "2. Use of Services",
      content: (
        <div className="space-y-4">
          <p className="text-gray-400 text-sm leading-relaxed">
            To ensure the platform operates smoothly and legally, we require users to adhere to certain rules and conditions regarding access and use of SquadLog. Below are the guidelines that you must follow:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm ml-2">
            <li>
              <span className="text-white font-medium">Eligibility:</span> You must be at least 13 years of age to use SquadLog. If you are under the age of 13, you are not permitted to access or use the platform.
            </li>
            <li>
              <span className="text-white font-medium">Account Creation:</span> To access certain features or services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information, including your password, and for all activities that occur under your account.
            </li>
            <li>
              <span className="text-white font-medium">Prohibited Activities:</span> You agree not to misuse SquadLog's services. This includes but is not limited to:
              <ul className="list-[circle] list-inside ml-6 mt-2 space-y-1">
                <li>Using the platform for illegal purposes or promoting illegal activities.</li>
                <li>Attempting to gain unauthorized access to our systems or other users' accounts.</li>
                <li>Uploading harmful content such as viruses or other malicious software.</li>
                <li>Harassing, threatening, or defrauding other users.</li>
              </ul>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "3. User Content",
      content: (
        <div className="space-y-4">
          <p className="text-gray-400 text-sm leading-relaxed">
            SquadLog allows you to submit and display content. To clarify ownership and responsibilities, we outline how user-generated content is treated below:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm ml-2">
            <li>
              <span className="text-white font-medium">Ownership:</span> You retain ownership of any content you submit, post, or display on SquadLog, including messages, images, and other data ("User Content"). By submitting content, you grant SquadLog a non-exclusive, royalty-free, worldwide license to use, store, display, and distribute your User Content for the purpose of operating and improving the platform.
            </li>
            <li>
              <span className="text-white font-medium">Responsibility:</span> You are solely responsible for your User Content and any consequences of submitting it. SquadLog reserves the right to remove or modify User Content that violates these Terms or any applicable laws.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "4. Intellectual Property",
      content: (
        <div className="space-y-4">
          <p className="text-gray-400 text-sm leading-relaxed">
            We respect intellectual property rights, both our own and those of others. This section explains how we protect our proprietary materials and what rules apply:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm ml-2">
            <li>
              <span className="text-white font-medium">Ownership:</span> SquadLog and its associated content, including but not limited to software, trademarks, logos, and designs, are owned by SquadLog or its licensors and are protected by intellectual property laws.
            </li>
            <li>
              <span className="text-white font-medium">Restrictions:</span> You may not copy, modify, distribute, or create derivative works of any part of SquadLog without our prior written permission. This includes reverse engineering, decompiling, or disassembling the software used in SquadLog.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "5. Termination",
      content: (
        <p className="text-gray-400 text-sm leading-relaxed">
          SquadLog reserves the right to suspend or terminate your access to the platform at any time and for any reason, including if you violate these Terms or engage in prohibited activities. Upon termination, all rights and licenses granted to you under these Terms will cease immediately.
        </p>
      ),
    },
    {
      title: "6. Disclaimers",
      content: (
        <div className="space-y-4">
          <p className="text-gray-400 text-sm leading-relaxed">
            To clarify the limits of SquadLog's responsibilities, we provide the following disclaimers about the services we offer:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm ml-2">
            <li>
              <span className="text-white font-medium">No Warranty:</span> SquadLog is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the platform will be uninterrupted, secure, or error-free. Use of SquadLog is at your own risk.
            </li>
            <li>
              <span className="text-white font-medium">Accuracy of Information:</span> While SquadLog strives to provide accurate and reliable information, we do not guarantee the accuracy, completeness, or usefulness of any content or information on the platform.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "7. Limitation of Liability",
      content: (
        <p className="text-gray-400 text-sm leading-relaxed">
          To the fullest extent permitted by law, SquadLog and its affiliates, directors, employees, or partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of the platform or these Terms.
        </p>
      ),
    },
    {
      title: "8. Changes to Terms",
      content: (
        <p className="text-gray-400 text-sm leading-relaxed">
          SquadLog reserves the right to modify or update these Terms at any time. Any changes will be posted on this page, and the updated date will be reflected at the top. Your continued use of the platform after any modifications constitutes acceptance of the updated Terms.
        </p>
      ),
    },
    {
      title: "9. Governing Law",
      content: (
        <p className="text-gray-400 text-sm leading-relaxed">
          These Terms and your use of the platform shall be governed by and construed in accordance with the laws of the United States. If disputes arise, without regard to its conflict of law provisions.
        </p>
      ),
    },
    {
      title: "10. Contact Us",
      content: (
        <div className="space-y-4">
          <p className="text-gray-400 text-sm leading-relaxed">
            If you have any questions or concerns about these Terms and Conditions, please contact us at support@squadlog.com.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            By using SquadLog, you agree to these Terms and Conditions.
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
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs font-medium mb-8"
        >
          <span className="bg-[#EFFC76] text-black px-2 py-0.5 rounded text-[10px] font-bold tracking-wider">READ</span>
          <span className="text-gray-300">Terms & Conditions</span>
        </motion.div>
        {/* Main Title */}
        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-normal text-white mb-4 tracking-tight"
        >
            Terms & Conditions
        </motion.h1>

        {/* Last Updated */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 text-xs mb-16"
        >
            Last Updated: Oct 10, 2024, 10:00 AM
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

export default TermsPages;