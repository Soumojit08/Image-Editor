const Button = ({ text, bgColor, textColor, opacity }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor, opacity: opacity }}
      className="py-2 px-4 rounded-full hover:opacity-80 cursor-pointer font-semibold text-lg transition-transform duration-300 ease-in-out md:py-4 md:px-8 lg:py-4 lg:px-8 md:text-2xl lg:text-2xl"
    >
      {text}
    </button>
  );
};

export default Button;
