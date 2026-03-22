import { useState } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import ImageLightbox from "@/components/ImageLightbox";
import { properties } from "@/data/properties";

// Flatten all images into a single list
const allImages = properties.flatMap((p) => p.images);

const Obras = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openImage = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">Execução</p>
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-secondary-foreground max-w-2xl">
              Obras e Reformas
            </h1>
            <p className="text-secondary-foreground/60 mt-4 max-w-lg">
              Acompanhamento técnico completo, do canteiro de obra à entrega da chave na mão.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Masonry-style Gallery */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {allImages.map((src, i) => (
              <ScrollReveal key={i} delay={(i % 6) * 0.04}>
                <button
                  onClick={() => openImage(i)}
                  className="group block w-full overflow-hidden border border-border break-inside-avoid"
                >
                  <img
                    src={src}
                    alt={`Obra ${i + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <ImageLightbox
        images={allImages}
        initialIndex={lightboxIndex}
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
        title="Obras e Reformas"
      />
    </Layout>
  );
};

export default Obras;
