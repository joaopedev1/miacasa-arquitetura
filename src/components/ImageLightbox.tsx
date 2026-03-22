import { useState, useCallback, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageLightboxProps {
  images: string[];
  initialIndex?: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
}

const ImageLightbox = ({ images, initialIndex = 0, open, onOpenChange, title }: ImageLightboxProps) => {
  const [current, setCurrent] = useState(initialIndex);

  useEffect(() => {
    if (open) setCurrent(initialIndex);
  }, [open, initialIndex]);

  const prev = useCallback(() => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1)), [images.length]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, prev, next, onOpenChange]);

  if (!images.length) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-secondary/95 backdrop-blur-xl overflow-hidden">
        {/* Close */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 z-50 p-2 text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
          aria-label="Fechar"
        >
          <X size={24} />
        </button>

        {/* Title */}
        {title && (
          <div className="absolute top-4 left-4 z-50">
            <p className="text-secondary-foreground/90 font-heading text-lg">{title}</p>
            <p className="text-secondary-foreground/50 text-xs">{current + 1} / {images.length}</p>
          </div>
        )}

        {/* Image */}
        <div className="flex items-center justify-center w-full h-[85vh]">
          <img
            src={images[current]}
            alt={`${title || "Imagem"} ${current + 1}`}
            className="max-w-full max-h-full object-contain"
            loading="lazy"
          />
        </div>

        {/* Navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-secondary/60 hover:bg-secondary/80 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-secondary/60 hover:bg-secondary/80 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              aria-label="Próxima"
            >
              <ChevronRight size={28} />
            </button>
          </>
        )}

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="absolute bottom-0 left-0 right-0 bg-secondary/80 backdrop-blur-sm p-3">
            <div className="flex gap-2 overflow-x-auto justify-center">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`shrink-0 w-16 h-12 overflow-hidden border-2 transition-all ${
                    i === current ? "border-primary opacity-100" : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightbox;
