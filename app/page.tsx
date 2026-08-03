import fs from "fs";
import path from "path";
import matter from "gray-matter";
import JVMoveisClient, { type Projeto, type Depoimento, type FaqEntry } from "./JVMoveisClient";

function readCollection<T>(folderName: string): T[] {
  const dir = path.join(process.cwd(), "content", folderName);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data } = matter(raw);
    return data as T;
  });
}

function readFaq(): FaqEntry[] {
  const filePath = path.join(process.cwd(), "content", "faq.json");
  if (!fs.existsSync(filePath)) return [];
  const raw = fs.readFileSync(filePath, "utf-8");
  const json = JSON.parse(raw);
  return json.items as FaqEntry[];
}

export default function Page() {
  const projetos = readCollection<Projeto>("projetos");
  const depoimentos = readCollection<Depoimento>("depoimentos");
  const faqs = readFaq();

  return <JVMoveisClient projetos={projetos} depoimentos={depoimentos} faqs={faqs} />;
}