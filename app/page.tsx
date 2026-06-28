"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Shield,
  Zap,
  Smartphone,
  Menu,
  X,
  Globe,
  ChevronDown,
  Activity,
  CheckCircle2,
  LockKeyhole,
  Wifi,
  Mail
} from "lucide-react";

// Types for interactive server map
interface ServerLocation {
  id: string;
  name: string;
  ping: number;
  load: number;
  x: number; // percentage X on map
  y: number; // percentage Y on map
}

const SERVER_LOCATIONS: ServerLocation[] = [
  { id: "us", name: "United States (New York)", ping: 12, load: 38, x: 28, y: 35 },
  { id: "uk", name: "United Kingdom (London)", ping: 8, load: 24, x: 47, y: 25 },
  { id: "de", name: "Germany (Frankfurt)", ping: 15, load: 45, x: 51, y: 28 },
  { id: "sg", name: "Singapore (Central)", ping: 28, load: 52, x: 74, y: 62 },
  { id: "jp", name: "Japan (Tokyo)", ping: 22, load: 31, x: 83, y: 38 },
  { id: "au", name: "Australia (Sydney)", ping: 42, load: 18, x: 88, y: 78 }
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [vpnConnected, setVpnConnected] = useState(false);
  const [selectedServer, setSelectedServer] = useState<ServerLocation>(SERVER_LOCATIONS[0]);
  const [isConnecting, setIsConnecting] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [hoveredServer, setHoveredServer] = useState<ServerLocation | null>(null);

  // Speed and stats animation when connected
  const [speedStats, setSpeedStats] = useState({ download: 0, upload: 0 });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let delayTimer: NodeJS.Timeout;
    if (vpnConnected) {
      // Avoid synchronous setState triggers inside layout renders by scheduling in microtask/timeout
      delayTimer = setTimeout(() => {
        setSpeedStats({ download: 84.6, upload: 38.2 });
      }, 0);

      interval = setInterval(() => {
        setSpeedStats({
          download: +(80 + Math.random() * 15).toFixed(1),
          upload: +(35 + Math.random() * 8).toFixed(1)
        });
      }, 3000);
    } else {
      delayTimer = setTimeout(() => {
        setSpeedStats({ download: 0, upload: 0 });
      }, 0);
    }
    return () => {
      clearInterval(interval);
      clearTimeout(delayTimer);
    };
  }, [vpnConnected]);

  const handleVpnToggle = () => {
    if (vpnConnected) {
      setVpnConnected(false);
    } else {
      setIsConnecting(true);
      setTimeout(() => {
        setIsConnecting(false);
        setVpnConnected(true);
      }, 1500); // 1.5s connection simulation
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="relative w-full">
      {/* Background Radial Glow Container to prevent page overflow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-blue-600/10 blur-[150px]"></div>
        <div className="absolute top-[40%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brand-violet-500/10 blur-[180px]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-brand-blue-700/10 blur-[150px] animate-pulse-slow"></div>
      </div>

      {/* STICKY NAVBAR */}
      <header className="sticky top-0 z-50 w-full glass-panel border-x-0 border-t-0 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-brand-blue-500 to-brand-violet-600 flex items-center justify-center shadow-lg shadow-brand-blue-500/25 group-hover:scale-105 transition-transform duration-300">
                <Shield className="text-white" size={22} />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white bg-clip-text">
                Expo<span className="text-brand-blue-500">VPN</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#servers" className="text-sm text-gray-300 hover:text-white transition-colors">Servers</a>
              <a href="#faq" className="text-sm text-gray-300 hover:text-white transition-colors">FAQ</a>
              <Link href="/support" className="text-sm text-gray-400 hover:text-white transition-colors">Support</Link>
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms</Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="#download"
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-full group bg-gradient-to-br from-brand-blue-500 to-brand-violet-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-800"
              >
                <span className="relative px-6 py-2 transition-all ease-in duration-75 bg-deep-black rounded-full group-hover:bg-opacity-0">
                  Get App Free
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white p-2 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark-navy/95 border-b border-white/10 px-4 pt-4 pb-6 space-y-3 animate-fade-in">
            <a
              href="#features"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              Features
            </a>
            <a
              href="#servers"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              Servers
            </a>
            <a
              href="#faq"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              FAQ
            </a>
            <Link
              href="/support"
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              Support & FAQ
            </Link>
            <Link
              href="/privacy"
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              Terms of Service
            </Link>
            <div className="pt-4 px-3">
              <a
                href="#download"
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-center block px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue-600 to-brand-violet-600 text-white font-semibold text-sm shadow-md"
              >
                Download Now
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative pt-6 pb-16 md:pt-12 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero text content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-white/5 text-xs text-brand-blue-100 font-medium">
              <span className="w-2 h-2 rounded-full bg-brand-blue-500 animate-ping"></span>
              <span>100% Free & No Registration Required</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
              Fast VPN. <br />
              <span className="text-gradient-blue-violet">Made Simple.</span>
            </h1>

            <p className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Expo VPN gives you uninterrupted, secure, and private browsing with one tap &mdash; no setup, no configurations, and no logs. Protect your online identity today.
            </p>

            {/* Badges and Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              {/* Google Play Store Badge Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.expo.vpn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-48 px-4 py-2.5 rounded-xl bg-[#090D16] hover:bg-[#111827] border border-white/10 hover:border-brand-blue-500/50 transition-all duration-300 shadow-xl group"
              >
                {/* Custom Google Play Icon */}
                <svg className="w-6 h-6 text-gray-300 group-hover:text-white" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58 33.3-60.1-60.1 60.1-60.1 58 33.3c15.1 8.6 25.3 22.8 25.3 41.7-.1 19-10.3 33.2-25.3 41.8zM104.6 499l220.7-126.7-60.1-60.1-160.6 186.8z" />
                </svg>
                <div className="text-left leading-tight">
                  <p className="text-[9px] uppercase tracking-wider text-gray-400 font-medium">Get it on</p>
                  <p className="text-sm font-bold text-white">Google Play</p>
                </div>
              </a>

              {/* Apple App Store Badge Button */}
              <a
                href="#download"
                className="flex items-center gap-3 w-48 px-4 py-2.5 rounded-xl bg-[#090D16] hover:bg-[#111827] border border-white/10 hover:border-brand-violet-500/50 transition-all duration-300 shadow-xl group"
              >
                {/* Custom Apple Icon */}
                <svg className="w-6 h-6 text-gray-300 group-hover:text-white" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-48.7-19.1-77.5-19.1-38.3 0-77 21.3-97.3 56.5-41.1 71.1-10.5 176.3 29.1 233.9 19.5 28.1 42.6 59.4 73 57.9 29-1.5 39.9-18.8 74.9-18.8 34.9 0 45.1 18.8 75.4 18.2 31.1-.6 51.5-28.4 70.7-56.5 22.2-32.4 31.2-63.7 31.7-65.3-1-1-61.4-23.7-61.9-92.9zM245.9 76.1c16-20.2 26.6-47.8 23.6-76.1-24.3 1-54.7 16.3-72.1 36.8-15.1 17.5-28.5 45.7-25.1 73.6 27.2 2 55.7-14.1 73.6-34.3z" />
                </svg>
                <div className="text-left leading-tight">
                  <p className="text-[9px] uppercase tracking-wider text-gray-400 font-medium">Download on the</p>
                  <p className="text-sm font-bold text-white">App Store</p>
                </div>
              </a>
            </div>
          </div>

          {/* Interactive Phone Mockup column */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-72 h-[560px] sm:w-80 sm:h-[640px] rounded-[40px] sm:rounded-[50px] border-[8px] sm:border-[10px] border-gray-800 bg-deep-black shadow-[0_0_80px_rgba(59,130,246,0.15)] ring-1 ring-white/10 flex flex-col overflow-hidden animate-float">
              
              {/* Phone Speaker & Camera Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 sm:w-40 sm:h-7 bg-gray-800 rounded-b-2xl sm:rounded-b-3xl z-30 flex items-center justify-center">
                <span className="w-12 h-0.5 sm:w-16 sm:h-1 bg-gray-900 rounded-full block mb-1.5 sm:mb-2"></span>
              </div>

              {/* Screen Top Status bar */}
              <div className="h-8 pt-3 sm:h-10 sm:pt-4 px-4 sm:px-6 flex justify-between items-center text-xs text-gray-400 select-none z-20">
                <span className="font-semibold">09:41</span>
                <div className="flex items-center gap-1.5">
                  <Wifi size={14} className={vpnConnected ? "text-brand-blue-500" : "text-gray-400"} />
                  <div className="flex items-center">
                    <span className="text-[8px] font-bold mr-0.5">5G</span>
                    <div className="w-5 h-2.5 border border-gray-400 rounded-sm p-0.5 flex items-center">
                      <div className="h-full w-3 bg-gray-400 rounded-2xs"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* App Screen Content */}
              <div className="flex-1 px-5 py-3 sm:py-4 flex flex-col justify-between items-center relative z-10">
                {/* Header within App */}
                <div className="w-full flex items-center justify-between mt-1 sm:mt-2 select-none">
                  <div className="flex items-center gap-1.5">
                    <Shield className="text-brand-blue-500" size={16} />
                    <span className="text-xs font-black tracking-wide text-white">EXPO VPN</span>
                  </div>
                  <div className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] text-gray-400 font-medium">
                    FREE PLAN
                  </div>
                </div>

                {/* Main status area & Toggle button */}
                <div className="flex-1 flex flex-col items-center justify-center w-full py-2 sm:py-4">
                  {/* Status Indicator */}
                  <div className="mb-4 sm:mb-8 text-center">
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">
                      VPN Connection
                    </p>
                    <p className={`text-xl font-extrabold tracking-tight transition-all duration-300 ${
                      isConnecting ? "text-yellow-500 animate-pulse" :
                      vpnConnected ? "text-brand-blue-500 shadow-glow" : "text-gray-400"
                    }`}>
                      {isConnecting ? "CONNECTING..." : vpnConnected ? "CONNECTED" : "DISCONNECTED"}
                    </p>
                  </div>

                  {/* Pulsing button circles */}
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
                    {/* Ring animations */}
                    {vpnConnected && (
                      <>
                        <div className="absolute inset-0 rounded-full border border-brand-blue-500/30 animate-phone-ping"></div>
                        <div className="absolute inset-4 rounded-full border border-brand-blue-500/20 animate-phone-ping [animation-delay:1s]"></div>
                      </>
                    )}
                    {isConnecting && (
                      <div className="absolute inset-0 rounded-full border-2 border-brand-blue-500/40 border-t-transparent animate-spin"></div>
                    )}

                    {/* Interactive Button */}
                    <button
                      onClick={handleVpnToggle}
                      disabled={isConnecting}
                      className={`relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full flex flex-col items-center justify-center transition-all duration-500 focus:outline-none ${
                        vpnConnected 
                          ? "bg-gradient-to-tr from-brand-blue-500 to-brand-violet-600 shadow-[0_0_35px_rgba(59,130,246,0.5)] border-4 border-brand-blue-100/10 scale-102"
                          : "bg-gray-900 border-4 border-white/5 hover:border-white/10"
                      }`}
                      aria-label={vpnConnected ? "Disconnect VPN" : "Connect VPN"}
                    >
                      <Shield 
                        className={`transition-colors duration-500 ${
                          vpnConnected ? "text-white scale-110" : "text-gray-500"
                        }`} 
                        size={36} 
                        strokeWidth={1.5}
                      />
                      <span className={`text-[8px] sm:text-[10px] font-extrabold tracking-widest mt-2 transition-colors duration-500 ${
                        vpnConnected ? "text-white" : "text-gray-400"
                      }`}>
                        {vpnConnected ? "TAP TO DISCONNECT" : "TAP TO CONNECT"}
                      </span>
                    </button>
                  </div>

                  {/* Info card (IP address) */}
                  <div className="mt-4 sm:mt-8 w-full glass-panel border-white/5 rounded-xl p-3.5 flex items-center justify-between">
                    <div className="text-left">
                      <p className="text-[9px] text-gray-400 uppercase font-semibold">Virtual IP Address</p>
                      <p className="text-xs font-mono font-bold text-white transition-all duration-300">
                        {isConnecting ? "Securing IP..." : vpnConnected ? "104.244.42.1" : "192.168.1.185"}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className={`w-1.5 h-1.5 rounded-full ${vpnConnected ? "bg-green-500" : "bg-red-500"}`}></span>
                      <span className="text-[9px] text-gray-400 font-bold uppercase">
                        {vpnConnected ? "Secured" : "Unprotected"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom section: Server & speed display */}
                <div className="w-full space-y-3 mt-auto">
                  {/* Selected Server button */}
                  <div className="w-full bg-[#0E131F]/90 border border-white/5 rounded-xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2.5 text-left">
                      <div className="w-6 h-6 rounded-full bg-brand-blue-500/10 flex items-center justify-center">
                        <Globe className="text-brand-blue-500" size={13} />
                      </div>
                      <div>
                        <p className="text-[8px] text-gray-400 uppercase font-semibold">Location</p>
                        <p className="text-xs font-bold text-white leading-tight">
                          {selectedServer.name.split(" ")[0]}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-right">
                      <span className="text-[10px] text-gray-400 font-semibold">{selectedServer.ping} ms</span>
                      <Activity size={10} className="text-green-400" />
                    </div>
                  </div>

                  {/* Speed meters */}
                  <div className="grid grid-cols-2 gap-2 text-left">
                    <div className="bg-[#0E131F]/90 border border-white/5 rounded-xl p-2.5">
                      <p className="text-[8px] text-gray-400 uppercase font-semibold">Download</p>
                      <p className="text-sm font-bold font-mono text-white leading-none mt-1">
                        {speedStats.download} <span className="text-[9px] text-gray-400 font-normal">Mbps</span>
                      </p>
                    </div>
                    <div className="bg-[#0E131F]/90 border border-white/5 rounded-xl p-2.5">
                      <p className="text-[8px] text-gray-400 uppercase font-semibold">Upload</p>
                      <p className="text-sm font-bold font-mono text-white leading-none mt-1">
                        {speedStats.upload} <span className="text-[9px] text-gray-400 font-normal">Mbps</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-24 border-y border-white/5 bg-[#070A13]/30 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-brand-blue-500 uppercase tracking-widest">Advanced Features</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Why Choose Expo VPN?
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              We provide enterprise-grade protection packaged in a single-tap application, with no hidden fees or speed throttling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="glass-panel glass-panel-hover rounded-3xl p-8 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue-600/5 rounded-full blur-2xl -z-10"></div>
              <div className="h-12 w-12 rounded-2xl bg-brand-blue-500/10 flex items-center justify-center border border-brand-blue-500/20 mb-6">
                <LockKeyhole className="text-brand-blue-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Privacy First</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                We maintain a strict zero-log policy. We do not store, record, or track your IP address, connection history, or web activities. Enjoy complete anonymity online.
              </p>
              <div className="mt-auto space-y-2 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <CheckCircle2 size={14} className="text-brand-blue-500" />
                  <span>Military-grade AES-256 encryption</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <CheckCircle2 size={14} className="text-brand-blue-500" />
                  <span>No DNS or IP leaks</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="glass-panel glass-panel-hover rounded-3xl p-8 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-violet-500/5 rounded-full blur-2xl -z-10"></div>
              <div className="h-12 w-12 rounded-2xl bg-brand-violet-500/10 flex items-center justify-center border border-brand-violet-500/20 mb-6">
                <Zap className="text-brand-violet-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lightning Fast</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                With a high-speed global server backbone, smart auto-connect selects the optimal path for you automatically. Stream content, download files, and play games lag-free.
              </p>
              <div className="mt-auto space-y-2 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <CheckCircle2 size={14} className="text-brand-violet-500" />
                  <span>10+ Gbps high capacity ports</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <CheckCircle2 size={14} className="text-brand-violet-500" />
                  <span>Smart server optimized routing</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="glass-panel glass-panel-hover rounded-3xl p-8 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue-600/5 rounded-full blur-2xl -z-10"></div>
              <div className="h-12 w-12 rounded-2xl bg-brand-blue-500/10 flex items-center justify-center border border-brand-blue-500/20 mb-6">
                <Smartphone className="text-brand-blue-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Easy to Use</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                No advanced knowledge required. With a modern, intuitive, and distraction-free layout, you are one tap away from securing your internet traffic instantly.
              </p>
              <div className="mt-auto space-y-2 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <CheckCircle2 size={14} className="text-brand-blue-500" />
                  <span>Zero setup configurations</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <CheckCircle2 size={14} className="text-brand-blue-500" />
                  <span>Clean layout without ads</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL SERVERS SECTION */}
      <section id="servers" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Map info */}
          <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
            <h2 className="text-xs font-bold text-brand-blue-500 uppercase tracking-widest">Global Servers</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Servers Across The Globe
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              We deploy globally distributed high-capacity clusters. Wherever you travel, access high-speed private connections without location limits.
            </p>

            {/* Server load stats list */}
            <div className="grid grid-cols-2 gap-3 pt-4 text-left">
              <div className="glass-panel rounded-xl p-3.5 border-white/5">
                <p className="text-2xl font-black text-white">6+</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Regions</p>
              </div>
              <div className="glass-panel rounded-xl p-3.5 border-white/5">
                <p className="text-2xl font-black text-brand-blue-500">100%</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Server Uptime</p>
              </div>
            </div>

            {/* Selected / Hovered Server Card */}
            <div className="glass-panel border-white/10 rounded-2xl p-4 mt-6 text-left relative overflow-hidden bg-dark-navy/80 min-h-[96px] flex items-center">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-500/5 to-transparent -z-10"></div>
              {hoveredServer || selectedServer ? (
                <div className="flex items-center justify-between w-full">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider bg-brand-blue-500/20 text-brand-blue-100 px-2 py-0.5 rounded-full font-bold">
                      {hoveredServer ? "Hovered Server" : "Currently Selected"}
                    </span>
                    <p className="text-base font-bold text-white mt-1.5">
                      {(hoveredServer || selectedServer).name}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400 font-medium">Ping Metric</p>
                    <p className="text-lg font-black text-green-400 font-mono">
                      {(hoveredServer || selectedServer).ping} ms
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-gray-400 text-xs">Hover or tap on map nodes to view statistics.</p>
              )}
            </div>
          </div>

          {/* SVG Map representation */}
          <div className="lg:col-span-8 flex justify-center">
            <div className="relative w-full aspect-[2/1] max-w-2xl bg-[#090D16]/50 rounded-3xl border border-white/5 p-4 sm:p-8 flex items-center justify-center overflow-hidden">
              
              {/* Fake grid lines behind map */}
              <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-5 -z-10 pointer-events-none">
                {Array.from({ length: 72 }).map((_, i) => (
                  <div key={i} className="border-[0.5px] border-white"></div>
                ))}
              </div>

              {/* World Map SVG Container */}
              <div className="relative w-full h-full select-none">
                {/* Simplified Vector Map Graphic Paths */}
                <svg className="w-full h-full text-gray-700/35" viewBox="0 0 1000 500" fill="currentColor">
                  {/* North America */}
                  <path d="M150,120 L230,100 L300,150 L280,240 L240,230 L220,290 L180,270 L140,240 Z" />
                  {/* South America */}
                  <path d="M280,290 L320,330 L350,420 L300,480 L270,410 L250,330 Z" />
                  {/* Eurasia / Africa */}
                  <path d="M450,100 L550,80 L750,110 L820,180 L740,250 L640,240 L500,210 L440,160 Z" />
                  {/* Africa */}
                  <path d="M460,250 L560,240 L580,330 L550,400 L500,380 L470,300 Z" />
                  {/* Southeast Asia & Australia */}
                  <path d="M720,250 L780,220 L800,260 L780,290 Z M800,380 L880,360 L890,430 L810,440 Z" />
                </svg>

                {/* Locator Dots Layer */}
                {SERVER_LOCATIONS.map((loc) => {
                  const isActive = selectedServer.id === loc.id;
                  return (
                    <button
                      key={loc.id}
                      onClick={() => setSelectedServer(loc)}
                      onMouseEnter={() => setHoveredServer(loc)}
                      onMouseLeave={() => setHoveredServer(null)}
                      style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none z-20"
                      aria-label={`Select ${loc.name} server`}
                    >
                      {/* Pulse rings */}
                      <span className="absolute inset-0 w-8 h-8 -m-2.5 rounded-full bg-brand-blue-500/30 animate-map-ping scale-75 group-hover:scale-100 transition-transform"></span>
                      <span className="absolute inset-0 w-8 h-8 -m-2.5 rounded-full bg-brand-blue-500/15 animate-map-ping [animation-delay:1.2s] scale-75"></span>
                      
                      {/* Central Core Dot */}
                      <span className={`w-3.5 h-3.5 rounded-full block border-2 border-deep-black transition-all duration-300 shadow-md ${
                        isActive ? "bg-brand-violet-500 scale-125" : "bg-brand-blue-500 scale-100 group-hover:scale-110"
                      }`}></span>

                      {/* Small location label on hover (for devices supporting hover) */}
                      <span className="absolute left-1/2 -translate-x-1/2 bottom-5 whitespace-nowrap bg-gray-950/95 border border-white/10 px-2 py-1 rounded text-[10px] text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
                        {loc.name.split(" ")[0]} ({loc.ping}ms)
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 border-t border-white/5 bg-[#070A13]/20 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-xs font-bold text-brand-blue-500 uppercase tracking-widest">Support FAQ</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
              Everything you need to know about setting up and using Expo VPN on your devices.
            </p>
          </div>

          <div className="space-y-4">
            {[
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
              }
            ].map((faq, i) => {
              const isOpen = activeFaq === i;
              return (
                <div
                  key={i}
                  className="glass-panel border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-bold text-white pr-4">{faq.q}</span>
                    <span className={`text-gray-400 transform transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-blue-500" : ""}`}>
                      <ChevronDown size={20} />
                    </span>
                  </button>
                  
                  {/* Collapsible Panel */}
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-48 border-t border-white/5" : "max-h-0"
                  }`}>
                    <div className="p-6 text-sm sm:text-base text-gray-400 leading-relaxed bg-[#0E1324]/20">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DOWNLOAD BANNER CTA */}
      <section id="download" className="relative py-20 px-4 sm:px-6 lg:px-8 border-y border-white/5 bg-[#090D16] scroll-mt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-600/10 via-transparent to-brand-violet-600/10 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Secure Your Connection <br className="hidden sm:inline" />
            <span className="text-gradient-blue-violet">With Just One Tap</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Get instant access to high-speed global servers. Completely free, ads-free, and no configurations required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {/* Google Play Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.expo.vpn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-52 px-5 py-3 rounded-xl bg-deep-black hover:bg-[#111827] border border-white/10 hover:border-brand-blue-500/50 transition-all duration-300 shadow-2xl group"
            >
              <svg className="w-6 h-6 text-gray-300 group-hover:text-white" viewBox="0 0 512 512" fill="currentColor">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58 33.3-60.1-60.1 60.1-60.1 58 33.3c15.1 8.6 25.3 22.8 25.3 41.7-.1 19-10.3 33.2-25.3 41.8zM104.6 499l220.7-126.7-60.1-60.1-160.6 186.8z" />
              </svg>
              <div className="text-left leading-tight">
                <p className="text-[9px] uppercase tracking-wider text-gray-400 font-medium">Get it on</p>
                <p className="text-sm font-bold text-white">Google Play</p>
              </div>
            </a>

            {/* Apple App Store Button */}
            <a
              href="mailto:ganeshglive@gmail.com?subject=Expo%20VPN%20iOS%20Beta"
              className="flex items-center gap-3 w-52 px-5 py-3 rounded-xl bg-deep-black hover:bg-[#111827] border border-white/10 hover:border-brand-violet-500/50 transition-all duration-300 shadow-2xl group"
            >
              <svg className="w-6 h-6 text-gray-300 group-hover:text-white" viewBox="0 0 384 512" fill="currentColor">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-48.7-19.1-77.5-19.1-38.3 0-77 21.3-97.3 56.5-41.1 71.1-10.5 176.3 29.1 233.9 19.5 28.1 42.6 59.4 73 57.9 29-1.5 39.9-18.8 74.9-18.8 34.9 0 45.1 18.8 75.4 18.2 31.1-.6 51.5-28.4 70.7-56.5 22.2-32.4 31.2-63.7 31.7-65.3-1-1-61.4-23.7-61.9-92.9zM245.9 76.1c16-20.2 26.6-47.8 23.6-76.1-24.3 1-54.7 16.3-72.1 36.8-15.1 17.5-28.5 45.7-25.1 73.6 27.2 2 55.7-14.1 73.6-34.3z" />
              </svg>
              <div className="text-left leading-tight">
                <p className="text-[9px] uppercase tracking-wider text-gray-400 font-medium">Download on the</p>
                <p className="text-sm font-bold text-white">App Store</p>
              </div>
            </a>
          </div>

          <div className="text-xs text-gray-500 font-medium pt-2">
            Beta builds are currently open. Clicking updates will trigger contact options.
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#03060E] border-t border-white/5 pt-10 pb-4 sm:pb-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
          
          {/* Logo and description */}
          <div className="md:col-span-5 space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-brand-blue-500 to-brand-violet-600 flex items-center justify-center">
                <Shield className="text-white" size={16} />
              </div>
              <span className="text-base font-extrabold tracking-tight text-white">
                Expo<span className="text-brand-blue-500">VPN</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed mx-auto md:mx-0">
              Your gateway to secure and anonymous browsing. No logs, no fees, no hassle.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-4 flex justify-center gap-6 text-xs font-semibold text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-white/10">|</span>
            <Link href="/support" className="hover:text-white transition-colors">Support</Link>
            <span className="text-white/10">|</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>

          {/* Contact email */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end justify-center gap-1">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-extrabold">Support & Business</p>
            <a
              href="mailto:ganeshglive@gmail.com"
              className="flex items-center gap-1.5 text-xs text-brand-blue-500 hover:text-white hover:underline transition-colors font-medium"
            >
              <Mail size={12} />
              ganeshglive@gmail.com
            </a>
          </div>

        </div>

        {/* Bottom divider and copyright */}
        <div className="max-w-7xl mx-auto mt-4 pt-4 border-t border-white/5 text-center text-[10px] text-gray-500">
          <p>&copy; {new Date().getFullYear()} Expo VPN. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
