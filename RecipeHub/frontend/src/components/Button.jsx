const Button = ({ text, bgColor, textColor, opacity }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor, opacity: opacity }}
      className="py-4 px-8 rounded-full hover:opacity-80 cursor-pointer font-semibold text-2xl transition-transform duration-300 ease-in-out"
    >
      {text}
    </button>
  );
};

export default Button;
