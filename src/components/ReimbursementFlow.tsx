import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Camera,
  Send,
  CheckCircle,
  MessageCircle,
  FileText,
  Zap,
  ChevronUp,
  ChevronDown,
} from 'lucide-react'

const steps = [
  {
    id: 0,
    title: 'Captura la boleta',
    description: 'Toma una foto de tu boleta o factura directamente con tu celular. Solo apunta y dispara.',
    icon: Camera,
    color: '#fa7210',
  },
  {
    id: 1,
    title: 'Envía por WhatsApp',
    description: 'Manda la imagen al chat de Cardda como si escribieras a un amigo. Sin apps adicionales.',
    icon: MessageCircle,
    color: '#25D366',
  },
  {
    id: 2,
    title: 'Clasificación Inteligente',
    description: 'El bot te pregunta la categoría y el sistema extrae los datos automáticamente con OCR.',
    icon: Zap,
    color: '#fa7210',
  },
  {
    id: 3,
    title: 'Listo para Validación',
    description: 'El gasto se sube a la plataforma y la rendición queda lista para que el área de finanzas la apruebe y genere el pago.',
    icon: CheckCircle,
    color: '#25D366',
  },
]

export function ReimbursementFlow() {
  const [currentStep, setCurrentStep] = useState(0)
  const [showFlash, setShowFlash] = useState(false)
  const [scanLine, setScanLine] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [selectionPhase, setSelectionPhase] = useState(0) // 0: buttons visible, 1: pressing, 2: selected (show user reply)
  const [showSuccess, setShowSuccess] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const chatScrollRef = useRef<HTMLDivElement>(null)
  const lastStep = useRef(0)
  const autoAdvanceTimer = useRef<NodeJS.Timeout | null>(null)
  const selectionTimers = useRef<NodeJS.Timeout[]>([])
  const phoneRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handlePhoneMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = phoneRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * -25, y: x * 25 })
  }, [])

  const handlePhoneMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 })
  }, [])


  const triggerStepAnimations = useCallback((step: number) => {
    // Clear all pending timers first
    selectionTimers.current.forEach(t => clearTimeout(t))
    selectionTimers.current = []

    if (step === 0) {
      setShowFlash(true)
      setTimeout(() => setShowFlash(false), 300)
      setShowChat(false)
      setSelectionPhase(0)
      setShowSuccess(false)
    }
    if (step === 1) {
      // Scan first, then transition to chat with bot message
      setScanLine(true)
      setShowChat(false)
      setSelectionPhase(0)
      setShowSuccess(false)
      const t1 = setTimeout(() => setScanLine(false), 800)
      const t2 = setTimeout(() => setShowChat(true), 1100)
      selectionTimers.current = [t1, t2]
    }
    if (step === 2) {
      // Selection animation
      setShowChat(true)
      setSelectionPhase(0)
      setShowSuccess(false)
      const t1 = setTimeout(() => setSelectionPhase(1), 800) // press
      const t2 = setTimeout(() => setSelectionPhase(2), 1400) // show user reply
      selectionTimers.current = [t1, t2]
    }
    if (step === 3) {
      // Show success
      setShowChat(true)
      setSelectionPhase(2)
      setShowSuccess(true)
      setTimeout(() => {
        chatScrollRef.current?.scrollTo({ top: chatScrollRef.current.scrollHeight, behavior: 'smooth' })
      }, 100)
    }
  }, [])

  const navigateToStep = useCallback((step: number) => {
    if (step < 0 || step >= steps.length) return
    const target = stepRefs.current[step]
    if (target) {
      const targetRect = target.getBoundingClientRect()
      const targetCenter = targetRect.top + targetRect.height / 2
      const vc = window.innerHeight / 2
      window.scrollBy({ top: targetCenter - vc, behavior: 'smooth' })
    }
  }, [])

  // Scroll-driven: detect which step is at viewport center + auto-advance after 3s idle
  useEffect(() => {
    const handleScroll = () => {
      // Clear pending auto-advance on any scroll
      if (autoAdvanceTimer.current) {
        clearTimeout(autoAdvanceTimer.current)
        autoAdvanceTimer.current = null
      }

      const viewportCenter = window.innerHeight * 0.5

      let closest = 0
      let closestDist = Infinity

      stepRefs.current.forEach((ref, i) => {
        if (!ref) return
        const rect = ref.getBoundingClientRect()
        const elCenter = rect.top + rect.height / 2
        const dist = Math.abs(elCenter - viewportCenter)
        if (dist < closestDist) {
          closestDist = dist
          closest = i
        }
      })

      if (closest !== lastStep.current) {
        triggerStepAnimations(closest)
        lastStep.current = closest
      }
      setCurrentStep(closest)

      // Schedule auto-advance to next step after 3 seconds of no scrolling
      if (containerRef.current && closestDist < window.innerHeight * 0.4) {
        const rect = containerRef.current.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          autoAdvanceTimer.current = setTimeout(() => {
            const next = (closest + 1) % 4
            const target = stepRefs.current[next]
            if (target) {
              const targetRect = target.getBoundingClientRect()
              const targetCenter = targetRect.top + targetRect.height / 2
              const vc = window.innerHeight / 2
              window.scrollBy({ top: targetCenter - vc, behavior: 'smooth' })
            }
          }, 3000)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (autoAdvanceTimer.current) clearTimeout(autoAdvanceTimer.current)
    }
  }, [triggerStepAnimations])

  return (
    <div ref={containerRef} className="bg-white text-[#151515]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile title */}
        <div className="lg:hidden pt-24 pb-6 text-center">
          <h2 className="text-3xl font-bold text-[#151515] mb-3">
            Tan simple como{' '}
            <span className="text-[#fa7210]">chatear</span>
          </h2>
          <p className="text-base text-[#38424e]">
            Convierte tus boletas en rendiciones completas en segundos.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16">

          {/* LEFT: STICKY PHONE */}
          <div className="sticky top-0 h-screen flex flex-col lg:items-center lg:justify-center bg-white z-10 overflow-hidden">
            {/* Mobile step indicator - in flow, with navigation arrows */}
            <div className="lg:hidden flex-shrink-0 pt-24 px-4 pb-2 z-30">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: steps[currentStep].color }}>
                      Paso {currentStep + 1} de {steps.length}
                    </p>
                    <h3 className="text-base font-bold text-[#151515] leading-tight">
                      {steps[currentStep].title}
                    </h3>
                    <p className="text-xs text-[#38424e] mt-0.5 leading-relaxed">
                      {steps[currentStep].description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 ml-3 flex-shrink-0">
                    <button
                      onClick={() => navigateToStep(currentStep - 1)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                        currentStep === 0
                          ? 'bg-gray-100 text-gray-300 cursor-default'
                          : 'bg-gray-100 text-[#151515] hover:bg-gray-200 active:scale-90'
                      }`}
                      aria-label="Paso anterior"
                    >
                      <ChevronUp className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => navigateToStep(currentStep + 1)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                        currentStep === steps.length - 1
                          ? 'bg-gray-100 text-gray-300 cursor-default'
                          : 'text-white active:scale-90'
                      }`}
                      style={{
                        backgroundColor: currentStep < steps.length - 1 ? steps[currentStep].color : undefined,
                      }}
                      aria-label="Siguiente paso"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="flex gap-1.5 mt-2">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        i === currentStep ? 'w-6' : 'w-1.5'
                      }`}
                      style={{
                        backgroundColor: i <= currentStep ? steps[currentStep].color : '#d1d5db',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Phone container - fills remaining space on mobile, natural on desktop */}
            <div className="flex-1 min-h-0 flex items-center justify-center lg:flex-initial" style={{ perspective: '1000px' }}>
            <div className="scale-[0.7] sm:scale-[0.8] lg:scale-100 origin-center">
            <div
              ref={phoneRef}
              className="relative"
              onMouseMove={handlePhoneMouseMove}
              onMouseLeave={handlePhoneMouseLeave}
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: 'transform 0.15s ease-out',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Glow */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full pointer-events-none transition-all duration-700"
                style={{
                  background: `radial-gradient(circle, ${steps[currentStep].color}22 0%, transparent 70%)`,
                }}
              />

              {/* Phone */}
              <div className="relative w-[280px] h-[560px] bg-black rounded-[40px] border-[6px] border-[#2a2a2a] shadow-2xl overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#2a2a2a] rounded-b-2xl z-30" />

                {/* Status bar */}
                <div className="absolute top-1 left-0 right-0 h-6 flex items-center justify-between px-7 z-30">
                  <span className="text-white text-[10px] font-semibold">10:24</span>
                  <div className="flex items-center gap-1">
                    <div className="flex items-end gap-[2px]">
                      <div className="w-[3px] h-[4px] bg-white rounded-sm" />
                      <div className="w-[3px] h-[6px] bg-white rounded-sm" />
                      <div className="w-[3px] h-[8px] bg-white rounded-sm" />
                      <div className="w-[3px] h-[10px] bg-white rounded-sm" />
                    </div>
                    <div className="w-6 h-[10px] border border-white rounded-[3px] ml-1 relative">
                      <div className="absolute inset-[2px] bg-[#34c759] rounded-[1px]" style={{ width: '75%' }} />
                      <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-[4px] bg-white rounded-r-sm" />
                    </div>
                  </div>
                </div>

                {/* Flash */}
                <div className={`absolute inset-0 bg-white z-50 pointer-events-none transition-opacity duration-100 ${showFlash ? 'opacity-80' : 'opacity-0'}`} />

                {/* Screen */}
                <div className="w-full h-full bg-[#0b141a] relative overflow-hidden">

                  {/* STATE 0: CAMERA */}
                  <div className={`absolute inset-0 bg-black transition-all duration-500 ${currentStep === 0 ? 'opacity-100 z-20' : 'opacity-0 z-0'}`}>
                    <div className="h-full relative flex items-center justify-center">
                      <div className="absolute inset-0 bg-gray-900" />

                      <div className="relative z-10 w-44 h-60 bg-white text-gray-800 p-3 rounded shadow-lg rotate-[-2deg]">
                        <div className="flex flex-col items-center gap-1.5 h-full">
                          <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-[10px] font-bold">LOGO</div>
                          <div className="w-full h-1 bg-gray-800 rounded" />
                          <div className="w-3/4 h-1 bg-gray-300 rounded" />
                          <div className="w-full h-px bg-gray-200 my-1" />
                          <div className="w-full space-y-0.5 text-[7px]">
                            <div className="flex justify-between"><span>Café Latte</span><span>$3.500</span></div>
                            <div className="flex justify-between"><span>Croissant</span><span>$2.800</span></div>
                            <div className="flex justify-between"><span>Sandwich</span><span>$3.490</span></div>
                            <div className="flex justify-between"><span>Propina</span><span>$1.200</span></div>
                          </div>
                          <div className="mt-auto w-full h-6 bg-gray-800 text-white rounded flex items-center justify-center font-mono text-xs font-bold">$10.990</div>
                        </div>
                      </div>

                      {/* Viewfinder */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                        <div className="relative w-52 h-72 border border-white/30 rounded-lg">
                          <div className="absolute -top-0.5 -left-0.5 w-5 h-5 border-t-[3px] border-l-[3px] border-[#fa7210] rounded-tl" />
                          <div className="absolute -top-0.5 -right-0.5 w-5 h-5 border-t-[3px] border-r-[3px] border-[#fa7210] rounded-tr" />
                          <div className="absolute -bottom-0.5 -left-0.5 w-5 h-5 border-b-[3px] border-l-[3px] border-[#fa7210] rounded-bl" />
                          <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 border-b-[3px] border-r-[3px] border-[#fa7210] rounded-br" />
                        </div>
                      </div>

                      {/* Bottom bar */}
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur p-5 z-20">
                        <div className="flex items-center justify-center gap-8">
                          <div className="w-8 h-8 rounded border border-white/40" />
                          <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center">
                            <div className="w-12 h-12 bg-white rounded-full" />
                          </div>
                          <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center">
                            <Camera className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* STATE 1: SCAN */}
                  <div className={`absolute inset-0 bg-gradient-to-b from-[#111] to-black flex flex-col items-center justify-center transition-all duration-500 ${currentStep === 1 && !showChat ? 'opacity-100 z-20' : 'opacity-0 z-0'}`}>
                    <div className="relative">
                      <div className="w-44 h-60 bg-white text-gray-800 p-3 rounded-lg shadow-2xl relative overflow-hidden">
                        {scanLine && (
                          <div className="absolute left-0 right-0 h-0.5 bg-[#fa7210] z-10 shadow-[0_0_8px_#fa7210]" style={{ animation: 'scanDown 0.75s ease-in-out forwards' }} />
                        )}
                        <div className="flex flex-col items-center gap-1.5 h-full">
                          <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-[10px] font-bold bg-gray-50">LOGO</div>
                          <div className="w-full h-1 bg-gray-800 rounded" />
                          <div className="w-3/4 h-1 bg-gray-300 rounded" />
                          <div className="w-full h-px bg-gray-200 my-1" />
                          <div className="w-full space-y-0.5 text-[7px]">
                            <div className="flex justify-between"><span>Café Latte</span><span>$3.500</span></div>
                            <div className="flex justify-between"><span>Croissant</span><span>$2.800</span></div>
                            <div className="flex justify-between"><span>Sandwich</span><span>$3.490</span></div>
                            <div className="flex justify-between"><span>Propina</span><span>$1.200</span></div>
                          </div>
                          <div className="mt-auto w-full h-6 bg-gray-800 text-white rounded flex items-center justify-center font-mono text-xs font-bold">$10.990</div>
                          <div className="text-[5px] text-gray-500">RUT: 76.123.456-K</div>
                        </div>
                      </div>
                      <div className="absolute inset-0 border-2 border-[#fa7210]/60 rounded-lg pointer-events-none" />
                    </div>
                    <div className="mt-5 flex items-center gap-2 text-gray-400 text-xs">
                      <div className="w-4 h-4 border-2 border-[#fa7210] border-t-transparent rounded-full animate-spin" />
                      Enviando a WhatsApp...
                    </div>
                  </div>

                  {/* STATE 2+3: WHATSAPP CHAT */}
                  <div className={`absolute inset-0 flex flex-col transition-all duration-500 ${currentStep >= 2 || showChat ? 'opacity-100 z-20' : 'opacity-0 z-0'}`}>
                    {/* Chat header */}
                    <div className="flex items-center gap-2 px-3 pt-9 pb-2 bg-[#202c33]">
                      <div className="w-8 h-8 rounded-full bg-[#fa7210] flex items-center justify-center relative overflow-hidden">
                        <img src="/cardda-landing/Favicon negro.svg" alt="Carddie" className="w-5 h-5 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
                        <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#25D366] rounded-full border-2 border-[#202c33]" />
                      </div>
                      <div>
                        <p className="text-white text-xs font-semibold">Carddie</p>
                        <p className="text-[#25D366] text-[10px]">en línea</p>
                      </div>
                    </div>

                    {/* Scrollable chat body */}
                    <div ref={chatScrollRef} className="flex-1 p-3 space-y-2 bg-[#0b141a] overflow-y-auto scroll-smooth">
                      {/* User sent photo */}
                      <div className="flex justify-end">
                        <div className="bg-[#005c4b] p-1 rounded-lg rounded-tr-none max-w-[75%]">
                          <div className="w-full h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center">
                            <FileText className="text-gray-500 w-6 h-6" />
                          </div>
                          <p className="text-[8px] text-[#8696a0] text-right px-1 mt-0.5">10:24 <span className="text-[#53bdeb]">✓✓</span></p>
                        </div>
                      </div>

                      {/* Bot asks category */}
                      <div className="flex justify-start">
                        <div className="max-w-[85%]">
                          <div className="bg-[#202c33] p-2.5 rounded-lg rounded-tl-none">
                            <p className="text-white text-[11px]">¡Boleta recibida! 📄</p>
                            <p className="text-white text-[11px] mt-1">¿A qué categoría corresponde?</p>
                          </div>
                          {/* WhatsApp Quick Reply Buttons */}
                          <div className={`mt-1 space-y-[3px] transition-all duration-500 ${showSuccess ? 'opacity-0 max-h-0 overflow-hidden' : 'opacity-100 max-h-40'}`}>
                            {[
                              { emoji: '🍽️', label: 'Alimentación' },
                              { emoji: '🚗', label: 'Transporte' },
                              { emoji: '📦', label: 'Otros' },
                            ].map((option, i) => {
                              const isAlimentacion = i === 0
                              const isPressed = isAlimentacion && selectionPhase >= 1
                              const isHidden = !isAlimentacion && selectionPhase >= 2
                              return (
                                <div
                                  key={i}
                                  className={`bg-[#202c33] rounded-lg flex items-center justify-center gap-1.5 py-2 transition-all duration-300 ${
                                    isPressed ? 'bg-[#2a3942] scale-95' : ''
                                  } ${isHidden ? 'opacity-0 max-h-0 py-0 mt-0 overflow-hidden' : 'opacity-100 max-h-12'}`}
                                >
                                  <svg className={`w-3 h-3 transition-colors duration-300 ${isPressed ? 'text-white' : 'text-[#00a884]'}`} viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M6.5 1.5a5 5 0 0 0-4.8 6.3L1 11.5l3.7-.7A5 5 0 1 0 6.5 1.5z" />
                                  </svg>
                                  <span className={`text-[11px] font-medium transition-colors duration-300 ${isPressed ? 'text-white' : 'text-[#00a884]'}`}>
                                    {option.emoji} {option.label}
                                  </span>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>

                      {/* User selects Alimentación - appears after animation */}
                      <div className={`flex justify-end transition-all duration-500 ${selectionPhase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 max-h-0 overflow-hidden'}`}>
                        <div className="bg-[#005c4b] px-3 py-1.5 rounded-lg rounded-tr-none">
                          <p className="text-white text-[10px]">🍽️ Alimentación</p>
                          <p className="text-[7px] text-[#8696a0] text-right">10:25 <span className="text-[#53bdeb]">✓✓</span></p>
                        </div>
                      </div>

                      {/* Success message - appears when scrolling to step 4 */}
                      <div className={`transition-all duration-700 ${showSuccess ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 max-h-0 overflow-hidden'}`}>
                        <div className="flex justify-start">
                          <div className="bg-[#202c33] p-2.5 rounded-lg rounded-tl-none max-w-[90%] border-l-2 border-[#25D366]">
                            <p className="text-white text-[11px] font-bold mb-1.5 flex items-center gap-1.5">
                              <span className="text-[#25D366] text-sm">✓</span> ¡Rendición creada correctamente!
                            </p>
                            <div className="bg-[#1a2428] rounded-lg p-2 space-y-1 text-[9px]">
                              <div className="flex justify-between">
                                <span className="text-gray-400">Proveedor:</span>
                                <span className="text-white">TÓPICO</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">RUT:</span>
                                <span className="text-white">96.534.456-K</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Boleta Nº:</span>
                                <span className="text-white">00123456</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Fecha:</span>
                                <span className="text-white">15/01/2026</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Concepto:</span>
                                <span className="text-white">Cafetería</span>
                              </div>
                              <div className="flex justify-between border-t border-gray-600 pt-1 mt-1">
                                <span className="text-gray-400 font-bold">Monto Total:</span>
                                <span className="text-[#25D366] font-bold">$10.990</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Categoría:</span>
                                <span className="text-white">Alimentación</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Rendición:</span>
                                <span className="text-white">#4092</span>
                              </div>
                            </div>
                            <div className="mt-2 flex items-center gap-1 text-[#25D366] text-[9px] font-medium">
                              <CheckCircle className="w-3 h-3" /> Esperando validación de finanzas
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Chat input bar */}
                    <div className="p-2 bg-[#202c33] flex items-center gap-2">
                      <div className="flex-1 bg-[#2a3942] h-9 rounded-full px-4 flex items-center text-gray-400 text-[11px]">Mensaje</div>
                      <div className="w-9 h-9 bg-[#00a884] rounded-full flex items-center justify-center"><Send className="w-3.5 h-3.5 text-white" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
          </div>

          {/* RIGHT: SCROLLABLE TEXT SECTIONS */}
          <div>
            {/* Title - visible at top */}
            <div className="hidden lg:block pt-40 pb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-[#151515] mb-4">
                Tan simple como{' '}
                <span className="text-[#fa7210]">chatear</span>
              </h2>
              <p className="text-lg text-[#38424e] max-w-md">
                Convierte tus boletas en rendiciones completas en segundos.
              </p>
            </div>

            {/* Step sections - each one is tall to allow scroll */}
            {steps.map((step, index) => {
              const isActive = index === currentStep
              const isPast = index < currentStep
              const IconComponent = step.icon

              return (
                <div
                  key={index}
                  ref={el => { stepRefs.current[index] = el }}
                  className="min-h-[40vh] lg:min-h-[55vh] flex items-center"
                >
                  <div className={`hidden lg:block transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-4'}`}>
                    <div className="flex items-start gap-5 max-w-lg">
                      <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        isActive ? 'shadow-lg' : ''
                      }`} style={{
                        backgroundColor: isActive || isPast ? step.color : '#f3f4f6',
                        color: isActive || isPast ? 'white' : '#9ca3af',
                      }}>
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: isActive ? step.color : '#9ca3af' }}>
                          Paso {index + 1} de {steps.length}
                        </p>
                        <h3 className={`text-2xl md:text-3xl font-bold mb-3 transition-colors duration-300 ${
                          isActive ? 'text-[#151515]' : isPast ? 'text-[#151515]/50' : 'text-gray-300'
                        }`}>
                          {step.title}
                        </h3>
                        <p className={`text-base leading-relaxed transition-colors duration-300 ${
                          isActive ? 'text-[#38424e]' : 'text-gray-400'
                        }`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Benefits footer */}
            <div className="hidden lg:block pb-20 pt-8">
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm text-[#38424e]">
                  <CheckCircle className="w-4 h-4 text-[#25D366]" /> Sin instalar Apps
                </div>
                <div className="flex items-center gap-2 text-sm text-[#38424e]">
                  <CheckCircle className="w-4 h-4 text-[#25D366]" /> Alta precisión OCR
                </div>
                <div className="flex items-center gap-2 text-sm text-[#38424e]">
                  <CheckCircle className="w-4 h-4 text-[#25D366]" /> Subida instantánea a Cardda
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scanDown {
          0% { top: 0; }
          100% { top: 100%; }
        }
      `}</style>
    </div>
  )
}
