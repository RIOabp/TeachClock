"use client"

import Link from "next/link"
import { useState } from "react"
import { BookOpen, Mail, Lock, Eye, EyeOff, User, GraduationCap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

type Role = "teacher" | "student"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState<Role>("teacher")

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  // Handle registration - will be connected to backend later
    console.log("Register attempt:", { name, email, password, role })
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Decorative */}
      <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-accent/20 via-primary/10 to-accent/5 items-center justify-center p-12">
        <div className="max-w-md text-center">
          <div className="w-64 h-64 mx-auto mb-8 relative">
            {/* Decorative illustration */}
            <div className="absolute inset-0 bg-accent/30 rounded-full blur-3xl" />
            <svg viewBox="0 0 200 200" className="relative w-full h-full">
              {/* Desk with people */}
              <rect x="20" y="120" width="160" height="12" rx="4" fill="#F5E6D3" />
              {/* Teacher figure */}
              <circle cx="70" cy="80" r="25" fill="#FFDDD2" />
              <path d="M45 75 Q45 55 70 55 Q95 55 95 75" fill="#8B5A2B" />
              <circle cx="62" cy="78" r="3" fill="#5D4037" />
              <circle cx="78" cy="78" r="3" fill="#5D4037" />
              <path d="M65 90 Q70 95 75 90" stroke="#E57373" strokeWidth="2" fill="none" />
              <path d="M55 105 Q45 130 50 145 L90 145 Q95 130 85 105 Z" fill="#FECDD3" />
              {/* Student figure */}
              <circle cx="140" cy="85" r="20" fill="#FFDDD2" />
              <path d="M120 82 Q120 68 140 68 Q160 68 160 82" fill="#4A5568" />
              <circle cx="134" cy="83" r="2" fill="#5D4037" />
              <circle cx="146" cy="83" r="2" fill="#5D4037" />
              <path d="M137 93 Q140 96 143 93" stroke="#E57373" strokeWidth="1.5" fill="none" />
              <path d="M128 105 Q122 125 125 140 L155 140 Q158 125 152 105 Z" fill="#A0D2DB" />
              {/* Book between them */}
              <rect x="90" y="100" width="30" height="20" rx="2" fill="#FDE68A" />
              {/* Stars */}
              <circle cx="30" cy="50" r="4" fill="#FDA4AF" />
              <circle cx="170" cy="40" r="5" fill="#FECDD3" />
              <circle cx="100" cy="30" r="3" fill="#FDE68A" />
            </svg>
          </div>
          <h2 
            className="text-2xl font-bold text-foreground mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Únete a nuestra comunidad
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Miles de docentes y estudiantes ya disfrutan de una mejor experiencia educativa.
          </p>
        </div>
      </div>

      {/* Right side - Form */}
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
              Crea tu cuenta
            </h1>
            <p className="text-muted-foreground">
              Comienza tu experiencia educativa hoy
            </p>
          </div>

          {/* Role Selection */}
          <div className="mb-6">
            <Label className="mb-3 block">Soy...</Label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRole("teacher")}
                className={cn(
                  "flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all",
                  role === "teacher"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                )}
              >
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center",
                  role === "teacher" ? "bg-primary/20" : "bg-muted"
                )}>
                  <GraduationCap className={cn(
                    "w-6 h-6",
                    role === "teacher" ? "text-primary" : "text-muted-foreground"
                  )} />
                </div>
                <span className={cn(
                  "font-medium",
                  role === "teacher" ? "text-primary" : "text-muted-foreground"
                )}>
                  Docente
                </span>
              </button>
              <button
                type="button"
                onClick={() => setRole("student")}
                className={cn(
                  "flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all",
                  role === "student"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                )}
              >
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center",
                  role === "student" ? "bg-primary/20" : "bg-muted"
                )}>
                  <Users className={cn(
                    "w-6 h-6",
                    role === "student" ? "text-primary" : "text-muted-foreground"
                  )} />
                </div>
                <span className={cn(
                  "font-medium",
                  role === "student" ? "text-primary" : "text-muted-foreground"
                )}>
                  Estudiante
                </span>
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre completo</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10 h-12"
                  required
                />
              </div>
            </div>

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
              <Label htmlFor="password">Contraseña</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Mínimo 8 caracteres"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-12"
                  required
                  minLength={8}
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
              Crear cuenta
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Al registrarte, aceptas nuestros{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Términos de servicio
              </Link>{" "}
              y{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Política de privacidad
              </Link>
            </p>
          </form>

          {/* Login link */}
          <p className="mt-8 text-center text-muted-foreground">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/login" className="text-primary font-medium hover:underline">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
