import React, { useState } from 'react'
import { Copy, Check, Download, Terminal, Settings, Play } from 'lucide-react'

const InstallationSection = () => {
  const [copiedStep, setCopiedStep] = useState(null)

  const copyToClipboard = (text, step) => {
    navigator.clipboard.writeText(text)
    setCopiedStep(step)
    setTimeout(() => setCopiedStep(null), 2000)
  }

  const installationSteps = [
    {
      number: 1,
      title: "Instalar CulturaBuilder",
      description: "Instale o pacote Python via PyPI",
      command: "pip install CulturaBuilder",
      icon: <Download className="w-6 h-6 text-purple-400" />
    },
    {
      number: 2,
      title: "Executar Instalador",
      description: "Configure a integração com Claude Code",
      command: "python3 -m CulturaBuilder install",
      icon: <Settings className="w-6 h-6 text-purple-400" />
    },
    {
      number: 3,
      title: "Verificar Instalação",
      description: "Teste se os comandos estão funcionando",
      command: "# No Claude Code, teste: /cb:explain",
      icon: <Terminal className="w-6 h-6 text-purple-400" />
    },
    {
      number: 4,
      title: "Começar a Usar",
      description: "Explore os 16 comandos disponíveis",
      command: "# Exemplo: /cb:implement nova funcionalidade",
      icon: <Play className="w-6 h-6 text-purple-400" />
    }
  ]

  const requirements = [
    { name: "Python 3.7+", status: "required", description: "Linguagem base do framework" },
    { name: "Claude Desktop", status: "required", description: "Cliente oficial da Anthropic" },
    { name: "pip/pip3", status: "required", description: "Gerenciador de pacotes Python" },
    { name: "Git", status: "recommended", description: "Para comandos /cb:git" }
  ]

  return (
    <section id="instalacao" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Instalação</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Processo simples de 2 etapas: instalar o pacote Python e executar o configurador
          </p>
        </div>

        {/* Requisitos */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Requisitos do Sistema</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {requirements.map((req, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className={`w-2 h-2 rounded-full ${
                    req.status === 'required' ? 'bg-red-400' : 
                    req.status === 'recommended' ? 'bg-yellow-400' : 'bg-green-400'
                  }`}></div>
                  <span className="font-medium text-white">{req.name}</span>
                </div>
                <p className="text-gray-400 text-sm">{req.description}</p>
                <span className={`text-xs px-2 py-1 rounded mt-2 inline-block ${
                  req.status === 'required' ? 'bg-red-900/50 text-red-300' : 
                  req.status === 'recommended' ? 'bg-yellow-900/50 text-yellow-300' : 'bg-green-900/50 text-green-300'
                }`}>
                  {req.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Passos de Instalação */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {installationSteps.map((step, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    {step.icon}
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-4">{step.description}</p>
                  <div className="bg-gray-900 rounded-lg p-3 font-mono text-sm">
                    <div className="flex items-center justify-between">
                      <code className="text-green-400">{step.command}</code>
                      <button
                        onClick={() => copyToClipboard(step.command, step.number)}
                        className="ml-2 p-1 text-gray-400 hover:text-purple-400 transition-colors duration-200"
                      >
                        {copiedStep === step.number ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Opções de Instalação */}
        <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Opções de Instalação Modernizadas</h3>
          
          {/* Instalação do Pacote */}
          <div className="mb-6">
            <h4 className="font-medium text-purple-400 mb-3">📦 Instalação do Pacote</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-900/50 rounded-lg p-4">
                <h5 className="font-medium text-green-400 mb-2">PyPI (Recomendado)</h5>
                <code className="text-sm text-gray-300">pip install CulturaBuilder</code>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4">
                <h5 className="font-medium text-blue-400 mb-2">UV (Moderno)</h5>
                <code className="text-sm text-gray-300">uv add CulturaBuilder</code>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4">
                <h5 className="font-medium text-cyan-400 mb-2">UVX (Cross-platform)</h5>
                <code className="text-sm text-gray-300">uvx pip install CulturaBuilder</code>
              </div>
            </div>
          </div>

          {/* Configuração */}
          <div>
            <h4 className="font-medium text-purple-400 mb-3">⚙️ Configuração</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-900/50 rounded-lg p-4">
                <h5 className="font-medium text-green-400 mb-2">Quick Setup (Recomendado)</h5>
                <code className="text-sm text-gray-300">python3 -m CulturaBuilder install</code>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4">
                <h5 className="font-medium text-yellow-400 mb-2">Instalação Interativa</h5>
                <code className="text-sm text-gray-300">CulturaBuilder install --interactive</code>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4">
                <h5 className="font-medium text-purple-400 mb-2">Setup Desenvolvedor</h5>
                <code className="text-sm text-gray-300">CulturaBuilder install --profile developer</code>
              </div>
            </div>
          </div>
        </div>

        {/* Links de Ajuda */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4 text-white">Precisa de Ajuda?</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/decomontenegro/CulturaBuilder-MCP/wiki"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded-lg transition-all duration-200 text-sm"
            >
              <span>📚 Documentação</span>
            </a>
            <a
              href="https://github.com/decomontenegro/CulturaBuilder-MCP/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded-lg transition-all duration-200 text-sm"
            >
              <span>🐛 Issues</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstallationSection

