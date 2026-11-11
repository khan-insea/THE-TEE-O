import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#122c1d] text-[#FAF7EF] py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#FAF7EF] flex items-center justify-center border border-[#D4B365]/40 shadow-xs overflow-hidden p-0.5">
              <img
                src="/assets/aistudio/logo_c7fe5034.png"
                alt="THE TEE-O Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <span className="font-serif text-lg font-bold tracking-wider text-white">
                THE TEE-O
              </span>
              <span className="text-xs text-[#D4B365] block">
                Nhang muỗi từ cùi tiêu khô
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#FAF7EF]/80 text-center md:text-right max-w-md">
            Từ phụ phẩm hồ tiêu – Kiến tạo giá trị xanh. Nghiên cứu giải pháp nhang xua muỗi gắn với kinh tế tuần hoàn và nông nghiệp địa phương.
          </p>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7EF]/70">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <Sparkles className="w-3.5 h-3.5 text-[#D4B365] shrink-0" />
            <p className="font-medium text-white/90">
              THE TEE-O · Dự án sinh viên · Trường Đại học Kiên Giang
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#D4B365] hover:text-white transition-colors focus:outline-none focus:underline"
            aria-label="Về đầu trang"
          >
            <span>Về đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
