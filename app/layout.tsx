import type {Metadata} from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  metadataBase: new URL('https://atlas-financeiro.vercel.app'),
  title: 'Atlas Financeiro | Gestão Inteligente',
  description: 'Plataforma de Gestão Financeira e Veicular para motoristas de aplicativo, frotistas e autônomos.',
  openGraph: {
    title: 'Atlas Financeiro | Gestão Inteligente',
    description: 'Plataforma de Gestão Financeira e Veicular para motoristas de aplicativo, frotistas e autônomos.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://atlas-financeiro.vercel.app',
    siteName: 'Atlas Financeiro',
    images: [
      {
        url: '/hero-dashboard.png',
        width: 1200,
        height: 630,
        alt: 'Atlas Financeiro - Gestão Financeira e Veicular',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlas Financeiro | Gestão Inteligente',
    description: 'Plataforma de Gestão Financeira e Veicular para motoristas de aplicativo, frotistas e autônomos.',
    images: ['/hero-dashboard.png'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable} dark scroll-smooth`}>
      <body className="bg-[#0B1120] text-slate-300 font-sans antialiased selection:bg-amber-500/30 selection:text-amber-200" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
