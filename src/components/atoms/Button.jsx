export default function Button({ children, className = "", ...rest }) {
  return (
    <button
      {...rest}
      className={`w-full bg-[#444444] hover:bg-[#555555] text-white font-semibold rounded-lg py-3 transition duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
