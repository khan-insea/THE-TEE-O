import React from 'react';
import { GitCommit, ArrowRight, Check } from 'lucide-react';
import { ProcessStep } from '../types';

const RAW_MATERIAL_SCREENSHOT = '/assets/aistudio/c73202da-0bcf-48dd-be22-0f6b93b72d58_316ea3d1.jpg';
const MOLD_COIL_IMAGE = '/assets/aistudio/3955d203-62d2-4a2a-a6b3-b44ffb6fbe68_64773345.jpg';
const BURNING_TEST_IMAGE = '/assets/aistudio/89763528-92ce-4aab-a818-81b05f8120cc_16c52cee.jpg';

const STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Thu gom',
    description: 'Tiếp nhận cùi tiêu khô từ nguồn phù hợp.',
    detail: 'Thu gom phụ phẩm cùi tiêu khô sau quá trình sơ chế tách hạt tại các cơ sở địa phương.',
  },
  {
    step: '02',
    title: 'Phân loại và làm sạch',
    description: 'Loại bỏ tạp chất và nguyên liệu không đạt.',
    detail: 'Sàng lọc kỹ lưỡng để loại bỏ lá mục, đất cát và các tạp chất lạ trước khi chế biến.',
  },
  {
    step: '03',
    title: 'Phơi hoặc sấy nguyên liệu',
    description: 'Làm khô và kiểm soát độ ẩm.',
    detail: 'Hạ độ ẩm đạt tiêu chuẩn chống mốc và sẵn sàng cho công đoạn nghiền bột mịn.',
  },
  {
    step: '04',
    title: 'Nghiền',
    description: 'Nghiền cùi tiêu thành bột phù hợp.',
    detail: 'Nghiền cơ học thành hạt bột mịn đồng đều, tạo độ xốp và kết cấu nền nhang.',
  },
  {
    step: '05',
    title: 'Phối trộn',
    description: 'Kết hợp nguyên liệu theo công thức thử nghiệm.',
    detail: 'Trộn bột cùi tiêu với chất kết dính tự nhiên, tinh dầu thực vật và nước sạch theo tỷ lệ.',
  },
  {
    step: '06',
    title: 'Tạo hình',
    description: 'Tạo mẫu nhang nụ.',
    detail: 'Đưa hỗn hợp vào khuôn nén ép tạo hình nhang nụ đều, chuẩn kích thước.',
  },
  {
    step: '07',
    title: 'Sấy sản phẩm',
    description: 'Làm khô và ổn định hình dạng.',
    detail: 'Kiểm soát nhiệt độ sấy chậm để giữ nguyên hình dạng, tránh nứt gãy và bay hương.',
  },
  {
    step: '08',
    title: 'Kiểm tra',
    description: 'Theo dõi độ ẩm, cháy, khói, mùi, tàn và tiếp tục kiểm chứng hiệu quả.',
    detail: 'Đo lường thời gian duy trì đốm cháy, độ tỏa hương, lượng khói và ghi nhật ký mẻ.',
  },
  {
    step: '09',
    title: 'Đóng gói và bảo quản',
    description: 'Đóng hộp, ghi nhãn và bảo quản.',
    detail: 'Xếp vào hộp bảo quản chống hút ẩm, dán nhãn mẫu thử nghiệm phục vụ lưu trữ.',
  },
];

