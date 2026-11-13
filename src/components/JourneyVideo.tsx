import React from 'react';
import { Film, Clock, ExternalLink } from 'lucide-react';
import { VideoConfig } from '../types';

// Central video configuration: easy to update later
export const CURRENT_VIDEO_CONFIG: VideoConfig = {
  kind: 'youtube', // 'none' | 'youtube' | 'mp4' | 'link'
  src: 'https://youtu.be/kSliU-7CNSM?si=coY3Zj5bN_oJ8jED',
  title: 'Video giới thiệu THE TEE-O',
  poster: '/assets/aistudio/9f63c8f5-caff-48e9-8bf0-957ece5af14d_33256ef1.jpg',
};

const BOOTH_DISCUSSION_IMAGE = '/assets/aistudio/ddac9c25-2563-4909-8de7-fb5b13b9e0a9_6b2464de.jpg';
const AUDITORIUM_GROUP_IMAGE = '/assets/aistudio/1200374f-44af-43b4-880c-965839262ed1_45963bca.jpg';

export const JourneyVideo: React.FC = () => {
  const getEmbedUrl = (url: string) => {
    try {
      if (url.includes('youtu.be/')) {
        const id = url.split('youtu.be/')[1]?.split('?')[0];
        return `https://www.youtube-nocookie.com/embed/${id}`;
      }
      if (url.includes('watch?v=')) {
        const id = new URL(url).searchParams.get('v');
        return `https://www.youtube-nocookie.com/embed/${id}`;
      }
    } catch {
      return url;
    }
    return url;
  };

  return (
    <section id="video-du-an" className="py-16 sm:py-20 lg:py-24 bg-white border-t border-[#173B24]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173B24]/10 text-[#173B24] text-xs font-semibold uppercase tracking-wider mb-3">
            <Film className="w-3.5 h-3.5 text-[#754C30]" />
            <span>Hành trình thực tế</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#173B24] leading-tight mb-4">
            Cùng nhìn lại hành trình của THE TEE-O
          </h2>

          <p className="text-base sm:text-lg text-[#173B24]/80 leading-relaxed font-normal">
            Từ những mẻ mẫu đầu tiên đến hoạt động giới thiệu sản phẩm, mỗi bước đi là cơ hội để nhóm lắng nghe và tiếp tục hoàn thiện.
          </p>
        </div>

        {/* Video Player Container (16:9 ratio) */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="bg-[#FAF7EF] p-2.5 sm:p-3.5 rounded-2xl sm:rounded-3xl border border-[#173B24]/15 shadow-md">
            <div className="relative w-full aspect-16/9 rounded-xl sm:rounded-2xl overflow-hidden bg-black flex items-center justify-center">
              {CURRENT_VIDEO_CONFIG.kind === 'none' && (
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={CURRENT_VIDEO_CONFIG.poster}
                    alt="Nhóm THE TEE-O thuyết trình trên sân khấu"
                    className="w-full h-full object-cover opacity-85"
                  />
                  {/* Subtle dark gradient overlay to ensure text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30 flex flex-col items-center justify-end p-6 sm:p-8 text-center" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-medium border border-white/30 shadow-sm">
                      <Clock className="w-4 h-4 text-[#D4B365]" />
                      <span>Video giới thiệu — Sẽ được cập nhật</span>
                    </div>
                  </div>
                </div>
              )}

              {CURRENT_VIDEO_CONFIG.kind === 'youtube' && CURRENT_VIDEO_CONFIG.src && (
                <iframe
                  src={getEmbedUrl(CURRENT_VIDEO_CONFIG.src)}
                  title={CURRENT_VIDEO_CONFIG.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              )}

              {CURRENT_VIDEO_CONFIG.kind === 'mp4' && CURRENT_VIDEO_CONFIG.src && (
                <video
                  src={CURRENT_VIDEO_CONFIG.src}
                  poster={CURRENT_VIDEO_CONFIG.poster}
                  controls
                  playsInline
                  className="w-full h-full object-contain"
                >
                  Trình duyệt không hỗ trợ thẻ video.
                </video>
              )}

              {CURRENT_VIDEO_CONFIG.kind === 'link' && CURRENT_VIDEO_CONFIG.src && (
                <div className="relative w-full h-full flex flex-col items-center justify-center p-6">
                  <img
                    src={CURRENT_VIDEO_CONFIG.poster}
                    alt="Ảnh bìa video"
                    className="w-full h-full object-cover opacity-75"
                  />
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-3">
                    <span className="text-white text-sm font-medium">
                      {CURRENT_VIDEO_CONFIG.title}
                    </span>
                    <a
                      href={CURRENT_VIDEO_CONFIG.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#D4B365] text-[#173B24] px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-white transition-colors"
                    >
                      <span>Mở video xem bên ngoài</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Two Journey Moments Photos */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Ảnh trao đổi tại bàn trưng bày */}
          <div className="bg-[#FAF7EF] p-3 sm:p-4 rounded-2xl border border-[#173B24]/10 shadow-xs flex flex-col items-center">
            <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-white">
              <img
                src={BOOTH_DISCUSSION_IMAGE}
                alt="Giới thiệu và trao đổi về mẫu sản phẩm THE TEE-O tại bàn trưng bày"
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-xs sm:text-sm font-medium text-[#173B24] text-center">
              Giới thiệu và trao đổi về mẫu sản phẩm
            </p>
          </div>

          {/* Ảnh tập thể ngồi tại hội trường */}
          <div className="bg-[#FAF7EF] p-3 sm:p-4 rounded-2xl border border-[#173B24]/10 shadow-xs flex flex-col items-center">
            <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-white">
              <img
                src={AUDITORIUM_GROUP_IMAGE}
                alt="Những khoảnh khắc đồng hành cùng THE TEE-O tại hội trường"
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-xs sm:text-sm font-medium text-[#173B24] text-center">
              Những khoảnh khắc đồng hành cùng THE TEE-O
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
