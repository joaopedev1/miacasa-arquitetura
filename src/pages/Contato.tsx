import { useState } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contato = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Mensagem enviada!", description: "Entraremos em contato em breve." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-3">Fale conosco</p>
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-secondary-foreground max-w-2xl">
              Contato
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Form */}
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-xs uppercase tracking-wider">Nome</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="rounded-none mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-xs uppercase tracking-wider">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="rounded-none mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-xs uppercase tracking-wider">Telefone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="rounded-none mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-xs uppercase tracking-wider">Mensagem</Label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    className="rounded-none mt-2"
                  />
                </div>
                <Button type="submit" className="rounded-none uppercase tracking-wider text-xs px-8 py-6 font-body w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal delay={0.15}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-4">Informações</h3>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                      <span>Av. Guanabara, 131 - Jd. São Vicente - Itupeva - SP</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <Phone size={18} className="text-primary mt-0.5 shrink-0" />
                      <span>(11) 9.9655-0286</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <Mail size={18} className="text-primary mt-0.5 shrink-0" />
                      <span>adm@miacasaarquitetura.com.br</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-semibold mb-4">Redes Sociais</h3>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram size={18} />
                    @miacasa.arq
                  </a>
                </div>

                <div className="p-6 bg-secondary/5 border border-border">
                  <h3 className="font-heading text-lg font-semibold mb-2">Área de Atuação</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Atendemos Itupeva, Jundiaí, Indaiatuba, Vinhedo, Louveira e demais cidades da região.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
