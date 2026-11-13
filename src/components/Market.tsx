import React from 'react';
import { BarChart3, Users, Store, Coffee, Share2, Handshake, Info } from 'lucide-react';
import { SurveyItem } from '../types';

const SURVEY_DATA: SurveyItem[] = [
  {
    label: 'Sẵn sàng hoặc rất sẵn sàng dùng thử sản phẩm mới',
    percentage: 69,
  },
  {
    label: 'Quan tâm đến an toàn sức khỏe và thành phần',
    percentage: 68,
  },
  {
    label: 'Quan tâm đến hiệu quả xua muỗi',
    percentage: 62,
  },
  {
    label: 'Chú ý đến lượng khói và mùi hương',
    percentage: 45,
  },
  {
    label: 'Ưu tiên cửa hàng tạp hóa, cửa hàng tiện lợi hoặc điểm bán địa phương',
    percentage: 72,
  },
];

export const Market: React.FC = () => {
  return (
    <section id="thi-truong" className="py-16 sm:py-20 lg:py-24 bg-[#FAF7EF] border-t border-[#173B24]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173B24]/10 text-[#173B24] text-xs font-semibold uppercase tracking-wider mb-3">
            <BarChart3 className="w-3.5 h-3.5 text-[#754C30]" />
            <span>Nghiên cứu thị trường</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#173B24] leading-tight">
            Lắng nghe để phát triển sản phẩm
          </h2>
        </div>

        {/* Survey Chart Container - Streamlined & Compact */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-5 sm:p-6 border border-[#173B24]/10 shadow-xs mb-8">
          {/* Top Info */}
          <div className="flex items-center justify-between gap-3 pb-3 mb-4 border-b border-[#173B24]/10">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#173B24]">
              <Users className="w-4 h-4 text-[#D4B365]" />
              <span>Khảo sát nhu cầu thực tế (n = 100 người)</span>
            </div>
            <span className="text-[11px] font-semibold text-[#754C30] bg-[#FAF7EF] px-2.5 py-0.5 rounded-full border border-[#173B24]/10">
              Định hướng sản phẩm
            </span>
          </div>

          {/* Horizontal Bar Chart with Direct Labels and Percentages */}
          <div className="space-y-3">
            {SURVEY_DATA.map((item, index) => {
              const colors = [
                'bg-[#173B24]',
                'bg-[#754C30]',
                'bg-[#2d593e]',
                'bg-[#99653d]',
                'bg-[#D4B365]',
              ];
              const barColor = colors[index % colors.length];

              return (
                <div key={item.label} className="group">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs sm:text-sm font-medium text-[#173B24] flex items-center gap-1.5 leading-snug">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#754C30] shrink-0" />
                      {item.label}
                    </span>
                    <span className="font-serif text-sm sm:text-base font-bold text-[#173B24] tracking-tight shrink-0">
                      {item.percentage}%
                    </span>
                  </div>

                  <div className="w-full h-2.5 sm:h-3 bg-[#FAF7EF] rounded-full overflow-hidden border border-[#173B24]/10">
                    <div
                      className={`h-full rounded-full ${barColor} transition-all duration-1000 ease-out`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Exact Citation Note */}
          <div className="mt-4 pt-3 border-t border-[#173B24]/10 flex items-start gap-2 text-[11px] sm:text-xs text-[#754C30]">
            <Info className="w-3.5 h-3.5 text-[#754C30] shrink-0 mt-0.5" />
            <p className="italic leading-relaxed">
              Nguồn khảo sát của nhóm, tháng 9–10/2026, n = 100. Kết quả mang tính định hướng, chưa đại diện toàn thị trường; sẵn sàng dùng thử không đồng nghĩa cam kết mua.
            </p>
          </div>
        </div>

        {/* Market Segmentation & Potential Partners Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Khách hàng chính & Khách hàng mở rộng */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#173B24]/10 shadow-xs space-y-5">
            <div className="flex items-center gap-3 text-[#173B24]">
              <div className="w-10 h-10 rounded-xl bg-[#173B24]/10 text-[#173B24] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold">
                Đối tượng khách hàng mục tiêu
              </h3>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 bg-[#FAF7EF] rounded-xl border border-[#173B24]/5">
                <strong className="text-[#173B24] block mb-1">Khách hàng chính:</strong>
                <p className="text-[#173B24]/80">
                  Hộ gia đình có nhu cầu xua muỗi trong sinh hoạt thường nhật, mong muốn tìm kiếm giải pháp nguồn gốc tự nhiên.
                </p>
              </div>

              <div className="p-3 bg-[#FAF7EF] rounded-xl border border-[#173B24]/5">
                <strong className="text-[#754C30] block mb-1">Khách hàng mở rộng:</strong>
                <p className="text-[#173B24]/80">
                  Quán ăn, cà phê sân vườn, homestay và các cơ sở lưu trú có không gian mở ngoài trời cần xua muỗi tự nhiên.
                </p>
              </div>
            </div>
          </div>

          {/* Kênh tiếp cận & Đối tác mong muốn */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#173B24]/10 shadow-xs space-y-5">
            <div className="flex items-center gap-3 text-[#754C30]">
              <div className="w-10 h-10 rounded-xl bg-[#754C30]/10 text-[#754C30] flex items-center justify-center">
                <Handshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#173B24]">
                Kênh tiếp cận & Đối tác mong muốn
              </h3>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 bg-[#FAF7EF] rounded-xl border border-[#173B24]/5">
                <strong className="text-[#173B24] block mb-1">Kênh tiếp cận dự kiến:</strong>
                <p className="text-[#173B24]/80">
                  Điểm bán địa phương, hội chợ sản phẩm, Facebook, Zalo, TikTok; xúc tiến thương mại điện tử khi đủ điều kiện kiểm định.
                </p>
              </div>

              <div className="p-3 bg-[#FAF7EF] rounded-xl border border-[#173B24]/5">
                <strong className="text-[#754C30] block mb-1">Đối tác mong muốn kết nối:</strong>
                <p className="text-[#173B24]/80">
                  Hộ trồng tiêu, hợp tác xã, cơ sở sơ chế, nhà cung cấp tinh dầu thực vật, đơn vị kiểm nghiệm khoa học và các điểm bán.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
