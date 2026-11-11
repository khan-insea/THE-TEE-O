import React, { useState } from 'react';
import { Compass, Package, Sparkles, Image as ImageIcon } from 'lucide-react';

const HERO_BANNER_IMAGE = '/assets/aistudio/Green-Gold_Mosquito_Incense_Banner_234f33cb.png';

export const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    e.preventDefault();
    const elem = document.querySelector(selector);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-20 lg:pb-24 overflow-hidden">
      {/* Subtle organic background glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#D4B365]/10 blur-3xl pointer-events-none rounded-full -z-10" />
      <div className="absolute top-36 -right-24 w-96 h-96 bg-[#173B24]/5 blur-3xl pointer-events-none rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Column 1: Left Content (Mobile: First) */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-left">
            {/* Nhãn */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173B24]/10 border border-[#173B24]/15 text-[#173B24] text-xs sm:text-sm font-semibold tracking-wide mb-4">
              <span className="w-2 h-2 rounded-full bg-[#D4B365] animate-pulse" />
              <span>Dự án sinh viên · Trường Đại học Kiên Giang</span>
            </div>

            {/* H1 */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl xl:text-5xl font-bold text-[#173B24] tracking-tight leading-[1.2] mb-3">
              Nhang muỗi từ cùi tiêu khô
            </h1>

            {/* Slogan */}
            <div className="inline-block mb-5">
              <span className="text-lg sm:text-xl md:text-2xl font-serif italic text-[#754C30] font-medium border-l-3 border-[#D4B365] pl-3 py-0.5">
                Từ phụ phẩm hồ tiêu – Kiến tạo giá trị xanh
              </span>
            </div>

            {/* Mô tả */}
            <p className="text-base sm:text-lg text-[#173B24]/85 leading-relaxed mb-8 max-w-2xl font-normal">
              Dự án khởi nghiệp của nhóm sinh viên Trường Đại học Kiên Giang, nghiên cứu tận dụng cùi tiêu khô làm nguyên liệu nền cho nhang xua muỗi, kết hợp tinh dầu thực vật, hướng đến phát triển sản phẩm gắn với kinh tế tuần hoàn.
            </p>

            {/* Hai nút */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
              <a
                href="#ve-du-an"
                onClick={(e) => scrollToSection(e, '#ve-du-an')}
                className="inline-flex items-center justify-center gap-2.5 bg-[#173B24] hover:bg-[#1f4e30] text-[#FAF7EF] px-6 py-3.5 rounded-xl font-medium text-base shadow-sm hover:shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173B24] group"
              >
                <Compass className="w-5 h-5 text-[#D4B365] group-hover:rotate-45 transition-transform" />
                <span>Khám phá dự án</span>
              </a>

              <a
                href="#san-pham"
                onClick={(e) => scrollToSection(e, '#san-pham')}
                className="inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-[#173B24]/6 text-[#173B24] border border-[#173B24]/30 hover:border-[#173B24] px-6 py-3.5 rounded-xl font-medium text-base transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173B24]"
              >
                <Package className="w-5 h-5 text-[#754C30]" />
                <span>Tìm hiểu sản phẩm</span>
              </a>
            </div>

            {/* Context highlights */}
            <div className="pt-4 border-t border-[#173B24]/10 w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-[#173B24]/75">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#173B24]" />
                <span>Mẫu nhang khoanh thực tế</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4B365]" />
                <span>Phụ phẩm hồ tiêu Kiên Giang</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#754C30]" />
                <span>Kinh tế tuần hoàn</span>
              </div>
            </div>
          </div>

          {/* Column 2: Right Image - Banner nhận diện dự án THE TEE-O */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-lg lg:max-w-none rounded-2xl p-2.5 sm:p-3 bg-white shadow-xl shadow-[#173B24]/8 border border-[#173B24]/10 transition-transform duration-300 hover:shadow-2xl">
              <div className="relative w-full rounded-xl overflow-hidden bg-[#173B24] aspect-16/9 flex items-center justify-center group">
                {!imageError ? (
                  <img
                    src={HERO_BANNER_IMAGE}
                    alt="Banner giới thiệu dự án THE TEE-O — Nhang muỗi từ cùi tiêu khô"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    onError={() => setImageError(true)}
                    loading="eager"
                  />
                ) : (
                  <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center bg-[#FAF7EF] border-2 border-dashed border-[#173B24]/20 rounded-xl">
                    <ImageIcon className="w-12 h-12 text-[#754C30] mb-3 opacity-60" />
                    <span className="text-sm font-semibold text-[#173B24] mb-1">
                      Banner giới thiệu dự án
                    </span>
                    <span className="text-xs text-[#754C30] font-mono break-all max-w-xs">
                      {HERO_BANNER_IMAGE}
                    </span>
                  </div>
                )}

                {/* Status Badge */}
                <div className="absolute top-3 right-3 bg-[#FAF7EF]/90 backdrop-blur-md border border-[#173B24]/15 px-3 py-1 rounded-full text-xs font-semibold text-[#754C30] shadow-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#D4B365] animate-pulse" />
                  <span>Đang nghiên cứu và hoàn thiện</span>
                </div>
              </div>
            </div>

            {/* Chú thích ảnh */}
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-medium text-[#754C30]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4B365]" />
              <span>Nhận diện thương hiệu & ý tưởng sản phẩm THE TEE-O</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
