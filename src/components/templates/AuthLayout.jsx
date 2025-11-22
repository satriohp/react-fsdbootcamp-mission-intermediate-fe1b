import Title from "../atoms/Title";
import Subtitle from "../atoms/Subtitle";

export default function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/assets/bg.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 bg-[#1C1C1C] text-white p-8 rounded-xl shadow-lg w-full max-w-sm mx-4">
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        {children}
      </div>
    </div>
  );
}