const StepIllustration: React.FC<{ step: string; className?: string }> = ({
  step,
  className = 'w-14 h-14',
}) => {
  switch (step) {
    case '01':
      // Thu gom nguyên liệu: Giỏ đan thu gom cùi tiêu khô & lá tiêu
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
          {/* Dried pepper stems inside basket */}
          <path d="M18 28 C20 18, 26 14, 30 24" stroke="#5A3921" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M26 27 C29 16, 36 14, 38 26" stroke="#754C30" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M35 28 C38 19, 44 17, 46 28" stroke="#5A3921" strokeWidth="2.6" strokeLinecap="round" />
          <circle cx="24" cy="21" r="2" fill="#173B24" />
          <circle cx="33" cy="19" r="2" fill="#2d593e" />
          <circle cx="41" cy="22" r="2" fill="#173B24" />
          {/* Leaf accent */}
          <path d="M44 18 C50 13, 55 17, 50 24 C47 26, 44 23, 44 18 Z" fill="#2d593e" />
          {/* Basket rim & body */}
          <path d="M12 28 H52 L47 50 C46.5 52, 44.5 53, 42 53 H22 C19.5 53, 17.5 52, 17 50 L12 28 Z" fill="#D4B365" stroke="#754C30" strokeWidth="2.2" strokeLinejoin="round" />
          <rect x="10" y="25" width="44" height="5" rx="2.5" fill="#754C30" />
          {/* Basket weave lines */}
          <path d="M16 36 H48 M18 44 H46" stroke="#754C30" strokeWidth="1.6" strokeOpacity="0.55" />
          <path d="M25 30 L26 53 M32 30 V53 M39 30 L38 53" stroke="#754C30" strokeWidth="1.6" strokeOpacity="0.45" />
        </svg>
      );
    case '02':
      // Phân loại và làm sạch: Sàng lọc tạp chất và rửa sạch bằng giọt nước tinh khiết
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
          {/* Water droplets */}
          <path d="M22 12 C22 12, 17 18, 17 21.5 A5 5 0 0 0 27 21.5 C27 18, 22 12, 22 12 Z" fill="#3B82F6" fillOpacity="0.85" />
          <path d="M43 10 C43 10, 39 15, 39 17.8 A4 4 0 0 0 47 17.8 C47 15, 43 10, 43 10 Z" fill="#60A5FA" />
          {/* Sieve / sorting basket */}
          <ellipse cx="32" cy="36" rx="22" ry="7" fill="#FAF7EF" stroke="#173B24" strokeWidth="2.4" />
          <path d="M10 36 C10 47, 20 53, 32 53 C44 53, 54 47, 54 36" fill="#D4B365" fillOpacity="0.35" stroke="#754C30" strokeWidth="2.2" />
          {/* Sieve mesh */}
          <path d="M18 35 H46 M15 39 H49 M24 31 V43 M32 30 V44 M40 31 V43" stroke="#754C30" strokeWidth="1.4" strokeOpacity="0.5" />
          {/* Clean leaves & stems inside */}
          <path d="M23 35 C27 30, 34 31, 33 36 C29 38, 25 37, 23 35 Z" fill="#173B24" />
          <path d="M34 36 C37 31, 43 32, 42 36 C39 38, 36 37, 34 36 Z" fill="#2d593e" />
        </svg>
      );
    case '03':
      // Phơi hoặc sấy nguyên liệu: Mặt trời tỏa nhiệt & khay phơi
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
          {/* Sun */}
          <circle cx="32" cy="21" r="8.5" fill="#F59E0B" />
          <circle cx="32" cy="21" r="5.5" fill="#FCD34D" />
          <path d="M32 7 V10 M32 32 V35 M18 21 H21 M43 21 H46 M22 11 L24.5 13.5 M39.5 28.5 L42 31 M42 11 L39.5 13.5 M24.5 28.5 L22 31" stroke="#F59E0B" strokeWidth="2.2" strokeLinecap="round" />
          {/* Drying tray */}
          <rect x="11" y="40" width="42" height="11" rx="3" fill="#D4B365" stroke="#754C30" strokeWidth="2.2" />
          {/* Stems drying */}
          <path d="M17 44 L26 42 M28 45 L38 42 M39 45 L47 43 M21 47 L33 46" stroke="#5A3921" strokeWidth="2.2" strokeLinecap="round" />
          {/* Heat waves */}
          <path d="M20 35 C21 33, 23 33, 24 35 M31 35 C32 33, 34 33, 35 35 M41 35 C42 33, 44 33, 45 35" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case '04':
      // Nghiền: Phễu/máy nghiền và đống bột mịn (giống bước 4 trong ảnh)
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
          {/* Grinder machine */}
          <path d="M26 12 H52 L48 26 H30 L26 12 Z" fill="#4B5563" stroke="#1F2937" strokeWidth="2" strokeLinejoin="round" />
          <rect x="29" y="26" width="20" height="16" rx="2" fill="#6B7280" stroke="#1F2937" strokeWidth="2" />
          <circle cx="39" cy="34" r="3.5" fill="#D1D5DB" />
          {/* Grinder stand legs */}
          <path d="M31 42 L29 52 M47 42 L49 52" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" />
          {/* Output chute */}
          <path d="M29 33 L21 39" stroke="#374151" strokeWidth="3.5" strokeLinecap="round" />
          {/* Fine ground powder mound */}
          <path d="M8 53 C12 43, 18 39, 23 39 C28 39, 34 45, 38 53 Z" fill="#D4B365" stroke="#99653d" strokeWidth="1.6" strokeLinejoin="round" />
          <circle cx="20" cy="48" r="1" fill="#754C30" />
          <circle cx="25" cy="46" r="1" fill="#754C30" />
          <circle cx="16" cy="50" r="1" fill="#754C30" />
        </svg>
      );
    case '05':
      // Phối trộn: Tô bột vàng nâu và muỗng gỗ trộn (giống bước 5 trong ảnh)
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
          {/* Wooden spoon */}
          <path d="M37 28 L49 12 C50.5 10, 53.5 11.5, 52 14 L41 31" fill="#B47B44" stroke="#754C30" strokeWidth="1.8" strokeLinecap="round" />
          {/* Powder mound inside bowl */}
          <path d="M14 31 C20 20, 44 20, 50 31 Z" fill="#E5B94C" stroke="#B47B44" strokeWidth="1.5" />
          <circle cx="28" cy="26" r="1" fill="#754C30" />
          <circle cx="35" cy="25" r="1" fill="#754C30" />
          {/* Bowl */}
          <path d="M11 31 H53 C52 44, 43 52, 32 52 C21 52, 12 44, 11 31 Z" fill="#99653d" stroke="#5A3921" strokeWidth="2.2" strokeLinejoin="round" />
          <ellipse cx="32" cy="31" rx="21" ry="3.5" fill="none" stroke="#5A3921" strokeWidth="1.8" />
          {/* Base of bowl */}
          <path d="M23 52 H41" stroke="#5A3921" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case '06':
      // Tạo hình: Nụ nhang hình chóp màu nâu than (giống bước 6 trong ảnh)
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
          {/* Subtle leaves behind cone */}
          <path d="M18 45 C12 40, 12 33, 19 35 C22 36, 22 42, 18 45 Z" fill="#2d593e" />
          <path d="M46 45 C52 40, 52 33, 45 35 C42 36, 42 42, 46 45 Z" fill="#173B24" />
          {/* Shadow */}
          <ellipse cx="32" cy="52" rx="16" ry="3.5" fill="#173B24" fillOpacity="0.15" />
          {/* Main Nụ Nhang (Incense Cone) */}
          <path d="M32 11 C36 22, 43 38, 44 48 C44 51, 38.5 53, 32 53 C25.5 53, 20 51, 20 48 C21 38, 28 22, 32 11 Z" fill="#3B3531" stroke="#1F1B18" strokeWidth="2" strokeLinejoin="round" />
          {/* Texture & highlight */}
          <path d="M31 15 C28 26, 25 38, 24 47" stroke="#5D534C" strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.7" />
          <circle cx="34" cy="34" r="1" fill="#D4B365" fillOpacity="0.6" />
          <circle cx="31" cy="41" r="1" fill="#D4B365" fillOpacity="0.6" />
          <circle cx="37" cy="44" r="1" fill="#D4B365" fillOpacity="0.6" />
        </svg>
      );
    case '07':
      // Sấy sản phẩm: Khay/lồng gỗ sấy sản phẩm (giống bước 7 trong ảnh)
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
          {/* Top wooden crate frame */}
          <polygon points="12,24 32,14 52,24 32,34" fill="#E6B97A" stroke="#754C30" strokeWidth="2" strokeLinejoin="round" />
          {/* Front-left slats */}
          <polygon points="12,24 32,34 32,53 12,43" fill="#C98A4B" stroke="#754C30" strokeWidth="2" strokeLinejoin="round" />
          {/* Front-right slats */}
          <polygon points="32,34 52,24 52,43 32,53" fill="#B27337" stroke="#754C30" strokeWidth="2" strokeLinejoin="round" />
          {/* Horizontal slat lines */}
          <path d="M12 30 L32 40 L52 30 M12 37 L32 47 L52 37" stroke="#754C30" strokeWidth="1.8" />
          {/* Top crate inner slats */}
          <path d="M19 21 L39 31 M25 18 L45 28" stroke="#754C30" strokeWidth="1.5" strokeOpacity="0.6" />
        </svg>
      );
    case '08':
      // Kiểm tra: Bảng đánh dấu checklist + kính lúp (giống bước 8 trong ảnh)
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
          {/* Clipboard */}
          <rect x="13" y="13" width="30" height="40" rx="3" fill="#D97706" stroke="#754C30" strokeWidth="2" />
          <rect x="17" y="18" width="22" height="31" rx="1.5" fill="#FFFFFF" />
          {/* Clipboard clip */}
          <rect x="22" y="10" width="12" height="6" rx="2" fill="#4B5563" />
          {/* Checklist rows */}
          <path d="M20 25 L22 27 L25 23" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M27 25 H36" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 33 L22 35 L25 31" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M27 33 H36" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 41 L22 43 L25 39" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M27 41 H33" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
          {/* Magnifying glass */}
          <circle cx="42" cy="40" r="9.5" fill="#E0F2FE" fillOpacity="0.85" stroke="#173B24" strokeWidth="2.5" />
          <path d="M49 47 L56 54" stroke="#173B24" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );
    case '09':
      // Đóng gói và bảo quản: Hộp carton đóng gói chuẩn chỉnh (giống bước 9 trong ảnh)
      return (
        <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
          {/* Box Top */}
          <polygon points="32,12 52,22 32,32 12,22" fill="#E6BE8A" stroke="#754C30" strokeWidth="2" strokeLinejoin="round" />
          {/* Box Left */}
          <polygon points="12,22 32,32 32,53 12,43" fill="#D4A36A" stroke="#754C30" strokeWidth="2" strokeLinejoin="round" />
          {/* Box Right */}
          <polygon points="32,32 52,22 52,43 32,53" fill="#B8834B" stroke="#754C30" strokeWidth="2" strokeLinejoin="round" />
          {/* Tape seal across top & side */}
          <polygon points="22,17 42,27 38,29 18,19" fill="#FAF7EF" fillOpacity="0.85" stroke="#754C30" strokeWidth="1.2" />
          <polygon points="38,29 42,27 42,35 38,37" fill="#FAF7EF" fillOpacity="0.85" stroke="#754C30" strokeWidth="1.2" />
          {/* Small green eco stamp on box */}
          <circle cx="22" cy="37" r="4" fill="#173B24" fillOpacity="0.85" />
          <path d="M20.5 37 L21.7 38.2 L23.8 36" stroke="#D4B365" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
};

