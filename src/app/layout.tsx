import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";

const inter = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="pt-BR" 
      suppressHydrationWarning
      className={`${inter.variable} ${jetBrainsMono.variable} ${playfairDisplay.variable}`}
    >
      <head>
        {/* 
          Script inline para prevenir FOUC (Flash of Unstyled Content)
          Executa antes do React para aplicar o tema correto imediatamente
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Tenta carregar o tema salvo ou usa a preferência do sistema
                try {
                  const savedTheme = localStorage.getItem('theme');
                  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  const theme = savedTheme || systemTheme;
                  
                  // Aplica a classe dark se necessário
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                  
                  // Adiciona classe indicando que o CSS está carregado
                  document.documentElement.classList.add('css-loaded');
                } catch (e) {
                  // Falha silenciosa se localStorage não estiver disponível
                  console.warn('Theme detection failed:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {/* 
          ThemeProvider gerencia o estado do tema
          Sincroniza com localStorage e aplica a classe 'dark' quando necessário
        */}
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}