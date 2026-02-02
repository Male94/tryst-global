"use client";

import ScrollAnimation from "./ScrollAnimation";

export default function QualityApproach() {
  const steps = [
    { title: "Understanding Your Vision", icon: "💡" },
    { title: "Sourcing the Finest Materials", icon: "🌍" },
    { title: "Custom Design & Development", icon: "✏️" },
    { title: "Crafting with Precision", icon: "✂️" },
    { title: "Quality Control & Testing", icon: "✓" },
  ];

  return (
    <section className="relative min-h-screen bg-[url('/images/background_for_our_approach.jpg')] bg-cover bg-center bg-fixed flex justify-start items-center">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content overlay */}
      <div className="relative z-50 w-full h-full flex justify-center md:justify-end items-center py-16">
        <div className="w-full md:w-1/2 px-6 md:pr-20">
          <ScrollAnimation variant="fadeInRight" delay={0.2}>
            <div className="glass-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <h1 className="text-[#2D1810] text-3xl md:text-5xl font-bold mb-10 text-center md:text-end leading-tight open-sans">
                OUR APPROACH TO
                <br />
                QUALITY TEXTILES
              </h1>
              
              <div className="space-y-6 text-end">
                {steps.map((step, i) => (
                  <ScrollAnimation
                    key={i}
                    variant="fadeInRight"
                    delay={0.3 + i * 0.1}
                  >
                    <div className="flex items-center justify-end gap-4 group">
                      {/* Number Badge */}
                      <div className="flex items-center gap-3">
                        <div className="hidden md:flex w-10 h-10 rounded-full bg-[#7c6537] text-white items-center justify-center font-bold text-sm">
                          {String(i + 1).padStart(2, '0')}
                        </div>
                        <p className="text-[#2D1810] text-xl md:text-2xl font-light tracking-wide open-sans group-hover:text-[#7c6537] transition-colors">
                          {step.title}
                        </p>
                      </div>
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
