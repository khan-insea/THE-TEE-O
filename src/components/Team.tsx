import React from 'react';
import { GraduationCap, Award, Users, CheckCircle2 } from 'lucide-react';
import { TeamMember } from '../types';

const FULL_TEAM_PHOTO = '/assets/aistudio/ddea0b3a-39dc-469a-ac56-1cf38390656c_8b7d5f56.jpg';
const CERTIFICATE_IMAGE = '/assets/aistudio/f36105b1-64a1-44fe-82e2-2a68b199d065_3579b7a5.jpg';
const AWARD_CEREMONY_IMAGE = '/assets/aistudio/055469ec-e3cf-4acc-ad6d-c6156eca3556_143d73da.jpg';

// Trưởng nhóm Nguyễn Nhựt Thanh is positioned at the exact CENTER (position 3 out of 5)
const TEAM: TeamMember[] = [
  {
    name: 'Võ Trà My',
    initials: 'TM',
    role: 'Thành viên',
    focus: 'Nhận diện thương hiệu và truyền thông',
    image: '/assets/aistudio/my_88acfd1a.jpg',
    objectPosition: '50% 53%',
    transformScale: '1.45',
  },
  {
    name: 'Lê Thị Hoàng Đẹp',
    initials: 'HĐ',
    role: 'Thành viên',
    focus: 'Khảo sát thị trường và kế hoạch tài chính',
    image: '/assets/aistudio/dep_b43400bd.jpg',
    objectPosition: '50% 53%',
    transformScale: '1.45',
  },
  {
    name: 'Nguyễn Nhựt Thanh',
    initials: 'NT',
    role: 'Trưởng nhóm',
    focus: 'Điều phối chung và nghiên cứu nguyên liệu',
    image: '/assets/aistudio/thanh_ffbfbc41.jpg',
    objectPosition: '48% 52%',
    transformScale: '1.5',
  },
  {
    name: 'Nguyễn Chí Đạt',
    initials: 'CĐ',
    role: 'Thành viên',
    focus: 'Kỹ thuật sản xuất thử nghiệm và tạo hình nhang nụ',
    image: '/assets/aistudio/dat_ebc9a4f1.jpg',
    objectPosition: '50% 18%',
    transformScale: '1.15',
  },
  {
    name: 'Dương Ngọc My',
    initials: 'NM',
    role: 'Thành viên',
    focus: 'Khảo sát thị trường và kế hoạch tài chính',
    image: '/assets/aistudio/my-ngoc_7e1aa09c.jpg',
    objectPosition: '50% 28%',
    transformScale: '1.4',
  },
];

