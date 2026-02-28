import Link from "next/link";
import { Mail, MessageCircle, Instagram, KeyRound, ArrowUpRight, Shield } from 'lucide-react';

export default function Contact() {
  const fingerprint = "2048 2FDC 3A11 B6AB B609 4A3D 1AFC B7A0 4DED DCDC";

  const links = [
    {
      title: "E-Mail",
      subtitle: "info@onurzengin.de",
      href: "mailto:info@onurzengin.de",
      icon: <Mail className="w-5 h-5 text-zinc-600" />,
    },
    {
      title: "WhatsApp",
      subtitle: "Business Chat",
      href: "https://wa.me/4915224173654",
      icon: <MessageCircle className="w-5 h-5 text-zinc-600" />,
    },
    {
      title: "Instagram",
      subtitle: "@onur24zn",
      href: "https://instagram.com/onur24zn",
      icon: <Instagram className="w-5 h-5 text-zinc-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F8F8] font-sans text-black flex flex-col items-center justify-center p-6 italic-none">
      <div className="w-full max-w-[420px] space-y-12">
        
        {/* Header */}
        <div className="text-left space-y-2 border-l-2 border-black pl-4">
          <h1 className="text-2xl font-bold tracking-tight uppercase">
            Onur Zengin
          </h1>
          <p className="text-[11px] text-zinc-500 uppercase tracking-[0.3em] font-medium">
            Contact Linktree
          </p>
        </div>

        {/* Links Stack */}
        <div className="space-y-2">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              target="_blank"
              className="flex items-center justify-between p-5 bg-white border border-zinc-200 hover:border-black transition-all duration-200 group shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="group-hover:text-black transition-colors">{link.icon}</div>
                <div>
                  <div className="text-[14px] font-bold uppercase tracking-wide">{link.title}</div>
                  <div className="text-[12px] text-zinc-400 font-medium">{link.subtitle}</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-black transition-all" />
            </Link>
          ))}
        </div>

        {/* PGP Section */}
        <div className="pt-8 border-t border-zinc-200">
          <div className="flex items-center gap-2 mb-4 text-zinc-400">
            <Shield size={14} />
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em]">Encrypted Email</h2>
          </div>

          <div className="bg-zinc-100 p-6 space-y-5 border border-zinc-200">
            <div>
              <span className="text-[9px] text-zinc-400 font-bold uppercase tracking-widest">ECC25519 Fingerprint</span>
              <p className="text-[11px] font-mono text-zinc-600 mt-1 leading-relaxed tracking-wider">
                {fingerprint}
              </p>
            </div>

            <Link
              href="/public.asc"
              download="onur-zengin-public-key.asc"
              className="flex items-center justify-center w-full py-4 bg-black text-white text-[12px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors"
            >
              <KeyRound size={16} className="mr-2" />
              Download Public Key
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center">
          <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-widest">
            © 2026 Onur Zengin 
          </p>
        </footer>
      </div>
    </div>
  );
}