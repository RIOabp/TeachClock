"use client"

import { useState } from "react"
import { Plus, Search, Filter, MoreVertical, TrendingUp, TrendingDown, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const students = [
  { id: 1, name: "Ana Martínez", grade: "3º A", avatar: "AM", progress: 92, trend: "up", attendance: 98 },
  { id: 2, name: "Carlos López", grade: "3º A", avatar: "CL", progress: 78, trend: "up", attendance: 95 },
  { id: 3, name: "Elena Ruiz", grade: "2º B", avatar: "ER", progress: 85, trend: "stable", attendance: 100 },
  { id: 4, name: "David García", grade: "4º A", avatar: "DG", progress: 65, trend: "down", attendance: 88 },
  { id: 5, name: "Laura Fernández", grade: "3º A", avatar: "LF", progress: 88, trend: "up", attendance: 96 },
  { id: 6, name: "Miguel Torres", grade: "2º B", avatar: "MT", progress: 72, trend: "stable", attendance: 92 },
  { id: 7, name: "Sofía Hernández", grade: "4º A", avatar: "SH", progress: 95, trend: "up", attendance: 100 },
  { id: 8, name: "Pablo Sánchez", grade: "3º A", avatar: "PS", progress: 70, trend: "down", attendance: 85 },
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

export default function StudentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null)

  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesGrade = !selectedGrade || student.grade === selectedGrade
    return matchesSearch && matchesGrade
  })

  const grades = [...new Set(students.map((s) => s.grade))]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 
            className="text-2xl sm:text-3xl font-bold text-foreground"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Alumnos
          </h1>
          <p className="text-muted-foreground mt-1">
            {students.length} estudiantes en total
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Añadir alumno
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar estudiante..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={selectedGrade === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedGrade(null)}
          >
            Todos
          </Button>
          {grades.map((grade) => (
            <Button
              key={grade}
              variant={selectedGrade === grade ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedGrade(grade)}
            >
              {grade}
            </Button>
          ))}
        </div>
      </div>

      {/* Students Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredStudents.map((student) => (
          <Card key={student.id} className="border-border/50 hover:shadow-md transition-all group">
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center text-sm font-semibold text-foreground">
                    {student.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{student.name}</h3>
                    <p className="text-sm text-muted-foreground">{student.grade}</p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Ver perfil</DropdownMenuItem>
                    <DropdownMenuItem>Enviar mensaje</DropdownMenuItem>
                    <DropdownMenuItem>Ver progreso</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Progress */}
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Progreso</span>
                    <div className="flex items-center gap-1">
                      {getTrendIcon(student.trend)}
                      <span className="font-medium text-foreground">{student.progress}%</span>
                    </div>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={cn("h-full rounded-full transition-all", getProgressColor(student.progress))}
                      style={{ width: `${student.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Asistencia</span>
                  <span className="font-medium text-foreground">{student.attendance}%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredStudents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No se encontraron estudiantes</p>
        </div>
      )}
    </div>
  )
}
