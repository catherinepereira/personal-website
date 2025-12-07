"use client";

export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold tracking-tight text-white hover:text-mercedesTeal transition-colors relative group"
          >
            CAT PEREIRA
            {/* secret :3 */}
            <span className="absolute -right-16 top-1/2 -translate-y-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="w-2 h-2 rounded-full bg-gray-700 group-hover:animate-[light1_7s_linear]"></span>
              <span className="w-2 h-2 rounded-full bg-gray-700 group-hover:animate-[light2_7s_linear]"></span>
              <span className="w-2 h-2 rounded-full bg-gray-700 group-hover:animate-[light3_7s_linear]"></span>
              <span className="w-2 h-2 rounded-full bg-gray-700 group-hover:animate-[light4_7s_linear]"></span>
              <span className="w-2 h-2 rounded-full bg-gray-700 group-hover:animate-[light5_7s_linear]"></span>
            </span>
          </button>
          <div className="flex gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-wide"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-wide"
            >
              Portfolio
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
