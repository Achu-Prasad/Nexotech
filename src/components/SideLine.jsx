const SideLine = ({ position = "left" }) => {
  return (
    <div
      className={`hidden md:flex flex-col items-center absolute top-0 h-full ${
        position === "left" ? "left-0" : "right-0"
      }`}
    >
      <div className="w-px bg-gray-300 flex-1" />
      <div className="w-4 h-4 bg-gray-300 rounded-full my-2" />
      <div className="w-40 h-px bg-gray-300" />
      <div className="w-px bg-gray-300 flex-1" />
    </div>
  );
};
export default SideLine;