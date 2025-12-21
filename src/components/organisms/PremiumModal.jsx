import { Download, Slash, PlayCircle, Tv, MessageSquare, ArrowLeft, Play, RotateCcw, RotateCw, Volume2, Gauge, Maximize, List, SkipForward } from "lucide-react";

export default function PremiumModal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 z-[250] bg-black/80 backdrop-blur-md flex flex-col animate-in fade-in duration-500 overflow-y-auto">
      
      <div className="sticky top-0 left-0 right-0 p-3 sm:p-4 md:p-6 z-30 flex items-center gap-2 sm:gap-3 text-white bg-gradient-to-b from-black/60 to-transparent">
        <button 
          onClick={onClose} 
          className="hover:bg-white/10 p-1.5 sm:p-2 rounded-full transition-all active:scale-90 flex-shrink-0"
        >
          <ArrowLeft size={20} className="sm:w-[22px] sm:h-[22px] md:w-6 md:h-6" />
        </button>
        <span className="font-semibold text-sm sm:text-base md:text-lg truncate">
          {movie.title}
        </span>
      </div>

      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-0">
        
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-2 md:mb-3 tracking-normal">
          Layanan Premium✨
        </h2>
        
        <p className="text-gray-400 text-[10px] sm:text-[11px] md:text-sm mb-8 sm:mb-10 md:mb-12 font-light leading-relaxed max-w-xs sm:max-w-sm md:max-w-md">
          Tingkatkan paket anda untuk dapat menonton video ini.
        </p>

        <h3 className="text-white text-[11px] sm:text-xs md:text-sm font-normal mb-6 sm:mb-8 md:mb-10">
          Kenapa Harus Berlangganan?
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-6 sm:gap-x-10 sm:gap-y-7 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-10 w-full max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl mb-8 sm:mb-10 md:mb-14">
          {[
            { icon: <img src="../../public/assets/VectorD.png" alt="download" className="w-[18px] h-[18px] sm:w-5 sm:h-5 object-contain" />, label: "Download Konten\nPilihan" },
            { icon: <img src="../../public/assets/VectorA.png" alt="download" className="w-[18px] h-[18px] sm:w-5 sm:h-5 object-contain" />, label: "Tidak Ada Iklan" },
            { icon: <img src="../../public/assets/VectorF.png" alt="download" className="w-[18px] h-[18px] sm:w-5 sm:h-5 object-contain" />, label: "Tonton Semua Konten" },
            { icon: <img src="../../public/assets/VectorE.png" alt="download" className="w-[18px] h-[18px] sm:w-5 sm:h-5 object-contain" />, label: "Kualitas Maksimal\nSampai Dengan 4K" },
            { icon: <img src="../../public/assets/VectorC.png" alt="download" className="w-[18px] h-[18px] sm:w-5 sm:h-5 object-contain" />, label: "Tonton di Tv, Tablet,\nMobile, dan Laptop" },
            { icon: <img src="../../public/assets/VectorB.png" alt="download" className="w-[18px] h-[18px] sm:w-5 sm:h-5 object-contain" />, label: "Subtitle Untuk Konten\nPilihan" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2 sm:gap-2.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center bg-white/5 rounded-full border border-white/10 text-white flex-shrink-0">
                {item.icon}
              </div>
              <span className="text-[8px] sm:text-[9px] md:text-[10px] font-normal leading-snug text-white/85 whitespace-pre-line text-center px-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <button className="bg-[#1e3a8a] hover:bg-[#1e40af] active:bg-[#1e40af] text-white px-8 sm:px-10 md:px-14 py-2 sm:py-2.5 md:py-3 rounded-full font-medium text-[10px] sm:text-[11px] md:text-xs transition-all shadow-lg active:scale-95">
          Ubah Jadi Premium
        </button>
      </div>

      <div className="hidden md:flex absolute bottom-0 left-0 right-0 p-3 md:p-4 lg:p-5 z-10 bg-black/40 select-none pointer-events-none">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between text-white/60">
          <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
            <Play size={16} fill="currentColor" className="text-white/60 md:w-[18px] md:h-[18px]" />
            <div className="flex flex-col items-center -space-y-0.5">
              <RotateCcw size={14} strokeWidth={2} className="md:w-[15px] md:h-[15px]" />
              <span className="text-[6px] md:text-[7px] font-medium">10</span>
            </div>
            <div className="flex flex-col items-center -space-y-0.5">
              <RotateCw size={14} strokeWidth={2} className="md:w-[15px] md:h-[15px]" />
              <span className="text-[6px] md:text-[7px] font-medium">10</span>
            </div>
            <Volume2 size={15} strokeWidth={2} className="md:w-[17px] md:h-[17px]" />
          </div>
          
          <div className="text-[9px] md:text-[10px] lg:text-xs font-normal tracking-wide">
            {movie.title}
          </div>
          
          <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
            <SkipForward size={15} strokeWidth={2} className="md:w-[17px] md:h-[17px]" />
            <List size={15} strokeWidth={2} className="md:w-[17px] md:h-[17px]" />
            <MessageSquare size={15} strokeWidth={2} className="md:w-[17px] md:h-[17px]" />
            <Gauge size={15} strokeWidth={2} className="md:w-[17px] md:h-[17px]" />
            <Maximize size={15} strokeWidth={2} className="md:w-[17px] md:h-[17px]" />
          </div>
        </div>
      </div>

      <div className="md:hidden h-16 flex-shrink-0"></div>
    </div>
  );
}