"use client"

import { TrendingUp, TrendingDown, Minus, Users, Target, Award, BookOpen } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const overallStats = [
  { label: "Progreso medio", value: "78%", change: "+5%", trend: "up", icon: TrendingUp },
  { label: "Asistencia media", value: "94%", change: "+2%", trend: "up", icon: Users },
  { label: "Objetivos cumplidos", value: "23/30", change: "77%", trend: "stable", icon: Target },
  { label: "Logros desbloqueados", value: "156", change: "+12", trend: "up", icon: Award },
]

const subjectProgress = [
  { name: "Matemáticas", progress: 82, students: 24, trend: "up" },
  { name: "Lengua y Literatura", progress: 75, students: 24, trend: "stable" },
  { name: "Ciencias Naturales", progress: 88, students: 22, trend: "up" },
  { name: "Historia", progress: 68, students: 26, trend: "down" },
  { name: "Inglés", progress: 79, students: 24, trend: "up" },
]

const topStudents = [
  { name: "Sofía Hernández", grade: "4º A", progress: 95, avatar: "SH" },
  { name: "Ana Martínez", grade: "3º A", progress: 92, avatar: "AM" },
  { name: "Laura Fernández", grade: "3º A", progress: 88, avatar: "LF" },
  { name: "Elena Ruiz", grade: "2º B", progress: 85, avatar: "ER" },
  { name: "Carlos López", grade: "3º A", progress: 78, avatar: "CL" },
]

const milestones = [
  { title: "Primer examen superado", count: 48, total: 48, completed: true },
  { title: "10 tareas completadas", count: 42, total: 48, completed: false },
  { title: "Asistencia perfecta (mes)", count: 15, total: 48, completed: false },
  { title: "Proyecto final entregado", count: 0, total: 48, completed: false },
]

const getTrendIcon = (trend: string) => {
  switch (trend) {
    case "up":
      return <TrendingUp className="h-4 w-4 text-emerald-500" />
    case "down":
      return <TrendingDown className="h-4 w-4 text-rose-500" />
    default:
      return <Minus className="h-4 w-4 text-muted-foreground" />
  }
}

const getProgressColor = (progress: number) => {
  if (progress >= 80) return "bg-emerald-500"
  if (progress >= 60) return "bg-amber-500"
  return "bg-rose-500"
}

export default function ProgressPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 
          className="text-2xl sm:text-3xl font-bold text-foreground"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Evolución
        </h1>
        <p className="text-muted-foreground mt-1">
          Seguimiento del progreso y rendimiento de tus estudiantes
        </p>
      </div>

      {/* Overall Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {overallStats.map((stat, index) => (
          <Card key={index} className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground mt-1">{stat.value}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {stat.trend === "up" && <TrendingUp className="h-3 w-3 text-emerald-500" />}
                    {stat.trend === "down" && <TrendingDown className="h-3 w-3 text-rose-500" />}
                    <span className={cn(
                      "text-xs",
                      stat.trend === "up" && "text-emerald-500",
                      stat.trend === "down" && "text-rose-500",
                      stat.trend === "stable" && "text-muted-foreground"
                    )}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Subject Progress */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Progreso por asignatura
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {subjectProgress.map((subject, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{subject.name}</span>
                    {getTrendIcon(subject.trend)}
                  </div>
                  <span className="text-sm font-semibold text-foreground">{subject.progress}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={cn("h-full rounded-full transition-all", getProgressColor(subject.progress))}
                    style={{ width: `${subject.progress}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground">{subject.students} estudiantes</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Top Students */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Mejores estudiantes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {topStudents.map((student, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-sm font-bold text-muted-foreground">
                  {index + 1}
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center text-sm font-semibold text-foreground">
                  {student.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{student.name}</p>
                  <p className="text-xs text-muted-foreground">{student.grade}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-foreground">{student.progress}%</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Learning Milestones */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Hitos de aprendizaje
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={cn(
                  "p-4 rounded-xl border-2 transition-all",
                  milestone.completed 
                    ? "bg-emerald-50 border-emerald-200" 
                    : "bg-muted/50 border-border"
                )}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center",
                    milestone.completed ? "bg-emerald-500" : "bg-muted"
                  )}>
                    {milestone.completed ? (
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-xs font-bold text-muted-foreground">{index + 1}</span>
                    )}
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {milestone.count}/{milestone.total}
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground">{milestone.title}</p>
                <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={cn(
                      "h-full rounded-full transition-all",
                      milestone.completed ? "bg-emerald-500" : "bg-primary"
                    )}
                    style={{ width: `${(milestone.count / milestone.total) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
