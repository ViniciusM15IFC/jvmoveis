"use client";

import React, { useState, useEffect } from "react";
import {
  BedDouble,
  ChefHat,
  Sofa,
  Briefcase,
  Warehouse,
  Store,
  Ruler,
  ShieldCheck,
  Settings,
  Handshake,
  MessageCircle,
  MapPin,
  X,
  ZoomIn,
  ZoomOut,
  PhoneCall,
  MapPinned,
  LayoutGrid,
  Factory,
  Truck,
  Quote,
  ChevronDown,
  Send,
  type LucideIcon,
} from "lucide-react";

const fontImport = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;800;900&display=swap');
.font-display { font-family: 'Montserrat', sans-serif; font-weight: 900; }
.font-body { font-family: 'Montserrat', sans-serif; }
`;

// ---------- TIPOS ----------
export interface Projeto {
  title: string;
  subtitle: string;
  img: string;
  imgFull: string;
}

export interface Depoimento {
  quote: string;
  name: string;
  local: string;
}

export interface FaqEntry {
  q: string;
  a: string;
}

interface LightboxProps {
  project: Projeto | null;
  onClose: () => void;
}

interface FaqItemProps {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}

interface FormState {
  nome: string;
  telefone: string;
  ambiente: string;
  mensagem: string;
}

interface JVMoveisClientProps {
  projetos: Projeto[];
  depoimentos: Depoimento[];
  faqs: FaqEntry[];
}

// ---------- DADOS ESTÁTICOS (não vêm do CMS) ----------
const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Processo", href: "#processo" },
  { label: "Projetos", href: "#projetos" },
  { label: "Orçamento", href: "#orcamento" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const ambientes: { icon: LucideIcon; label: string }[] = [
  { icon: BedDouble, label: "Dormitórios" },
  { icon: ChefHat, label: "Cozinhas" },
  { icon: Sofa, label: "Salas" },
  { icon: Briefcase, label: "Escritórios" },
  { icon: Warehouse, label: "Áreas de Serviço" },
  { icon: Store, label: "E Muito Mais!" },
];

const promessas: { icon: LucideIcon; title: string }[] = [
  { icon: Ruler, title: "Projetos Personalizados" },
  { icon: ShieldCheck, title: "Materiais de Qualidade" },
  { icon: Settings, title: "Acabamento Impecável" },
  { icon: Handshake, title: "Compromisso e Confiança" },
];

const processo: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: PhoneCall, title: "Contato Inicial", text: "Você chama no WhatsApp ou preenche o formulário contando sua ideia." },
  { icon: MapPinned, title: "Visita Técnica", text: "Vamos até o local medir o espaço e entender suas necessidades, sem compromisso." },
  { icon: LayoutGrid, title: "Projeto 3D", text: "Você visualiza o ambiente pronto em alta definição antes da produção começar." },
  { icon: Factory, title: "Produção", text: "Fabricação própria com MDF de alta densidade e ferragens de padrão internacional." },
  { icon: Truck, title: "Montagem e Entrega", text: "Instalação profissional no seu espaço" },
];

// ---------- COMPONENTES AUXILIARES ----------

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 100 90" className="w-10 h-10 shrink-0" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,4 96,60 82,60 50,22 18,60 4,60" fill="#f97316" />
        <polygon points="50,20 90,68 78,68 50,34 22,68 10,68" fill="#ffffff" />
      </svg>
      <div className="leading-none">
        <p className="font-display text-white text-xl tracking-tight">
          J<span className="text-orange-500">V</span>
        </p>
        <p className="text-orange-500 text-[9px] tracking-widest font-bold">
          MÓVEIS SOB MEDIDA
        </p>
      </div>
    </div>
  );
}

function Lightbox({ project, onClose }: LightboxProps) {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    setZoomed(false);
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white hover:text-orange-500 transition-colors"
        aria-label="Fechar"
      >
        <X size={32} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setZoomed((z) => !z);
        }}
        className="absolute top-5 left-5 flex items-center gap-2 text-white hover:text-orange-500 transition-colors font-display text-xs tracking-widest uppercase"
      >
        {zoomed ? <ZoomOut size={22} /> : <ZoomIn size={22} />}
        {zoomed ? "Reduzir" : "Ampliar"}
      </button>

      <div
        className={`max-w-full max-h-full overflow-auto ${zoomed ? "cursor-zoom-out" : "cursor-zoom-in"}`}
        onClick={(e) => {
          e.stopPropagation();
          setZoomed((z) => !z);
        }}
      >
        <img
          src={project.imgFull}
          alt={project.title}
          className={`transition-transform duration-300 ${
            zoomed ? "scale-150 max-w-none" : "max-w-full max-h-[85vh] object-contain"
          }`}
        />
      </div>

      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white font-display text-sm tracking-wide">
        {project.title}
      </p>
    </div>
  );
}

function FaqItem({ q, a, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="border-b border-neutral-800">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display text-sm md:text-base">{q}</span>
        <ChevronDown
          className={`text-orange-500 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          size={20}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-neutral-400 text-sm leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