export const Process: React.FC = () => {
  return (
    <section id="quy-trinh" className="py-16 sm:py-20 lg:py-24 bg-[#FAF7EF] border-t border-[#173B24]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173B24]/10 text-[#173B24] text-xs font-semibold uppercase tracking-wider mb-3">
            <GitCommit className="w-3.5 h-3.5 text-[#754C30]" />
            <span>Thực nghiệm nghiên cứu</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#173B24] leading-tight">
            Quy trình sản xuất thử nghiệm
          </h2>
        </div>

        {/* Desktop 3x3 Grid (Hidden on mobile) */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-14">
          {STEPS.map((item, idx) => {
            const isLastInRow = (idx + 1) % 3 === 0;
            return (
              <div
                key={item.step}
                className="relative bg-white rounded-2xl p-6 border border-[#173B24]/10 shadow-xs hover:shadow-md hover:border-[#173B24]/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#173B24] text-[#FAF7EF] flex items-center justify-center font-serif font-bold text-base border border-[#D4B365]/30 group-hover:bg-[#754C30] transition-colors">
                      {item.step}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#754C30] bg-[#FAF7EF] px-2.5 py-1 rounded-md">
                      Bước {item.step}
                    </span>
                  </div>

                  {/* Illustration for each step */}
                  <div className="w-full h-20 rounded-xl bg-[#FAF7EF]/85 border border-[#173B24]/8 flex items-center justify-center mb-4 group-hover:bg-[#FAF7EF] transition-colors">
                    <StepIllustration
                      step={item.step}
                      className="w-14 h-14 group-hover:scale-108 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#173B24] mb-2 group-hover:text-[#754C30] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#173B24]/90 font-medium mb-2.5">
                    {item.description}
                  </p>

                  <p className="text-xs text-[#173B24]/70 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#173B24]/10 flex items-center justify-between text-xs text-[#754C30]">
                  <span className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-[#173B24]" />
                    Kiểm soát thử nghiệm
                  </span>
                  {!isLastInRow && (
                    <ArrowRight className="w-4 h-4 text-[#D4B365] group-hover:translate-x-1 transition-transform" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Vertical Timeline (Hidden on desktop) */}
        <div className="lg:hidden relative pl-6 sm:pl-8 border-l-2 border-[#173B24]/20 space-y-7 mb-14 ml-2 sm:ml-4">
          {STEPS.map((item) => (
            <div key={item.step} className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#173B24] text-[#FAF7EF] border-2 border-[#FAF7EF] shadow-xs flex items-center justify-center text-xs sm:text-sm font-bold font-serif">
                {item.step}
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#173B24]/10 shadow-xs">
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#FAF7EF] border border-[#173B24]/10 flex items-center justify-center shrink-0">
                      <StepIllustration step={item.step} className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#173B24]">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-semibold uppercase text-[#754C30] bg-[#FAF7EF] px-2 py-0.5 rounded shrink-0">
                    Bước {item.step}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#173B24]/90 font-medium mb-1.5">
                  {item.description}
                </p>
                <p className="text-xs text-[#173B24]/70 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Three Process Real Photos */}
        <div>
          <div className="text-center mb-6">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#173B24]">
              Hình ảnh thực tế quá trình thử nghiệm
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Ảnh 1: Cùi tiêu khô được cầm trên khay - Cropped central area from phone screenshot */}
            <div className="bg-white p-3 rounded-2xl border border-[#173B24]/10 shadow-xs flex flex-col items-center">
              <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-[#FAF7EF]">
                <img
                  src={RAW_MATERIAL_SCREENSHOT}
                  alt="Cùi tiêu khô được cầm trên khay chuẩn bị nguyên liệu"
                  className="w-full h-full object-cover scale-[1.75] object-[center_49%] hover:scale-[1.85] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-xs sm:text-sm font-semibold text-[#173B24] text-center">
                Chuẩn bị nguyên liệu
              </p>
              <p className="text-[11px] text-[#754C30] text-center mt-0.5">
                Cùi tiêu khô được phân loại và kiểm tra độ khô
              </p>
            </div>

            {/* Ảnh 2: Mẫu nhang nụ sau tạo hình */}
            <div className="bg-white p-3 rounded-2xl border border-[#173B24]/10 shadow-xs flex flex-col items-center">
              <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-[#FAF7EF]">
                <img
                  src={MOLD_COIL_IMAGE}
                  alt="Mẫu nhang nụ được tạo hình từ cùi tiêu khô"
                  className="w-full h-full object-cover object-[50%_58%] hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-xs sm:text-sm font-semibold text-[#173B24] text-center">
                Tạo hình mẫu nhang
              </p>
              <p className="text-[11px] text-[#754C30] text-center mt-0.5">
                Mẫu nhang nụ được ép tạo hình trên khuôn chuyên dụng
              </p>
            </div>

            {/* Ảnh 3: Mẫu nhang nụ đang cháy thử nghiệm */}
            <div className="bg-white p-3 rounded-2xl border border-[#173B24]/10 shadow-xs flex flex-col items-center">
              <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-[#FAF7EF]">
                <img
                  src={BURNING_TEST_IMAGE}
                  alt="Mẫu nhang nụ đang cháy thử nghiệm quan sát khói và đốm tàn"
                  className="w-full h-full object-cover object-[50%_58%] hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-xs sm:text-sm font-semibold text-[#173B24] text-center">
                Quan sát mẫu cháy
              </p>
              <p className="text-[11px] text-[#754C30] text-center mt-0.5">
                Theo dõi sự duy trì đốm tàn đỏ và độ đồng đều khi đốt
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
