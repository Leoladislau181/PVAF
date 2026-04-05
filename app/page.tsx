'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, BarChart3, Car, FileText, MessageSquare, ShieldCheck, Sparkles, Target, Wallet, CheckCircle2, ChevronRight, Zap, Smartphone } from 'lucide-react';

const IMAGES = {
  dashboard: "/hero-dashboard.png",
  transactions: "/transactions.png",
  modal: "/new-modal.png",
  settings: "/settings.png"
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-300 font-sans selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0B1120]/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center transform rotate-12">
              <span className="text-[#0B1120] font-bold text-xl -rotate-12">A</span>
            </div>
            <span className="font-heading font-bold text-xl text-white tracking-tight">Atlas Financeiro</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#recursos" className="text-sm font-medium hover:text-amber-400 transition-colors">Recursos</a>
            <a href="#publico" className="text-sm font-medium hover:text-amber-400 transition-colors">Para Quem</a>
            <a href="#interface" className="text-sm font-medium hover:text-amber-400 transition-colors">Interface</a>
          </div>
          <a href="https://atlas-financeiro-tau.vercel.app?ref=2URXN2" className="bg-amber-500 hover:bg-amber-600 text-[#0B1120] px-6 py-2.5 rounded-full font-semibold text-sm transition-all transform hover:scale-105 active:scale-95 inline-block">
            Acessar Plataforma
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 relative">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-8 border border-amber-500/20">
              <Sparkles className="w-4 h-4" />
              A revolução na gestão veicular
            </span>
            <h1 className="text-5xl lg:text-7xl font-heading font-bold text-white tracking-tight mb-6 leading-tight">
              O controle definitivo para o <br className="hidden lg:block" />
              seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">veículo</span> e o seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">bolso</span>.
            </h1>
            <p className="text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              Plataforma completa de gestão financeira e veicular para motoristas de aplicativo, frotistas e profissionais autônomos. Assuma o controle dos seus lucros.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://atlas-financeiro-tau.vercel.app?ref=2URXN2" className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-[#0B1120] px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                Começar Agora <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-5 py-2.5 rounded-full text-emerald-400 font-semibold shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                <CheckCircle2 className="w-5 h-5" /> Comece gratuitamente
              </div>
              <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-5 py-2.5 rounded-full text-amber-400 font-semibold shadow-[0_0_20px_rgba(245,158,11,0.15)]">
                <Sparkles className="w-5 h-5" /> Ganhe 15 dias de Premium
              </div>
              <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-5 py-2.5 rounded-full text-blue-400 font-semibold shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                <Smartphone className="w-5 h-5" /> Instale via navegador
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-20 relative mx-auto max-w-5xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent z-10 h-full w-full" />
            <div className="rounded-2xl border border-slate-800/80 bg-[#151C2C] p-2 shadow-2xl shadow-amber-500/10 overflow-hidden">
              <Image 
                src={IMAGES.dashboard} 
                alt="Dashboard Atlas Financeiro" 
                width={1200} 
                height={675} 
                className="rounded-xl w-full h-auto object-cover"
                priority
                unoptimized
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlight Banner */}
      <section className="py-12 bg-gradient-to-b from-[#0B1120] to-[#0F172A] border-b border-slate-800/50 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#151C2C] border border-emerald-500/30 rounded-2xl p-8 flex flex-col items-center text-center transform transition-transform hover:-translate-y-1 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-400 mb-3">Comece Grátis</h3>
              <p className="text-slate-300">Crie sua conta sem compromisso e comece a organizar suas finanças agora mesmo.</p>
            </div>
            
            <div className="bg-[#151C2C] border border-amber-500/30 rounded-2xl p-8 flex flex-col items-center text-center transform transition-transform hover:-translate-y-1 relative overflow-hidden shadow-[0_0_30px_rgba(245,158,11,0.1)]">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600"></div>
              <div className="absolute top-4 right-4 bg-amber-500/20 text-amber-400 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30">BRINDE</div>
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-amber-400 mb-3">15 Dias de Premium</h3>
              <p className="text-slate-300">Desbloqueie todas as funcionalidades exclusivas gratuitamente por 15 dias.</p>
            </div>

            <div className="bg-[#151C2C] border border-blue-500/30 rounded-2xl p-8 flex flex-col items-center text-center transform transition-transform hover:-translate-y-1 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-blue-400 mb-3">App no Navegador</h3>
              <p className="text-slate-300">Instale direto pelo navegador em qualquer celular ou PC. Leve e sem ocupar espaço.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section id="publico" className="py-24 bg-[#0F172A] relative border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Feito para quem vive na rua</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Uma ferramenta moldada para as necessidades reais de quem usa o veículo como fonte de renda.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Car className="w-8 h-8 text-amber-400" />,
                title: "Motoristas de App",
                desc: "Uber, 99, inDrive. Controle seus ganhos diários, gastos com combustível e saiba exatamente o seu lucro líquido."
              },
              {
                icon: <Wallet className="w-8 h-8 text-emerald-400" />,
                title: "Locadores e Frotistas",
                desc: "Gerencie limites de quilometragem, datas de contrato, valores de aluguel e manutenções de múltiplos veículos."
              },
              {
                icon: <Zap className="w-8 h-8 text-blue-400" />,
                title: "Entregadores e Autônomos",
                desc: "Separe suas finanças pessoais das profissionais com facilidade e tenha previsibilidade no fim do mês."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#151C2C] border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-800/50 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="recursos" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 max-w-2xl">
              Tudo que você precisa em um só lugar.
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl">
              Esqueça planilhas complexas e cadernos. O Atlas Financeiro automatiza e organiza sua rotina.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6">
                <Wallet className="w-4 h-4" /> Gestão Financeira
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Controle absoluto de cada centavo</h3>
              <ul className="space-y-6">
                {[
                  "Registro detalhado de receitas e despesas com categorização inteligente.",
                  "Controle avançado de abastecimento: litros, tipo, valor e cálculo de média.",
                  "Leitura de recibos com Inteligência Artificial: extração automática de dados de notas fiscais."
                ].map((text, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 bg-emerald-500/20 p-1 rounded-full h-fit flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-slate-300 text-lg">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full" />
              <Image 
                src={IMAGES.transactions} 
                alt="Lista de Lançamentos" 
                width={800} 
                height={600} 
                className="relative rounded-2xl border border-slate-800 shadow-2xl"
                unoptimized
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
            <div className="relative lg:order-1">
              <div className="absolute inset-0 bg-amber-500/20 blur-[100px] rounded-full" />
              <Image 
                src={IMAGES.modal} 
                alt="Novo Lançamento" 
                width={800} 
                height={600} 
                className="relative rounded-2xl border border-slate-800 shadow-2xl"
                unoptimized
              />
            </div>
            <div className="lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-6">
                <Car className="w-4 h-4" /> Gestão de Veículos
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Seu veículo sempre em dia</h3>
              <ul className="space-y-6">
                {[
                  "Cadastro de múltiplos veículos, próprios ou alugados.",
                  "Gestão de contratos de aluguel com limites de KM e vigência.",
                  "Alertas de manutenção preventiva baseados na quilometragem atual.",
                  "Cálculo automático de reservas para manutenção."
                ].map((text, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 bg-amber-500/20 p-1 rounded-full h-fit flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-amber-400" />
                    </div>
                    <span className="text-slate-300 text-lg">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* More Features Grid */}
      <section className="py-24 bg-[#0F172A] border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
                title: "Dashboard Interativo",
                desc: "Gráficos visuais e métricas de desempenho para você entender seu lucro real."
              },
              {
                icon: <FileText className="w-6 h-6 text-purple-400" />,
                title: "Exportação de Dados",
                desc: "Gere relatórios em PDF e planilhas Excel (XLSX) para sua contabilidade."
              },
              {
                icon: <MessageSquare className="w-6 h-6 text-pink-400" />,
                title: "Suporte em Tempo Real",
                desc: "Chat ao vivo integrado com sistema de tickets e interface otimizada (zero lag)."
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
                title: "Segurança de Nível Bancário",
                desc: "Seus dados protegidos com RLS. Ninguém além de você tem acesso às suas finanças."
              }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#151C2C] border border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interface Showcase */}
      <section id="interface" className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Design focado na produtividade</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Interface escura nativa, projetada para não cansar a vista durante a noite e destacar o que realmente importa.
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-emerald-500/20 blur-2xl opacity-50 rounded-[3rem]" />
            <Image 
              src={IMAGES.settings} 
              alt="Configurações e Perfil" 
              width={1000} 
              height={750} 
              className="relative rounded-2xl border border-slate-700 shadow-2xl"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-amber-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-amber-500/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8">
            Pronto para assumir o volante das suas finanças?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Junte-se a milhares de motoristas que já transformaram a forma como gerenciam seus ganhos e veículos.
          </p>
          <a href="https://atlas-financeiro-tau.vercel.app?ref=2URXN2" className="bg-amber-500 hover:bg-amber-600 text-[#0B1120] px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-xl shadow-amber-500/20 inline-block mb-8">
            Criar minha conta agora
          </a>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-semibold">Comece Grátis</span>
            </div>
            <div className="flex items-center gap-2 text-amber-400 bg-amber-500/10 px-4 py-2 rounded-full border border-amber-500/20">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">15 Dias Premium</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
              <Smartphone className="w-5 h-5" />
              <span className="font-semibold">Instale no Celular</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B1120] border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-amber-500 rounded flex items-center justify-center transform rotate-12">
              <span className="text-[#0B1120] font-bold text-xs -rotate-12">A</span>
            </div>
            <span className="font-heading font-bold text-lg text-white">Atlas Financeiro</span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Atlas Financeiro. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Termos de Uso</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Privacidade</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Suporte</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
