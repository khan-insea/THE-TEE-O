import React from 'react';
import { Leaf, RefreshCw, HeartHandshake, TrendingUp, Sparkles, CheckCircle } from 'lucide-react';
import { GreenValue } from '../types';

const VALUES: GreenValue[] = [
  {
    title: 'Giá trị kinh tế nông nghiệp',
    subtitle: 'Tăng chuỗi giá trị hồ tiêu địa phương',
    points: [
      'Tận dụng nguồn cùi tiêu khô – biến phụ phẩm thường bị lãng phí thành sản phẩm có giá trị gia tăng.',
      'Tạo cơ hội phát triển sản phẩm tiêu dùng mang bản sắc nông nghiệp bản địa Kiên Giang.',
      'Có tiềm năng tạo thêm sinh kế và việc làm cho người dân địa phương thông qua hoạt động thu gom, phân loại và sơ chế cùi tiêu.',
    ],
  },
  {
    title: 'Giá trị môi trường & tuần hoàn',
    subtitle: 'Giảm phát thải, tuần hoàn tài nguyên',
    points: [
      'Giảm thiểu lượng cùi tiêu bị thải bỏ bừa bãi hoặc đốt lộ thiên gây khói bụi và ô nhiễm môi trường.',
      'Thúc đẩy mô hình kinh tế tuần hoàn: đầu ra của khâu sơ chế hạt tiêu trở thành đầu vào cho sản phẩm gia dụng xanh.',
      'Định hướng nghiên cứu đo lường lượng khói và kiểm soát các chỉ số phát thải thân thiện với môi trường.',
    ],
  },
  {
    title: 'Giá trị sức khỏe & xã hội',
    subtitle: 'Vì cộng đồng và lối sống an lành',
    points: [
      'Nghiên cứu giải pháp xua muỗi từ nền sinh khối thực vật kết hợp tinh dầu thiên nhiên dịu nhẹ.',
      'Lan tỏa lối sống xanh, thúc đẩy người tiêu dùng ưu tiên các sản phẩm tận dụng tài nguyên có trách nhiệm.',
      'Xây dựng mối liên kết bền chặt giữa sinh viên nghiên cứu, nhà vườn và cộng đồng địa phương.',
    ],
  },
];

export const GreenValues: React.FC = () => {
  return (
    <section id="gia-tri-xanh" className="py-16 sm:py-20 lg:py-24 bg-white border-t border-[#173B24]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173B24]/10 text-[#173B24] text-xs font-semibold uppercase tracking-wider mb-3">
            <Leaf className="w-3.5 h-3.5 text-[#754C30]" />
            <span>Kinh tế tuần hoàn</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#173B24] leading-tight">
            Tạo giá trị mới từ nông nghiệp địa phương
          </h2>
        </div>

        {/* 3 Green Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {VALUES.map((val, index) => {
            const icons = [
              <TrendingUp className="w-6 h-6 text-[#D4B365]" />,
              <RefreshCw className="w-6 h-6 text-[#173B24]" />,
              <HeartHandshake className="w-6 h-6 text-[#754C30]" />,
            ];

            const bgs = [
              'bg-[#FAF7EF] border-[#173B24]/10',
              'bg-[#FAF7EF] border-[#173B24]/10',
              'bg-[#FAF7EF] border-[#173B24]/10',
            ];

            return (
              <div
                key={val.title}
                className={`${bgs[index]} rounded-2xl p-6 sm:p-8 border shadow-xs hover:shadow-md hover:border-[#173B24]/30 transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white shadow-xs flex items-center justify-center mb-5 border border-[#173B24]/10">
                    {icons[index]}
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#173B24] mb-1">
                    {val.title}
                  </h3>
                  <span className="text-xs font-medium text-[#754C30] block mb-5">
                    {val.subtitle}
                  </span>

                  <ul className="space-y-3">
                    {val.points.map((point, ptIdx) => (
                      <li
                        key={ptIdx}
                        className="text-xs sm:text-sm text-[#173B24]/85 flex items-start gap-2.5 leading-relaxed"
                      >
                        <CheckCircle className="w-4 h-4 text-[#173B24] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#173B24]/10 text-xs text-[#754C30] font-medium flex items-center justify-between">
                  <span>Giá trị {index + 1} / 3</span>
                  <span className="text-[#173B24]">Bền vững</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
