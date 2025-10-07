"use client";

import { FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

export default function SocialMediaIcons() {
  const icons = [
    // {
    //   name: "Zalo",
    //   href: "https://zalo.me/your-id", // replace with your Zalo link
    //   type: "image",
    //   src: "/images/zalo.png", // put zalo.png inside public/images/
    //   bg: "bg-white",
    // },
    {
      name: "WhatsApp",
      href: "https://wa.me/94771234567", // replace with your WhatsApp number
      type: "icon",
      icon: <FaWhatsapp className="text-white text-2xl" />,
      bg: "bg-green-500",
    },
    {
      name: "Email",
      href: "mailto:your@email.com",
      type: "icon",
      icon: <MdEmail className="text-white text-2xl" />,
      bg: "bg-blue-500",
    },
    // {
    //   name: "Facebook",
    //   href: "https://facebook.com/yourpage",
    //   type: "icon",
    //   icon: <FaFacebookF className="text-white text-xl" />,
    //   bg: "bg-green-700",
    // },
  ];

  return (
    <div className="fixed bottom-2/12 right-4 flex flex-col gap-4 z-50">
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200 ${item.bg}`}
        >
          {item.type === "icon" ? item.icon : null}
        </a>
      ))}
    </div>
  );
}
