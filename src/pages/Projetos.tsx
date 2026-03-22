import { useState } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { properties, Property } from "@/data/properties";

type Category = "Todos" | "Residencial" | "Interiores" | "Concluído" | "Em andamento";

const categories: Category[] = ["Todos", "Residencial", "Interiores", "Concluído", "Em andamento"];

const Projetos = () => {
  const [filter, setFilter] = useState<Category>("Todos");
  const [selected, setSelected] = useState<Property | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = filter === "Todos"
    ? properties
    : filter === "Concluído" || filter === "Em andamento"
      ? properties.filter((p) => p.status === filter)
      : properties.filter((p) => p.category === filter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (lightboxIndex === null || !selected) return;
    const total = selected.images.length;
    if (direction === "prev") {
      setLightboxIndex((lightboxIndex - 1 + total) % total);
    } else {
      setLightboxIndex((lightboxIndex + 1) % total);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">Portfólio</p>
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-secondary-foreground max-w-2xl">
              Projetos
            </h1>
            <p className="text-secondary-foreground/60 mt-4 max-w-lg">
              Conheça nossos projetos de arquitetura e execução.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 text-xs uppercase tracking-wider font-medium transition-colors border ${
                    filter === cat
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Count indicator */}
          <ScrollReveal>
            <p className="text-muted-foreground text-sm mb-6">
              {filtered.length} {filtered.length === 1 ? "projeto encontrado" : "projetos encontrados"}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.05}>
                <button
                  onClick={() => setSelected(project)}
                  className="group block w-full text-left relative overflow-hidden aspect-[4/3] bg-secondary/20 border border-border hover:border-primary/30 transition-all"
                >
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-secondary/80 group-hover:bg-secondary/60 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex gap-2 mb-2">
                      <span className="text-primary/80 text-xs uppercase tracking-widest">{project.category}</span>
                      <span className="text-secondary-foreground/40 text-xs">•</span>
                      <span className={`text-xs uppercase tracking-widest ${
                        project.status === "Em andamento" ? "text-yellow-400/80" : "text-green-400/80"
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-secondary-foreground font-heading text-xl font-semibold">{project.title}</h3>
                    <p className="text-secondary-foreground/50 text-xs mt-1">{project.images.length} fotos</p>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <Dialog open={!!selected} onOpenChange={() => { setSelected(null); setLightboxIndex(null); }}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl mb-2">{selected?.title}</DialogTitle>
            <div className="flex gap-3 items-center">
              <span className="text-xs uppercase tracking-widest text-primary">{selected?.category}</span>
              <span className="text-muted-foreground text-xs">•</span>
              <span className={`text-xs uppercase tracking-widest ${
                selected?.status === "Em andamento" ? "text-yellow-400" : "text-green-400"
              }`}>
                {selected?.status}
              </span>
              <span className="text-muted-foreground text-xs">•</span>
              <span className="text-muted-foreground text-xs">{selected?.images.length} fotos</span>
            </div>
          </DialogHeader>
          <div className="space-y-6 mt-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {selected?.images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => openLightbox(i)}
                  className="relative overflow-hidden aspect-square bg-secondary/20 border border-border hover:border-primary/50 transition-all group cursor-pointer"
                >
                  <img
                    src={src}
                    alt={`${selected.title} - Foto ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                      Ver foto
                    </span>
                  </div>
                </button>
              ))}
            </div>
            <div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Projeto arquitetônico e acompanhamento de obra para {selected?.title.replace("Obra ", "")}.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Lightbox overlay */}
      {lightboxIndex !== null && selected && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
          >
            <X size={32} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox("prev"); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10 p-2"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox("next"); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10 p-2"
          >
            <ChevronRight size={40} />
          </button>
          <img
            src={selected.images[lightboxIndex]}
            alt={`${selected.title} - Foto ${lightboxIndex + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightboxIndex + 1} / {selected.images.length}
          </p>
        </div>
      )}
    </Layout>
  );
};

export default Projetos;
