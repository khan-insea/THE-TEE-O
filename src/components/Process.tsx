import React from 'react';
import { GitCommit, ClipboardCheck, ArrowRight, Check, AlertCircle } from 'lucide-react';
import { ProcessStep } from '../types';

const RAW_MATERIAL_SCREENSHOT = '/assets/aistudio/c73202da-0bcf-48dd-be22-0f6b93b72d58_316ea3d1.jpg';
const MOLD_COIL_IMAGE = '/assets/aistudio/22002ea9-06fd-4e94-90cf-ed233275fcfc_4e691b77.jpg';
const BURNING_TEST_IMAGE = '/assets/aistudio/8b67eeac-2535-4264-9295-a9611a87e249_0db3b9ca.jpg';

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
    description: 'Tạo mẫu nhang khoanh.',
    detail: 'Đưa hỗn hợp vào khuôn nén ép tạo hình nhang khoanh tròn đều, chuẩn kích thước.',
  },
  {
    step: '07',
    title: 'Sấy sản phẩm',
    description: 'Làm khô và ổn định hình dạng.',
    detail: 'Kiểm soát nhiệt độ sấy chậm để giữ nguyên hình dạng xoắn ốc, tránh nứt gãy và bay hương.',
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

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#173B24] leading-tight mb-4">
            Quy trình sản xuất thử nghiệm
          </h2>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#754C30]/15 text-[#754C30] text-sm font-semibold mb-4">
            <span>Quy trình dự kiến</span>
          </div>

          <p className="text-base sm:text-lg text-[#173B24]/80 leading-relaxed font-normal">
            9 bước chuẩn hóa trong quy trình sản xuất thử nghiệm mẫu nhang khoanh từ phụ phẩm cùi tiêu khô.
          </p>
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
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#173B24] text-[#FAF7EF] flex items-center justify-center font-serif font-bold text-base border border-[#D4B365]/30 group-hover:bg-[#754C30] transition-colors">
                      {item.step}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#754C30] bg-[#FAF7EF] px-2.5 py-1 rounded-md">
                      Bước {item.step}
                    </span>
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
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#173B24]">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-semibold uppercase text-[#754C30] bg-[#FAF7EF] px-2 py-0.5 rounded">
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
        <div className="mb-12">
          <div className="text-center mb-6">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#173B24]">
              Hình ảnh thực tế quá trình thử nghiệm
            </h3>
            <p className="text-xs sm:text-sm text-[#754C30] mt-1">
              Ghi nhận các bước chuẩn bị nguyên liệu, đúc khuôn và quan sát mẫu nhang
            </p>
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

            {/* Ảnh 2: Nhang khoanh trên khuôn trắng */}
            <div className="bg-white p-3 rounded-2xl border border-[#173B24]/10 shadow-xs flex flex-col items-center">
              <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-[#FAF7EF]">
                <img
                  src={MOLD_COIL_IMAGE}
                  alt="Nhang khoanh trên khuôn trắng tạo hình mẫu nhang"
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-xs sm:text-sm font-semibold text-[#173B24] text-center">
                Tạo hình mẫu nhang
              </p>
              <p className="text-[11px] text-[#754C30] text-center mt-0.5">
                Mẫu nhang khoanh được ép tạo hình trên khuôn chuyên dụng
              </p>
            </div>

            {/* Ảnh 3: Đoạn nhang đang cháy được cầm trên tay */}
            <div className="bg-white p-3 rounded-2xl border border-[#173B24]/10 shadow-xs flex flex-col items-center">
              <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-[#FAF7EF]">
                <img
                  src={BURNING_TEST_IMAGE}
                  alt="Đoạn nhang đang cháy được cầm trên tay quan sát mẫu cháy"
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
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

          {/* Safety & Testing Disclaimer below burning photo */}
          <div className="mt-4 text-center">
            <p className="text-xs text-[#754C30] italic flex items-center justify-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 shrink-0 text-[#754C30]" />
              Không dùng ảnh đốt mẫu để khẳng định hiệu quả hoặc độ an toàn.
            </p>
          </div>
        </div>

        {/* Process Traceability Note & Core Message */}
        <div className="bg-[#173B24] text-[#FAF7EF] rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-[#D4B365] flex items-center justify-center shrink-0">
                <ClipboardCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-[#D4B365] font-semibold uppercase tracking-wider mb-1">
                  Ghi chú hồ sơ dự án
                </p>
                <p className="text-xs sm:text-sm text-[#FAF7EF]/90 max-w-2xl leading-relaxed">
                  Đây là quy trình dự kiến trong hồ sơ dự án. Nhóm định hướng ghi nhận nguồn nguyên liệu và theo dõi các chỉ tiêu theo từng mẻ.
                </p>
              </div>
            </div>
            <div className="shrink-0 text-xs text-[#D4B365] bg-white/10 px-3.5 py-1.5 rounded-full font-medium border border-[#D4B365]/30">
              Kiểm soát từng mẻ
            </div>
          </div>

          <div className="pt-4 border-t border-white/15 text-center">
            <p className="font-serif italic text-sm sm:text-base text-[#D4B365] font-medium tracking-wide">
              Minh bạch nguyên liệu – Nghiêm túc thử nghiệm – Có trách nhiệm với người sử dụng.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
