import CtaButton from "./CtaButton";

const Hero = () => {
  return (
    <section id="hero" className="pt-20 relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#F8F7FF]">

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-4 text-center">
        {/* Top "Pill" Text */}
        <div className="inline-flex items-center text-sm font-medium uppercase tracking-wider text-slate-600 backdrop-blur-sm">
          <span className="font-mono mx-2">Hello Future, We're Ready!</span>
        </div>

        {/* Main Headline */}
        <h1 className="max-w-4xl text-5xl font-sora font-medium tracking-tight text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl">
          We make technology that works for you
        </h1>

        {/* Sub-headline */}
        <p className="font-poppins font-regular max-w-2xl text-base text-slate-600 md:text-lg">
          Innovative, practical, and scalable solutions to bridge the gap
          between business and technology.
        </p>

        {/* CTA Button */}
        <div className="mt-4">
          <CtaButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;
