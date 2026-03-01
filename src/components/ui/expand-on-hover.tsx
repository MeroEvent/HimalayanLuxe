"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { cn } from "@/lib/utils";

const Skiper52 = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
      alt: "Wedding ceremony",
      code: "# 01",
    },
    {
      src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800",
      alt: "Wedding couple",
      code: "# 02",
    },
    {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800",
      alt: "Wedding reception",
      code: "# 03",
    },
    {
      src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800",
      alt: "Wedding details",
      code: "# 04",
    },
    {
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800",
      alt: "Wedding venue",
      code: "# 05",
    },
    {
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800",
      alt: "Wedding celebration",
      code: "# 06",
    },
    {
      src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800",
      alt: "Wedding decor",
      code: "# 07",
    },
    {
      src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800",
      alt: "Wedding flowers",
      code: "# 08",
    },
    {
      src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800",
      alt: "Wedding moments",
      code: "# 09",
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-transparent">
      <HoverExpand_001 className="" images={images} />
    </div>
  );
};

export { Skiper52 };

const HoverExpand_001 = ({
  images,
  className,
}: {
  images: { src: string; alt: string; code: string }[];
  className?: string;
}) => {
  const [activeImage, setActiveImage] = useState<number | null>(1);
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      onViewportEnter={() => setHasAnimated(true)}
      viewport={{ amount: 0.1, margin: "200px", once: true }}
      transition={{
        duration: 0.3,
        delay: 0.2,
      }}
      className={cn("relative w-full px-0", className)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        {/* Mobile Premium Masonry Layout */}
        <div className="flex flex-col gap-4 md:hidden px-2">
          {/* Row 1: Large featured card */}
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-gold/30 h-[400px] w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute h-full w-full bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            <motion.div 
              className="absolute flex h-full w-full flex-col items-start justify-end p-6 z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-16 h-[2px] bg-gold mb-4" />
              <p className="text-base text-gold font-medium tracking-[0.2em] uppercase mb-2">
                {images[0].code}
              </p>
              <p className="text-sm text-white/70 tracking-wide">
                {images[0].alt}
              </p>
            </motion.div>
            <motion.img
              src={images[0].src}
              className="size-full object-cover"
              alt={images[0].alt}
              initial={{ scale: 1.1 }}
              animate={hasAnimated ? { scale: 1 } : { scale: 1.1 }}
              transition={{ duration: 1.2 }}
            />
          </motion.div>

          {/* Row 2: Two medium cards */}
          <div className="grid grid-cols-2 gap-4">
            {images.slice(1, 3).map((image, idx) => (
              <motion.div
                key={idx + 1}
                className="relative overflow-hidden rounded-2xl border border-gold/30 h-[240px]"
                initial={{ opacity: 0, y: 30 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.1 + (idx * 0.1), ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="absolute h-full w-full bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
                <div className="absolute flex h-full w-full flex-col items-start justify-end p-4 z-20">
                  <div className="w-10 h-[2px] bg-gold mb-2" />
                  <p className="text-xs text-gold font-medium tracking-[0.2em] uppercase">
                    {image.code}
                  </p>
                </div>
                <motion.img
                  src={image.src}
                  className="size-full object-cover"
                  alt={image.alt}
                  initial={{ scale: 1.1 }}
                  animate={hasAnimated ? { scale: 1 } : { scale: 1.1 }}
                  transition={{ duration: 1.2, delay: 0.1 + (idx * 0.1) }}
                />
              </motion.div>
            ))}
          </div>

          {/* Row 3: Three small cards */}
          <div className="grid grid-cols-3 gap-3">
            {images.slice(3, 6).map((image, idx) => (
              <motion.div
                key={idx + 3}
                className="relative overflow-hidden rounded-2xl border border-gold/30 h-[180px]"
                initial={{ opacity: 0, y: 30 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 + (idx * 0.08), ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="absolute h-full w-full bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
                <div className="absolute flex h-full w-full flex-col items-center justify-end p-3 z-20">
                  <p className="text-[10px] text-gold font-medium tracking-wider">
                    {image.code}
                  </p>
                </div>
                <motion.img
                  src={image.src}
                  className="size-full object-cover"
                  alt={image.alt}
                  initial={{ scale: 1.1 }}
                  animate={hasAnimated ? { scale: 1 } : { scale: 1.1 }}
                  transition={{ duration: 1.2, delay: 0.2 + (idx * 0.08) }}
                />
              </motion.div>
            ))}
          </div>

          {/* Row 4: Two medium cards */}
          <div className="grid grid-cols-2 gap-4">
            {images.slice(6, 8).map((image, idx) => (
              <motion.div
                key={idx + 6}
                className="relative overflow-hidden rounded-2xl border border-gold/30 h-[240px]"
                initial={{ opacity: 0, y: 30 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.3 + (idx * 0.1), ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="absolute h-full w-full bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
                <div className="absolute flex h-full w-full flex-col items-start justify-end p-4 z-20">
                  <div className="w-10 h-[2px] bg-gold mb-2" />
                  <p className="text-xs text-gold font-medium tracking-[0.2em] uppercase">
                    {image.code}
                  </p>
                </div>
                <motion.img
                  src={image.src}
                  className="size-full object-cover"
                  alt={image.alt}
                  initial={{ scale: 1.1 }}
                  animate={hasAnimated ? { scale: 1 } : { scale: 1.1 }}
                  transition={{ duration: 1.2, delay: 0.3 + (idx * 0.1) }}
                />
              </motion.div>
            ))}
          </div>

          {/* Row 5: Final large card */}
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-gold/30 h-[360px] w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute h-full w-full bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            <motion.div 
              className="absolute flex h-full w-full flex-col items-start justify-end p-6 z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="w-16 h-[2px] bg-gold mb-4" />
              <p className="text-base text-gold font-medium tracking-[0.2em] uppercase mb-2">
                {images[8].code}
              </p>
              <p className="text-sm text-white/70 tracking-wide">
                {images[8].alt}
              </p>
            </motion.div>
            <motion.img
              src={images[8].src}
              className="size-full object-cover"
              alt={images[8].alt}
              initial={{ scale: 1.1 }}
              animate={hasAnimated ? { scale: 1 } : { scale: 1.1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            />
          </motion.div>
        </div>

        {/* Desktop Expand on Hover Layout */}
        <div className="hidden md:flex w-full items-center justify-center gap-2 md:gap-3 py-4 lg:py-8">
          {images.map((image, index) => {
            const isWindowDefined = typeof window !== 'undefined';
            const isMobile = isWindowDefined && window.innerWidth < 1024;

            return (
              <motion.div
                key={index}
                className={cn(
                  "relative cursor-pointer overflow-hidden rounded-2xl md:rounded-3xl border border-gold/30 hover:border-gold/60"
                )}
                style={{ willChange: 'transform, opacity, width' }}
                initial={{ opacity: 0, x: 200 }}
                animate={hasAnimated ? {
                  opacity: 1,
                  x: 0,
                  width: activeImage === index
                    ? (isMobile ? "14rem" : "28rem")
                    : (isMobile ? "5rem" : "7rem"),
                  height: isMobile ? "15rem" : "24rem"
                } : {
                  opacity: 0,
                  x: 200,
                  width: isMobile ? "5rem" : "7rem",
                  height: isMobile ? "15rem" : "24rem"
                }}
                transition={{
                  opacity: { duration: 1, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] },
                  x: { duration: 1.2, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] },
                  width: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                  height: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                }}
                onClick={() => setActiveImage(index)}
                onPointerEnter={() => setActiveImage(index)}
              >
                <AnimatePresence>
                  {activeImage === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute h-full w-full bg-gradient-to-t from-black/60 via-gold/10 to-transparent"
                    />
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {activeImage === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute flex h-full w-full flex-col items-end justify-end p-4"
                    >
                      <p className="text-left text-xs text-gold/80 font-medium tracking-wider">
                        {image.code}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <img
                  src={image.src}
                  className="size-full object-cover"
                  alt={image.alt}
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export { HoverExpand_001 };
