import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "JV Móveis Sob Medida",
  description: "Móveis planejados sob medida para o seu espaço.",

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
      <body className={montserrat.variable}>
        {children}
      </body>
    </html>
  );
}