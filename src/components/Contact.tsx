import React, { useState } from 'react';
import { Phone, MapPin, MessageSquare, Check, Copy, UserCheck, Handshake, Sprout, Store } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('0363984857');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="lien-he" className="py-16 sm:py-20 lg:py-24 bg-[#173B24] text-[#FAF7EF] relative overflow-hidden">
      {/* Decorative organic shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4B365]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#754C30]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D4B365] text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Đồng hành & Trao đổi</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Kết nối với THE TEE-O
          </h2>

          <p className="text-base sm:text-lg text-[#FAF7EF]/85 leading-relaxed font-normal">
            Chúng tôi trân trọng mọi cơ hội kết nối với người quan tâm, hộ trồng tiêu, cơ sở sơ chế và đối tác phân phối để lắng nghe góp ý quý báu hoặc trao đổi hợp tác phát triển.
          </p>
        </div>

        {/* Contact Main Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Direct Phone Call Card */}
          <div className="md:col-span-7 bg-white/10 backdrop-blur-xs p-7 sm:p-9 rounded-3xl border border-white/15 flex flex-col justify-between hover:bg-white/15 transition-all">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#D4B365] text-[#173B24] flex items-center justify-center mb-6 shadow-md">
                <Phone className="w-7 h-7" />
              </div>

              <span className="text-xs text-[#D4B365] font-bold uppercase tracking-wider block mb-2">
                Đường dây kết nối trực tiếp
              </span>

              <a
                href="tel:0363984857"
                className="font-serif text-3xl sm:text-4xl font-bold text-white hover:text-[#D4B365] transition-colors block mb-3 focus:outline-none focus:underline"
              >
                0363 984 857
              </a>

              <p className="text-xs sm:text-sm text-[#FAF7EF]/80 leading-relaxed mb-6">
                Liên hệ trực tiếp với nhóm sinh viên dự án THE TEE-O để trao đổi về mẫu thử nghiệm, đóng góp ý kiến kỹ thuật hoặc tìm hiểu khả năng cung ứng cùi tiêu khô.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/15">
              <a
                href="tel:0363984857"
                className="bg-[#D4B365] hover:bg-[#c4a457] text-[#173B24] px-6 py-3.5 rounded-xl text-sm font-bold transition-all inline-flex items-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Gọi nhóm dự án</span>
              </a>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="p-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#FAF7EF] transition-colors inline-flex items-center gap-2 text-xs font-medium"
                title="Sao chép số điện thoại"
                aria-label="Sao chép số điện thoại"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-4 h-4 text-green-300" />
                    <span>Đã sao chép</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Sao chép số</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Location & Audience Invitations */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-4">
            {/* Address */}
            <div className="bg-white/5 p-6 rounded-3xl border border-white/10 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-[#D4B365] flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[#D4B365] font-semibold uppercase tracking-wider block mb-1">
                  Địa chỉ
                </span>
                <p className="text-sm font-medium text-white leading-relaxed">
                  Số 320A, Quốc Lộ 61, Xã Châu Thành, Tỉnh An Giang, Việt Nam.
                </p>
                <p className="text-xs text-[#FAF7EF]/60 mt-1">
                  Địa điểm sinh hoạt và nghiên cứu của nhóm
                </p>
              </div>
            </div>

            {/* Target Stakeholders Invitation */}
            <div className="bg-white/5 p-6 rounded-3xl border border-white/10 space-y-3">
              <span className="text-xs text-[#D4B365] font-semibold uppercase tracking-wider block">
                Đối tượng trân trọng mời hợp tác
              </span>

              <div className="space-y-2 text-xs text-[#FAF7EF]/85">
                <div className="flex items-center gap-2">
                  <Sprout className="w-4 h-4 text-[#D4B365] shrink-0" />
                  <span>Hộ trồng tiêu & cơ sở sơ chế cùi tiêu khô</span>
                </div>
                <div className="flex items-center gap-2">
                  <Store className="w-4 h-4 text-[#D4B365] shrink-0" />
                  <span>Cửa hàng tiện lợi, đại lý phân phối sản phẩm xanh</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#D4B365] shrink-0" />
                  <span>Người tiêu dùng quan tâm đăng ký nhận mẫu thử</span>
                </div>
                <div className="flex items-center gap-2">
                  <Handshake className="w-4 h-4 text-[#D4B365] shrink-0" />
                  <span>Chuyên gia & đơn vị kiểm nghiệm khoa học</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
