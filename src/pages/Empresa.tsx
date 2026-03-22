import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Eye, Heart, Target } from "lucide-react";

const values = [
  { icon: Eye, title: "Visão", text: "Ser referência em arquitetura personalizada em Itupeva e região, criando espaços que refletem a essência de cada cliente." },
  { icon: Heart, title: "Missão", text: "Transformar sonhos em projetos reais com excelência técnica, criatividade e atendimento humano do início ao fim." },
  { icon: Target, title: "Valores", text: "Transparência, qualidade, inovação e compromisso com o prazo e com a satisfação de cada cliente." },
];

const Empresa = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-secondary py-24 min-h-[40vh] flex items-center overflow-hidden">
        {/* Institutional Photo Background (Placeholder) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/obras/FOTOS_OBRA/ADRIANA/Casa 04/@filipemaker-143.jpg" 
            alt="MIA CASA Institucional" 
            className="w-full h-full object-cover opacity-20 grayscale brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">Conheça a MIA CASA</p>
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-secondary-foreground max-w-2xl">
              Quem Somos
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* História */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="aspect-[4/3] overflow-hidden border border-border">
                <img 
                  src="/obras/FOTOS_OBRA/ADRIANA/Casa 04/@filipemaker-105.jpg" 
                  alt="Escritório MIA CASA" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div>
                <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">Nossa História</p>
                <h2 className="text-3xl font-heading font-semibold mb-6">
                  Arquitetura com alma e propósito
                </h2>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    A MIA CASA nasceu da paixão por criar espaços que vão além da estética — espaços que acolhem, inspiram e contam a história de quem os habita.
                  </p>
                  <p>
                    Com atuação em Itupeva e região, unimos projeto arquitetônico e execução de obras em um atendimento completo, acompanhando cada etapa com proximidade e atenção aos detalhes.
                  </p>
                  <p>
                    Nosso diferencial está no olhar personalizado: cada cliente é único, e cada projeto reflete essa individualidade. Do briefing à entrega das chaves, estamos presentes para transformar sonhos em realidade.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">Como trabalhamos</p>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold">Nossa Metodologia</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {["Briefing", "Conceito", "Projeto", "Execução"].map((step, i) => (
              <ScrollReveal key={step} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-heading text-lg font-semibold">{i + 1}</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">{step}</h3>
                  <p className="text-muted-foreground text-sm">
                    {i === 0 && "Entendemos suas necessidades, desejos e estilo de vida."}
                    {i === 1 && "Desenvolvemos o conceito que traduz sua identidade."}
                    {i === 2 && "Detalhamos cada elemento com precisão técnica."}
                    {i === 3 && "Acompanhamos a obra do início à entrega."}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="p-8 border border-border text-center">
                  <v.icon className="text-primary mx-auto mb-4" size={32} strokeWidth={1.5} />
                  <h3 className="font-heading text-xl font-semibold mb-3">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Empresa;
