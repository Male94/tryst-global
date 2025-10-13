"use client";

import Image from "next/image";
import React, { useState } from "react";

const StartProject = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ loading: true, message: "" });

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setStatus({
        loading: false,
        message: data.success
          ? "✅ Message sent successfully!"
          : "❌ Failed to send message.",
      });

      if (data.success) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          project: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
      setStatus({ loading: false, message: "❌ Something went wrong." });
    }
  };

  return (
    <div
      className="bg-[#fffbf5] py-10 flex flex-col md:flex-row justify-between items-center max-w-full px-10 md:px-30"
      id="contact"
    >
      <div className="w-full flex flex-col justify-center md:w-1/2 mb-6 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-serif text-brown-700 mb-6 ramillas">
          Start Your Project
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border-1 border-[#65460a] rounded-sm focus:outline-none"
            required
          />
          <div className="flex gap-1">
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-1/2 p-2 border-1 border-[#65460a] rounded-sm focus:outline-none"
              required
            />
            <div className="w-1/2 flex items-center border-1 border-[#65460a] rounded-sm text-white">
              <span className="h-full p-3 mr-2 text-xs md:text-md bg-[#65460a]">
                +62
              </span>
              <input
                name="phone"
                type="text"
                placeholder="Input Number Here"
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-full text-xs md:text-md text-black rounded-sm focus:outline-none"
              />
            </div>
          </div>

          <select
            name="project"
            value={formData.project}
            onChange={handleChange}
            className="w-full p-2 border-1 border-[#65460a] rounded-sm focus:outline-none"
          >
            <option value="">Select Project</option>
            <option value="Web Design">Web Design</option>
            <option value="Mobile App">Mobile App</option>
            <option value="Branding">Branding</option>
          </select>

          <textarea
            name="message"
            placeholder="Input Message Here"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border-1 border-[#65460a] rounded-sm h-24 focus:outline-none"
          />

          <button
            type="submit"
            disabled={status.loading}
            className="bg-[#65460a] text-white px-6 py-2 rounded-md hover:bg-brown-500 transition-colors duration-200 open-sans"
          >
            {status.loading ? "Sending..." : "GET STARTED"}
          </button>

          {status.message && (
            <p className="text-sm mt-2 text-[#65460a]">{status.message}</p>
          )}
        </form>
      </div>

      <div className="bg-cream-100 h-full w-full py-10 flex justify-center items-center">
        <div className="relative h-[300px] w-[250px] md:h-[500px] md:w-[450px] rounded-md">
          <div className="absolute h-[300px] w-[250px] md:h-[500px] md:w-[450px] border-3 border-brown-300 -top-5 -right-5 rounded-xl"></div>
          <Image
            src="/images/about/image (3).png"
            alt="Project Team"
            className="w-full h-full rounded-xl border-4 border-brown-300"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default StartProject;
