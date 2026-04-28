import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "TeachClock ha transformado completamente mi forma de organizar las clases. Ahora tengo todo en un solo lugar y mis estudiantes están más motivados que nunca.",
    author: "María García",
    role: "Profesora de Primaria",
    avatar: "MG",
  },
  {
    quote: "La interfaz es tan intuitiva que pude empezar a usarla desde el primer día. El seguimiento del progreso de mis alumnos nunca había sido tan fácil.",
    author: "Carmen López",
    role: "Docente de Secundaria",
    avatar: "CL",
  },
  {
    quote: "Como directora, aprecio poder ver el trabajo de todo el equipo docente. TeachClock nos ha ayudado a mejorar la comunicación con las familias.",
    author: "Ana Martínez",
    role: "Directora de Centro",
    avatar: "AM",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Lo que dicen nuestras docentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Únete a cientos de educadoras que ya han transformado su manera de enseñar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-background border border-border"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-foreground leading-relaxed mb-6">
                {`"${testimonial.quote}"`}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center text-sm font-semibold text-foreground">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
