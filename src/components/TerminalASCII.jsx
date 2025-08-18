import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TerminalASCII = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

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
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentLine < asciiArt.length) {
        const line = asciiArt[currentLine];
        let charIndex = 0;
        
        const typeWriter = setInterval(() => {
          if (charIndex <= line.length) {
            setDisplayedText(prev => {
              const lines = prev.split('\n');
              lines[currentLine] = line.substring(0, charIndex);
              return lines.join('\n');
            });
            charIndex++;
          } else {
            clearInterval(typeWriter);
            setTimeout(() => {
              setCurrentLine(prev => prev + 1);
            }, 50);
          }
        }, 15);

        return () => clearInterval(typeWriter);
      } else if (!isComplete) {
        setIsComplete(true);
        setTimeout(() => {
          setDisplayedText(prev => prev + '\nuser@culturabuilder:~$ Bem vindo');
        }, 500);
      }
    }, currentLine === 0 ? 500 : 0);

    return () => clearTimeout(timer);
  }, [currentLine, isComplete]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <motion.div 
      className="terminal-window max-w-4xl mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Terminal Header */}
      <div className="terminal-header px-4 py-2 flex items-center justify-between">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-gray-300 text-sm font-mono">Terminal - CulturaBuilder</div>
        <div></div>
      </div>

      {/* Terminal Content */}
      <div className="terminal-content p-6">
        <div className="text-green-400 font-mono text-sm mb-2">
          user@culturabuilder:~$ MCP CulturaBuilder
        </div>
        
        <pre className="text-purple-400 font-mono text-xs sm:text-sm leading-tight whitespace-pre overflow-x-auto">
          {displayedText}
          {isComplete && showCursor && <span className="text-white">█</span>}
        </pre>
      </div>
    </motion.div>
  );
};

export default TerminalASCII;

