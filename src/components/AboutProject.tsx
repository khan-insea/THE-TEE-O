import React from 'react';
import { Sprout, Target, Compass, Eye, ShieldCheck, Layers, Scale } from 'lucide-react';

const GREEN_PEPPER_IMAGE = '/assets/aistudio/h_c_ti_u_66382147.jpg';

export const AboutProject: React.FC = () => {
  return (
    <section id="ve-du-an" className="py-16 sm:py-20 lg:py-24 bg-[#FAF7EF] border-t border-[#173B24]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4B365]/20 text-[#754C30] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sprout className="w-3.5 h-3.5" />
            <span>Về dự án</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#173B24] leading-tight mb-4">
            Cùi tiêu sau sơ chế có thể dùng để làm gì?
          </h2>
          <p className="text-base sm:text-lg text-[#173B24]/85 leading-relaxed font-normal">
            Từ thực tế phụ phẩm hồ tiêu chưa được tận dụng hiệu quả, nhóm hình thành ý tưởng nghiên cứu nhang muỗi từ cùi tiêu khô, nhằm tạo thêm giá trị cho nguyên liệu địa phương.
          </p>
        </div>

        {/* Story Narrative + Green Pepper Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          {/* Left: Green Pepper Image with neutral attribution */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full rounded-2xl overflow-hidden bg-white p-2.5 border border-[#173B24]/10 shadow-sm">
              <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden bg-[#FAF7EF]">
                <img
                  src={GREEN_PEPPER_IMAGE}
                  alt="Chùm hồ tiêu xanh trên cây"
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="mt-2.5 text-xs text-[#754C30] italic text-center">
              Chùm hồ tiêu xanh trên cây — Hình ảnh minh họa nguyên liệu hồ tiêu
            </p>
          </div>

          {/* Right: Narrative + Two Key Stats */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#173B24]/10 shadow-xs">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#173B24] mb-3">
                Khai thác tiềm năng phụ phẩm nông nghiệp địa phương
              </h3>
              <p className="text-sm sm:text-base text-[#173B24]/85 leading-relaxed mb-4">
                Hồ tiêu là cây trồng truyền thống nổi bật tại vùng Đồng bằng sông Cửu Long. Tuy nhiên, sau các công đoạn tuốt tách lấy hạt tiêu thành phẩm, phần cùi cuống tiêu thường bị bỏ lại, chưa được khai thác giá trị sử dụng tương xứng.
              </p>
              <p className="text-sm sm:text-base text-[#173B24]/85 leading-relaxed">
                Nhóm sinh viên Trường Đại học Kiên Giang tìm tòi phương thức sơ chế, nghiền mịn và phối trộn phần cùi khô này thành cốt nền tự nhiên cho nhang xua muỗi, hướng tới giảm thiểu lãng phí và gia tăng giá trị chuỗi nông sản.
              </p>
            </div>

            {/* Two Statistics with Required Citations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Stat 1 */}
              <div className="bg-[#173B24] text-[#FAF7EF] p-5 sm:p-6 rounded-2xl border border-[#173B24] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D4B365] bg-white/10 px-2.5 py-0.5 rounded-full">
                      Diện tích hồ tiêu
                    </span>
                    <Layers className="w-4 h-4 text-[#D4B365]" />
                  </div>
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">
                    Khoảng 1.000 ha
                  </div>
                  <p className="text-xs sm:text-sm text-[#FAF7EF]/90">
                    Diện tích trồng hồ tiêu tại Kiên Giang (cũ).
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/15 text-[11px] text-[#FAF7EF]/75 italic">
                  Theo nguồn năm 2023.
                </div>
              </div>

              {/* Stat 2 */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#754C30]/20 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#754C30] bg-[#754C30]/10 px-2.5 py-0.5 rounded-full">
                      Tỷ lệ cùi tiêu khô
                    </span>
                    <Scale className="w-4 h-4 text-[#754C30]" />
                  </div>
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-[#754C30] mb-2">
                    12–15%
                  </div>
                  <p className="text-xs sm:text-sm text-[#173B24]/90">
                    Tỷ lệ cùi tiêu khô so với khối lượng hạt tiêu khô thành phẩm.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#173B24]/10 text-[11px] text-[#754C30] italic">
                  Theo khảo sát và cân đo sơ bộ của nhóm năm 2026.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Pillars: Mục tiêu, Sứ mệnh, Tầm nhìn, Giá trị cốt lõi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Mục tiêu */}
          <div className="bg-white p-6 rounded-2xl border border-[#173B24]/10 shadow-xs flex flex-col">
            <div className="w-10 h-10 rounded-xl bg-[#173B24] text-[#D4B365] flex items-center justify-center mb-4">
              <Target className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-base font-bold text-[#173B24] mb-2">
              Mục tiêu
            </h4>
            <p className="text-xs sm:text-sm text-[#173B24]/80 leading-relaxed">
              Hoàn thiện công thức, kiểm chứng chất lượng và xây dựng mô hình kinh doanh khả thi.
            </p>
          </div>

          {/* Sứ mệnh */}
          <div className="bg-white p-6 rounded-2xl border border-[#173B24]/10 shadow-xs flex flex-col">
            <div className="w-10 h-10 rounded-xl bg-[#754C30] text-[#FAF7EF] flex items-center justify-center mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-base font-bold text-[#173B24] mb-2">
              Sứ mệnh
            </h4>
            <p className="text-xs sm:text-sm text-[#173B24]/80 leading-relaxed">
              Nâng cao giá trị phụ phẩm hồ tiêu, giảm lãng phí nguyên liệu và phát triển sản phẩm gắn với nhu cầu đời sống.
            </p>
          </div>

          {/* Tầm nhìn */}
          <div className="bg-white p-6 rounded-2xl border border-[#173B24]/10 shadow-xs flex flex-col">
            <div className="w-10 h-10 rounded-xl bg-[#D4B365] text-[#173B24] flex items-center justify-center mb-4">
              <Eye className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-base font-bold text-[#173B24] mb-2">
              Tầm nhìn
            </h4>
            <p className="text-xs sm:text-sm text-[#173B24]/80 leading-relaxed">
              Đến năm 2030, hướng đến thương hiệu sản phẩm gia dụng từ phụ phẩm hồ tiêu tại Đồng bằng sông Cửu Long.
            </p>
          </div>

          {/* Giá trị cốt lõi */}
          <div className="bg-white p-6 rounded-2xl border border-[#173B24]/10 shadow-xs flex flex-col">
            <div className="w-10 h-10 rounded-xl bg-[#264b34] text-[#D4B365] flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-base font-bold text-[#173B24] mb-2">
              Giá trị cốt lõi
            </h4>
            <p className="text-xs sm:text-sm text-[#173B24]/80 leading-relaxed">
              Tận dụng tài nguyên có trách nhiệm; nghiên cứu dựa trên bằng chứng; minh bạch; chất lượng; hợp tác cộng đồng.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
