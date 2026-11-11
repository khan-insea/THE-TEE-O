/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutProject } from './components/AboutProject';
import { Product } from './components/Product';
import { Process } from './components/Process';
import { JourneyVideo } from './components/JourneyVideo';
import { Market } from './components/Market';
import { GreenValues } from './components/GreenValues';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sections = [
      've-du-an',
      'san-pham',
      'quy-trinh',
      'video-du-an',
      'thi-truong',
      'gia-tri-xanh',
      'doi-ngu',
      'lien-he',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 250) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7EF] text-[#173B24] overflow-x-hidden selection:bg-[#D4B365]/30 selection:text-[#173B24]">
      {/* Sticky Header */}
      <Header activeSection={activeSection} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Về dự án */}
        <AboutProject />

        {/* 3. Sản phẩm */}
        <Product />

        {/* 4. Quy trình */}
        <Process />

        {/* 5. Video và hành trình */}
        <JourneyVideo />

        {/* 6. Thị trường */}
        <Market />

        {/* 7. Giá trị xanh */}
        <GreenValues />

        {/* 8. Đội ngũ & Thành tích */}
        <Team />

        {/* 9. Liên hệ */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
