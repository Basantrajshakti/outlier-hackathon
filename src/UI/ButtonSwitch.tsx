const ButtonSwitch = ({
  isMonthly,
  setIsMonthly,
}: {
  isMonthly: boolean;
  setIsMonthly: (val: boolean) => void;
}) => {
  return (
    <div className="relative mx-auto mt-12 mb-10 w-fit rounded-full bg-[#251F4C] px-3 py-2.5 text-sm backdrop-opacity-10">
      <div
        className={`absolute top-2.5 -z-10 h-[36px] w-[94px] rounded-full bg-[#3D365F] backdrop-opacity-10 transition-all duration-300 ${
          isMonthly ? "left-[50%]" : "left-3"
        }`}
      />
      <button
        className={`cursor-pointer rounded-full px-6 py-2 transition-opacity duration-300 ${isMonthly ? "opacity-50" : "opacity-100"}`}
        onClick={() => setIsMonthly(false)}
      >
        Annual
      </button>
      <button
        className={`cursor-pointer rounded-full py-2 pr-5 pl-6 text-center transition-opacity duration-300 ${isMonthly ? "opacity-100" : "opacity-50"}`}
        onClick={() => setIsMonthly(true)}
      >
        Monthly
      </button>
    </div>
  );
};

export default ButtonSwitch;
