import { useEffect } from 'react';

interface UseScrollHandlerProps {
  showLoader: boolean;
  isHomePage: boolean;
  setIsScrolled: (scrolled: boolean) => void;
  setActiveSection: (section: string) => void;
  setActivePhilosophy: (index: number) => void;
  activePhilosophy: number;
  activeSectionRef: React.MutableRefObject<string>;
  activePhilosophyRef: React.MutableRefObject<number>;
}

export function useScrollHandler({
  showLoader,
  isHomePage,
  setIsScrolled,
  setActiveSection,
  setActivePhilosophy,
  activePhilosophy,
  activeSectionRef,
  activePhilosophyRef,
}: UseScrollHandlerProps) {
  useEffect(() => {
    if (showLoader || !isHomePage) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Section detection logic
      const sections = ['hero', 'experience', 'destinations', 'services', 'about', 'cta', 'footer'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            if (activeSectionRef.current !== section) {
              setActiveSection(section);
              activeSectionRef.current = section;
            }
            break;
          }
        }
      }

      // Philosophy scroll detection (if in experience section)
      if (activeSectionRef.current === 'experience') {
        const philosophyElements = document.querySelectorAll('[data-philosophy-index]');
        philosophyElements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            const index = parseInt(el.getAttribute('data-philosophy-index') || '0');
            if (activePhilosophyRef.current !== index) {
              setActivePhilosophy(index);
              activePhilosophyRef.current = index;
            }
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [showLoader, isHomePage, setIsScrolled, setActiveSection, setActivePhilosophy, activePhilosophy, activeSectionRef, activePhilosophyRef]);
}
