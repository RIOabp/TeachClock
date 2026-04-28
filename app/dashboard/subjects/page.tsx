"use client"

import { useState } from "react"
import { Plus, MoreVertical, Users, FileText, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const subjects = [
  {
    id: 1,
    name: "Matemáticas",
    grade: "3º A",
    students: 24,
    lessons: 12,
    color: "bg-rose-100 border-rose-200",
    iconColor: "bg-rose-500",
  },
  {
    id: 2,
    name: "Lengua y Literatura",
    grade: "3º A",
    students: 24,
    lessons: 15,
    color: "bg-amber-100 border-amber-200",
    iconColor: "bg-amber-500",
  },
  {
    id: 3,
    name: "Ciencias Naturales",
    grade: "2º B",
    students: 22,
    lessons: 10,
    color: "bg-emerald-100 border-emerald-200",
    iconColor: "bg-emerald-500",
  },
  {
    id: 4,
    name: "Historia",
    grade: "4º A",
    students: 26,
    lessons: 8,
    color: "bg-sky-100 border-sky-200",
    iconColor: "bg-sky-500",
  },
  {
    id: 5,
    name: "Inglés",
    grade: "3º A",
    students: 24,
    lessons: 14,
    color: "bg-violet-100 border-violet-200",
    iconColor: "bg-violet-500",
  },
  {
    id: 6,
    name: "Educación Física",
    grade: "2º B",
    students: 22,
    lessons: 6,
    color: "bg-pink-100 border-pink-200",
    iconColor: "bg-pink-500",
  },
]

export default function SubjectsPage() {
  const [isCreating, setIsCreating] = useState(false)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 
            className="text-2xl sm:text-3xl font-bold text-foreground"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Asignaturas
          </h1>
          <p className="text-muted-foreground mt-1">
            Gestiona tus materias y contenidos
          </p>
        </div>
        <Button onClick={() => setIsCreating(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Nueva asignatura
        </Button>
      </div>

      {/* Subjects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <Card 
            key={subject.id} 
            className={`border-2 ${subject.color} hover:shadow-lg transition-all duration-300 cursor-pointer group`}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${subject.iconColor} flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">
                    {subject.name.charAt(0)}
                  </span>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Editar</DropdownMenuItem>
                    <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Eliminar</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-1">
                {subject.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {subject.grade}
              </p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{subject.students} alumnos</span>
                </div>
                <div className="flex items-center gap-1">
                  <FileText className="h-4 w-4" />
                  <span>{subject.lessons} lecciones</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Add New Card */}
        <Card 
          className="border-2 border-dashed border-border hover:border-primary/50 hover:bg-muted/50 transition-all cursor-pointer"
          onClick={() => setIsCreating(true)}
        >
          <CardContent className="p-6 flex flex-col items-center justify-center h-full min-h-[200px] text-center">
            <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4">
              <Plus className="h-6 w-6 text-muted-foreground" />
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              Añadir nueva asignatura
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
