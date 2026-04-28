import Link from "next/link"
import { BookOpen, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
                <BookOpen className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                TeachClock
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              La plataforma educativa moderna que conecta docentes y estudiantes 
              en un entorno cálido y acogedor.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Plataforma</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Funciones
                </Link>
              </li>
              <li>
                <Link href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
                  Beneficios
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                  Testimonios
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Cuenta</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/login" className="text-muted-foreground hover:text-foreground transition-colors">
                  Iniciar sesión
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-muted-foreground hover:text-foreground transition-colors">
                  Registrarse
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TeachClock. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-primary fill-primary" /> para educadores
          </p>
        </div>
      </div>
    </footer>
  )
}
