'use client'

import { useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CircleDollarSign,
  Globe2,
  Menu,
  ShieldCheck,
  Sparkles,
  WalletCards,
  X,
} from 'lucide-react'

const markets = [
  { pair: 'BTC/USDT', name: 'Bitcoin', price: '$104,854.20', change: '+2.84%', tone: 'up', icon: '₿' },
  { pair: 'ETH/USDT', name: 'Ethereum', price: '$2,518.72', change: '+1.64%', tone: 'up', icon: 'Ξ' },
  { pair: 'SOL/USDT', name: 'Solana', price: '$148.36', change: '-0.72%', tone: 'down', icon: 'S' },
  { pair: 'BNB/USDT', name: 'BNB', price: '$659.12', change: '+0.91%', tone: 'up', icon: 'B' },
]

const steps = [
  ['01', 'Crea tu cuenta', 'Regístrate en minutos con un proceso simple y seguro.'],
  ['02', 'Verifica tu identidad', 'Completa tu verificación para activar todas las funciones.'],
  ['03', 'Empieza a invertir', 'Compra, vende y administra tus activos desde un solo lugar.'],
]

function Brand() {
  return (
    <a href="#inicio" className="flex items-center gap-2" aria-label="CriptoCapital inicio">
      <span className="brand-mark"><span>CC</span></span>
      <span className="font-display text-lg font-semibold tracking-tight">Cripto<span className="text-primary">Capital</span></span>
    </a>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main id="inicio" className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="top-strip">
        <span className="status-dot" /> Entorno de pruebas activo · Operaciones reales próximamente
        <a href="#seguridad">Conoce más <ArrowRight data-icon="inline-end" /></a>
      </div>

      <header className="site-header">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Brand />
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground lg:flex" aria-label="Navegación principal">
            <a href="#mercados" className="nav-link">Mercados</a>
            <a href="#como-funciona" className="nav-link">Cómo funciona</a>
            <a href="#seguridad" className="nav-link">Seguridad</a>
            <a href="#faq" className="nav-link">FAQ</a>
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <a href="/sign-in" className="btn-ghost">Iniciar sesión</a>
            <a href="/sign-up" className="btn-primary">Crear cuenta <ArrowRight data-icon="inline-end" /></a>
          </div>
          <button className="icon-button lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && <div className="mobile-menu lg:hidden">
          <a href="#mercados" onClick={() => setMenuOpen(false)}>Mercados</a>
          <a href="#como-funciona" onClick={() => setMenuOpen(false)}>Cómo funciona</a>
          <a href="#seguridad" onClick={() => setMenuOpen(false)}>Seguridad</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <div className="flex gap-3 pt-3"><a href="/sign-in" className="btn-ghost flex-1">Iniciar sesión</a><a href="/sign-up" className="btn-primary flex-1">Crear cuenta</a></div>
        </div>}
      </header>

      <section className="hero-section">
        <div className="hero-grid" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-24 pt-16 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8 lg:pb-32 lg:pt-24">
          <div>
            <div className="eyebrow"><Sparkles data-icon="inline-start" /> La nueva forma de invertir en cripto</div>
            <h1 className="font-display text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-8xl">Tu futuro financiero, <span className="text-primary">en movimiento.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">Compra, vende y administra criptomonedas con una plataforma diseñada para darte control, claridad y seguridad en cada decisión.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="/sign-up" className="btn-primary btn-large">Comenzar ahora <ArrowRight data-icon="inline-end" /></a>
              <a href="#mercados" className="btn-outline btn-large">Explorar mercados <BarChart3 data-icon="inline-end" /></a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-muted-foreground"><span className="flex items-center gap-2"><ShieldCheck className="size-4 text-primary" /> Seguridad multicapa</span><span className="flex items-center gap-2"><Globe2 className="size-4 text-primary" /> Hecho para LatAm</span></div>
          </div>

          <div className="hero-terminal">
            <div className="terminal-head"><div className="flex items-center gap-2"><span className="live-dot" /> Mercado en vivo</div><span className="terminal-label">PRUEBAS</span></div>
            <div className="terminal-price"><div><p className="text-xs text-muted-foreground">BTC/USDT</p><p className="mt-2 font-display text-4xl font-semibold tracking-tight">$104,854<span className="text-lg text-muted-foreground">.20</span></p></div><div className="text-right"><p className="change-up">+2.84%</p><p className="mt-1 text-xs text-muted-foreground">24h</p></div></div>
            <div className="chart-area" aria-label="Gráfico de precio de Bitcoin ilustrativo"><div className="chart-y"><span>106k</span><span>104k</span><span>102k</span><span>100k</span></div><svg viewBox="0 0 480 180" preserveAspectRatio="none" className="chart-svg" aria-hidden="true"><path d="M0 150 C28 145 36 116 60 123 S93 150 120 128 S153 108 172 120 S198 100 214 112 S238 91 257 100 S280 75 300 84 S324 55 347 68 S373 43 389 54 S420 22 440 38 S462 16 480 19" fill="none" stroke="var(--primary)" strokeWidth="3" /><path d="M0 150 C28 145 36 116 60 123 S93 150 120 128 S153 108 172 120 S198 100 214 112 S238 91 257 100 S280 75 300 84 S324 55 347 68 S373 43 389 54 S420 22 440 38 S462 16 480 19 L480 180 L0 180 Z" fill="url(#chartFill)" opacity=".24" /><defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop stopColor="var(--primary)" /><stop offset="1" stopColor="var(--primary)" stopOpacity="0" /></linearGradient></defs></svg></div>
            <div className="chart-range"><span>1H</span><span>4H</span><span className="active">1D</span><span>1S</span><span>1M</span><span>1A</span></div>
            <div className="terminal-stats"><div><span>Máximo 24h</span><strong>$106,420.00</strong></div><div><span>Mínimo 24h</span><strong>$101,280.40</strong></div><div><span>Volumen 24h</span><strong>$28.4B</strong></div></div>
          </div>
        </div>
      </section>

      <section id="mercados" className="section-wrap border-y border-border/60 bg-card/40"><div className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><div className="mb-8 flex items-end justify-between gap-4"><div><p className="section-kicker">Mercados destacados</p><h2 className="section-title">Lo que está pasando hoy</h2></div><a href="/markets" className="hidden text-sm font-medium text-primary sm:flex sm:items-center sm:gap-2">Ver todos los mercados <ArrowRight className="size-4" /></a></div><div className="markets-grid">{markets.map((market) => <article key={market.pair} className="market-card"><div className="flex items-center gap-3"><span className="coin-icon">{market.icon}</span><div><h3 className="text-sm font-semibold">{market.pair}</h3><p className="text-xs text-muted-foreground">{market.name}</p></div></div><div className="text-right"><p className="font-mono text-sm font-medium">{market.price}</p><p className={market.tone === 'up' ? 'change-up' : 'change-down'}>{market.change}</p></div></article>)}</div></div></section>

      <section id="seguridad" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.85fr_1.15fr] lg:px-8"><div><p className="section-kicker">Diseñado para confiar</p><h2 className="section-title text-4xl sm:text-5xl">Tu tranquilidad es parte de la plataforma.</h2><p className="mt-5 max-w-md leading-7 text-muted-foreground">Construimos cada capa de CriptoCapital pensando en la protección de tus activos y en que entiendas exactamente lo que estás haciendo.</p><a href="/sign-up" className="btn-outline mt-8">Conocer nuestra seguridad <ArrowRight data-icon="inline-end" /></a></div><div className="feature-grid"><div className="feature-card"><ShieldCheck className="feature-icon" /><h3>Custodia responsable</h3><p>Controles operativos y monitoreo continuo para mantener tus activos protegidos.</p></div><div className="feature-card"><WalletCards className="feature-icon" /><h3>Control total</h3><p>Visualiza tus saldos, movimientos y rendimiento sin letras pequeñas.</p></div><div className="feature-card"><CircleDollarSign className="feature-icon" /><h3>Comisiones claras</h3><p>Consulta tus costos antes de confirmar cualquier operación.</p></div><div className="feature-card"><Globe2 className="feature-icon" /><h3>Para nuestra región</h3><p>Una experiencia localizada y pensada para las necesidades de Latinoamérica.</p></div></div></section>

      <section id="como-funciona" className="how-section"><div className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><div className="max-w-xl"><p className="section-kicker">Empieza en tres pasos</p><h2 className="section-title text-4xl sm:text-5xl">Del primer clic a tu primera operación.</h2></div><div className="steps-grid mt-14">{steps.map(([number, title, body]) => <div key={number} className="step"><span className="step-number">{number}</span><div><h3 className="font-display text-xl font-semibold">{title}</h3><p className="mt-2 leading-6 text-muted-foreground">{body}</p></div></div>)}</div></div></section>

      <section id="registro" className="cta-section"><div className="mx-auto max-w-4xl px-5 py-24 text-center lg:px-8"><p className="section-kicker">Tu próxima decisión empieza aquí</p><h2 className="font-display text-balance text-4xl font-semibold tracking-tight sm:text-6xl">Haz que tu dinero <span className="text-primary">se mueva contigo.</span></h2><p className="mx-auto mt-5 max-w-lg leading-7 text-muted-foreground">Crea tu cuenta gratis y descubre una forma más clara de entrar al mundo cripto.</p><a href="/sign-in" className="btn-primary btn-large mt-9">Crear mi cuenta <ArrowUpRight data-icon="inline-end" /></a><p className="mt-5 text-xs text-muted-foreground">El mercado cripto es volátil. Invierte solo lo que puedas permitirte perder.</p></div></section>

      <footer id="faq" className="border-t border-border/60"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8"><Brand /><div className="flex flex-wrap gap-x-6 gap-y-3"><a href="#seguridad" className="nav-link">Seguridad</a><a href="#faq" className="nav-link">Términos</a><a href="#faq" className="nav-link">Privacidad</a><a href="#faq" className="nav-link">Soporte</a></div><span>© 2026 CriptoCapital</span></div></footer>
    </main>
  )
}

