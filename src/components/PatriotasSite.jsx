"use client";

import { useState, useEffect, useRef } from "react";

const BRASAO = "/images/brasao.png";
const F01 = "/images/fundador01.png";
const F02 = "/images/fundador02.png";
const F03 = "/images/fundador03.png";
const F04 = "/images/fundador04.png";
const F05 = "/images/fundador05.png";
const F06 = "/images/fundador06.png";
const F07 = "/images/fundador07.png";
const F08 = "/images/fundador08.png";
const F09 = "/images/fundador09.png";
const F10 = "/images/fundador10.png";
const F11 = "/images/fundador11.png";
const F12 = "/images/fundador12.png";
const F13 = "/images/fundador13.png";
const F14 = "/images/fundador14.png";
const F15 = "/images/fundador15.png";
const FONT_URL = "/fonts/PointedlyMad.ttf";
const FONT_SANCREEK = "/fonts/sancreek.regular.ttf";
const ORGANO = "/images/organograma_patriotas.png";
const BRASAO_NOVO = "/images/brasao_novo.png";
const BRASAO_INI = "/images/brasao_inicial.png";
const BRASAO_MC = "/images/brasao_mc.png";
const BRASAO_MG = "/images/brasao_mg.png";
const BRASAO_MC_DF = "/images/brasao_mc_df.png";
const MUSICA = "/music/musica_patriotas.mp3";
const P01 = "/images/presidente_01.png";
const P02 = "/images/Presidente_02.png";
const P03 = "/images/Presidente_03.png";
const P04 = "/images/presidente_04.png";

