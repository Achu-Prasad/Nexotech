import { useEffect } from "react";
import gsap from "gsap";

const FloatingBackground = () => {
  useEffect(() => {
    const blobs = gsap.utils.toArray(".blob");
    gsap.to(blobs, {
      x: () => gsap.utils.random(-40, 40),
      y: () => gsap.utils.random(-40, 40),
      duration: () => gsap.utils.random(6, 10),
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5
    });
  }, []);

  return (
    <section className="relative flex items-center justify-center py-32 bg-white overflow-hidden">

      {/* Foreground Content */}
      <div className="h-[1400px] relative z-10 max-w-3xl text-center px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          The Future of Lending
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Our platform helps you streamline loan management with AI-powered tools
          and real-time insights.
        </p>
        <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default FloatingBackground;