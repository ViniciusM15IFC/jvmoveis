import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

import { Hero } from "../components/sections/Hero";
import { Ambientes } from "../components/sections/Ambientes";
import { Processo } from "../components/sections/Processo";
import { Transformacao } from "../components/sections/Transformacao";
import { Projetos } from "../components/sections/Projetos";
import { Depoimentos } from "../components/sections/Depoimentos";
import { Sobre } from "../components/sections/Sobre";
import { Qualidades } from "../components/sections/Qualidades";
import { Form } from "../components/sections/Form";
import { Faq } from "../components/sections/Faq";
import { Contato } from "../components/sections/Contato";

import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";

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

interface TransformacaoRaw {
  titulo: string;
  antes: string;
  projeto3d: string;
  resultado: string;
}

export interface EtapaTransformacao {
  label: string;
  img: string;
}

export interface CasoTransformacao {
  titulo: string;
  etapas: [EtapaTransformacao, EtapaTransformacao, EtapaTransformacao];
}


// ---------- LEITURA DOS CONTEÚDOS ----------

function readCollection<T>(folderName: string): T[] {
  const dir = path.join(
    process.cwd(),
    "content",
    folderName
  );

  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"));

  return files.map((file) => {
    const raw = fs.readFileSync(
      path.join(dir, file),
      "utf-8"
    );

    const { data } = matter(raw);

    return data as T;
  });
}


function readFaq(): FaqEntry[] {
  const filePath = path.join(
    process.cwd(),
    "content",
    "faq.json"
  );

  if (!fs.existsSync(filePath)) {
    return [];
  }

  const raw = fs.readFileSync(
    filePath,
    "utf-8"
  );

  const json = JSON.parse(raw);

  return json.items as FaqEntry[];
}


function readTransformacao(): CasoTransformacao[] {
  const raws = readCollection<TransformacaoRaw>("transformacao");

  return raws.map((r) => ({
    titulo: r.titulo,
    etapas: [
      { label: "ANTES", img: r.antes },
      { label: "PROJETO 3D", img: r.projeto3d },
      { label: "RESULTADO", img: r.resultado },
    ],
  }));
}


// ---------- PÁGINA ----------

export default function Page() {
  const projetos = readCollection<Projeto>("projetos");
  const depoimentos =
    readCollection<Depoimento>("depoimentos");
  const faqs = readFaq();
  const transformacaoCasos = readTransformacao();

  return (
    <div className="bg-black text-white">

      <LocalBusinessSchema />

      <Header />

      <Hero />

      <Ambientes />

      <Processo />

      <Projetos projetos={projetos} />

      <Depoimentos depoimentos={depoimentos} />

      <Sobre />

      <Qualidades />

      <Transformacao casos={transformacaoCasos} />

      <Form />

      <Faq faqs={faqs} />

      <Contato />

      <Footer />

    </div>
  );
}