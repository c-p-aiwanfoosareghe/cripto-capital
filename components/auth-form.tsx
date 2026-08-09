'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'

export function AuthForm({ mode }: { mode: 'sign-in' | 'sign-up' }) {
  const router = useRouter()
  const isSignUp = mode === 'sign-up'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setLoading(true)
    const result = isSignUp
      ? await authClient.signUp.email({ name, email, password })
      : await authClient.signIn.email({ email, password })
    setLoading(false)
    if (result.error) {
      setError(result.error.message ?? 'No pudimos completar la solicitud.')
      return
    }
    router.push('/dashboard')
    router.refresh()
  }

  return (
    <main className="auth-shell">
      <section className="auth-card" aria-labelledby="auth-title">
        <Link href="/" className="brand-mark">Cripto<span>Capital</span></Link>
        <div className="auth-heading">
          <p className="eyebrow">Cuenta segura</p>
          <h1 id="auth-title">{isSignUp ? 'Crea tu cuenta' : 'Bienvenido de nuevo'}</h1>
          <p>{isSignUp ? 'Empieza a construir tu futuro financiero.' : 'Accede a tu panel de CriptoCapital.'}</p>
        </div>
        <form onSubmit={handleSubmit} className="auth-form">
          {isSignUp && <label>Nombre completo<input value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" /></label>}
          <label>Email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" /></label>
          <label>Contraseña<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={8} autoComplete={isSignUp ? 'new-password' : 'current-password'} /></label>
          {error && <p className="form-error" role="alert">{error}</p>}
          <button className="button button-primary auth-submit" type="submit" disabled={loading}>{loading ? 'Procesando...' : isSignUp ? 'Crear cuenta' : 'Iniciar sesión'}</button>
        </form>
        <p className="auth-switch">{isSignUp ? '¿Ya tienes cuenta?' : '¿Aún no tienes cuenta?'} <Link href={isSignUp ? '/sign-in' : '/sign-up'}>{isSignUp ? 'Inicia sesión' : 'Regístrate'}</Link></p>
      </section>
    </main>
  )
}
