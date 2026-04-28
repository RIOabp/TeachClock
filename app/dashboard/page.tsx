import { 
  Users, 
  BookMarked, 
  Calendar as CalendarIcon, 
  TrendingUp,
  Clock,
  CheckCircle2,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const stats = [
  { name: "Total Alumnos", value: "48", icon: Users, change: "+3 este mes", color: "bg-rose-100 text-rose-600" },
  { name: "Asignaturas", value: "6", icon: BookMarked, change: "Activas", color: "bg-amber-100 text-amber-600" },
  { name: "Clases esta semana", value: "12", icon: CalendarIcon, change: "3 hoy", color: "bg-emerald-100 text-emerald-600" },
  { name: "Progreso medio", value: "78%", icon: TrendingUp, change: "+5% vs mes anterior", color: "bg-sky-100 text-sky-600" },
]

const upcomingTasks = [
  { title: "Clase de Matemáticas - 3º A", time: "10:00 AM", type: "class" },
  { title: "Entregar calificaciones", time: "12:00 PM", type: "task" },
  { title: "Reunión con padres", time: "4:00 PM", type: "meeting" },
  { title: "Clase de Ciencias - 2º B", time: "Mañana 9:00 AM", type: "class" },
]

const recentActivity = [
  { text: "Ana Martínez completó el ejercicio de fracciones", time: "Hace 2 horas" },
  { text: "Nuevo material subido: Guía de lectura", time: "Hace 3 horas" },
  { text: "Carlos López mejoró su nota en Matemáticas", time: "Ayer" },
  { text: "Recordatorio: Evaluación de Ciencias el viernes", time: "Ayer" },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 
            className="text-2xl sm:text-3xl font-bold text-foreground"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Buenos días, María
          </h1>
          <p className="text-muted-foreground mt-1">
            Aquí tienes un resumen de tu día
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/calendar">
            <CalendarIcon className="h-4 w-4 mr-2" />
            Ver calendario
          </Link>
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name} className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.name}</p>
                  <p className="text-3xl font-bold text-foreground mt-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                </div>
                <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Upcoming Tasks */}
        <Card className="border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-semibold">Próximas tareas</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard/calendar" className="text-primary">
                Ver todo
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingTasks.map((task, index) => (
              <div key={index} className="flex items-center gap-4 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{task.title}</p>
                  <p className="text-xs text-muted-foreground">{task.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-semibold">Actividad reciente</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-accent-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">{activity.text}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Access */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Acceso rápido</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Link 
              href="/dashboard/students" 
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-rose-600" />
              </div>
              <span className="text-sm font-medium text-foreground">Mis alumnos</span>
            </Link>
            <Link 
              href="/dashboard/subjects" 
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                <BookMarked className="w-6 h-6 text-amber-600" />
              </div>
              <span className="text-sm font-medium text-foreground">Asignaturas</span>
            </Link>
            <Link 
              href="/dashboard/resources" 
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center">
                <BookMarked className="w-6 h-6 text-violet-600" />
              </div>
              <span className="text-sm font-medium text-foreground">Recursos</span>
            </Link>
            <Link 
              href="/dashboard/ai-assistant" 
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-pink-600" />
              </div>
              <span className="text-sm font-medium text-foreground">Asistente IA</span>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
