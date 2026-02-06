"use client";

import { useState } from "react";
import Image from "next/image";
import { Typewriter } from "./components/Typewriter";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Nubank",
      role: "Software Engineer",
      date: "ABR 2025 - SET 2025",
      descriptions: [
        "Refatorei jobs de reconciliação de transações, reduzindo em 96% a quantidade de conexões ao nosso banco de dados.",
        "Migrei os arquivos estáticos para outro bucket, garantindo zero downtime, controlado por rollout de desenvolvimento e segmentação de usuários específicos para testes controlados."
      ],
      techStack: "Tech Stack: Go, AWS, Kubernetes, etc."
    },
    {
      company: "Empresa 2",
      role: "devops",
      date: "DATA INICIO - DATA FIM",
      descriptions: [
        "Descrição da atividade realizada na Empresa 2."
      ],
      techStack: "Tech Stack: Docker, Kubernetes, etc."
    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-[#272727]">
      <header className="flex items-center gap-4 p-4">
      <nav className="w-full py-4 flex gap-[24px] flex-wrap items-center justify-center bg-[#272727] fixed top-0 left-0  z-50">
        <a 
          className="flex items-center gap-2 hover:underline hover:underline-offset-4" 
          href="https://github.com/jefersonprimer" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <svg className="w-5 h-5 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span className="hidden sm:block">Github</span>
        </a>

        <a 
          className="flex items-center gap-2 hover:underline hover:underline-offset-4" 
          href="https://x.com/jeferson_primer" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <svg className="w-5 h-5 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          <span className="hidden sm:block">x.com</span>
        </a>
        
        <a 
          className="flex items-center gap-2 hover:underline hover:underline-offset-4" 
          href="https://www.linkedin.com/in/jefersonprimer" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <svg className="w-5 h-5 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          <span className="hidden sm:block">Linkedin</span>
        </a>
      </nav>
    </header>

      
      <main className="flex text-lg flex-col row-start-2">
        <div className="flex min-h-screen text-lg flex-col row-start-2 items-center justify-center">
          Oi! Eu sou o
          <h1 className="text-5xl mt-3 mb-5 text-center">
            <Typewriter text="Jeferson Primer :)" />
          </h1>
          <p className="max-w-5xl text-base leading-7 text-center">
            Um Engenheiro de Software ajudando pessoas na internet.<br />
            <span className="text-yellow-600">Pessoas</span> são o propósito e{' '}
            <span className="text-yellow-600">paixão</span> é o combustível. ❤️‍🔥
          </p>
          <div className="flex mt-15 gap-4 items-center flex-col sm:flex-row">
            <a 
              className="rounded-md border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto" 
              href="mailto:contato@jefersonprimer.com"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/>
                <rect x="2" y="4" width="20" height="16" rx="2"/>
              </svg>
              Me envie um e-mail!
            </a>
          </div>
        </div>

        <h1 id="sobre" className="text-left font-bold text-2xl">Sobre mim:</h1>
        <div className="flex flex-col sm:flex-row mb-10 items-center sm:items-start justify-between">
          <p className="my-10 leading-7 sm:mr-10 text-base text-left max-w-2xl">
            Sobre mim:
            Tenho 3 anos de experiência profissional como Engenheiro de Software, trabalhando para empresas.

            Sou otimista e busco viver a vida aproveitando a jornada.

            Nascido e crescido em Rio grande do sul.

            Em 2026 estou focando em meus projetos na internet, criando meu primeiro SAAS <a href="https://primerai.vercel.app/" alt="link primer ai" className="underline text-blue-400">Primer Ai</a>.
          </p>
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 mt-4 sm:mt-0">
            <Image 
              src="https://www.yudiganeko.com/_next/image?url=%2Fyudi.png&w=384&q=75" 
              alt="Jeferson Primer" 
              fill
              className="rounded-2xl object-cover"
              unoptimized
            />
          </div>
        </div>

        <h1 id="experiencia" className="text-left mb-10 font-bold text-2xl">Minha experiência:</h1>
        <div className="flex flex-col sm:flex-row">
          <ul className="flex flex-col py-8 px-2">
            {experiences.map((exp, index) => (
              <li
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-base cursor-pointer px-4 py-2 mb-2 transition-all ${
                  activeTab === index
                    ? "text-yellow-600 border-l-2 border-yellow-600 bg-[#192133]"
                    : "text-gray-400 hover:text-yellow-600 border-l-2 border-transparent"
                }`}
              >
                {exp.company}
              </li>
            ))}
          </ul>
          
          <div className="flex-1 p-8">
            <h2 className="text-2xl font-bold text-white mb-1">
              {experiences[activeTab].role}{' '}
              <span className="text-yellow-600">@ {experiences[activeTab].company}</span>
            </h2>
            <div className="text-gray-400 mb-6">{experiences[activeTab].date}</div>
            <ul className="text-sm leading-7 space-y-4 max-w-2xl">
              {experiences[activeTab].descriptions.map((desc, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <span className="text-yellow-600 mr-3">▸</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
             <div className="mt-4 text-sm text-gray-500">
                {experiences[activeTab].techStack}
             </div>
          </div>
        </div>

        <footer className="text-center text-sm text-gray-500 mt-20">
          Criado por Jeferson Primer usando NextJs e TailwindCSS.
          <br /> 
          © Todos os direitos reservados.
        </footer>
      </main>
    </div>
  );
}
