"use client";

import { Facebook, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import Link from "next/link";

export default function ConnectWithUs() {
  const offices = [
    {
      country: "SRI LANKA",
      email: "MarketingSL@trystglobal.com",
      phone: "(02) 456-7890",
    },
    {
      country: "VIETNAM",
      email: "Marketingvn@trystglobal.com",
      phone: "(02) 456-7890",
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <section
      id="connect"
      className="py-16 px-4 bg-gray-100 relative overflow-hidden bg-[url('/images/OurHandWritingsIMG.png')] bg-cover bg-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main heading */}
        <ScrollAnimation variant="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-light ramillas text-white mb-4">
              Connect with us!
            </h2>
            <p className="text-white/80 text-lg">
              Get in touch with our global team
            </p>
          </div>
        </ScrollAnimation>

        {/* Contact information grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {offices.map((office, idx) => (
            <ScrollAnimation
              key={idx}
              variant="fadeInUp"
              delay={0.2 + idx * 0.1}
            >
              <div className="glass-white rounded-2xl p-8 md:p-10 shadow-2xl hover-lift">
                <h3 className="text-3xl lg:text-4xl font-light text-white mb-8 uppercase tracking-wide ramillas text-center">
                  {office.country}
                </h3>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <Mail className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1 uppercase tracking-wide ramillas">
                        Email
                      </h4>
                      <a
                        href={`mailto:${office.email}`}
                        className="text-base text-white/90 hover:text-white transition-colors fraunces"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <Phone className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1 uppercase tracking-wide ramillas">
                        Phone
                      </h4>
                      <a
                        href={`tel:${office.phone}`}
                        className="text-base text-white/90 hover:text-white transition-colors fraunces"
                      >
                        {office.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Social Media Icons */}
        <ScrollAnimation variant="fadeInUp" delay={0.4}>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, idx) => (
              <Link
                key={idx}
                href={social.href}
                aria-label={social.label}
                className="group w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#7c6537] transition-all duration-300 hover-lift"
              >
                <social.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </Link>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
