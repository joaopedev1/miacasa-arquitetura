import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Ruler, HardHat, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { heroImages, properties } from "@/data/properties";

const BRIEFING_URL = "https://refresher.com.br/SXpyZXZxMWlMV0c2LzJTU3lETGREdz09/briefing";

const highlights = [
  {
    icon: Ruler,
    title: "Projetos",
    description: "Do conceito ao detalhamento, criamos espaços que traduzem a identidade de cada cliente.",
    link: "/projetos",
  },
  {
    icon: HardHat,
    title: "Obras e Reformas",
    description: "Acompanhamento técnico completo da execução, garantindo qualidade e prazo.",
    link: "/obras",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Cada projeto é único. Oferecemos atenção individual do briefing à entrega das chaves.",
    link: "/empresa",
  },
];

const testimonials = [
  {
    name: "Ana Carolina S.",
    text: "A MIA CASA transformou completamente nosso apartamento. O cuidado com cada detalhe fez toda a diferença.",
  },
  {
    name: "Roberto M.",
    text: "Profissionalismo e criatividade do início ao fim. Recomendo de olhos fechados!",
  },
  {
    name: "Juliana P.",
    text: "O acompanhamento da obra foi impecável. Entregaram no prazo e além das expectativas.",
  },
];

const Index = () => {
  const [heroIndex, setHeroIndex] = useState(0);

  const nextHero = useCallback(() => {
    setHeroIndex((c) => (c === heroImages.length - 1 ? 0 : c + 1));
  }, []);

  const prevHero = useCallback(() => {
    setHeroIndex((c) => (c === 0 ? heroImages.length - 1 : c - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(nextHero, 5000);
    return () => clearInterval(timer);
  }, [nextHero]);

  // Pick 4 properties for preview
  const portfolioItems = properties.slice(0, 4);

  return (
    <Layout>
      {/* Hero with Carousel */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background images */}
        {heroImages.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === heroIndex ? 1 : 0 }}
          >
            <img
              src={src}
              alt={`MIA CASA destaque ${i + 1}`}
              className="w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/30" />

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <ScrollReveal>
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
                Arquitetura
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-semibold text-secondary-foreground leading-tight mb-6">
                Projetamos espaços que contam a sua história
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-secondary-foreground/70 text-lg mb-10 leading-relaxed max-w-lg">
                Do sonho ao projeto, do projeto à obra. Atendimento completo e personalizado em Itupeva e região.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="rounded-none uppercase tracking-wider text-xs px-8 py-6 font-body"
                >
                  <a href={BRIEFING_URL} target="_blank" rel="noopener noreferrer">
                    Faça seu Briefing
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-none uppercase tracking-wider text-xs px-8 py-6 font-body border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
                >
                  <Link to="/projetos">Ver Projetos</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Hero Nav */}
        <div className="absolute bottom-8 right-8 z-10 flex items-center gap-3">
          <button onClick={prevHero} className="p-2 bg-secondary/50 hover:bg-secondary/70 text-secondary-foreground/80 transition-colors" aria-label="Anterior">
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-1.5">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setHeroIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === heroIndex ? "bg-primary w-6" : "bg-secondary-foreground/30"}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={nextHero} className="p-2 bg-secondary/50 hover:bg-secondary/70 text-secondary-foreground/80 transition-colors" aria-label="Próxima">
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">O que fazemos</p>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold">Soluções Completas</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <Link
                  to={item.link}
                  className="group block p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                >
                  <item.icon className="text-primary mb-6" size={36} strokeWidth={1.5} />
                  <h3 className="text-xl font-heading font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                    Saiba mais <ArrowRight size={16} />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quem Somos / Institutional Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="aspect-[16/9] overflow-hidden border border-border">
                <img 
                  src="https://res.cloudinary.com/sccu8xvd/image/upload/f_auto,q_auto:good,w_1600/miacasa/RAFAEL_RENATA/Casa_05/_filipemaker-116"
                  alt="MIA CASA Arquitetura"
                  className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div>
                <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">Quem Somos</p>
                <h2 className="text-3xl md:text-4xl font-heading font-semibold text-secondary-foreground mb-6">
                  Arquitetura com alma e propósito em Itupeva
                </h2>
                <div className="space-y-4 text-secondary-foreground/70 text-sm leading-relaxed mb-10">
                  <p>
                    A MIA CASA nasceu da paixão por criar espaços que vão além da estética — espaços que acolhem, inspiram e contam a história de quem os habita.
                  </p>
                  <p>
                    Com atuação em Itupeva e região, unimos projeto arquitetônico e execução de obras em um atendimento completo, acompanhando cada etapa com proximidade e atenção aos detalhes.
                  </p>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-none uppercase tracking-wider text-xs px-8 py-6 font-body border-primary/30 text-secondary-foreground hover:bg-primary/10"
                >
                  <Link to="/empresa">Saiba mais sobre nós</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">Portfólio</p>
                <h2 className="text-3xl md:text-4xl font-heading font-semibold">Nossos Projetos</h2>
              </div>
              <Link
                to="/obras"
                className="hidden md:inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
              >
                Ver todos <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolioItems.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.1}>
                <Link to="/obras" className="group block relative overflow-hidden aspect-[3/4]">
                  <img
                    src={item.cover}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    {item.status === "Concluído" && (
                      <p className="text-primary/80 text-xs uppercase tracking-widest mb-1">{item.status}</p>
                    )}
                    <h3 className="text-secondary-foreground font-heading text-xl font-semibold">{item.title}</h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="md:hidden mt-8 text-center">
            <Link
              to="/obras"
              className="inline-flex items-center gap-2 text-primary text-sm font-medium"
            >
              Ver todas as obras <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">Depoimentos</p>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold">O que dizem nossos clientes</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <div className="p-8 border border-border">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                    "{t.text}"
                  </p>
                  <p className="text-sm font-semibold">{t.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
