import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Adonis Vinuto | Portfolio",
  description: "Portfolio pessoal de Adonis G. G. Vinuto - Desenvolvedor, projetos e experiências",
  keywords: ["Adonis Vinuto", "Portfolio", "Desenvolvedor", "Projetos", "Blog"],
  authors: [{ name: "Adonis G. G. Vinuto" }],
  creator: "Adonis Vinuto",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },

  // Open Graph para compartilhamento em redes sociais
  openGraph: {
    title: "Adonis Vinuto | Portfolio",
    description: "Portfolio pessoal de Adonis G. G. Vinuto",
    type: "website",
    locale: "pt_BR",
    siteName: "Adonis Vinuto",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}