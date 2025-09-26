export default function CustomerLogos() {
  const logos = [
    {
      name: "Sewing Shop",
      subtitle: "TAILORED SERVICE",
    },
    {
      name: "Tailor Shop",
      subtitle: "PREMIUM QUALITY",
    },
    {
      name: "Best Tailor",
      subtitle: "CUSTOM CLOTHING",
    },
    {
      name: "Best Sewing",
      subtitle: "HAND MADE",
    },
    {
      name: "Sewing Shop",
      subtitle: "TAILORED SERVICE",
    },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        {/* <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-green-500 mb-4">
            Area for current customer logos
          </h2>
        </div> */}

        {/* Logos Row */}
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              {/* Logo Text */}
              <div className="mb-2">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-600 italic mb-1">
                  {logo.name}
                </h3>
                <div className="bg-gray-400 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide font-medium">
                  {logo.subtitle}
                </div>
              </div>

              {/* Decorative elements (scissors, crown, etc.) */}
              <div className="w-8 h-8 text-gray-400">
                {index === 1 && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-full h-full"
                  >
                    <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3h-3z" />
                  </svg>
                )}
                {index === 2 && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-full h-full"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
