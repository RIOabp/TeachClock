"use client"

import { useState } from "react"
import { 
  Sparkles, 
  Send, 
  FileText, 
  Lightbulb, 
  BookOpen, 
  MessageSquare,
  Wand2,
  GraduationCap,
  Target,
  Clock
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const quickActions = [
  {
    icon: FileText,
    title: "Crear ejercicios",
    description: "Genera ejercicios personalizados para tus estudiantes",
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: Lightbulb,
    title: "Ideas de actividades",
    description: "Obtén sugerencias creativas para tu clase",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: BookOpen,
    title: "Resumen de tema",
    description: "Crea resúmenes claros y didácticos",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Target,
    title: "Plan de clase",
    description: "Diseña planes de clase estructurados",
    color: "bg-sky-100 text-sky-600",
  },
]

const suggestions = [
  "Genera 5 ejercicios de fracciones para 3º de primaria",
  "Crea una actividad grupal sobre el ciclo del agua",
  "Dame ideas para explicar la fotosíntesis de forma visual",
  "Escribe un cuento corto para practicar comprensión lectora",
]

const recentChats = [
  { title: "Ejercicios de multiplicación", date: "Hoy, 10:30" },
  { title: "Ideas para clase de ciencias", date: "Ayer" },
  { title: "Rúbrica de evaluación", date: "Hace 3 días" },
]

export default function AIAssistantPage() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([])

  const handleSend = () => {
    if (!message.trim()) return
    
    setMessages([...messages, { role: "user", content: message }])
    setMessage("")
    
    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "¡Hola! Soy tu asistente educativo. Estoy aquí para ayudarte a crear materiales, generar ideas y apoyarte en tu labor docente. ¿En qué puedo ayudarte hoy?",
        },
      ])
    }, 1000)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 
              className="text-2xl sm:text-3xl font-bold text-foreground"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Asistente IA
            </h1>
            <p className="text-muted-foreground">
              Tu ayudante inteligente para la enseñanza
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Chat Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Actions */}
          <div className="grid sm:grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all text-left group"
              >
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform", action.color)}>
                  <action.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{action.title}</h3>
                  <p className="text-sm text-muted-foreground">{action.description}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Chat Interface */}
          <Card className="border-border/50">
            <CardContent className="p-0">
              {/* Messages Area */}
              <div className="h-[400px] overflow-y-auto p-6">
                {messages.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                      <Wand2 className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      ¿En qué puedo ayudarte hoy?
                    </h3>
                    <p className="text-muted-foreground max-w-md mb-6">
                      Puedo crear ejercicios, generar ideas para actividades, escribir resúmenes 
                      y mucho más para apoyar tu enseñanza.
                    </p>
                    
                    {/* Suggestions */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="px-4 py-2 rounded-full bg-muted hover:bg-muted/80 text-sm text-foreground transition-colors"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {messages.map((msg, index) => (
                      <div
                        key={index}
                        className={cn(
                          "flex gap-3",
                          msg.role === "user" ? "justify-end" : "justify-start"
                        )}
                      >
                        {msg.role === "assistant" && (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                            <Sparkles className="h-4 w-4 text-white" />
                          </div>
                        )}
                        <div
                          className={cn(
                            "max-w-[80%] p-4 rounded-2xl",
                            msg.role === "user"
                              ? "bg-primary text-primary-foreground rounded-tr-sm"
                              : "bg-muted text-foreground rounded-tl-sm"
                          )}
                        >
                          <p className="text-sm leading-relaxed">{msg.content}</p>
                        </div>
                        {msg.role === "user" && (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center flex-shrink-0 text-xs font-semibold">
                            MG
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="border-t border-border p-4">
                <div className="flex gap-3">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escribe tu mensaje..."
                    className="flex-1"
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  />
                  <Button onClick={handleSend} disabled={!message.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Tips */}
          <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Consejos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Para mejores resultados, sé específica con:
              </p>
              <ul className="text-sm text-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  El nivel y edad de tus estudiantes
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  El tema o contenido específico
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  El tipo de actividad deseada
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  La duración o cantidad de ejercicios
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Recent Chats */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Conversaciones recientes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentChats.map((chat, index) => (
                <button
                  key={index}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors text-left"
                >
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{chat.title}</p>
                    <p className="text-xs text-muted-foreground">{chat.date}</p>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
