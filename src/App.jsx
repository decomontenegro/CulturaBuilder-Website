import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Terminal, 
  Cpu, 
  Zap, 
  Shield, 
  FileText,
  Download,
  Github,
  ExternalLink,
  CheckCircle,
  AlertTriangle,
  Wrench,
  Search,
  TestTube,
  GitBranch,
  Clock,
  Database,
  Layers
} from 'lucide-react';
import Navigation from './components/Navigation';
import TerminalASCII from './components/TerminalASCII';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Status Badge */}
          <motion.div 
            className="inline-flex items-center space-x-2 bg-purple-600/20 border border-purple-500/30 rounded-full px-4 py-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-purple-300 text-sm font-medium">CulturaBuilder v3 🚀 - Framework Estável</span>
          </motion.div>

          {/* Terminal ASCII */}
          <div className="mb-12">
            <TerminalASCII />
          </div>

          {/* Main Description */}
          <motion.div 
            className="max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Framework MCP para Claude Desktop
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Estende Claude Code com <span className="text-purple-400 font-semibold">16 comandos especializados</span>, 
              <span className="text-purple-400 font-semibold"> smart personas</span> e 
              <span className="text-purple-400 font-semibold"> integração MCP</span> para desenvolvimento mais eficiente.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.a
              href="#instalacao"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 glow-purple"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#instalacao')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Download className="inline mr-2" size={20} />
              Instalar Agora
            </motion.a>
            
            <motion.a
              href="https://github.com/decomontenegro/CulturaBuilder-MCP"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-500 hover:bg-purple-500/10 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="inline mr-2" size={20} />
              Ver no GitHub
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">16</div>
              <div className="text-sm text-gray-400">Comandos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">6+</div>
              <div className="text-sm text-gray-400">Smart Personas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">MIT</div>
              <div className="text-sm text-gray-400">Open Source</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">19</div>
              <div className="text-sm text-gray-400">Contributors</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Migração v2 → v3 Warning */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border-y border-yellow-500/20">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-yellow-900/30 border border-yellow-500/50 rounded-lg p-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start space-x-4">
              <AlertTriangle className="text-yellow-400 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-yellow-300 mb-3">⚠️ Migrando da v2? Importante!</h3>
                <div className="text-yellow-100 space-y-2">
                  <p><strong>Mudança crítica no comando /build:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><strong>v2:</strong> <code className="bg-black/30 px-2 py-1 rounded">/build myFeature</code> → implementação de feature</li>
                    <li><strong>v3:</strong> <code className="bg-black/30 px-2 py-1 rounded">/cb:build</code> → compilação/packaging apenas</li>
                    <li><strong>v3:</strong> <code className="bg-black/30 px-2 py-1 rounded">/cb:implement myFeature</code> → implementação de feature (NOVO)</li>
                  </ul>
                  <p className="mt-3"><strong>Processo de migração:</strong> Desinstale v2 primeiro, limpe arquivos antigos, depois instale v3.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Principais Recursos
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              CulturaBuilder torna o desenvolvimento mais eficiente com comandos especializados e inteligência artificial contextual.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Terminal className="text-purple-400" size={32} />,
                title: "16 Comandos Especializados",
                description: "Comandos focados em tarefas comuns de desenvolvimento (alguns funcionam melhor que outros!)"
              },
              {
                icon: <Cpu className="text-purple-400" size={32} />,
                title: "Smart Personas",
                description: "Especialistas em IA que geralmente escolhem o expert certo para diferentes domínios"
              },
              {
                icon: <Zap className="text-purple-400" size={32} />,
                title: "Integração MCP",
                description: "Ferramentas externas para docs, componentes UI e automação de browser"
              },
              {
                icon: <FileText className="text-purple-400" size={32} />,
                title: "Gerenciamento de Tarefas",
                description: "Sistema que tenta manter o controle do progresso do desenvolvimento"
              },
              {
                icon: <Shield className="text-purple-400" size={32} />,
                title: "Otimização de Tokens",
                description: "Ajuda com conversas mais longas e uso eficiente de recursos"
              },
              {
                icon: <Code className="text-purple-400" size={32} />,
                title: "CLI Unificado",
                description: "Instalador unificado para configuração fácil e rápida"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Personas Section */}
      <section id="personas" className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Smart Personas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              Especialistas em IA que tentam entrar quando parecem relevantes
            </p>
            <p className="text-sm text-gray-400 italic">
              (Eles nem sempre escolhem perfeitamente, mas geralmente acertam)
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🏗️", name: "architect", description: "Design de sistemas e arquitetura" },
              { icon: "🎨", name: "frontend", description: "UI/UX e acessibilidade" },
              { icon: "⚙️", name: "backend", description: "APIs e infraestrutura" },
              { icon: "🔍", name: "analyzer", description: "Debugging e análise de problemas" },
              { icon: "🛡️", name: "security", description: "Segurança e vulnerabilidades" },
              { icon: "✍️", name: "scribe", description: "Documentação e escrita" }
            ].map((persona, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 border border-gray-600 rounded-lg p-6 text-center hover:border-purple-500/50 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-3">{persona.icon}</div>
                <h3 className="text-lg font-semibold text-purple-300 mb-2">{persona.name}</h3>
                <p className="text-gray-300 text-sm">{persona.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-purple-300 font-medium">...e mais 5 especialistas</p>
          </motion.div>
        </div>
      </section>

      {/* Commands Section */}
      <section id="comandos" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              16 Comandos Especializados
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Focamos nos 16 comandos essenciais para as tarefas mais comuns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Development Commands */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-purple-300 mb-6">Development</h3>
              {[
                { cmd: "/cb:implement", desc: "Implementação de features (NOVO na v3)", icon: <Code size={20} /> },
                { cmd: "/cb:build", desc: "Compilação/packaging apenas", icon: <Wrench size={20} /> },
                { cmd: "/cb:design", desc: "Design de sistemas e arquitetura", icon: <Layers size={20} /> }
              ].map((command, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 border border-gray-600 rounded-lg p-4 hover:border-purple-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-purple-400">{command.icon}</div>
                    <div>
                      <code className="text-purple-300 font-mono font-semibold">{command.cmd}</code>
                      <p className="text-gray-300 text-sm mt-1">{command.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Analysis Commands */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-green-300 mb-6">Analysis</h3>
              {[
                { cmd: "/cb:analyze", desc: "Debugging e análise de problemas", icon: <Search size={20} /> },
                { cmd: "/cb:troubleshoot", desc: "Identificação e resolução de problemas", icon: <AlertTriangle size={20} /> },
                { cmd: "/cb:explain", desc: "Explica código, conceitos e implementações", icon: <FileText size={20} /> }
              ].map((command, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 border border-gray-600 rounded-lg p-4 hover:border-green-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-green-400">{command.icon}</div>
                    <div>
                      <code className="text-green-300 font-mono font-semibold">{command.cmd}</code>
                      <p className="text-gray-300 text-sm mt-1">{command.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Quality Commands */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-yellow-300 mb-6">Quality</h3>
              {[
                { cmd: "/cb:improve", desc: "Sugestões de melhorias e otimizações", icon: <Zap size={20} /> },
                { cmd: "/cb:test", desc: "Gera e executa testes automatizados", icon: <TestTube size={20} /> },
                { cmd: "/cb:cleanup", desc: "Limpa e organiza código desnecessário", icon: <Wrench size={20} /> }
              ].map((command, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 border border-gray-600 rounded-lg p-4 hover:border-yellow-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-yellow-400">{command.icon}</div>
                    <div>
                      <code className="text-yellow-300 font-mono font-semibold">{command.cmd}</code>
                      <p className="text-gray-300 text-sm mt-1">{command.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Others Commands */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-300 mb-6">Others</h3>
              {[
                { cmd: "/cb:document", desc: "Documentação e escrita", icon: <FileText size={20} /> },
                { cmd: "/cb:git", desc: "Assistência com operações Git", icon: <GitBranch size={20} /> },
                { cmd: "/cb:estimate", desc: "Estimativa de tempo e complexidade", icon: <Clock size={20} /> },
                { cmd: "/cb:task", desc: "Gerenciamento de tarefas", icon: <CheckCircle size={20} /> },
                { cmd: "/cb:index", desc: "Indexa e organiza estrutura", icon: <Database size={20} /> },
                { cmd: "/cb:load", desc: "Carrega e processa arquivos", icon: <Download size={20} /> },
                { cmd: "/cb:spawn", desc: "Cria novos processos e componentes", icon: <Cpu size={20} /> }
              ].map((command, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 border border-gray-600 rounded-lg p-4 hover:border-gray-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-gray-400">{command.icon}</div>
                    <div>
                      <code className="text-gray-300 font-mono font-semibold">{command.cmd}</code>
                      <p className="text-gray-300 text-sm mt-1">{command.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="instalacao" className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Instalação 📦
            </h2>
            <p className="text-xl text-gray-300">
              CulturaBuilder é um processo de duas etapas: instalar o pacote e executar o instalador
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Step 1 */}
            <motion.div 
              className="bg-gray-800/50 border border-gray-600 rounded-lg p-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-purple-300 mb-4">1. Instalar o Pacote</h3>
              <p className="text-gray-300 mb-4">Escolha uma das opções modernas de instalação:</p>
              
              <div className="space-y-3">
                <div className="bg-black/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-2">PyPI (Recomendado):</div>
                  <code className="text-green-400 font-mono">pip install CulturaBuilder</code>
                </div>
                
                <div className="bg-black/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-2">UV (Moderno):</div>
                  <code className="text-green-400 font-mono">uv add CulturaBuilder</code>
                </div>
                
                <div className="bg-black/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-2">UVX (Cross-platform):</div>
                  <code className="text-green-400 font-mono">uvx pip install CulturaBuilder</code>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              className="bg-gray-800/50 border border-gray-600 rounded-lg p-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-purple-300 mb-4">2. Executar o Instalador</h3>
              <p className="text-gray-300 mb-4">Execute o instalador unificado:</p>
              
              <div className="bg-black/50 rounded-lg p-4">
                <code className="text-green-400 font-mono">python3 -m CulturaBuilder install</code>
              </div>
              
              <div className="mt-4 text-sm text-gray-400">
                <p>Opções de configuração disponíveis:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li><strong>interactive</strong> - Configuração interativa (padrão)</li>
                  <li><strong>developer</strong> - Perfil para desenvolvedores</li>
                  <li><strong>minimal</strong> - Instalação mínima</li>
                </ul>
              </div>
            </motion.div>

            {/* Requirements */}
            <motion.div 
              className="bg-gray-800/50 border border-gray-600 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Requisitos</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-green-300 mb-2">✅ Obrigatório</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Python 3.8+</li>
                    <li>• Claude Desktop</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-300 mb-2">⚡ Recomendado</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Git</li>
                    <li>• UV/UVX (instalação moderna)</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Help Links */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-gray-400 mb-4">Precisa de ajuda?</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://github.com/decomontenegro/CulturaBuilder-MCP/wiki" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  📚 Documentação
                </a>
                <a 
                  href="https://github.com/decomontenegro/CulturaBuilder-MCP/issues" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  🐛 Issues
                </a>
                <a 
                  href="https://discord.gg/culturabuilder" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  💬 Discord
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MCP Integration */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Integração MCP 🔗
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              Ferramentas externas que se conectam quando úteis
            </p>
            <p className="text-sm text-gray-400 italic">
              (Funcionam muito bem quando se conectam adequadamente! 🔥)
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Context7",
                description: "Busca docs oficiais de bibliotecas e padrões",
                icon: <FileText className="text-blue-400" size={32} />
              },
              {
                name: "Sequential",
                description: "Ajuda com pensamento complexo multi-etapas",
                icon: <Layers className="text-green-400" size={32} />
              },
              {
                name: "Magic",
                description: "Gera componentes UI modernos",
                icon: <Zap className="text-purple-400" size={32} />
              },
              {
                name: "Playwright",
                description: "Automação de browser e testes",
                icon: <Terminal className="text-orange-400" size={32} />
              }
            ].map((integration, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 border border-gray-600 rounded-lg p-6 text-center hover:border-purple-500/50 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-4">{integration.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{integration.name}</h3>
                <p className="text-gray-300 text-sm">{integration.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-2 mb-2">
                <div className="text-purple-400 font-mono text-xl font-bold">/CB</div>
                <div className="text-white font-semibold">CulturaBuilder MCP</div>
              </div>
              <p className="text-gray-400 text-sm">Framework que estende Claude Code com comandos especializados</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="https://github.com/decomontenegro/CulturaBuilder-MCP" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://github.com/decomontenegro/CulturaBuilder-MCP/wiki" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <ExternalLink size={24} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 CulturaBuilder MCP. Licença MIT. 
              <span className="text-purple-400 ml-2">Initial release, fresh out of beta!</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App
