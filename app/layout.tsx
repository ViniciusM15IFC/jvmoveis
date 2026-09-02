import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jvmoveis.netlify.app"),

  title: "JV Móveis Sob Medida | Videira e Região",

  description:
    "Móveis sob medida em Videira e região. Projetos personalizados, produção própria e montagem profissional para transformar seu ambiente.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "JV Móveis Sob Medida | Videira e Região",
    description:
      "Projetos personalizados, produção própria e montagem profissional para transformar seu ambiente.",
    type: "website",
    locale: "pt_BR",
    url: "/",
    images: [
      {
        url: "/images/og.webp",
        width: 1200,
        height: 630,
        alt: "JV Móveis Sob Medida | Videira e Região",
      },
    ],
  },

  verification: {
    google: "4WfD_V-Lxs-dUt7U3z3uVBRuhFk04Jwrim3B1fm-TB4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={montserrat.variable}>{children}</body>
    </html>
  );
}