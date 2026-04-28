import { Users, BookMarked, Calendar, BarChart3, FolderOpen, Sparkles } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Gestión de Alumnos",
    description: "Organiza y mantén un seguimiento detallado de cada estudiante con perfiles completos.",
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: BookMarked,
    title: "Asignaturas",
    description: "Crea y organiza tus materias con todo el contenido y planificación necesaria.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: Calendar,
    title: "Calendario",
    description: "Planifica clases, tareas, eventos y recordatorios en un calendario intuitivo.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: BarChart3,
    title: "Seguimiento de Progreso",
    description: "Visualiza la evolución de tus estudiantes con gráficos claros y métricas útiles.",
    color: "bg-sky-100 text-sky-600",
  },
  {
    icon: FolderOpen,
    title: "Materiales Educativos",
    description: "Sube y organiza PDFs, documentos, presentaciones y recursos de clase.",
    color: "bg-violet-100 text-violet-600",
  },
  {
    icon: Sparkles,
    title: "Asistente IA",
    description: "Obtén ayuda inteligente para crear actividades, ejercicios y apoyo pedagógico.",
    color: "bg-pink-100 text-pink-600",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Todo lo que necesitas
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Herramientas pensadas para simplificar tu día a día y potenciar la experiencia educativa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className={`inline-flex w-12 h-12 rounded-xl ${feature.color} items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
