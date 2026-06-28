"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, HelpCircle, ChevronDown, Mail, Copy, Check, Search } from "lucide-react";

// FAQ Data list
const FAQ_DATA = [
  {
    q: "Is Expo VPN completely free?",
    a: "Yes! Expo VPN is 100% free with no subscription fees, no bandwidth caps, and no hidden charges. We believe digital privacy is a fundamental human right."
  },
  {
    q: "Is my browsing data safe?",
    a: "Absolutely. We enforce a strict no-logs policy. We do not store, record, or track your IP address, connection history, websites visited, or application packets. All active tunnels are encrypted with modern standards."
  },
  {
    q: "Which countries/servers are supported?",
    a: "We offer high-performance server clusters globally, including nodes in the United States, United Kingdom, Germany, Japan, Singapore, and Australia. The app automatically chooses the best location, or you can select manual routes."
  },
  {
    q: "Does it work on iOS and Android?",
    a: "Yes, Expo VPN is optimized for both mobile operating systems. You can download the native mobile application packages directly from the Google Play Store and Apple App Store respectively."
  },
  {
    q: "Do I need to sign up or create an account?",
    a: "No registration is required. We don't ask for your email, phone number, name, or payment details. Simply install the application, tap to connect, and enjoy private browsing immediately."
  },
  {
    q: "What should I do if the VPN is not connecting?",
    a: "First, check if your device has a stable internet connection. If the issue persists, try switching to a different server region within the app, or toggle your Airplane mode off and on. For persistent issues, contact our support team at ganeshglive@gmail.com."
  },
  {
    q: "How do I report a bug or request a feature?",
    a: "We welcome your feedback! Please email our developer directly at ganeshglive@gmail.com with details about the issue, including your device model, operating system version, and steps to reproduce the bug."
  }
];

export default function SupportPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [copied, setCopied] = useState(false);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("ganeshglive@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Filter FAQs based on search query
  const filteredFaqs = FAQ_DATA.filter(
    (faq) =>
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <HelpCircle size={18} />
            <span>Expo VPN Support</span>
          </div>
        </div>

        {/* Content Container */}
        <div className="space-y-8">
          {/* Main Card */}
          <div className="glass-panel rounded-2xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-blue-500/10 to-brand-violet-500/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>

            <header className="mb-10 text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                Help & Support
              </h1>
              <p className="text-sm text-gray-400 font-medium">
                Find answers to common questions or contact support
              </p>
            </header>

            {/* Email Contact Banner */}
            <div className="mb-12 p-6 rounded-xl bg-gradient-to-r from-brand-blue-600/10 to-brand-violet-600/10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
                  <Mail size={18} className="text-brand-blue-500" />
                  Direct Email Support
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 max-w-md leading-relaxed">
                  Can&apos;t find what you need in the FAQs? Send an email to our support inbox. We will get back to you as soon as possible.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                <a
                  href="mailto:ganeshglive@gmail.com"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-lg bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-semibold text-sm transition-colors shadow-lg"
                >
                  Email Us
                </a>
                <button
                  onClick={copyEmail}
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/10 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-green-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      Copy Email
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Search Input */}
            <div className="mb-8 relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <Search size={18} />
              </div>
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-deep-black/60 border border-white/10 focus:border-brand-blue-500 focus:outline-none focus:ring-1 focus:ring-brand-blue-500 text-white text-sm sm:text-base placeholder-gray-500 transition-all"
              />
            </div>

            {/* FAQ Accordion Section */}
            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, i) => {
                  const isOpen = activeFaq === i;
                  return (
                    <div
                      key={i}
                      className="glass-panel border-white/5 rounded-xl overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleFaq(i)}
                        className="w-full px-6 py-4.5 flex items-center justify-between text-left focus:outline-none"
                        aria-expanded={isOpen}
                      >
                        <span className="text-sm sm:text-base font-bold text-white pr-4">
                          {faq.q}
                        </span>
                        <span
                          className={`text-gray-400 transform transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-brand-blue-500" : ""
                          }`}
                        >
                          <ChevronDown size={18} />
                        </span>
                      </button>

                      {/* Collapsible Panel */}
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          isOpen ? "max-h-48 border-t border-white/5" : "max-h-0"
                        }`}
                      >
                        <div className="p-6 text-xs sm:text-sm text-gray-400 leading-relaxed bg-[#0E1324]/20">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <p>No FAQs match your search query &ldquo;{searchQuery}&rdquo;</p>
                  <p className="text-xs mt-2">
                    Try searching for another keyword or email us at{" "}
                    <a href="mailto:ganeshglive@gmail.com" className="text-brand-blue-500 hover:underline">
                      ganeshglive@gmail.com
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer inside Support page */}
        <div className="mt-12 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Expo VPN. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
