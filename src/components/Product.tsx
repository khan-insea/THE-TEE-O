import React from 'react';
import { CircleDot, FlaskConical, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';

const BRAND_LOGO_IMAGE = '/assets/aistudio/logo_c7fe5034.png';

export const Product: React.FC = () => {
  return (
    <section id="san-pham" className="py-16 sm:py-20 lg:py-24 bg-white border-t border-[#173B24]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173B24]/10 text-[#173B24] text-xs font-semibold uppercase tracking-wider mb-3">
            <CircleDot className="w-3.5 h-3.5 text-[#754C30]" />
            <span>Mẫu sản phẩm thực tế</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#173B24] leading-tight mb-4">
            Mẫu nhang khoanh THE TEE-O
          </h2>

          {/* Badge: Đang nghiên cứu và hoàn thiện mẫu */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4B365]/20 border border-[#D4B365]/40 text-[#754C30] text-sm font-semibold mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#754C30] animate-ping" />
            <span>Đang nghiên cứu và hoàn thiện mẫu</span>
          </div>

          <p className="text-base sm:text-lg text-[#173B24]/85 leading-relaxed font-normal">
            Sản phẩm đang nghiên cứu và hoàn thiện, sử dụng cùi tiêu khô đã sơ chế làm nguyên liệu sinh khối cho nền nhang, kết hợp chất kết dính và tinh dầu thực vật.
          </p>
        </div>

        {/* Featured Real Product Image & Product Attributes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14">
          {/* Left: Brand Identity Emblem / Product Display */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full rounded-2xl overflow-hidden bg-[#FAF7EF] p-4 border border-[#173B24]/10 shadow-sm">
              <div className="relative aspect-square sm:aspect-4/3 rounded-xl overflow-hidden bg-white flex items-center justify-center p-6">
                <img
                  src={BRAND_LOGO_IMAGE}
                  alt="Biểu trưng thương hiệu chính thức THE TEE-O 2026"
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="mt-2.5 text-xs text-[#754C30] italic text-center max-w-sm">
              Nhận diện thương hiệu chính thức THE TEE-O 2026 — Nhang muỗi từ cùi tiêu khô
            </p>
          </div>

          {/* Right: Three Core Technical Pillars */}
          <div className="lg:col-span-7 space-y-4">
            {/* 1. Nền nhang từ cùi tiêu khô */}
            <div className="bg-[#FAF7EF] p-6 rounded-2xl border border-[#173B24]/10 shadow-xs hover:border-[#173B24]/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#173B24] text-[#D4B365] flex items-center justify-center shrink-0 font-serif font-bold text-base">
                  01
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#173B24] mb-1.5">
                    Nền nhang từ cùi tiêu khô
                  </h3>
                  <p className="text-xs sm:text-sm text-[#173B24]/85 leading-relaxed">
                    Sử dụng bột cùi tiêu đã qua sơ chế làm nguyên liệu sinh khối cho nền nhang. Cấu trúc chất xơ tự nhiên hỗ trợ duy trì quá trình cháy đều và ổn định cho mẫu nhang khoanh.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Kết hợp tinh dầu thực vật */}
            <div className="bg-[#FAF7EF] p-6 rounded-2xl border border-[#173B24]/10 shadow-xs hover:border-[#173B24]/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#754C30] text-[#FAF7EF] flex items-center justify-center shrink-0 font-serif font-bold text-base">
                  02
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#173B24] mb-1.5">
                    Kết hợp tinh dầu thực vật
                  </h3>
                  <p className="text-xs sm:text-sm text-[#173B24]/85 leading-relaxed">
                    Tinh dầu được nghiên cứu cho vai trò tạo hương và hỗ trợ xua muỗi. Việc phối trộn tinh dầu thực vật tự nhiên cùng chất kết dính sinh học giúp mang lại trải nghiệm hương nhẹ, thanh thoát.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Các đặc tính đang được đánh giá */}
            <div className="bg-[#FAF7EF] p-6 rounded-2xl border border-[#173B24]/10 shadow-xs hover:border-[#173B24]/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#D4B365] text-[#173B24] flex items-center justify-center shrink-0 font-serif font-bold text-base">
                  03
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#173B24] mb-1.5">
                    Các đặc tính đang được đánh giá
                  </h3>
                  <p className="text-xs sm:text-sm text-[#173B24]/85 leading-relaxed">
                    Hiệu quả xua muỗi, thời gian cháy, khói, mùi, lượng tàn và tính an toàn cần được kiểm chứng. Nhóm đang ghi nhận và hiệu chỉnh từng mẻ thử nghiệm trước khi đạt tiêu chuẩn mẫu chuẩn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Honest Scientific Transparency Notice Banner */}
        <div className="bg-[#173B24]/5 border border-[#173B24]/15 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#173B24]/10 text-[#173B24] flex items-center justify-center shrink-0">
            <AlertCircle className="w-5 h-5 text-[#754C30]" />
          </div>
          <div className="text-xs sm:text-sm text-[#173B24]/85 leading-relaxed">
            <strong className="text-[#173B24] block mb-0.5">Lưu ý nghiên cứu & tính minh bạch:</strong>
            Sản phẩm đang trong quá trình nghiên cứu và thử nghiệm mẫu, chưa được khẳng định an toàn tuyệt đối hoặc có hiệu quả xua muỗi đã kiểm chứng toàn diện. Nhóm tập trung đo lường thực nghiệm khoa học, không đưa ra các tuyên bố thương mại khi chưa có kết quả kiểm định chính thức.
          </div>
        </div>
      </div>
    </section>
  );
};
