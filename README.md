# 🚀 Atlas Financeiro

O controle definitivo para o seu **veículo** e o seu **bolso**.

Uma plataforma completa de gestão financeira e veicular projetada especificamente para motoristas de aplicativo (Uber, 99, inDrive), frotistas e profissionais autônomos que utilizam o veículo como fonte de renda.

<div align="center">
  <img alt="Atlas Financeiro Dashboard" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" width="100%" />
</div>

---

## ✨ Recursos Principais

### 💰 Gestão Financeira
- **Controle de Ganhos e Gastos:** Registro detalhado com categorização inteligente.
- **Abastecimento:** Cálculo de média de consumo (km/l), custo por litro e histórico.
- **Leitura de Recibos com IA:** Extração automática de dados de notas fiscais usando Inteligência Artificial.

### 🚗 Gestão de Veículos
- **Múltiplos Veículos:** Cadastre frotas ou carros próprios/alugados.
- **Manutenção Preventiva:** Alertas baseados em quilometragem e tempo.
- **Contratos de Locação:** Controle de prazos, valores e limites de KM.

### 📊 Painel de Controle
- **Métricas Visuais:** Gráficos interativos para visualização de lucro líquido.
- **Relatórios:** Exportação para PDF e XLSX (Excel).
- **Mobile First:** Interface PWA otimizada para uso direto no celular via navegador.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** [Next.js](https://nextjs.org/) (React), [Tailwind CSS](https://tailwindcss.com/)
- **Animações:** [Framer Motion](https://www.framer.com/motion/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Backend/DB:** [Supabase](https://supabase.com/) (PostgreSQL + RLS)
- **IA:** [Google Gemini API](https://ai.google.dev/)
- **Estilização:** [Tailwind Merge](https://github.com/dcastil/tailwind-merge), [CVA](https://cva.style/)

---

## 🚀 Como Começar (Desenvolvimento)

### Pré-requisitos
- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Leoladislau181/PVAF.git
    cd PVAF
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    - Copie o `.env.example` para `.env`
    - Adicione suas chaves do Supabase e Gemini API:
    ```bash
    NEXT_PUBLIC_SUPABASE_URL=seu_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave
    GEMINI_API_KEY=sua_chave_gemini
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  Desenvolvido com ❤️ para facilitar a vida de quem está no volante.
</div>
