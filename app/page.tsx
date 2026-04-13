import Link from "next/link";
import { Mail, MessageCircle, Lock, ArrowUpRight, Calendar, KeyRound } from 'lucide-react';

export default function Contact() {
  const links = [
    {
      title: "E-Mail",
      subtitle: "info@onurzengin.de",
      href: "mailto:info@onurzengin.de",
      icon: <Mail className="w-5 h-5" />,
    },
    {
      title: "Signal",
      subtitle: "onurzengin.24",
      href: "https://signal.me/#eu/...",
      icon: <Lock className="w-5 h-5" />,
    },
    {
      title: "Matrix",
      subtitle: "@onurzengin:matrix.org",
      href: "https://matrix.to/#/@onurzengin:matrix.org",
      icon: <MessageCircle className="w-5 h-5" />,
    },
    {
      title: "Termin vereinbaren",
      subtitle: "Meet Call – 60 Minuten",
      href: "https://calendar.proton.me/bookings#x79LayeXaOGS6GF5N1pfvcQy_pIJnaXm7O9kDS1yoTs=",
      icon: <Calendar className="w-5 h-5" />,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0B0B0F] text-white flex items-center justify-center p-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-[#6D4AFF]/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-[100px] rounded-full bottom-[-120px] right-[-120px]" />

      <div className="relative w-full max-w-[420px] space-y-12">
        
        {/* Header */}
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight">
            Onur Zengin
          </h1>

          <div className="flex items-center gap-2">
            <div className="h-[2px] rounded-lg w-8 bg-[#6D4AFF]" />
            <p className="text-xs text-zinc-400 uppercase tracking-[0.3em]">
              Kontakt Linktre
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-4">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              target="_blank"
              className="group relative flex items-center justify-between p-5 rounded-2xl
              bg-[#12121A]/80 backdrop-blur-xl
              border border-[#1F1F2B]
              hover:border-[#6D4AFF]/60
              transition-all duration-300
              hover:shadow-[0_0_30px_rgba(109,74,255,0.15)]
              hover:-translate-y-1"
            >
              {/* subtle gradient overlay */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300
              bg-gradient-to-r from-[#6D4AFF]/10 via-transparent to-purple-500/10" />

              <div className="flex items-center gap-4 relative z-10">
                <div className="text-[#6D4AFF] group-hover:scale-110 transition duration-300">
                  {link.icon}
                </div>

                <div>
                  <div className="text-[14px] font-semibold tracking-wide">
                    {link.title}
                  </div>
                  <div className="text-[12px] text-zinc-500">
                    {link.subtitle}
                  </div>
                </div>
              </div>

              <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-[#6D4AFF] group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300 relative z-10" />
            </Link>
          ))}
        </div>

<footer className="pt-6 border-t border-[#1F1F2B] flex items-center justify-between text-[11px] text-zinc-500">
  <span>© {new Date().getFullYear()} Onur</span>

  <Link
    href="https://keys.openpgp.org/vks/v1/by-fingerprint/20482FDC3A11B6ABB6094A3D1AFCB7A04DEDDCDC"
    target="_blank"
    className="hover:text-[#6D4AFF] transition"
  >
    keys.openpgp.org
  </Link>
</footer>

      </div>
    </div>
  );
}