// ---------- COMPONENTE PRINCIPAL ----------
export default function JVMoveisClient({ projetos, depoimentos, faqs }: JVMoveisClientProps) {
  const [selectedProject, setSelectedProject] = useState<Projeto | null>(null);
  const [openFaq, setOpenFaq] = useState(0);
  const [form, setForm] = useState<FormState>({ nome: "", telefone: "", ambiente: "", mensagem: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const texto = `Olá! Meu nome é ${form.nome}.%0AAmbiente de interesse: ${form.ambiente}.%0ATelefone: ${form.telefone}.%0AMensagem: ${form.mensagem}`;
    window.open(`https://wa.me/5548991077606?text=${texto}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white font-body selection:bg-orange-500 selection:text-black w-full max-w-full overflow-x-hidden relative">
      <style>{fontImport}</style>

      {/* CABEÇALHO */}
      <header className="sticky top-0 z-50 bg-black border-b border-orange-500/30">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Logo />
          <nav className="hidden md:flex gap-6">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs tracking-widest uppercase font-bold text-neutral-300 hover:text-orange-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="scroll-mt-24 grid md:grid-cols-2 bg-black">
        <div className="flex flex-col justify-center px-8 py-16 md:px-16">
          <h1 className="font-display text-3xl md:text-5xl leading-[1.05] mb-2">TRANSFORMAMOS</h1>
          <h1 className="font-display text-3xl md:text-5xl leading-[1.05] mb-2 text-orange-500">SEU AMBIENTE</h1>
          <h1 className="font-display text-3xl md:text-5xl leading-[1.05] mb-2">EM ALGO ÚNICO</h1>
          <h1 className="font-display text-3xl md:text-5xl leading-[1.05] mb-6 text-orange-500">E EXCLUSIVO!</h1>
          <div className="w-16 h-1 bg-orange-500 mb-6" />
          <p className="text-neutral-300 leading-relaxed mb-8 max-w-md">
            Projetos personalizados com qualidade, funcionalidade e acabamento impecável.
          </p>
          <a
            href="#orcamento"
            className="inline-block bg-orange-500 text-black font-display text-sm px-8 py-4 w-fit hover:bg-orange-400 transition-colors"
          >
            SOLICITAR ORÇAMENTO
          </a>
        </div>
        <div className="min-h-[320px] md:min-h-0 w-full overflow-hidden min-w-0">
          <div className="relative w-full aspect-video md:h-full">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
              alt="Cozinha planejada JV Móveis"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* AMBIENTES */}
      <section
        id="ambientes"
        className="md:flex items-start justify-start md:justify-center scroll-mt-24 px-8 md:px-16 py-16 bg-black border-t border-orange-500/30"
      >
        <div className="md:mr-16 mb-10 md:mb-0">
          <h2 className="font-display text-2xl md:text-3xl mb-2">MÓVEIS SOB MEDIDA PARA</h2>
          <h2 className="font-display text-2xl md:text-3xl text-orange-500 mb-10">TODOS OS AMBIENTES!</h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl">
          {ambientes.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 border-b border-neutral-800 pb-3">
              <Icon className="text-orange-500 shrink-0" size={26} strokeWidth={1.75} />
              <span className="font-display text-sm tracking-wide">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="processo" className="scroll-mt-24 px-8 md:px-16 py-20 bg-white text-black">
        <h2 className="font-display text-3xl mb-2">COMO</h2>
        <h2 className="font-display text-3xl text-orange-500 mb-12">FUNCIONA</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-8">
          {processo.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="flex flex-col items-start">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shrink-0">
                  <Icon className="text-orange-500" size={20} strokeWidth={1.75} />
                </div>
                <span className="font-display text-2xl text-neutral-300">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="font-display text-sm mb-2">{title}</p>
              <p className="text-neutral-500 text-xs leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJETOS CONCLUÍDOS (vem do CMS) */}
      <section id="projetos" className="scroll-mt-24 px-8 md:px-16 py-20 bg-black">
        <h2 className="font-display text-3xl mb-10">
          PROJETOS <span className="text-orange-500">CONCLUÍDOS</span>
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {projetos.map((p) => (
            <button
              key={p.title}
              onClick={() => setSelectedProject(p)}
              className="relative h-72 overflow-hidden group border-2 border-neutral-800 text-left cursor-zoom-in"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 text-white">
                <p className="font-display text-base">{p.title}</p>
                <p className="text-xs text-neutral-200">{p.subtitle}</p>
              </div>
              <div className="absolute top-3 right-3 bg-orange-500 text-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn size={16} />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS (vem do CMS) */}
      <section id="depoimentos" className="scroll-mt-24 px-8 md:px-16 py-20 bg-white text-black">
        <h2 className="font-display text-3xl mb-2">O QUE DIZEM</h2>
        <h2 className="font-display text-3xl text-orange-500 mb-12">NOSSOS CLIENTES</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {depoimentos.map((d) => (
            <div key={d.name + d.local} className="bg-neutral-50 border-l-4 border-orange-500 p-6">
              <Quote className="text-orange-500 mb-4" size={24} />
              <p className="text-neutral-700 text-sm leading-relaxed mb-6">&ldquo;{d.quote}&rdquo;</p>
              <p className="font-display text-xs">{d.name}</p>
              <p className="text-neutral-400 text-xs">{d.local}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-neutral-400 italic mt-6">
          * Depoimentos ilustrativos — substitua pelos relatos reais dos seus clientes.
        </p>
      </section>

      {/* SOBRE NÓS */}
      <section id="sobre" className="scroll-mt-24 px-8 md:px-16 py-20 bg-black">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="min-w-0">
            <h2 className="font-display text-3xl mb-2">SOBRE A</h2>
            <h2 className="font-display text-3xl text-orange-500 mb-6">JV MÓVEIS</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Com mais de uma década de experiência no mercado de Santa Catarina, a JV Móveis Planejados nasceu do
              desejo de unir a marcenaria artesanal com a tecnologia de precisão.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              Nossa produção é 100% própria, utilizando MDF de alta densidade e as peças de maior qualidade. Cada peça é tratada como única, refletindo a personalidade de nossos clientes.
            </p>
          </div>
          <div className="min-w-0">
            <img
              src="https://images.unsplash.com/photo-1622150162934-b5f8e8c2b3f5?w=1000&q=80"
              alt="Marcenaria artesanal JV Móveis"
              className="w-full h-80 object-cover border-2 border-orange-500"
            />
          </div>
        </div>
      </section>

      {/* PROMESSA DE QUALIDADE */}
      <section className="px-8 md:px-16 py-16 bg-white text-black">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {promessas.map(({ icon: Icon, title }) => (
            <div key={title} className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center">
                <Icon className="text-black" size={26} strokeWidth={2} />
              </div>
              <p className="font-display text-xs tracking-wide">{title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ESPAÇOS INTELIGENTES */}
      <section className="relative h-96">
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80"
          alt="Home office planejado"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-6">
          <div className="border-2 border-orange-500 text-center max-w-lg px-10 py-8 bg-black/70">
            <p className="font-display text-2xl mb-3 text-orange-500">ESPAÇOS INTELIGENTES</p>
            <p className="text-neutral-200 leading-relaxed">
              Home offices projetados para máxima produtividade sem abrir mão do conforto e da estética moderna.
            </p>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO DE ORÇAMENTO */}
      <section id="orcamento" className="scroll-mt-24 px-8 md:px-16 py-20 bg-white text-black">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-3xl mb-2 text-center">PEÇA SEU</h2>
          <h2 className="font-display text-3xl text-orange-500 mb-8 text-center">ORÇAMENTO</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="nome"
              required
              placeholder="Seu nome"
              value={form.nome}
              onChange={handleChange}
              className="border-2 border-black px-4 py-3 font-body text-sm focus:outline-none focus:border-orange-500"
            />
            <input
              type="tel"
              name="telefone"
              required
              placeholder="Seu telefone"
              value={form.telefone}
              onChange={handleChange}
              className="border-2 border-black px-4 py-3 font-body text-sm focus:outline-none focus:border-orange-500"
            />
            <select
              name="ambiente"
              required
              value={form.ambiente}
              onChange={handleChange}
              className="border-2 border-black px-4 py-3 font-body text-sm focus:outline-none focus:border-orange-500 bg-white"
            >
              <option value="">Ambiente de interesse</option>
              {ambientes.map((a) => (
                <option key={a.label} value={a.label}>
                  {a.label}
                </option>
              ))}
            </select>
            <textarea
              name="mensagem"
              rows={4}
              placeholder="Conte um pouco sobre o seu projeto"
              value={form.mensagem}
              onChange={handleChange}
              className="border-2 border-black px-4 py-3 font-body text-sm focus:outline-none focus:border-orange-500 resize-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-orange-500 text-black font-display text-sm px-8 py-4 hover:bg-orange-400 transition-colors"
            >
              <Send size={18} />
              ENVIAR PELO WHATSAPP
            </button>
          </form>
        </div>
      </section>

      {/* FAQ (vem do CMS) */}
      <section id="faq" className="scroll-mt-24 px-8 md:px-16 py-20 bg-black">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl mb-2">PERGUNTAS</h2>
          <h2 className="font-display text-3xl text-orange-500 mb-10">FREQUENTES</h2>
          {faqs.map((item, i) => (
            <FaqItem
              key={item.q}
              q={item.q}
              a={item.a}
              isOpen={openFaq === i}
              onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
            />
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="scroll-mt-24 px-8 md:px-16 py-20 bg-black text-center border-t border-orange-500/30">
        <div className="max-w-2xl mx-auto border-2 border-orange-500 rounded-3xl px-8 py-8">
          <p className="font-display text-xl text-orange-500 mb-6">FALE CONOSCO!</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-4">
            <div className="flex items-center gap-2">
              <MessageCircle className="text-orange-500" size={20} />
              <span className="font-display text-sm">Valmir Bueno 48991077606</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="text-orange-500" size={20} />
              <span className="font-display text-sm">Junior Neves 49989122538</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 text-neutral-300">
            <MapPin className="text-orange-500" size={18} />
            <span className="text-sm">Bairro Santa Lúcia</span>
          </div>
        </div>
      </section>

      {/* FAIXA FINAL */}
      <footer className="bg-orange-500 text-black text-center py-4 px-4">
        <p className="font-display text-sm md:text-base">SEU PROJETO, DO SEU JEITO. DO SEU SONHO, PARA SUA CASA!</p>
      </footer>

      <Lightbox project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* RODAPÉ DE DESENVOLVIMENTO */}
      <div className="bg-neutral-950 border-t border-neutral-900/50 py-4 text-[10px] text-neutral-600 font-body">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse shrink-0" />
            <span>Ambiente de testes: Este site ainda está em desenvolvimento.</span>
          </div>
          <p>
            Criado por{" "}
            <a
              href="mailto:viniciusm15015@gmail.com"
              className="text-neutral-400 hover:text-orange-500 transition-colors underline underline-offset-4"
            >
              Vinicius Marian
            </a>{" "}
            • viniciusm15015@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}