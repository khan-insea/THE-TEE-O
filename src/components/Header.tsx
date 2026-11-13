import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { label: 'Câu chuyện', href: '#ve-du-an' },
    { label: 'Sản phẩm', href: '#san-pham' },
    { label: 'Quy trình', href: '#quy-trinh' },
    { label: 'Thị trường', href: '#thi-truong' },
    { label: 'Giá trị xanh', href: '#gia-tri-xanh' },
    { label: 'Đội ngũ', href: '#doi-ngu' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7EF]/95 backdrop-blur-md shadow-xs border-b border-[#173B24]/10 py-3'
          : 'bg-[#FAF7EF]/85 backdrop-blur-xs py-4 md:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173B24] rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-full bg-[#FAF7EF] flex items-center justify-center border border-[#D4B365]/40 shadow-xs group-hover:scale-105 transition-transform overflow-hidden p-0.5">
              <img
                src="/assets/aistudio/logo_c7fe5034.png"
                alt="THE TEE-O Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#173B24] leading-tight">
                THE TEE-O
              </span>
              <span className="text-[10px] sm:text-xs font-medium text-[#754C30] tracking-wider uppercase">
                Trường Đại học Kiên Giang
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173B24] ${
                    isActive
                      ? 'bg-[#173B24] text-[#FAF7EF]'
                      : 'text-[#173B24]/85 hover:text-[#173B24] hover:bg-[#173B24]/8'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#lien-he"
              onClick={(e) => handleNavClick(e, '#lien-he')}
              className="inline-flex items-center gap-2 bg-[#173B24] hover:bg-[#1f4e30] text-[#FAF7EF] px-5 py-2 rounded-full text-sm font-medium transition-all shadow-xs hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#173B24]"
            >
              <span>Liên hệ</span>
              <ArrowUpRight className="w-4 h-4 text-[#D4B365]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#173B24] hover:bg-[#173B24]/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#173B24]"
            aria-expanded={isMobileMenuOpen}
            aria-label="Chuyển đổi menu điều hướng"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay & Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-[60px] bg-black/35 backdrop-blur-xs z-40 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed top-[61px] left-0 right-0 bg-[#FAF7EF] border-b border-[#173B24]/15 shadow-xl z-50 px-6 py-6 transition-all duration-300">
            <div className="flex flex-col gap-1.5">
              <div className="pb-2 mb-2 border-b border-[#173B24]/10 flex items-center justify-between text-xs text-[#754C30] font-medium">
                <span>Nhóm sinh viên · Trường Đại học Kiên Giang</span>
              </div>
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-3 py-2.5 text-base font-medium text-[#173B24] hover:bg-[#173B24]/10 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-[#754C30]">Khám phá →</span>
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-[#173B24]/10 space-y-2">
                <a
                  href="#lien-he"
                  onClick={(e) => handleNavClick(e, '#lien-he')}
                  className="w-full flex items-center justify-center gap-2 bg-[#173B24] text-[#FAF7EF] py-3 rounded-xl font-medium text-center shadow-xs"
                >
                  <span>Liên hệ THE TEE-O</span>
                  <ArrowUpRight className="w-4 h-4 text-[#D4B365]" />
                </a>
                <a
                  href="tel:0363984857"
                  className="w-full flex items-center justify-center gap-2 bg-[#FAF7EF] text-[#754C30] border border-[#754C30]/20 py-2.5 rounded-xl font-medium text-xs text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-[#173B24]" />
                  <span>Gọi: 0363 984 857</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
