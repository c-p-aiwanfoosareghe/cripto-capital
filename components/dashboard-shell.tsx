'use client'

import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'

export function DashboardShell({ name, email }: { name: string; email: string }) {
  const router = useRouter()
  async function logout() {
    await authClient.signOut()
    router.push('/')
    router.refresh()
  }
  return (
    <main className="dashboard-shell">
      <header className="dashboard-header"><a href="/" className="brand-wordmark">Cripto<span>Capital</span></a><nav className="dashboard-nav"><a className="active" href="/dashboard">Resumen</a><a href="#mercados">Mercados</a><a href="#seguridad">Seguridad</a></nav><div className="dashboard-user"><div><strong>{name}</strong><span>{email}</span></div><button className="btn-ghost" onClick={logout}>Cerrar sesión</button></div></header>
      <section className="dashboard-content">
        <div className="dashboard-welcome"><div><p className="eyebrow">Panel principal</p><h1>Hola, {name.split(' ')[0]}.</h1><p>Administra tu cuenta y revisa el mercado desde un solo lugar.</p></div><span className="terminal-label">MODO PRUEBAS</span></div>
        <div className="balance-card"><span>Patrimonio estimado</span><strong>$0.00 <small>USD</small></strong><p>+0.00% <span>en las últimas 24h</span></p><div className="balance-actions"><button className="button button-primary" disabled>Depositar</button><button className="button button-outline" disabled>Retirar</button></div></div>
        <div className="dashboard-grid">
          <article id="mercados"><div className="panel-heading"><div><p className="section-kicker">Mercados</p><h2>Favoritos</h2></div><span className="muted-label">Precio · 24h</span></div><div className="market-list"><div><strong>BTC/USDT</strong><span>$104,854.20</span><em className="change-up">+2.84%</em></div><div><strong>ETH/USDT</strong><span>$2,518.72</span><em className="change-up">+1.64%</em></div><div><strong>SOL/USDT</strong><span>$148.36</span><em className="change-down">-0.72%</em></div></div></article>
          <article><div className="panel-heading"><div><p className="section-kicker">Cartera</p><h2>Tus activos</h2></div><span className="muted-label">Saldo</span></div><div className="empty-panel">Completa la verificación para activar tu cartera.</div></article>
        </div>
        <article id="seguridad" className="security-banner"><div><p className="section-kicker">Siguiente paso</p><h2>Verifica tu identidad para desbloquear funciones.</h2><p>Las operaciones, depósitos y retiros permanecerán desactivados hasta completar KYC y los controles de seguridad.</p></div><button className="button button-outline" disabled>Iniciar verificación</button></article>
      </section>
    </main>
  )
}