export default function PatriotasSite() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [lightbox, setLightbox] = useState(null);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) { audio.pause(); setPlaying(false); }
    else { audio.play(); setPlaying(true); }
  };

  useEffect(() => {
    const s = document.createElement("style");
    s.textContent =
      "@font-face { font-family: 'PointedlyMad'; src: url('" + FONT_URL + "') format('truetype'); font-display: swap; } " +
      "@font-face { font-family: 'Sancreek'; src: url('" + FONT_SANCREEK + "') format('truetype'); font-display: swap; }";
    document.head.appendChild(s);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toRoman = (n) => {
    const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const syms = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let r = "";
    vals.forEach((v, i) => { while (n >= v) { r += syms[i]; n -= v; } });
    return r;
  };
  const anosDeExistencia = toRoman(new Date().getFullYear() - 2016);

  const scrollTo = (id) => {
    setActiveSection(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const valores = [
    { n: "01", t: "RESPEITO", d: "Tratar as pessoas com atenção, estima e fraternidade." },
    { n: "02", t: "INTEGRIDADE", d: "Agir sempre com honestidade, decência e dentro da Lei." },
    { n: "03", t: "AMIZADE", d: "Reciprocidade entre os integrantes, extensivo aos familiares." },
    { n: "04", t: "COMPROMISSO", d: "Acatar as decisões da Presidência, ratificada pelo clube." },
    { n: "05", t: "HONRADEZ", d: "Conduta pautada na probidade e respeito perante a sociedade." },
    { n: "06", t: "LEALDADE", d: "Fidelidade aos compromissos, agindo com responsabilidade." },
    { n: "07", t: "DISCIPLINA", d: "Obediência às regras que asseguram o bem-estar da coletividade." },
    { n: "08", t: "PARTICIPAÇÃO", d: "Tomar parte das atividades com responsabilidade e zelo." },
  ];

  const pelotoes = [
    { cidade: "MANAUS", uf: "AM", tipo: "PELOTÃO / SEDE NACIONAL", destaque: true, ano: "2016" },
    { cidade: "BRASÍLIA", uf: "DF", tipo: "PELOTÃO", destaque: false, ano: "2020" },
    { cidade: "RIO DE JANEIRO", uf: "RJ", tipo: "PELOTÃO", destaque: false, ano: "2021" },
    { cidade: "CAMPO GRANDE", uf: "MS", tipo: "PELOTÃO", destaque: false, ano: "2023" },
    { cidade: "TAUBATÉ", uf: "SP", tipo: "PELOTÃO", destaque: false, ano: "2026" },
  ];

  const diretoria = [
    { cargo: "PRESIDENTE", desc: "Representa o Moto Clube judicial e extrajudicialmente. Preside as reuniões." },
    { cargo: "VICE-PRESIDENTE", desc: "Responsável pela disciplina do clube e pela atividade de Inteligência e Informações." },
    { cargo: "SARGENTO D'ARMAS", desc: "Zela pela segurança dos membros e familiares nos eventos e deslocamentos." },
    { cargo: "SECRETÁRIO", desc: "Elabora atas, guarda a memória e planeja os eventos com Relações Públicas." },
    { cargo: "TESOUREIRO", desc: "Controle financeiro." },
    { cargo: "RELAÇÕES PÚBLICAS", desc: "Registro fotográfico, mídias sociais e divulgação dos eventos do clube." },
  ];

  const hierarquia = [
    { nivel: "AMIGO", cor: "#0656f5", desc: "Convidado dos membros para eventos do Moto Clube.", camisa: null },
    { nivel: "ASPIRANTE", cor: "#9ca3af", desc: "Camisa cinza. Período de avaliação de 6 meses. Mínimo 600km percorridos em passeios oficiais.", camisa: "CINZA" },
    { nivel: "MEMBRO", cor: "#eab308", desc: "Camisa preta. Direito a voto. Uso completo do brasão. Aprovação de 90% dos membros da UF.", camisa: "PRETA" },
    { nivel: "MEMBRO NÔMADE", cor: "#eab308", desc: "Camisa preta. Direito a voto. Uso completo do brasão. Aprovação de 90% dos membros da UF.", camisa: "PRETA" },
  ];

  const fundadores = [
    { id: 1,  nome: "FABINHO",    patente: "A DEFINIR", foto: F01 },
    { id: 2,  nome: "HUSS",       patente: "A DEFINIR", foto: F02 },
    { id: 3,  nome: "MORAES",     patente: "A DEFINIR", foto: F03 },
    { id: 4,  nome: "PEREIRA SOUZA", patente: "A DEFINIR", foto: F04 },
    { id: 5,  nome: "DÓREA",      patente: "A DEFINIR", foto: F05 },
    { id: 6,  nome: "DIAS LOBO",  patente: "A DEFINIR", foto: F06 },
    { id: 7,  nome: "ROSSINI",    patente: "A DEFINIR", foto: F07 },
    { id: 8,  nome: "DIAS PIRES", patente: "A DEFINIR", foto: F08 },
    { id: 9,  nome: "NAVAL",      patente: "A DEFINIR", foto: F09 },
    { id: 10, nome: "BRAGA",      patente: "A DEFINIR", foto: F10 },
    { id: 11, nome: "MICHEL",     patente: "A DEFINIR", foto: F11 },
    { id: 12, nome: "F. FREITAS", patente: "A DEFINIR", foto: F12 },
    { id: 13, nome: "PAIVA",      patente: "A DEFINIR", foto: F13 },
    { id: 14, nome: "DE PAULA",   patente: "A DEFINIR", foto: F14 },
    { id: 15, nome: "RENATINHO",  patente: "A DEFINIR", foto: F15 },
  ];

  const presidentes = [
    { nome: "MORAES", periodo: "2021 – 2023", local: "Manaus · AM", foto: P01 },
    { nome: "PEREIRA SOUZA", periodo: "2023 – 2025", local: "Manaus · AM", foto: P02 },
    { nome: "BRAGA", periodo: "2025 – 2026", local: "Manaus · AM", foto: P03 },
    { nome: "FABINHO", periodo: "2026 – atual", local: "Manaus · AM", foto: P04 },
  ];

  const galeria = Array(9).fill(null).map((_, i) => ({
    id: i,
    titulo: `PATRIOTAS · FOTO ${i + 1}`,
    placeholder: true,
  }));

  const navLinks = [
    { id: "home", label: "HOME" },
    { id: "sobre", label: "SOBRE" },
    { id: "fundadores", label: "FUNDADORES" },
    { id: "brasao", label: "BRASÃO" },
    { id: "direcao", label: "DIREÇÃO" },
    { id: "pelotoes", label: "PELOTOES" },
    { id: "hierarquia", label: "HIERARQUIA" },
    { id: "presidentes", label: "PRESIDENTES" },
    { id: "galeria", label: "GALERIA" },
    { id: "contato", label: "CONTATO" },
  ];

  return (
    <div className="min-h-screen text-zinc-100" style={{ fontFamily: "'Rye', serif", background: "#0e0d0b" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rye&family=Special+Elite&family=Oswald:wght@300;400;600&display=swap');

        /* ── POINTEDLY MAD via CDN ── */
        * { box-sizing: border-box; }

        body { background: #0e0d0b; }

        /* ── FONTES ── */
        .f-mad    { font-family: 'PointedlyMad', 'Rye', serif; }
        .f-rye    { font-family: 'Rye', serif; }
        .f-stencil{ font-family: 'Special Elite', monospace; }
        .f-body   { font-family: 'Oswald', sans-serif; }
        .f-sans   { font-family: 'Sancreek', serif; }

        /* ── COURO / TEXTURA ── */
        .leather-bg {
          background-color: #0e0d0b;
          background-image:
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noise)' opacity='0.12'/%3E%3C/svg%3E"),
            repeating-linear-gradient(
              102deg,
              transparent 0px, transparent 2px,
              rgba(255,255,255,0.008) 2px, rgba(255,255,255,0.008) 4px
            ),
            radial-gradient(ellipse at 20% 50%, rgba(60,45,20,0.35) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(40,55,30,0.2) 0%, transparent 50%);
        }

        .leather-card {
          background:
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.15'/%3E%3C/svg%3E"),
            linear-gradient(135deg, #1a1712 0%, #141310 50%, #191713 100%);
          border: 1px solid rgba(139,111,46,0.3);
          position: relative;
        }

        .leather-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 8px,
            rgba(255,255,255,0.008) 8px,
            rgba(255,255,255,0.008) 9px
          );
          pointer-events: none;
        }

        /* ── PATCH (efeito bordado) ── */
        .patch {
          position: relative;
          border: 2px solid;
          box-shadow:
            0 0 0 1px rgba(0,0,0,0.8),
            inset 0 0 0 1px rgba(255,255,255,0.05),
            0 4px 20px rgba(0,0,0,0.6);
        }

        /* ── FAIXA RASGADA ── */
        .torn-edge-top::before {
          content: '';
          display: block;
          height: 24px;
          background: inherit;
          clip-path: polygon(0 100%, 2% 20%, 4% 80%, 6% 10%, 9% 70%, 11% 5%, 14% 65%, 17% 15%, 20% 75%, 23% 10%, 26% 60%, 29% 20%, 32% 80%, 35% 5%, 38% 70%, 41% 30%, 44% 85%, 47% 15%, 50% 75%, 53% 10%, 56% 70%, 59% 25%, 62% 80%, 65% 10%, 68% 65%, 71% 20%, 74% 75%, 77% 15%, 80% 60%, 83% 5%, 86% 70%, 89% 20%, 92% 80%, 95% 10%, 98% 60%, 100% 30%, 100% 100%);
          margin-top: -24px;
        }

        /* ── ANIMAÇÕES ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes flicker {
          0%,100% { opacity: 1; }
          92%      { opacity: 1; }
          93%      { opacity: 0.85; }
          94%      { opacity: 1; }
          96%      { opacity: 0.9; }
          97%      { opacity: 1; }
        }
        .anim-fadeup { animation: fadeUp 1s ease-out forwards; }
        .flicker     { animation: flicker 6s infinite; }

        /* ── UTILITY ── */
        .amber { color: #c9973a; }
        .pm-gold { color: #FFCC00; }
        .olive  { color: #7a8c5c; }
        .gold-border { border-color: rgba(201,151,58,0.4); }
        .olive-border { border-color: rgba(122,140,92,0.4); }

        .section-tag {
          font-family: 'Special Elite', monospace;
          font-size: 10px;
          letter-spacing: 0.35em;
          color: #7a8c5c;
          margin-bottom: 12px;
        }

        .divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 16px 0;
        }
        .divider::before, .divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(201,151,58,0.5), transparent);
        }

        .scratched {
          position: relative;
        }
        .scratched::after {
          content: '';
          position: absolute;
          top: 15%;
          left: 5%;
          width: 30%;
          height: 1px;
          background: rgba(255,255,255,0.04);
          transform: rotate(-2deg);
          box-shadow: 0 8px 0 rgba(255,255,255,0.03), 0 -5px 0 rgba(255,255,255,0.02);
        }

        /* scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0e0d0b; }
        ::-webkit-scrollbar-thumb { background: #3d3020; border-radius: 3px; }
      `}</style>

      {/* ════════════════ NAV ════════════════ */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "border-b" : ""}`}
        style={{
          background: scrolled ? "rgba(14,13,11,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderColor: "rgba(201,151,58,0.2)",
        }}>
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-3">
            <div className="w-14 h-14 flex items-center justify-center overflow-hidden"
              style={{ background: "transparent" }}>
              <img src={BRASAO} alt="Patriotas MC" style={{ width:"100%" }} />
            </div>
            <div className="hidden sm:block">
              <div className="f-mad leading-none amber" style={{ fontSize: 28, letterSpacing: "0.05em" }}>PATRIOTAS</div>
              <div className="f-mad leading-none amber" style={{ fontSize: 18, letterSpacing: "0.4em" }}>BRASIL</div>
              <div className="f-mad leading-none amber" style={{ fontSize: 14, letterSpacing: "0.4em" }}>LE · MC</div>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-0">
            {navLinks.map((s) => (
              <button key={s.id} onClick={() => scrollTo(s.id)}
                className="f-stencil px-3 py-2 transition-all"
                style={{
                  fontSize: 14,
                  letterSpacing: "0.25em",
                  color: activeSection === s.id ? "#c9973a" : "#6b6454",
                }}>
                {s.label}
              </button>
            ))}
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden amber">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen
                ? <path d="M6 6l12 12M6 18L18 6" />
                : <path d="M3 7h18M3 12h18M3 17h18" />}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t" style={{ background: "#0e0d0b", borderColor: "rgba(201,151,58,0.2)" }}>
            {navLinks.map((s) => (
              <button key={s.id} onClick={() => scrollTo(s.id)}
                className="block w-full text-left px-6 py-3 f-stencil transition-colors"
                style={{ fontSize: 12, letterSpacing: "0.3em", color: "#8a7a5c" }}>
                {s.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ════════════════ HERO ════════════════ */}
      <section id="home" className="leather-bg relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* radial glow verde oliva */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(74,92,64,0.12) 0%, transparent 70%)" }} />
        {/* borda superior dourada */}
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(201,151,58,0.6), transparent)" }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 anim-fadeup">
        
          {/* 2 colunas: brasão | texto */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14 mb-10">

            {/* brasão */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <img src={BRASAO} alt="Brasão Patriotas Brasil MC"
                style={{
                  width: "clamp(240px, 36vw, 460px)",
                  filter: "drop-shadow(0 0 40px rgba(201,151,58,0.55)) drop-shadow(0 0 12px rgba(122,140,92,0.3))",
                }} />
            </div>

            {/* título + heráldica + lema + CTAs */}
            <div className="flex-1 text-center">
              <h1 className="f-mad flicker leading-none mb-1"
                style={{ fontSize: "clamp(54px,9vw,130px)", color: "#fad608", letterSpacing: "0.04em",
                  textShadow: "0 0 40px rgba(255,204,0,0.25), 0 2px 4px rgba(0,0,0,0.9)" }}>
                PATRIOTAS
              </h1>
              <h2 className="f-mad leading-none mb-1"
                style={{ fontFamily: "'PointedlyMad', 'Rye', serif", fontSize: "clamp(32px,6vw,80px)", color: "#fad608", letterSpacing: "0.06em",
                  textShadow: "0 2px 4px rgba(0,0,0,0.9)" }}>
                BRASIL
              </h2>
              <p className="f-mad leading-none mb-5"
                style={{ fontFamily: "'PointedlyMad', 'Rye', serif", fontSize: "clamp(14px,2.5vw,32px)", color: "#fad608", letterSpacing: "0.1em" }}>
                LE &nbsp;·&nbsp; MC
              </p>

              <div className="divider mb-5" style={{ maxWidth: 400, marginLeft: "auto", marginRight: "auto" }} />


              <p className="f-rye mb-6"
                style={{ fontSize: "clamp(11px,1.6vw,16px)", color: "#8a7a5c", letterSpacing: "0.08em" }}>
                "VIDA LONGA AOS PATRIOTAS !"
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button onClick={() => scrollTo("sobre")}
                  className="px-8 py-3 f-rye transition-all"
                  style={{ background: "linear-gradient(135deg,#8a6520,#c9973a)", color: "#0e0d0b",
                    fontSize: 13, letterSpacing: "0.1em", border: "none",
                    boxShadow: "0 4px 20px rgba(201,151,58,0.3), inset 0 1px 0 rgba(255,255,255,0.15)" }}>
                  CONHEÇA A IRMANDADE
                </button>
                <button onClick={() => scrollTo("contato")}
                  className="px-8 py-3 f-rye transition-all patch"
                  style={{ background: "linear-gradient(135deg,#8a6520,#c9973a)", color: "#0e0d0b",
                    fontSize: 13, letterSpacing: "0.1em", border: "none",
                    boxShadow: "0 4px 20px rgba(201,151,58,0.3), inset 0 1px 0 rgba(255,255,255,0.15)" }}>
                  ENTRE EM CONTATO
                </button>
              </div>

              {/* stats */}
              <div className="flex justify-center items-center gap-3 flex-wrap mt-8">
                {[
                  { n: "V", l: "PELOTÕES" },
                  { n: anosDeExistencia, l: "ANOS" },
                  { n: "XV", l: "FUNDADORES" },
                  { n: "XCI", l: "PATRIOTAS MEMBROS" },
                ].map((s, i) => (
                  <div key={i} className="leather-card patch px-6 py-4 min-w-[90px] text-center"
                    style={{ borderColor: "rgba(201,151,58,0.35)" }}>
                    <div className="f-mad amber" style={{ fontSize: 36, lineHeight: 1 }}>{s.n}</div>
                    <div className="f-stencil" style={{ fontSize: 13, letterSpacing: "0.35em", color: "#6b6454", marginTop: 4 }}>
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* player de música */}
        <audio ref={audioRef} src={MUSICA} loop />
        <div className="mt-8 flex items-center gap-3">
          <button onClick={toggleMusic}
            className="flex items-center gap-3 px-5 py-2 leather-card patch transition-all"
            style={{ borderColor: "rgba(201,151,58,0.45)", background: "rgba(14,13,11,0.85)" }}>
            {playing ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#fad608"><rect x="5" y="4" width="4" height="16"/><rect x="15" y="4" width="4" height="16"/></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#fad608"><polygon points="5,3 19,12 5,21"/></svg>
            )}
            <span className="f-stencil" style={{ fontSize: 11, letterSpacing: "0.3em", color: "#8a7a5c" }}>
              {playing ? "PAUSAR MÚSICA" : "MÚSICA PATRIOTAS"}
            </span>
          </button>
        </div>

        {/* Nota de rodapé */}
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px flex-1" style={{ background: "linear-gradient(to right, rgba(201,151,58,0.3), transparent)" }}/>
            <span className="f-stencil" style={{ fontSize: 12, color: "#3a3028", letterSpacing: "0.3em" }}>
              MANAUS · AM · XVI · IV · MMXVI
            </span>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left, rgba(201,151,58,0.3), transparent)" }}/>
          </div>

      </section>

      {/* ════════════════ SOBRE ════════════════ */}
      <section id="sobre" className="leather-bg relative py-28 px-6">
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(122,140,92,0.4), transparent)" }} />

        <div className="max-w-6xl mx-auto">
          <h2 className="f-sans amber mb-16"
            style={{ fontSize: "clamp(40px,7vw,80px)", color: "#fad608", lineHeight: 1, letterSpacing: "0.04em", 
              textShadow: "0 2px 6px rgba(0,0,0,0.8)" }}>
            NOSSA HISTÓRIA
          </h2>

          {/* linha do tempo */}
          <div className="relative grid md:grid-cols-2 gap-8 mb-20">
            {[
              {
                data: "26 · ABR · 2016",
                titulo: "A SEMENTE - MOTO GRUPO",
                texto: `Em Manaus, um grupo de militares das Forças Armadas e Auxiliares se reunia nos finais de semana para percorrer as estradas da cidade. Nascia o Patriotas Moto Grupo AM — unido pela paixão ao motociclismo e pelos princípios compartilhados na farda.`,
              },
              {
                data: "05 · ABR · 2021",
                titulo: "A FUNDAÇÃO - MOTO CLUBE",
                texto: `O Patriotas Brasil Moto Clube nasce oficialmente com 15 motociclistas. A data em que pela primeira vez vestimos nossas camisetas pretas e fomos reconhecidos como Moto Clube pela sociedade manauara. Em maio, recebemos as camisas cinza de botão na sede do nosso padrinho: o Moto Clube Open Road.`,
              },
              {
                data: "xx · xxx · xxxx",
                titulo: "CRIAÇÃO DOS PELOTÕES - MOTO CLUBE AM",
                texto: `O Patriotas Brasil Moto Clube com seus irmãos sendo transferidos tem inicio aos demais pelotões, iniciando por Brasília, passando pelo Rio de Janeiro, Campo Grande e São Paulo.`,
              },
              {
                data: "xx · xxx · xxxx",
                titulo: "LEMC - LAW ENFORCMENT MOTO CLUBE",
                texto: `O Patriotas Brasil Moto Clube passa a ser considerado LE bla bla bla .......`,
              },
            ].map((item, i) => (
              <div key={i} className="leather-card patch p-7 scratched"
                style={{ borderColor: i === 0 ? "rgba(122,140,92,0.4)" : "rgba(201,151,58,0.4)" }}>
                <div className="f-stencil mb-3" style={{ fontSize: 13, letterSpacing: "0.35em", color: i === 0 ? "#7a8c5c" : "#c9973a" }}>
                  {item.data}
                </div>
                <h3 className="f-sans mb-4" style={{ fontSize: 28, color: i === 0 ? "#7a8c5c" : "#c9973a", letterSpacing: "0.05em" }}>
                  {item.titulo}
                </h3>
                <p className="f-body" style={{ fontSize: 18, color: i === 0 ? "#7a8c5c" : "#c9973a", lineHeight: 1.7, textAlign: "justify" }}>
                  {item.texto}
                </p>
              </div>
            ))}
          </div>

          {/* valores */}
          <h3 className="f-sans mb-10" style={{ fontSize: 40, color: "#fad608", letterSpacing: "0.04em" }}>
            O QUE NOS MOVE
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {valores.map((v) => (
              <div key={v.n} className="leather-card p-5 group transition-all"
                style={{ borderColor: "rgba(122,140,92,0.25)" }}>
                <div className="f-sans mb-2" style={{ fontSize: 22, color: "#e8e0cc", letterSpacing: "0.05em" }}>{v.t}</div>
                <div className="f-body" style={{ fontSize: 16, color: "#6b6454", lineHeight: 1.6 }}>{v.d}</div>
              </div>
            ))}
          </div>

          {/* Nota de rodapé */}
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px flex-1" style={{ background: "linear-gradient(to right, rgba(201,151,58,0.3), transparent)" }}/>
            <span className="f-stencil" style={{ fontSize: 12, color: "#3a3028", letterSpacing: "0.3em" }}>
              MANAUS · AM · XVI · IV · MMXVI
            </span>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left, rgba(201,151,58,0.3), transparent)" }}/>
          </div>

        </div>
      </section>


      {/* ════════════════ FUNDADORES ════════════════ */}
      <section id="fundadores" className="leather-bg relative py-28 px-6">
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(201,151,58,0.3), transparent)" }} />
        <div className="max-w-6xl mx-auto">

          <h2 className="f-sans amber mb-4"
            style={{ fontSize: "clamp(40px,7vw,80px)", color: "#fad608", lineHeight: 1, letterSpacing: "0.04em" }}>
            OS FUNDADORES
          </h2>
          <p className="f-body mb-16"
            style={{ fontSize: 18, color: "#6b6454", maxWidth: 700, lineHeight: 1.9, whiteSpace: "nowrap" }}>
            Em 05 de abril de 2021, quinze motociclistas vestiram pela primeira vez a camiseta preta e fundaram o Patriotas Brasil Moto Clube em Manaus/AM.
          </p>

          {/* ── FOTO COLETIVA ── */}
          <div className="mb-16">
            <div className="leather-card patch relative overflow-hidden"
              style={{ borderColor: "rgba(201,151,58,0.4)", aspectRatio: "16/7" }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1" style={{ color: "#2a2518" }}>
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <path d="M21 15l-5-5L5 21"/>
                </svg>
                <span className="f-stencil" style={{ fontSize: 10, letterSpacing: "0.4em", color: "#2a2518" }}>
                  FOTO DOS 15 FUNDADORES · 26 · ABR · 2016
                </span>
              </div>
              {/* Overlay cantos com data */}
              <div className="absolute top-4 left-4 f-stencil amber"
                style={{ fontSize: 9, letterSpacing: "0.35em" }}>
                PATRIOTAS BRASIL MC
              </div>
              <div className="absolute bottom-4 right-4 f-stencil"
                style={{ fontSize: 9, letterSpacing: "0.35em", color: "#4a4035" }}>
                MANAUS · AM · MMXXI
              </div>
            </div>
          </div>

          {/* ── GRID INDIVIDUAL ── */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {fundadores.map((f) => (
              <div key={f.id} className="leather-card patch text-center py-6 px-3 group"
                style={{ borderColor: "rgba(201,151,58,0.25)" }}>

                {/* Foto */}
                <div className="w-full mb-3 overflow-hidden flex items-center justify-center"
                  style={{ borderRadius: 10, border: "1px solid rgba(201,151,58,0.4)", background: "rgba(201,151,58,0.04)", aspectRatio: "3/4" }}>
                  {f.foto
                    ? <img src={f.foto} alt={f.nome} style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top" }} />
                    : <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="1" style={{ color: "#3a3028" }}>
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                  }
                </div>

                {/* Número do fundador */}
                <div className="f-stencil amber mt-2 mb-1"
                  style={{ fontSize: 12, letterSpacing: "0.35em" }}>
                  FUNDADOR {String(f.id).padStart(2,"0")}
                </div>

                {/* Nome */}
                <div className="f-sans" style={{ fontSize: 18, color: "#fad608", letterSpacing: "0.04em", lineHeight: 1.2 }}>
                  {f.nome}
                </div>

              </div>
            ))}
          </div>

          {/* Nota de rodapé */}
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px flex-1" style={{ background: "linear-gradient(to right, rgba(201,151,58,0.3), transparent)" }}/>
            <span className="f-stencil" style={{ fontSize: 12, color: "#3a3028", letterSpacing: "0.3em" }}>
              MANAUS · AM · XVI · IV · MMXVI
            </span>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left, rgba(201,151,58,0.3), transparent)" }}/>
          </div>

        </div>
      </section>


      {/* ════════════════ BRASÃO ════════════════ */}
      <section id="brasao" className="relative py-28 px-6"
        style={{ background: "linear-gradient(180deg,#0e0d0b 0%,#12100d 50%,#0e0d0b 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="f-sans amber mb-16" style={{ fontSize: "clamp(40px,7vw,80px)", color: "#fad608", lineHeight: 1, letterSpacing: "0.04em" }}>
            O BRASÃO
          </h2>

          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* placeholder brasão */}
            <div className="relative flex items-center justify-center" style={{ maxWidth: 560 }}>
              <img src={BRASAO} alt="Brasão Patriotas Brasil LE MC"
                style={{ width:"100%",
                  filter:"drop-shadow(0 0 36px rgba(201,151,58,0.55)) drop-shadow(0 0 10px rgba(122,140,92,0.35))" }} />
            </div>

            {/* descrição */}
            <div>
              <h3 className="f-sans mb-6" style={{ fontSize: 30, color: "#fad608", letterSpacing: "0.05em" }}>
                HERÁLDICA
              </h3>
              <p className="f-body mb-8" style={{ fontSize: 18, color: "#8a7a5c", lineHeight: 1.8, textAlign: "justify" }}>
                O brasão e a bandeira representam a identidade visual do Moto Clube, através da caveira alada com as asas estampadas nas cores da Bandeira do Brasil, com as inscrições "PATRIOTAS" na faixa superior e "BRASIL" na faixa inferior.
              </p>
              <div className="space-y-5">
                {[
                  { t: "A CAVEIRA", d: "Símbolo de igualdade entre os integrantes e do destino que a todos une.", c: "#fad608" },
                  { t: "O CAPACETE VINTAGE", d: "Tributo aos primeiros motociclistas e à tradição das duas rodas.", c: "#7a8c5c" },
                  { t: "AS ASAS DA PÁTRIA", d: "Cores da Bandeira Nacional — o amor ao Brasil que nos move.", c: "#fad608" },
                  { t: "AS FAIXAS", d: "PATRIOTAS no topo, BRASIL na base — nosso nome e nossa origem.", c: "#7a8c5c" },
                  { t: "LE MC", d: "LAW ENFORCMENT MOTO CLUBE.", c: "#fad608" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-0.5 mt-1 self-stretch" style={{ background: item.c, minHeight: 36, opacity: 0.6 }} />
                    <div>
                      <div className="f-sans" style={{ fontSize: 18, color: item.c, letterSpacing: "0.06em" }}>{item.t}</div>
                      <div className="f-body" style={{ fontSize: 14, color: "#6b6454", marginTop: 2 }}>{item.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </div>
          <h3 className="f-sans mt-20 mb-10" style={{ fontSize: 40, color: "#fad608", letterSpacing: "0.04em" }}>
            HISTÓRICO DE BRASÕES
          </h3>

          <div className="grid md:grid-cols-4 gap-14 items-start">
            {[
              { src: BRASAO_INI, alt: "Brasão Inicial", label: "Primeiro protótipo do Moto Grupo." },
              { src: BRASAO_MG,  alt: "Brasão Moto Grupo", label: "Brasão do PATRIOTAS MOTO GRUPO." },
              { src: BRASAO_MC,  alt: "Brasão Moto Clube", label: "Brasão do PATRIOTAS MOTO CLUBE." },
              { src: BRASAO_MC_DF, alt: "Brasão MC DF", label: "Brasão do PATRIOTAS MOTO CLUBE no estado." },
            ].map((b, i) => (
              <div key={i} className="flex flex-col items-center">
                <div style={{ height: 280, display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                  <img src={b.src} alt={b.alt}
                    style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain",
                      filter: "drop-shadow(0 0 36px rgba(201,151,58,0.55)) drop-shadow(0 0 10px rgba(122,140,92,0.35))" }} />
                </div>
                <p className="f-body mt-4 text-center" style={{ fontSize: 16, color: "#8a7a5c", lineHeight: 1.8 }}>
                  {b.label}
                </p>
              </div>
            ))}
          </div>
          {/* Nota de rodapé */}
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px flex-1" style={{ background: "linear-gradient(to right, rgba(201,151,58,0.3), transparent)" }}/>
            <span className="f-stencil" style={{ fontSize: 12, color: "#3a3028", letterSpacing: "0.3em" }}>
              MANAUS · AM · XVI · IV · MMXVI
            </span>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left, rgba(201,151,58,0.3), transparent)" }}/>
          </div>
        </div>
      </section>

      {/* ════════════════ DIREÇÃO ════════════════ */}
      <section id="direcao" className="leather-bg relative py-28 px-6">
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(201,151,58,0.3), transparent)" }} />
        <div className="max-w-6xl mx-auto">
          <h2 className="f-sans amber mb-4" style={{ fontSize: "clamp(40px,7vw,80px)", lineHeight: 1, letterSpacing: "0.04em", color: "#fad608" }}>
            DIREÇÃO NACIONAL
          </h2>
          <p className="f-body mb-16"
            style={{ fontSize: 18, color: "#6b6454", maxWidth: 700, lineHeight: 1.9, whiteSpace: "nowrap" }}>
            Cada função da Diretoria tem responsabilidades claras definidas pelo Estatuto, garantindo disciplina, organização e o cumprimento dos valores do clube.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {diretoria.map((d, i) => (
              <div key={i} className="leather-card patch p-6 relative overflow-hidden"
                style={{ borderColor: i % 2 === 0 ? "rgba(201,151,58,0.3)" : "rgba(122,140,92,0.3)" }}>
                {/* número grande de fundo */}
                <div className="absolute top-2 right-3 f-mad"
                  style={{ fontSize: 80, color: "rgba(201,151,58,0.04)", lineHeight: 1 }}>
                  0{i + 1}
                </div>
                <div className="relative z-10">

                  <h3 className="f-sans mb-3" style={{ fontSize: 20, color: "#e8e0cc", letterSpacing: "0.06em" }}>{d.cargo}</h3>
                  <p className="f-body" style={{ fontSize: 14, color: "#6b6454", lineHeight: 1.7 }}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Nota de rodapé */}
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px flex-1" style={{ background: "linear-gradient(to right, rgba(201,151,58,0.3), transparent)" }}/>
            <span className="f-stencil" style={{ fontSize: 12, color: "#3a3028", letterSpacing: "0.3em" }}>
              MANAUS · AM · XVI · IV · MMXVI
            </span>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left, rgba(201,151,58,0.3), transparent)" }}/>
          </div>
        </div>
      </section>

      {/* ════════════════ PELOTÕES ════════════════ */}
      <section id="pelotoes" className="relative py-28 px-6"
        style={{ background: "linear-gradient(180deg,#0e0d0b,#0f0e0b,#0e0d0b)" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="f-sans amber mb-4" style={{ fontSize: "clamp(40px,7vw,80px)", lineHeight: 1, letterSpacing: "0.04em", color: "#fad608" }}>
            NOSSOS PELOTÕES
          </h2>
          <p className="f-body mb-10" style={{ fontSize: 16, color: "#6b6454", maxWidth: 480, lineHeight: 1.8, whiteSpace: "nowrap" }}>
            Iniciamos em Manaus e expandimos pela nação. Cada pelotão carrega os mesmos valores e honra da sede nacional.
          </p>

          <div className="flex justify-center mb-20">
            <img src={ORGANO} alt="Organograma Patriotas Brasil MC"
              style={{ maxWidth: "100%", filter: "drop-shadow(0 0 20px rgba(201,151,58,0.3))" }} />
          </div>
          {/* Nota de rodapé */}
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px flex-1" style={{ background: "linear-gradient(to right, rgba(201,151,58,0.3), transparent)" }}/>
            <span className="f-stencil" style={{ fontSize: 12, color: "#3a3028", letterSpacing: "0.3em" }}>
              MANAUS · AM · XVI · IV · MMXVI
            </span>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left, rgba(201,151,58,0.3), transparent)" }}/>
          </div>
          
        </div>
      </section>

      {/* ════════════════ HIERARQUIA ════════════════ */}
      <section id="hierarquia" className="leather-bg relative py-28 px-6">
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(122,140,92,0.4), transparent)" }} />
        <div className="max-w-5xl mx-auto">
          <h2 className="f-sans amber mb-4" style={{ fontSize: "clamp(40px,7vw,80px)", lineHeight: 1, letterSpacing: "0.04em", color: "#fad608" }}>
            A JORNADA
          </h2>
          <p className="f-body mb-14" style={{ fontSize: 14, color: "#6b6454", maxWidth: 520, lineHeight: 1.8, whiteSpace: "nowrap" }}>
            Tornar-se um Patriota é um processo de honra, observação e compromisso. Cada nível representa irmandade conquistada com dedicação e caráter.
          </p>

          <div className="space-y-4">
            {hierarquia.map((h, i) => (
              <div key={i} className="flex gap-5 items-stretch">
                {/* número */}
                <div className="flex-shrink-0 flex flex-col items-center gap-1">
                  <div className="w-14 h-14 patch flex items-center justify-center f-sans"
                    style={{ fontSize: 24, borderColor: h.cor, color: h.cor, background: "rgba(14,13,11,0.9)" }}>
                    0{i + 1}
                  </div>
                  {i < hierarquia.length - 1 && (
                    <div className="w-px flex-1" style={{ background: `${h.cor}30`, minHeight: 20 }} />
                  )}
                </div>

                {/* conteúdo */}
                <div className="flex-1 leather-card patch p-5 mb-4"
                  style={{ borderColor: `${h.cor}40` }}>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="f-sans" style={{ fontSize: 24, color: h.cor, letterSpacing: "0.06em" }}>{h.nivel}</h3>
                    {h.camisa && (
                      <span className="f-stencil px-2 py-0.5"
                        style={{ fontSize: 12, letterSpacing: "0.3em", border: `1px solid ${h.cor}50`, color: h.cor }}>
                        CAMISA {h.camisa}
                      </span>
                    )}
                  </div>
                  <p className="f-body" style={{ fontSize: 13, color: "#6b6454", lineHeight: 1.7 }}>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Nota de rodapé */}
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px flex-1" style={{ background: "linear-gradient(to right, rgba(201,151,58,0.3), transparent)" }}/>
            <span className="f-stencil" style={{ fontSize: 12, color: "#3a3028", letterSpacing: "0.3em" }}>
              MANAUS · AM · XVI · IV · MMXVI
            </span>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left, rgba(201,151,58,0.3), transparent)" }}/>
          </div>
        </div>
      </section>

      {/* ════════════════ EX-PRESIDENTES ════════════════ */}
      <section id="presidentes" className="relative py-28 px-6"
        style={{ background: "linear-gradient(180deg,#0e0d0b,#100f0c,#0e0d0b)" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="f-sans amber mb-4" style={{ fontSize: "clamp(40px,7vw,80px)", lineHeight: 1, letterSpacing: "0.04em", color: "#fad608" }}>
            PRESIDENTES NACIONAIS
          </h2>
          <p className="f-body mb-14" style={{ fontSize: 16, color: "#6b6454", maxWidth: 520, lineHeight: 1.8, whiteSpace: "nowrap" }}>
            Os líderes que carregaram o colete e conduziram a irmandade. Cada mandato, uma página na história dos Patriotas.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {presidentes.map((p, i) => (
              <div key={i} className="leather-card patch overflow-hidden"
                style={{ borderColor: "rgba(201,151,58,0.3)" }}>
                {/* foto */}
                <div style={{ height: 320, overflow: "hidden", position: "relative" }}>
                  <img src={p.foto} alt={p.nome}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top",
                      filter: "grayscale(20%) contrast(1.05)" }} />
                  {i === presidentes.length - 1 && (
                    <div className="absolute top-3 right-3 f-stencil px-2 py-1"
                      style={{ fontSize: 9, letterSpacing: "0.3em", background: "#fad608", color: "#0e0d0b" }}>
                      ATUAL
                    </div>
                  )}
                </div>
                {/* info */}
                <div className="text-center px-4 py-5">
                  <div className="f-stencil amber mb-1" style={{ fontSize: 9, letterSpacing: "0.35em" }}>
                    {i === presidentes.length - 1 ? "PRESIDENTE NACIONAL" : `GESTÃO ${i + 1}`}
                  </div>
                  <div className="f-mad mb-1" style={{ fontSize: 18, color: "#e8e0cc", letterSpacing: "0.05em" }}>
                    {p.nome}
                  </div>
                  <div className="f-stencil" style={{ fontSize: 10, color: "#6b6454", letterSpacing: "0.25em" }}>
                    {p.periodo}
                  </div>
                  <div className="f-stencil mt-1" style={{ fontSize: 9, color: "#4a4035", letterSpacing: "0.2em" }}>
                    {p.local}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Nota de rodapé */}
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px flex-1" style={{ background: "linear-gradient(to right, rgba(201,151,58,0.3), transparent)" }}/>
            <span className="f-stencil" style={{ fontSize: 12, color: "#3a3028", letterSpacing: "0.3em" }}>
              MANAUS · AM · XVI · IV · MMXVI
            </span>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left, rgba(201,151,58,0.3), transparent)" }}/>
          </div>
        </div>
      </section>



            {/* ════════════════ GALERIA ════════════════ */}
      <section id="galeria" className="leather-bg relative py-28 px-6">
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(201,151,58,0.3), transparent)" }} />
        <div className="max-w-6xl mx-auto">
          <h2 className="f-sans amber mb-14" style={{ fontSize: "clamp(40px,7vw,80px)", lineHeight: 1, letterSpacing: "0.04em", color: "#fad608" }}>
            GALERIA DOS PATRIOTAS
          </h2>

          {/* grid fotos */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
            {galeria.map((item, i) => (
              <div key={i}
                onClick={() => setLightbox(i)}
                className="leather-card patch relative overflow-hidden cursor-pointer group"
                style={{ aspectRatio: "4/3", borderColor: "rgba(122,140,92,0.2)" }}>
                {/* placeholder foto */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                  style={{ background: "linear-gradient(135deg,#1a1712,#141310)" }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="1" style={{ color: "#2a2518" }}>
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <span className="f-stencil" style={{ fontSize: 8, letterSpacing: "0.3em", color: "#2a2518" }}>
                    FOTO {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  style={{ background: "rgba(201,151,58,0.1)" }}>
                  <div className="f-stencil amber" style={{ fontSize: 9, letterSpacing: "0.3em" }}>VER</div>
                </div>
              </div>
            ))}
          </div>

          <div className="f-stencil text-center" style={{ fontSize: 9, letterSpacing: "0.3em", color: "#3a3028" }}>
            [ FOTOS SERÃO ADICIONADAS PELO CLUBE ]
          </div>
          {/* Nota de rodapé */}
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px flex-1" style={{ background: "linear-gradient(to right, rgba(201,151,58,0.3), transparent)" }}/>
            <span className="f-stencil" style={{ fontSize: 12, color: "#3a3028", letterSpacing: "0.3em" }}>
              MANAUS · AM · XVI · IV · MMXVI
            </span>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left, rgba(201,151,58,0.3), transparent)" }}/>
          </div>
        </div>
      </section>

      {/* ════════════════ CONTATO ════════════════ */}
      <section id="contato" className="relative py-28 px-6"
        style={{ background: "linear-gradient(180deg,#0e0d0b,#0d0c09)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="f-mad amber mb-6"
            style={{ fontSize: "clamp(36px,7vw,80px)", lineHeight: 1.1, letterSpacing: "0.04em", color: "#fad608" }}>
            JUNTE-SE AOS<br />
            <span style={{ color: "#fad608" }}>PATRIOTAS</span>
          </h2>

          <p className="f-body mb-14 mx-auto"
            style={{ fontSize: 20, color: "#6b6454", maxWidth: 520, lineHeight: 1.9 }}>
            Se você é integrante das Forças Armadas, Forças Auxiliares ou da Segurança Pública Federal ou Estadual, e compartilha a paixão pelo motociclismo e nossos princípios, a irmandade tem uma vaga para você.
          </p>

          {/* cards de contato */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {[
              { tag: "SEDE NACIONAL", titulo: "MANAUS · AM", sub: "Rua 24 de maio, 728 — Centro" },
              { tag: "INSTAGRAM", titulo: "@patriotasbrasilmc", sub: "siga nossas atividades" },
              { tag: "EMAIL", titulo: "contato@patriotasmc.com", sub: "informações e filiação" },
            ].map((c, i) => (
              <div key={i} className="leather-card patch p-6"
                style={{ borderColor: i === 1 ? "rgba(201,151,58,0.35)" : "rgba(122,140,92,0.25)" }}>
                <div className="f-stencil olive mb-2" style={{ fontSize: 12, letterSpacing: "0.35em" }}>{c.tag}</div>
                <div className="f-mad amber mb-1" style={{ fontSize: 16, letterSpacing: "0.05em" }}>{c.titulo}</div>
                <div className="f-stencil" style={{ fontSize: 12, color: "#4a4035", letterSpacing: "0.2em" }}>{c.sub}</div>
              </div>
            ))}
          </div>

          <button className="px-12 py-4 f-rye transition-all"
            style={{
              background: "linear-gradient(135deg,#5c4415,#8a6520)",
              color: "#e8d5a0",
              fontSize: 15,
              letterSpacing: "0.1em",
              border: "1px solid rgba(201,151,58,0.4)",
              boxShadow: "0 4px 24px rgba(201,151,58,0.15), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}>
            QUERO FAZER PARTE
          </button>
        </div>
      </section>

      {/* ════════════════ FOOTER ════════════════ */}
      <footer className="leather-bg relative border-t py-12 px-6"
        style={{ borderColor: "rgba(201,151,58,0.15)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 patch flex items-center justify-center"
                  style={{ borderColor: "rgba(201,151,58,0.5)", background: "rgba(201,151,58,0.05)" }}>
                  <img src={BRASAO} alt="Logo" style={{ width:"200%", objectFit:"contain" }} />
                </div>
                <div>
                  <div className="f-mad amber" style={{ fontSize: 19, letterSpacing: "0.05em" }}>PATRIOTAS BRASIL</div>
                  <div className="f-stencil olive" style={{ fontSize: 12, letterSpacing: "0.35em" }}>LE · MC</div>
                </div>
              </div>
              <p className="f-stencil" style={{ fontSize: 12, color: "#3a3028", letterSpacing: "0.15em", lineHeight: 1.8 }}>
                Associação civil de direito privado e sem fins lucrativos.<br />
                Fundada em 05 de abril de 2021 · Manaus/AM.
              </p>
            </div>

            <div>
              <h4 className="f-stencil olive mb-5" style={{ fontSize: 12, letterSpacing: "0.35em" }}>NAVEGAÇÃO</h4>
              <div className="grid grid-cols-2 gap-y-2">
                {navLinks.map((s) => (
                  <button key={s.id} onClick={() => scrollTo(s.id)}
                    className="text-left f-stencil transition-colors"
                    style={{ fontSize: 12, letterSpacing: "0.25em", color: "#4a4035" }}>
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="f-stencil olive mb-5" style={{ fontSize: 12, letterSpacing: "0.35em" }}>REDES SOCIAIS</h4>
              <div className="flex gap-3">
                {[
                  { label: "IG", href: "https://www.instagram.com/patriotasbrasilmotoclube" },
                  { label: "FB", href: "#" },
                  { label: "YT", href: "#" },
                ].map((r) => (
                  <a key={r.label} href={r.href}
                    className="w-10 h-10 patch flex items-center justify-center f-stencil transition-all"
                    style={{ fontSize: 12, letterSpacing: "0.2em", borderColor: "rgba(122,140,92,0.3)", color: "#6b6454" }}>
                    {r.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-3"
            style={{ borderColor: "rgba(201,151,58,0.1)" }}>
            <div className="f-stencil" style={{ fontSize: 12, color: "#2a2518", letterSpacing: "0.2em" }}>
              © 2026 · PATRIOTAS BRASIL MOTO CLUBE · TODOS OS DIREITOS RESERVADOS
            </div>
            <div className="f-rye amber" style={{ fontSize: 12, letterSpacing: "0.08em" }}>
              "VIDA LONGA AOS PATRIOTAS !"
            </div>
          </div>
        </div>
      </footer>

      {/* ════════════════ LIGHTBOX ════════════════ */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={() => setLightbox(null)}>
          <div className="leather-card patch p-4 max-w-2xl w-full mx-4"
            style={{ borderColor: "rgba(201,151,58,0.4)" }}
            onClick={(e) => e.stopPropagation()}>
            <div className="aspect-video flex items-center justify-center mb-4"
              style={{ background: "#0e0d0b" }}>
              <div className="text-center">
                <div className="f-stencil amber mb-2" style={{ fontSize: 10, letterSpacing: "0.35em" }}>
                  FOTO {String(lightbox + 1).padStart(2, "0")}
                </div>
                <div className="f-stencil" style={{ fontSize: 9, color: "#3a3028", letterSpacing: "0.3em" }}>
                  [ IMAGEM AQUI ]
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button onClick={() => setLightbox(Math.max(0, lightbox - 1))}
                className="f-stencil amber px-4 py-2" style={{ fontSize: 10, letterSpacing: "0.3em" }}>
                ← ANTERIOR
              </button>
              <button onClick={() => setLightbox(null)}
                className="f-stencil px-4 py-2" style={{ fontSize: 10, letterSpacing: "0.3em", color: "#6b6454" }}>
                FECHAR ✕
              </button>
              <button onClick={() => setLightbox(Math.min(galeria.length - 1, lightbox + 1))}
                className="f-stencil amber px-4 py-2" style={{ fontSize: 10, letterSpacing: "0.3em" }}>
                PRÓXIMA →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
