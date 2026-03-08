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
      src: "https://unsplash.com/photos/yDtB8FppNK0/download?force=true",
      alt: "Phewa Lake",
      code: "PHEWA LAKE",
    },
    {
      src: "https://unsplash.com/photos/PbCCnvId660/download?force=true",
      alt: "Annapurna Himalaya",
      code: "ANNAPURNA",
    },
    {
      src: "https://unsplash.com/photos/KM1QLHnxA4c/download?force=true",
      alt: "Mustang",
      code: "MUSTANG",
    },
    {
      src: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80",
      alt: "Illam",
      code: "ILLAM",
    },
    {
      src: "https://unsplash.com/photos/LoFYw82KdjY/download?force=true",
      alt: "Badimalika",
      code: "BADIMALIKA",
    },
    {
      src: "https://unsplash.com/photos/AJ3_RYsJs94/download?force=true",
      alt: "Manang",
      code: "MANANG",
    },
    {
      src: "https://unsplash.com/photos/Q5YNyu88_RU/download?force=true",
      alt: "Solukhumbu",
      code: "SOLUKHUMBU",
    },
    {
      src: "https://unsplash.com/photos/xXrH3Oj5HZI/download?force=true",
      alt: "Gorkha",
      code: "GORKHA",
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
      onViewportLeave={() => setHasAnimated(false)}
      viewport={{ amount: 0.3 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full px-0", className)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <div className="flex w-full items-center justify-center gap-2 md:gap-3 py-4 lg:py-8">
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
