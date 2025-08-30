

const CtaButton = () => {

  return (
    <button
      className="
        group relative inline-flex items-center gap-4 rounded-2xl
        bg-white/30 p-4 pr-8 text-left shadow-lg
        transition-all duration-300 ease-in-out
        hover:bg-white/40 hover:shadow-xl
        focus:outline-none focus:ring-2 focus:ring-white/50
        backdrop-blur-lg border border-white/30
      "
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/50">
        {/* <CalendarIcon /> */}
      </div>
      <div>
        <p className="font-Poppins font-semibold text-slate-800">Book an Intro Call</p>
        <p className="font-Poppins font-regular text-sm text-slate-600">Friendly Chat, no pressure</p>
      </div>
    </button>
  );
};
export default CtaButton;