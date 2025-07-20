export const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-hawkeye-black text-hawkeye-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-display font-black text-hawkeye-gold">
            DISCLAIMER
          </h1>
          <p className="text-lg mt-4">HawkEye Wealth Creation Masterclass</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-hawkeye-black mb-4">Investment Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The content provided in the HawkEye Wealth Creation Masterclass is for educational and informational purposes only. 
              It is not intended as investment advice, financial advice, trading advice, or as a recommendation, endorsement, 
              or sponsorship of any particular security, company, or fund.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              All investments involve risk, including the potential loss of principal. Past performance does not guarantee 
              future results. The value of investments can go down as well as up, and you may get back less than you invested.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-hawkeye-black mb-4">Educational Purpose</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This webinar is designed to provide general education about wealth creation strategies and financial planning concepts. 
              The information presented should not be considered as personalized investment advice tailored to your specific 
              financial situation, goals, or risk tolerance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-hawkeye-black mb-4">Professional Advice</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Before making any investment decisions, you should consult with a qualified financial advisor, accountant, 
              or other professional who can provide advice tailored to your specific circumstances. We strongly recommend 
              seeking independent financial advice before acting on any information provided.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-hawkeye-black mb-4">No Guarantees</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              No representations or warranties are made regarding the accuracy, completeness, or timeliness of any information 
              provided. While we strive to provide accurate and up-to-date information, financial markets and regulations 
              can change rapidly.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              There are no guarantees of profit or protection from losses. All examples, case studies, and hypothetical 
              scenarios are for educational purposes only and do not represent actual trading results or guarantee future performance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-hawkeye-black mb-4">Risk Acknowledgment</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By participating in this webinar, you acknowledge that:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>You understand that all investments carry risk</li>
              <li>You are responsible for your own investment decisions</li>
              <li>You will not rely solely on this information for investment decisions</li>
              <li>You will seek appropriate professional advice before investing</li>
              <li>You understand that past performance is not indicative of future results</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-hawkeye-black mb-4">Refund Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We offer a 7-day refund guarantee from the date of webinar attendance. Refund requests must be submitted 
              in writing within 7 days of the webinar date. Refunds will be processed within 10-15 business days 
              after approval.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-hawkeye-black mb-4">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this disclaimer or the webinar content, please contact us at:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Email:</strong> support@hawkeyeacademy.com</p>
              <p className="text-gray-700"><strong>Website:</strong> www.hawkeyetradingacademy.com</p>
            </div>
          </section>

          <div className="bg-hawkeye-gold/10 border border-hawkeye-gold/30 rounded-xl p-6 mt-8">
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Last Updated:</strong> July 2025<br/>
              This disclaimer is subject to change without notice. Please check back regularly for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};