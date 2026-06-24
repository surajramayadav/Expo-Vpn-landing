import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Expo VPN",
  description: "Read the Expo VPN Privacy Policy to understand how we protect your personal data and our strict zero-logs policy.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-deep-black text-gray-200 py-12 px-4 sm:px-6 lg:px-8 selection:bg-brand-blue-500 selection:text-white">
      <div className="max-w-4xl mx-auto">
        {/* Navigation / Header bar */}
        <div className="flex items-center justify-between mb-12 pb-6 border-b border-white/10">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand-blue-500 transition-colors group"
          >
            <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="flex items-center gap-2 text-brand-blue-500 font-bold tracking-wider uppercase text-xs sm:text-sm">
            <Shield size={18} />
            <span>Expo VPN Security</span>
          </div>
        </div>

        {/* Article Container */}
        <article className="glass-panel rounded-2xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-blue-500/10 to-brand-violet-500/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>

          <header className="mb-10 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-400 font-medium">
              Last Updated: June 23, 2025
            </p>
          </header>

          <div className="space-y-8 text-gray-300 leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
              <p>
                This Privacy Policy outlines how Expo VPN (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and safeguards your data when you use our free VPN service. We are dedicated to upholding your privacy rights and adhering to global data protection standards, including the EU General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and equivalent laws in other jurisdictions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Data We Collect</h2>
              <p className="mb-4">
                We prioritize minimizing data collection and only gather non-personal information necessary to operate and improve our service:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>
                  We do not collect personal information such as names, email addresses, phone numbers, payment details, or any other details that could identify you personally (PII).
                </li>
                <li>
                  We maintain a strict no-logs policy and do not record, store, or analyze usage data like browsing history, IP addresses, connection timestamps, online activity, or the specific websites or apps you access.
                </li>
                <li>
                  We may collect device type, operating system (e.g., iOS, Android), app version, and technical specifications (excluding unique device identifiers).
                </li>
                <li>
                  Aggregated app performance data (e.g., crash reports, connection success rates) to identify and resolve issues &mdash; this data cannot be linked to your identity.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. Legal Basis for Data Processing</h2>
              <p className="mb-3">
                We process data only where legally permissible and necessary for service delivery:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>
                  <strong>Legitimate Interests:</strong> Optimizing service performance, enhancing security, and detecting abuse (e.g., preventing fraud).
                </li>
                <li>
                  <strong>Contractual Necessity:</strong> Fulfilling our obligations to provide the VPN service you requested.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> Responding to valid legal requests (e.g., court orders) in accordance with applicable laws, after verifying their lawfulness.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Data Security</h2>
              <p className="mb-3">
                We employ industry-leading measures to protect your data:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>
                  <strong>Encryption:</strong> All data transmitted via Expo VPN uses advanced encryption protocols to secure connections in transit and at rest.
                </li>
                <li>
                  <strong>Access Controls:</strong> Data access is restricted to authorized personnel only, using multi-factor authentication (MFA) and the principle of least privilege.
                </li>
                <li>
                  <strong>Security Audits:</strong> Regular independent security assessments and penetration testing to identify and remediate vulnerabilities.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Third-Party Services</h2>
              <p>
                We may use trusted third-party providers (e.g., analytics, cloud hosting) to support service operations. These partners are prohibited from collecting or accessing personal data, must comply with our strict data protection standards, and do not use your data for advertising or profiling.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Your Rights Under Data Protection Laws</h2>
              <p>
                Under regulations like the GDPR and CCPA, you have the right to access, correct, delete, or port your data, and to withdraw consent at any time. To exercise these rights, contact us at{" "}
                <a href="mailto:ganeshglive@gmail.com" className="text-brand-blue-500 hover:underline">
                  ganeshglive@gmail.com
                </a>{" "}
                within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Children&apos;s Privacy</h2>
              <p>
                Expo VPN is not intended for users under the age of 13 (or the minimum age required by your jurisdiction). We do not knowingly collect data from children. If you believe we have inadvertently collected data from a child, please contact us immediately for deletion.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. Data Retention & Storage</h2>
              <p>
                Temporary technical and diagnostic data is automatically deleted within 30 days of collection, unless retention is required by law. We do not store any user data beyond the minimum period necessary to provide and improve our service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">9. Cross-Border Data Transfers</h2>
              <p>
                Your data may be processed in countries outside your region as part of our global infrastructure. We rely on GDPR-approved mechanisms (e.g., Standard Contractual Clauses) or equivalent safeguards for cross-border transfers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">10. Cookies & Tracking Technologies</h2>
              <p>
                We use cookies only for essential purposes such as session management and anonymized service performance analytics. You can disable non-essential cookies via your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">11. Changes to This Policy</h2>
              <p>
                We may update this policy to reflect legal changes or service improvements. Revisions will be posted with the &ldquo;Last Updated&rdquo; date. Continued use of our service after changes constitutes your acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">12. Contact Us</h2>
              <p>
                For any questions regarding this Privacy Policy, please contact us at:{" "}
                <a href="mailto:ganeshglive@gmail.com" className="text-brand-blue-500 hover:underline font-medium">
                  ganeshglive@gmail.com
                </a>
              </p>
            </section>
          </div>
        </article>

        {/* Footer inside Legal page */}
        <div className="mt-12 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Expo VPN. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
