import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Terminal, Cpu, Zap, Users, Settings, Download, Github, ExternalLink, CheckCircle, AlertCircle, Info } from 'lucide-react'
import './App.css'

// Componentes
import Navigation from './components/Navigation'
import TerminalASCII from './components/TerminalASCII'
import InstallationSection from './components/InstallationSection'

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-6xl mx-auto text-center">
          {/* Terminal ASCII */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <TerminalASCII />
          </motion.div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center space-x-2 bg-purple-900/30 border border-purple-500/30 rounded-full px-4 py-2 mb-6"
          >
            <Info size={16} className="text-purple-400" />
            <span className="text-sm text-gray-300">CulturaBuilder v3 🚀 - Framework Estável</span>
          </motion.div>

          {/* Main Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Framework que estende Claude Code com <span className="text-purple-400 font-semibold">16 comandos especializados</span>, 
            <span className="text-purple-400 font-semibold"> smart personas</span> e 
            <span className="text-purple-400 font-semibold"> integração MCP</span> para workflows de desenvolvimento mais eficientes.
          </motion.p>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto"
          >
            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-400">16</div>
              <div className="text-sm text-gray-400">Comandos especializados</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-400">6+</div>
              <div className="text-sm text-gray-400">Smart personas incluídas</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-400">MIT</div>
              <div className="text-sm text-gray-400">Open Source License</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="https://github.com/decomontenegro/CulturaBuilder-MCP"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              <Github size={20} />
              <span>⭐ GitHub</span>
            </a>
            <a
              href="#instalacao"
              className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white px-6 py-3 rounded-lg transition-all duration-200"
            >
              <Download size={20} />
              <span>Instalar Agora</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Recursos do CulturaBuilder</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Framework Python que estende Claude Code com comandos especializados, 
              personas inteligentes e integração MCP para desenvolvimento mais eficiente
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8 text-purple-400" />,
                title: "16 Comandos Especializados",
                description: "Comandos focados nas tarefas mais comuns: desenvolvimento (/cb:implement), análise (/cb:analyze), qualidade (/cb:test) e gerenciamento (/cb:task)."
              },
              {
                icon: <Users className="w-8 h-8 text-purple-400" />,
                title: "Smart Personas",
                description: "IA especializada que escolhe automaticamente o expert certo: architect, frontend, backend, analyzer, security, scribe e mais."
              },
              {
                icon: <Zap className="w-8 h-8 text-purple-400" />,
                title: "Integração MCP",
                description: "Context7 para documentação oficial, Sequential para pensamento complexo, Magic para UI, Playwright para automação."
              },
              {
                icon: <Settings className="w-8 h-8 text-purple-400" />,
                title: "Task Management",
                description: "Sistema que tenta manter track do progresso em projetos de desenvolvimento com smart routing."
              },
              {
                icon: <Terminal className="w-8 h-8 text-purple-400" />,
                title: "Token Optimization",
                description: "Otimização para ajudar com conversas mais longas e contexto estendido no Claude Code."
              },
              {
                icon: <Cpu className="w-8 h-8 text-purple-400" />,
                title: "Framework Python",
                description: "Instalação via PyPI com configuração automática em ~/.claude/ para integração perfeita com Claude Code."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Personas Section */}
      <section id="personas" className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Smart Personas</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              IA especializada que escolhe automaticamente o expert certo para diferentes domínios
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: "🏗️", name: "Architect", description: "Systems design and architecture stuff" },
              { emoji: "🎨", name: "Frontend", description: "UI/UX and accessibility" },
              { emoji: "⚙️", name: "Backend", description: "APIs and infrastructure" },
              { emoji: "🔍", name: "Analyzer", description: "Debugging and figuring things out" },
              { emoji: "🛡️", name: "Security", description: "Security concerns and vulnerabilities" },
              { emoji: "✍️", name: "Scribe", description: "Documentation and writing" }
            ].map((persona, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-600 rounded-lg p-6 text-center hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{persona.emoji}</div>
                <h3 className="text-lg font-semibold mb-2 text-white">{persona.name}</h3>
                <p className="text-gray-400 text-sm">{persona.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commands Section */}
      <section id="comandos" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">16 Comandos Especializados</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comandos focados nas tarefas mais comuns de desenvolvimento
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { cmd: "/cb:implement", category: "Development", desc: "Implementa funcionalidades e features", color: "blue" },
              { cmd: "/cb:build", category: "Development", desc: "Constrói e compila projeto com otimizações", color: "blue" },
              { cmd: "/cb:design", category: "Development", desc: "Auxilia no design e arquitetura", color: "blue" },
              { cmd: "/cb:analyze", category: "Analysis", desc: "Analisa código, performance e qualidade", color: "green" },
              { cmd: "/cb:troubleshoot", category: "Analysis", desc: "Identifica e resolve problemas", color: "green" },
              { cmd: "/cb:explain", category: "Analysis", desc: "Explica código, conceitos e implementações", color: "green" },
              { cmd: "/cb:improve", category: "Quality", desc: "Sugere melhorias e otimizações", color: "yellow" },
              { cmd: "/cb:test", category: "Quality", desc: "Gera e executa testes automatizados", color: "yellow" },
              { cmd: "/cb:cleanup", category: "Quality", desc: "Limpa e organiza código desnecessário", color: "yellow" },
              { cmd: "/cb:document", category: "Others", desc: "Gera documentação técnica", color: "gray" },
              { cmd: "/cb:git", category: "Others", desc: "Assistência com operações Git", color: "gray" },
              { cmd: "/cb:estimate", category: "Others", desc: "Estima tempo e complexidade", color: "gray" },
              { cmd: "/cb:task", category: "Others", desc: "Gerencia tarefas de desenvolvimento", color: "gray" },
              { cmd: "/cb:index", category: "Others", desc: "Indexa e organiza estrutura", color: "gray" },
              { cmd: "/cb:load", category: "Others", desc: "Carrega e processa arquivos", color: "gray" },
              { cmd: "/cb:spawn", category: "Others", desc: "Cria novos processos e componentes", color: "gray" }
            ].map((command, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <code className="bg-gray-800 text-purple-400 px-3 py-1 rounded text-sm font-mono">
                    {command.cmd}
                  </code>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    command.color === 'blue' ? 'bg-blue-900/50 text-blue-300' :
                    command.color === 'green' ? 'bg-green-900/50 text-green-300' :
                    command.color === 'yellow' ? 'bg-yellow-900/50 text-yellow-300' :
                    'bg-gray-700/50 text-gray-300'
                  }`}>
                    {command.category}
                  </span>
                </div>
                <p className="text-gray-400 mt-2 text-sm">{command.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Warning Section */}
      <section className="py-16 px-4 bg-yellow-900/10 border-y border-yellow-500/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-yellow-900/30 border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
              <AlertCircle size={16} className="text-yellow-400" />
              <span className="text-sm text-gray-300">⚠️ Importante para Usuários v2</span>
            </div>
            
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">Migrando do CulturaBuilder v2?</h2>
            <div className="bg-gray-900/50 border border-yellow-500/20 rounded-lg p-6 text-left">
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">🔄 Mudança Importante no Comando /build</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-2">
                  <span className="text-red-400">❌ v2:</span>
                  <code className="bg-gray-800 px-2 py-1 rounded text-sm">/build myFeature</code>
                  <span className="text-gray-400">→ implementação de features</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✅ v3:</span>
                  <code className="bg-gray-800 px-2 py-1 rounded text-sm">/cb:implement myFeature</code>
                  <span className="text-gray-400">→ implementação de features</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-400">🆕 v3:</span>
                  <code className="bg-gray-800 px-2 py-1 rounded text-sm">/cb:build</code>
                  <span className="text-gray-400">→ compilação/packaging apenas</span>
                </div>
              </div>
              <div className="mt-4 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded">
                <p className="text-sm text-gray-300">
                  <strong>Limpeza necessária:</strong> Desinstale v2 e remova arquivos antigos antes de instalar v3 
                  para evitar conflitos de estrutura.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Installation Section */}
      <InstallationSection />

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-green-900/30 border border-green-500/30 rounded-full px-4 py-2 mb-6">
              <CheckCircle size={16} className="text-green-400" />
              <span className="text-sm text-gray-300">Disponível Agora - Open Source</span>
            </div>
            
            <h2 className="text-4xl font-bold mb-4">Pronto para Acelerar seu Desenvolvimento?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Framework que estende Claude Code com <strong>16 comandos especializados</strong> e <strong>smart personas</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href="https://github.com/decomontenegro/CulturaBuilder-MCP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                <Github size={20} />
                <span>Começar Agora</span>
              </a>
              <a
                href="https://github.com/decomontenegro/CulturaBuilder-MCP/wiki"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white px-8 py-3 rounded-lg transition-all duration-200"
              >
                <ExternalLink size={20} />
                <span>Documentação</span>
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-400" />
                <span>Setup em <strong>minutos</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-400" />
                <span><strong>Open Source</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-400" />
                <span><strong>MIT License</strong></span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            CulturaBuilder MCP - Framework Open Source para Desenvolvimento com IA
          </p>
          <div className="flex justify-center items-center space-x-4 mt-4">
            <a
              href="https://github.com/decomontenegro/CulturaBuilder-MCP/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm flex items-center space-x-1"
            >
              <AlertCircle size={14} />
              <span>🐛 Reportar Problemas</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

