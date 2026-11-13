import React from 'react';
import {
  CircleDot,
  AlertCircle,
  Settings,
  Check,
  Home,
  Clock,
  Wind,
  AlertTriangle,
  Users,
} from 'lucide-react';

const BRAND_LOGO_IMAGE = '/assets/aistudio/logo_c7fe5034.png';
const PRODUCT_LABEL_IMAGE = '/assets/aistudio/Nh_n_Nhang_Mu_i_C_i_Ti_u_Kh_-removebg-preview_7e1ea489.png';

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
            Mẫu nhang nụ THE TEE-O
          </h2>

          {/* Badge: Đang nghiên cứu và hoàn thiện mẫu */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4B365]/20 border border-[#D4B365]/40 text-[#754C30] text-sm font-semibold mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#754C30] animate-ping" />
            <span>Đang nghiên cứu và hoàn thiện mẫu</span>
          </div>

          <div className="flex justify-center mb-6">
            <img
              src={PRODUCT_LABEL_IMAGE}
              alt="Nhãn sản phẩm Nhang muỗi từ cùi tiêu khô THE TEE-O — 10 nụ/hộp"
              className="w-44 h-44 sm:w-52 sm:h-52 object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>

          <p className="text-base sm:text-lg text-[#173B24]/85 leading-relaxed font-normal">
            Sản phẩm đang nghiên cứu và hoàn thiện, sử dụng cùi tiêu khô đã sơ chế làm nguyên liệu sinh khối cho nền nhang, kết hợp chất kết dính và tinh dầu thực vật.
          </p>
        </div>

        {/* Thành phần, Công dụng & Hướng dẫn sử dụng */}
        <div className="max-w-5xl mx-auto mb-14 bg-[#173B24] text-[#FAF7EF] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#D4B365]/30 shadow-lg relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#D4B365]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Công dụng */}
          <div className="pb-7 border-b border-[#D4B365]/30 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-linear-to-r from-[#D4B365] to-[#e6c97a] text-[#173B24] font-serif font-bold text-sm sm:text-base shadow-xs mb-3.5">
              <span className="w-5 h-5 rounded-full bg-[#173B24] text-[#D4B365] flex items-center justify-center shrink-0">
                <Settings className="w-3 h-3" />
              </span>
              <span>Công dụng:</span>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-[#FAF7EF]/95 leading-relaxed pl-1">
              Xua muỗi, côn trùng như các loại côn trùng nhỏ trong không gian thông qua quá trình đốt cháy phát tán khói.
            </p>
          </div>

          {/* Hướng dẫn sử dụng */}
          <div className="pt-7 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-linear-to-r from-[#D4B365] to-[#e6c97a] text-[#173B24] font-serif font-bold text-sm sm:text-base shadow-xs mb-5">
              <span className="w-5 h-5 rounded-full bg-[#173B24] text-[#D4B365] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
              <span>Hướng dẫn sử dụng</span>
            </div>

            <div className="space-y-4">
              {[
                {
                  Icon: Home,
                  text: 'Đặt nụ nhang lên một chiếc đĩa sứ, đĩa kim loại nhỏ, hoặc hũ đốt chuyên dụng chịu nhiệt. Không đặt trực tiếp lên mặt bàn gỗ, nhựa hay giấy vì sức nóng ở đáy nụ khi cháy hết có thể làm cháy xém bề mặt.',
                },
                {
                  Icon: Clock,
                  text: 'Dùng bật lửa đốt cháy phần chóp nhọn trên đỉnh của nụ nhang trong khoảng 5 – 10 giây.',
                },
                {
                  Icon: Wind,
                  text: 'Khi thấy đỉnh nụ nhang đã bén lửa đỏ rực, hãy nhẹ nhàng thổi tắt ngọn lửa (hoặc vẩy nhẹ) để nhang âm ỉ cháy và bắt đầu tỏa khói đều xuống dưới.',
                },
                {
                  Icon: AlertTriangle,
                  text: 'Đặt nhang ở góc phòng, gần cửa nơi khuất gió nhưng vẫn đảm bảo không khí để lưu thông.',
                },
                {
                  Icon: Users,
                  text: 'Giữ khoảng cách an toàn với các vật dễ cháy (rèm cửa, chăn màn, giấy tờ) và đặt ngoài tầm với của trẻ nhỏ, thú cưng; tránh đặt ngay luồng gió.',
                },
              ].map((item, idx) => {
                const IconComponent = item.Icon;
                return (
                  <div key={idx} className="flex items-start gap-3.5 sm:gap-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#D4B365] bg-[#122c1d] text-[#D4B365] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <p className="text-xs sm:text-sm text-[#FAF7EF]/90 leading-relaxed pt-1">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
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
                    Sử dụng bột cùi tiêu đã qua sơ chế làm nguyên liệu sinh khối cho nền nhang. Cấu trúc chất xơ tự nhiên hỗ trợ duy trì quá trình cháy đều và ổn định cho mẫu nhang nụ.
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
