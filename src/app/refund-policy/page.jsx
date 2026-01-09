import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden pb-30 pt-20">
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs font-medium mb-8">
          <span className="bg-[#EFFC76] text-black px-2 py-0.5 rounded text-[10px] font-bold tracking-wider">
            READ
          </span>
          <span className="text-gray-300">Refund Policy</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-normal text-white mb-4 tracking-tight">
          Refund Policy
        </h1>

        <div className="text-gray-500 text-xs mb-12">Last Updated: Jan 9, 2026</div>

        <div className="space-y-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight">
              Eligibility
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Refund eligibility depends on the service or product purchased and
              the specific agreement in place. If you believe you’re eligible
              for a refund, please contact us with your order details.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight">
              How to Request a Refund
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Send an email to support@squadlog.com with your purchase
              information, reason for the request, and any supporting details.
              We’ll review and respond as soon as possible.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight">
              Processing Time
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              If approved, refunds are processed to the original payment method.
              Timing may vary depending on your bank or payment provider.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight">
              Contact
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              For questions about this policy, contact support@squadlog.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
