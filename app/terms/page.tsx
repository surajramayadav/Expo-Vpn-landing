import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Expo VPN",
  description: "Read the Expo VPN Terms of Service to learn about your rights and responsibilities when using our free VPN service.",
};

export default function TermsOfService() {
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
            <FileText size={18} />
            <span>Expo VPN Terms</span>
          </div>
        </div>

        {/* Article Container */}
        <article className="glass-panel rounded-2xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-blue-500/10 to-brand-violet-500/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>

          <header className="mb-10 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
              Terms of Service
            </h1>
            <p className="text-sm text-gray-400 font-medium">
              Last Updated: June 23, 2025
            </p>
          </header>

          <div className="space-y-8 text-gray-300 leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
              <p>
                Welcome to Expo VPN. By using our service, you agree to these Terms of Service (&ldquo;Terms&rdquo;). Please read them carefully. These Terms constitute a legally binding agreement between you and Expo VPN (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Service Description</h2>
              <p className="mb-3">
                Expo VPN provides the following features:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>
                  <strong>Advanced Privacy &amp; Security:</strong> Enterprise-grade encryption and a strict zero-log policy to protect your online privacy.
                </li>
                <li>
                  <strong>Optimized Performance:</strong> High-speed servers globally distributed for reliable connections.
                </li>
                <li>
                  <strong>Unrestricted Content Access:</strong> Bypass geo-restrictions while maintaining complete anonymity.
                </li>
                <li>
                  <strong>Free Auto-Select Service:</strong> No subscription fees or login required for auto-connection. Selecting a specific custom server location manually requires a premium upgrade.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. User Responsibilities</h2>
              <p>
                When using Expo VPN, you agree to comply with all applicable laws and regulations, not use the service for illegal activities or to harm others, not attempt to breach or circumvent our security measures, not distribute or resell the service, and maintain the confidentiality of your account credentials.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Legal Compliance</h2>
              <p>
                Expo VPN prohibits use of our service for illegal activities, cooperates with law enforcement when legally required, maintains transparency about our policies, and reserves the right to terminate service for users violating these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Data Protection</h2>
              <p>
                We prioritize your privacy: no collection of personally identifiable information, strict no-logs policy for user activities, regular security audits, and a transparent privacy policy available at all times.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Children&apos;s Privacy</h2>
              <p>
                Expo VPN is not intended for users under 13 years of age (or the applicable minimum age in your jurisdiction). We do not knowingly collect information from children. If you become aware that a child is using our service, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Intellectual Property</h2>
              <p>
                All content, features, and functionality of Expo VPN &mdash; including text, graphics, logos, and software &mdash; are owned by us and protected by intellectual property laws. You may not copy, modify, distribute, reverse engineer, or remove proprietary notices from our content without permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. Disclaimer of Warranties</h2>
              <p>
                Expo VPN is provided &ldquo;as is&rdquo; without warranties of any kind. While we strive to provide a reliable service, we cannot guarantee uninterrupted or error-free service, specific speeds or performance levels, compatibility with all devices or networks, or success in accessing all content.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Expo VPN shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">10. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of Expo VPN after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">11. Dispute Resolution</h2>
              <p>
                Any disputes arising from these Terms shall be resolved through initial informal negotiation, mediation if negotiation fails, and binding arbitration as a last resort.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">12. Contact Information</h2>
              <p>
                For questions about these Terms, please contact us at:{" "}
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
