"use client"

import { useState } from "react"
import { 
  Plus, 
  Upload, 
  FileText, 
  Image, 
  Video, 
  File, 
  MoreVertical, 
  Search,
  FolderOpen,
  Download,
  Eye,
  Trash2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const folders = [
  { id: 1, name: "Matemáticas", count: 12, color: "bg-rose-100 text-rose-600" },
  { id: 2, name: "Lengua", count: 8, color: "bg-amber-100 text-amber-600" },
  { id: 3, name: "Ciencias", count: 15, color: "bg-emerald-100 text-emerald-600" },
  { id: 4, name: "Exámenes", count: 6, color: "bg-sky-100 text-sky-600" },
]

const resources = [
  { id: 1, name: "Guía de fracciones.pdf", type: "pdf", size: "2.4 MB", date: "Hace 2 días", folder: "Matemáticas" },
  { id: 2, name: "Ejercicios de gramática.pdf", type: "pdf", size: "1.8 MB", date: "Hace 3 días", folder: "Lengua" },
  { id: 3, name: "Diagrama del sistema solar.png", type: "image", size: "856 KB", date: "Hace 1 semana", folder: "Ciencias" },
  { id: 4, name: "Video explicativo - Mitosis.mp4", type: "video", size: "45 MB", date: "Hace 1 semana", folder: "Ciencias" },
  { id: 5, name: "Plantilla de evaluación.docx", type: "doc", size: "124 KB", date: "Hace 2 semanas", folder: "Exámenes" },
  { id: 6, name: "Lecturas recomendadas.pdf", type: "pdf", size: "3.2 MB", date: "Hace 2 semanas", folder: "Lengua" },
]

const getFileIcon = (type: string) => {
  switch (type) {
    case "pdf":
      return <FileText className="h-6 w-6 text-rose-500" />
    case "image":
      return <Image className="h-6 w-6 text-emerald-500" />
    case "video":
      return <Video className="h-6 w-6 text-sky-500" />
    default:
      return <File className="h-6 w-6 text-amber-500" />
  }
}

const getFileColor = (type: string) => {
  switch (type) {
    case "pdf":
      return "bg-rose-50 border-rose-100"
    case "image":
      return "bg-emerald-50 border-emerald-100"
    case "video":
      return "bg-sky-50 border-sky-100"
    default:
      return "bg-amber-50 border-amber-100"
  }
}

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null)

  const filteredResources = resources.filter((resource) => {
    const matchesSearch = resource.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFolder = !selectedFolder || resource.folder === selectedFolder
    return matchesSearch && matchesFolder
  })

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 
            className="text-2xl sm:text-3xl font-bold text-foreground"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Recursos
          </h1>
          <p className="text-muted-foreground mt-1">
            Gestiona tus materiales educativos
          </p>
        </div>
        <Button>
          <Upload className="h-4 w-4 mr-2" />
          Subir archivo
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Buscar recursos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* Folders */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Carpetas</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {folders.map((folder) => (
            <button
              key={folder.id}
              onClick={() => setSelectedFolder(selectedFolder === folder.name ? null : folder.name)}
              className={cn(
                "flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left",
                selectedFolder === folder.name
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              )}
            >
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", folder.color)}>
                <FolderOpen className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{folder.name}</p>
                <p className="text-xs text-muted-foreground">{folder.count} archivos</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Files */}
      <Card className="border-border/50">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold">
            {selectedFolder ? `Archivos en ${selectedFolder}` : "Todos los archivos"}
          </CardTitle>
          {selectedFolder && (
            <Button variant="ghost" size="sm" onClick={() => setSelectedFolder(null)}>
              Ver todos
            </Button>
          )}
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className={cn(
                  "flex items-center gap-4 p-4 rounded-xl border transition-all hover:shadow-sm group",
                  getFileColor(resource.type)
                )}
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                  {getFileIcon(resource.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{resource.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {resource.size} • {resource.date} • {resource.folder}
                  </p>
                </div>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Download className="h-4 w-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Renombrar</DropdownMenuItem>
                      <DropdownMenuItem>Mover a carpeta</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Eliminar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}

            {filteredResources.length === 0 && (
              <div className="text-center py-12">
                <FolderOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No se encontraron archivos</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Upload Zone */}
      <Card className="border-2 border-dashed border-border hover:border-primary/50 transition-all">
        <CardContent className="p-8">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-4">
              <Upload className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Arrastra y suelta tus archivos aquí
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              o haz clic para seleccionar archivos
            </p>
            <Button variant="outline">
              Seleccionar archivos
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              PDF, DOC, PPT, imágenes y videos (máx. 50MB)
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
