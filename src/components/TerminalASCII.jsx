import React, { useState, useEffect } from 'react'

const TerminalASCII = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentLine, setCurrentLine] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [isComplete, setIsComplete] = useState(false)

  const asciiArt = [
    ' ██████╗██╗   ██╗██╗  ████████╗██╗   ██╗██████╗  █████╗ ',
    '██╔════╝██║   ██║██║  ╚══██╔══╝██║   ██║██╔══██╗██╔══██╗',
    '██║     ██║   ██║██║     ██║   ██║   ██║██████╔╝███████║',
    '██║     ██║   ██║██║     ██║   ██║   ██║██╔══██╗██╔══██║',
    '╚██████╗╚██████╔╝███████╗██║   ╚██████╔╝██║  ██║██║  ██║',
    ' ╚═════╝ ╚═════╝ ╚══════╝╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝',
    '',
    '██████╗ ██╗   ██╗██╗██╗     ██████╗ ███████╗██████╗ ',
    '██╔══██╗██║   ██║██║██║     ██╔══██╗██╔════╝██╔══██╗',
    '██████╔╝██║   ██║██║██║     ██║  ██║█████╗  ██████╔╝',
    '██╔══██╗██║   ██║██║██║     ██║  ██║██╔══╝  ██╔══██╗',
    '██████╔╝╚██████╔╝██║███████╗██████╔╝███████╗██║  ██║',
    '╚═════╝  ╚═════╝ ╚═╝╚══════╝╚═════╝ ╚══════╝╚═╝  ╚═╝'
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentLine < asciiArt.length) {
        setDisplayedText(prev => prev + asciiArt[currentLine] + '\n')
        setCurrentLine(prev => prev + 1)
      } else if (!isComplete) {
        setIsComplete(true)
      }
    }, 75) // 25% mais rápido que antes

    return () => clearTimeout(timer)
  }, [currentLine, isComplete])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorTimer)
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-gray-900 rounded-lg border border-gray-700 shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2 border-b border-gray-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-gray-400 text-sm ml-4">Terminal - CulturaBuilder</div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm bg-black min-h-[400px]">
          <div className="text-green-400 mb-2">
            user@culturabuilder:~$ MCP CulturaBuilder
          </div>
          <pre className="text-purple-400 leading-tight whitespace-pre">
            {displayedText}
          </pre>
          {isComplete && (
            <div className="text-green-400 mt-4">
              user@culturabuilder:~$ Bem vindo{showCursor ? '█' : ' '}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TerminalASCII