export const Team: React.FC = () => {
  return (
    <section id="doi-ngu" className="py-16 sm:py-20 lg:py-24 bg-[#FAF7EF] border-t border-[#173B24]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173B24]/10 text-[#173B24] text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#754C30]" />
            <span>Trường Đại học Kiên Giang</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#173B24] leading-tight mb-4">
            Đội ngũ thực hiện
          </h2>

          <p className="text-base sm:text-lg text-[#173B24]/80 leading-relaxed font-normal">
            THE TEE-O được khởi xướng và phát triển bởi tập thể 5 thành viên sinh viên Trường Đại học Kiên Giang với niềm đam mê khởi nghiệp nông nghiệp tuần hoàn.
          </p>
        </div>

        {/* Full Team Photo Feature Card */}
        <div className="max-w-5xl mx-auto mb-14 bg-white rounded-3xl p-4 sm:p-6 border border-[#173B24]/10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-[#FAF7EF]">
                <img
                  src={FULL_TEAM_PHOTO}
                  alt="Nhóm 5 sinh viên THE TEE-O chụp ảnh cùng standee tại Trường Đại học Kiên Giang"
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#754C30]">
                <Users className="w-4 h-4 text-[#D4B365]" />
                <span>Tập thể nhóm 5 thành viên</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#173B24]">
                Tinh thần nhiệt huyết & nghiên cứu trách nhiệm
              </h3>
              <p className="text-xs sm:text-sm text-[#173B24]/85 leading-relaxed">
                Các thành viên phối hợp chặt chẽ từ khâu khảo sát thực địa các vườn tiêu, chuẩn bị nguyên liệu, thử nghiệm ép khuôn nhang nụ đến đo lường phản hồi của người dùng.
              </p>
              <div className="pt-3 border-t border-[#173B24]/10 text-xs text-[#754C30] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#173B24]" />
                <span>Nghiên cứu thực hiện tại Trường Đại học Kiên Giang</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Members Grid - Trưởng nhóm centered at position 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-16 items-stretch">
          {TEAM.map((member, index) => {
            const isLeader = member.role === 'Trưởng nhóm';

            return (
              <div
                key={`${member.name}-${index}`}
                className={`rounded-2xl p-5 text-center flex flex-col items-center justify-between transition-all group ${
                  isLeader
                    ? 'bg-white border-2 border-[#D4B365] shadow-md ring-1 ring-[#D4B365]/30 relative -translate-y-1'
                    : 'bg-white border border-[#173B24]/10 shadow-xs hover:border-[#173B24]/30 hover:shadow-md'
                }`}
              >
                <div className="flex flex-col items-center w-full">

                  {/* Avatar container */}
                  <div
                    className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-sm mb-3.5 bg-[#FAF7EF] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 ${
                      isLeader ? 'border-3 border-[#D4B365]' : 'border-2 border-[#D4B365]/70'
                    }`}
                  >
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={`Ảnh đại diện ${member.name}`}
                        className="w-full h-full object-cover transition-transform duration-300"
                        style={{
                          objectPosition: member.objectPosition || 'center center',
                          transform: `scale(${member.transformScale || '1'})`,
                        }}
                        loading="lazy"
                      />
                    ) : (
                      <span className="font-serif text-lg font-bold text-[#173B24]">
                        {member.initials}
                      </span>
                    )}
                  </div>

                  <h4 className="font-serif text-base font-bold text-[#173B24] mb-1">
                    {member.name}
                  </h4>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full mb-2.5 ${
                      isLeader
                        ? 'text-[#173B24] bg-[#D4B365]/30 font-bold'
                        : 'text-[#754C30] bg-[#FAF7EF]'
                    }`}
                  >
                    {member.role}
                  </span>
                  <p className="text-xs text-[#173B24]/80 leading-relaxed">
                    {member.focus}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Thành tích: Minh chứng Giấy khen Giải Ba & Ảnh Trao giải */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-[#173B24]/15 shadow-sm">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4B365]/20 text-[#754C30] text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-4 h-4 text-[#754C30]" />
              <span>Ghi nhận thành tích</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#173B24]">
              Minh chứng thành tích Giải Ba
            </h3>
            <p className="text-xs sm:text-sm text-[#754C30] mt-1">
              Giải thưởng tại cuộc thi KGU START-UP VII năm 2026
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Ảnh Giấy khen thật */}
            <div className="bg-[#FAF7EF] p-3 rounded-2xl border border-[#173B24]/10 shadow-xs flex flex-col items-center">
              <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden bg-white">
                <img
                  src={CERTIFICATE_IMAGE}
                  alt="Giấy khen Giải Ba Nhang muỗi từ cùi tiêu khô"
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-xs font-semibold text-[#173B24] text-center">
                Giấy khen Giải Ba chính thức của nhóm
              </p>
            </div>

            {/* Ảnh Trao giải sân khấu */}
            <div className="bg-[#FAF7EF] p-3 rounded-2xl border border-[#173B24]/10 shadow-xs flex flex-col items-center">
              <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden bg-white">
                <img
                  src={AWARD_CEREMONY_IMAGE}
                  alt="Khoảnh khắc đại diện nhóm nhận giải thưởng trên sân khấu"
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-xs font-semibold text-[#173B24] text-center">
                Đại diện nhóm nhận khen thưởng trên sân khấu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
