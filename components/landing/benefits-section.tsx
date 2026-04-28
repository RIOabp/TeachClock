import { Heart, Clock, TrendingUp, Users, BookOpen, Shield } from "lucide-react"

const teacherBenefits = [
  {
    icon: Clock,
    title: "Ahorra tiempo",
    description: "Automatiza tareas repetitivas y dedica más tiempo a lo que amas: enseñar.",
  },
  {
    icon: TrendingUp,
    title: "Seguimiento fácil",
    description: "Visualiza el progreso de cada estudiante con gráficos claros e intuitivos.",
  },
  {
    icon: BookOpen,
    title: "Todo organizado",
    description: "Materiales, notas y recursos en un solo lugar, siempre accesibles.",
  },
]

const studentBenefits = [
  {
    icon: Heart,
    title: "Aprendizaje personalizado",
    description: "Cada estudiante recibe atención adaptada a su ritmo y necesidades.",
  },
  {
    icon: Users,
    title: "Mejor comunicación",
    description: "Conexión directa y clara entre docentes, estudiantes y familias.",
  },
  {
    icon: Shield,
    title: "Entorno seguro",
    description: "Plataforma diseñada con la privacidad y seguridad como prioridad.",
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Beneficios para todos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            TeachClock está diseñado pensando en docentes y estudiantes, creando una experiencia 
            educativa más humana y efectiva.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Teacher Benefits */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              Para docentes
            </div>
            <div className="space-y-8">
              {teacherBenefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Student Benefits */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/30 text-accent-foreground text-sm font-medium mb-8">
              Para estudiantes
            </div>
            <div className="space-y-8">
              {studentBenefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-accent/30 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
