import { useState, useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: { src: string; title: string; description: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const Lightbox = ({ images, currentIndex, isOpen, onClose, onNavigate }: LightboxProps) => {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goNext = useCallback(() => {
    if (currentIndex < images.length - 1) {
      setIsAnimating(true);
      onNavigate(currentIndex + 1);
      setTimeout(() => setIsAnimating(false), 300);
    }
  }, [currentIndex, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setIsAnimating(true);
      onNavigate(currentIndex - 1);
      setTimeout(() => setIsAnimating(false), 300);
    }
  }, [currentIndex, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose, goNext, goPrev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setSwipeOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
    setSwipeOffset(touchEndX.current - touchStartX.current);
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 60) {
      if (diff > 0) goNext();
      else goPrev();
    }
    setSwipeOffset(0);
  };

  if (!isOpen) return null;

  const current = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-card/80 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
      >
        <X size={24} />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-card/80 text-foreground font-montserrat text-sm">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Prev */}
      {currentIndex > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          className="absolute left-2 sm:left-4 z-10 p-2 rounded-full bg-card/80 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Next */}
      {currentIndex < images.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          className="absolute right-2 sm:right-4 z-10 p-2 rounded-full bg-card/80 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <ChevronRight size={28} />
        </button>
      )}

      {/* Image */}
      <div
        className="w-full h-full flex flex-col items-center justify-center px-4 sm:px-16"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={current.src}
          alt={current.title}
          className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-premium transition-transform duration-300"
          style={{ transform: `translateX(${swipeOffset}px)` }}
        />
        <div className="mt-4 text-center">
          <h3 className="text-xl sm:text-2xl font-poppins font-bold text-foreground">{current.title}</h3>
          <p className="text-muted-foreground font-montserrat text-sm sm:text-base mt-1">{current.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
