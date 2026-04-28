"use client"

import Link from "next/link"
import { useState } from "react"
import { BookOpen, Mail, Lock, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login - will be connected to backend later
    console.log("Login attempt:", { email, password })
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <BookOpen className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
              TeachClock
            </span>
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 
              className="text-3xl font-bold text-foreground mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Bienvenida de nuevo
            </h1>
            <p className="text-muted-foreground">
              Ingresa tus datos para acceder a tu cuenta
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Contraseña</Label>
                <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full h-12 text-base">
              Iniciar sesión
            </Button>
          </form>

          {/* Register link */}
          <p className="mt-8 text-center text-muted-foreground">
            ¿No tienes una cuenta?{" "}
            <Link href="/register" className="text-primary font-medium hover:underline">
              Regístrate gratis
            </Link>
          </p>
        </div>
      </div>

      {/* Right side - Decorative */}
      <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-primary/10 via-accent/20 to-primary/5 items-center justify-center p-12">
        <div className="max-w-md text-center">
          <div className="w-64 h-64 mx-auto mb-8 relative">
            {/* Decorative illustration */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
            <svg viewBox="0 0 200 200" className="relative w-full h-full">
              {/* Notebook */}
              <rect x="40" y="40" width="120" height="140" rx="8" fill="white" />
              <rect x="40" y="40" width="120" height="30" rx="8" fill="#FECDD3" />
              <line x1="60" y1="90" x2="140" y2="90" stroke="#E5E5E5" strokeWidth="2" />
              <line x1="60" y1="110" x2="130" y2="110" stroke="#E5E5E5" strokeWidth="2" />
              <line x1="60" y1="130" x2="120" y2="130" stroke="#E5E5E5" strokeWidth="2" />
              <line x1="60" y1="150" x2="140" y2="150" stroke="#E5E5E5" strokeWidth="2" />
              {/* Pencil */}
              <g transform="translate(130, 60) rotate(45)">
                <rect width="60" height="8" rx="1" fill="#FDE68A" />
                <polygon points="60,0 70,4 60,8" fill="#FFDDD2" />
                <rect width="6" height="8" fill="#F87171" />
              </g>
              {/* Heart */}
              <path d="M160 140 C160 130, 150 125, 145 135 C140 125, 130 130, 130 140 C130 155, 145 165, 145 165 C145 165, 160 155, 160 140Z" fill="#FDA4AF" />
            </svg>
          </div>
          <h2 
            className="text-2xl font-bold text-foreground mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Tu espacio educativo te espera
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Accede a todas tus clases, estudiantes y materiales desde cualquier lugar.
          </p>
        </div>
      </div>
    </div>
  )
}
