import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

import { Hero } from "../components/sections/Hero";
import { Ambientes } from "../components/sections/Ambientes";
import { Processo } from "../components/sections/Processo";
import { Projetos } from "../components/sections/Projetos";
import { Depoimentos } from "../components/sections/Depoimentos";
import { Sobre } from "../components/sections/Sobre";
import { Qualidades } from "../components/sections/Qualidades";
import { Espacos } from "../components/sections/Espacos";
import { Form } from "../components/sections/Form";
import { Faq } from "../components/sections/Faq";
import { Contato } from "../components/sections/Contato";


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


// ---------- PÁGINA ----------

export default function Page() {
  const projetos = readCollection<Projeto>("projetos");
  const depoimentos =
    readCollection<Depoimento>("depoimentos");
  const faqs = readFaq();

  return (
    <div className="bg-black text-white">

      <Header />

      <Hero />

      <Ambientes />

      <Processo />

      <Projetos projetos={projetos} />

      <Depoimentos depoimentos={depoimentos} />

      <Sobre />

      <Qualidades />

      <Espacos />

      <Form />

      <Faq faqs={faqs} />

      <Contato />

      <Footer />

    </div>
  );
}