import React, { useState } from 'react';
import { X, Clock, Globe, ArrowRight, CheckCircle, Users, Calendar, Star } from 'lucide-react';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function EmailModal({ isOpen, onClose }: EmailModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailRegex.test(email)) {
      setIsValid(true);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
        onClose();
      }, 2000);
    } else {
      setIsValid(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1F2937] rounded-2xl max-w-md w-full p-8 relative border border-[#ea9b25]/30 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        
        {isSubmitted ? (
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#ea9b25] to-[#f4a935] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">¡Perfecto!</h3>
            <p className="text-gray-300">Te has registrado exitosamente. Pronto recibirás más información.</p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Regístrate al evento gratuito</h3>
            <p className="text-gray-300 mb-6 text-center">Ingresa tu correo electrónico para asegurar tu lugar en esta sesión exclusiva.</p>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsValid(true);
                  }}
                  className={`w-full px-4 py-4 bg-[#374151] border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ea9b25] text-white placeholder-gray-400 text-center ${
                    !isValid ? 'border-red-500' : 'border-gray-600'
                  }`}
                  placeholder="tu-email@ejemplo.com"
                  required
                />
                {!isValid && (
                  <p className="text-red-400 text-sm mt-2 text-center">Por favor ingresa un correo válido</p>
                )}
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#ea9b25] to-[#f4a935] text-white font-bold py-4 px-6 rounded-xl hover:from-[#d18a1f] hover:to-[#e09428] transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                REGISTRARME AHORA
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const timeZones = [
    { time: '8 PM', location: 'CDMX', flag: 'mexico flag.png' },
    { time: '9 PM', location: 'Miami', flag: 'EEUU flag.png' },
    { time: '8 PM', location: 'Bogotá', flag: 'colombia flag.png' },
    { time: '10 PM', location: 'Santiago', flag: 'chile flag.png' },
    { time: '3 AM', location: 'Madrid', flag: 'españa flag.png' }
  ];

  const benefits = [
    "Método probado con más de 10,000 mujeres",
    "Solo 30 minutos, 3 veces por semana",
    "Sin dietas extremas ni restricciones",
    "Resultados visibles en 28 días",
    "Desde la comodidad de tu hogar"
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-12 px-4 sm:px-6 lg:px-8">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <img
            src="EVENTO FIT.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1A]/95 via-[#0A0F1A]/80 to-[#0A0F1A]/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#ea9b25]/20 border border-[#ea9b25]/30 rounded-full px-4 py-2 text-sm font-medium text-[#ea9b25]">
                <Star className="w-4 h-4" />
                Evento Exclusivo Gratuito
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1] tracking-tight">
                  Descubre cómo eliminar grasa y volver a tener el{' '}
                  <span className="bg-gradient-to-r from-[#ea9b25] to-[#f4a935] bg-clip-text text-transparent">
                    mejor cuerpo de tu vida
                  </span>{' '}
                  en 28 días
                </h1>
                
                <div className="w-20 h-1 bg-gradient-to-r from-[#ea9b25] to-[#f4a935] rounded-full"></div>
              </div>
              
              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
                Pierde de <strong className="text-white">3 a 10 kilos en solo 28 días</strong>, sin dietas extremas ni entrenar cada día. 
                Solo 30 minutos, 3 veces por semana, con el método que ya transformó la vida de 
                más de <strong className="text-[#ea9b25]">10.000 mujeres mayores de 30 años</strong>.
              </p>

              {/* Benefits List */}
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#ea9b25] flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#ea9b25]" />
                  <span className="text-sm text-gray-400">+10,000 mujeres transformadas</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#ea9b25] fill-current" />
                  ))}
                  <span className="text-sm text-gray-400 ml-1">4.9/5</span>
                </div>
              </div>
            </div>
            
            {/* Right Column - Registration Form */}
            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-[#1a2332] to-[#0f1419] p-8 rounded-3xl border border-[#ea9b25]/30 shadow-2xl backdrop-blur-sm">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-[#ea9b25]/20 border border-[#ea9b25]/30 rounded-full px-4 py-2 text-sm font-medium text-[#ea9b25] mb-4">
                    <Calendar className="w-4 h-4" />
                    Jueves 26 de Junio
                  </div>
                  
                  <h3 className="text-white text-2xl font-bold mb-2">
                    REGÍSTRATE A LA SESIÓN
                  </h3>
                  <h2 className="text-[#ea9b25] text-3xl font-black tracking-wide">
                    TOTALMENTE GRATIS
                  </h2>
                  
                  {/* Decorative element */}
                  <div className="flex items-center justify-center mt-4">
                    <div className="h-px bg-gradient-to-r from-transparent via-[#ea9b25] to-transparent w-32"></div>
                  </div>
                </div>
                
                <form onSubmit={handleInlineSubmit} className="space-y-6">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ingresa tu correo electrónico"
                      className="w-full px-6 py-4 bg-[#374151]/50 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ea9b25] text-white placeholder-gray-400 font-medium backdrop-blur-sm text-center"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#ea9b25] to-[#f4a935] text-white font-bold py-4 px-6 rounded-xl hover:from-[#d18a1f] hover:to-[#e09428] transition-all duration-300 shadow-lg transform hover:scale-105 flex items-center justify-center gap-3 text-lg"
                  >
                    ¡QUIERO REGISTRARME AHORA!
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>

                {/* Trust indicators */}
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>100% Gratis</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Sin spam</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A0F1A] to-[#111827]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Horarios por País
            </h2>
            <p className="text-xl text-gray-300">Disponible en todo el mundo</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {timeZones.map((item, index) => (
              <div
                key={index}
                className="bg-[#1F2937] backdrop-blur-sm p-6 rounded-2xl text-center border border-[#ea9b25]/20 shadow-[0_0_20px_rgba(234,155,37,0.1)] hover:shadow-[0_0_30px_rgba(234,155,37,0.2)] transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-12 mx-auto mb-4 rounded-lg overflow-hidden border-2 border-[#ea9b25]/30">
                  <img 
                    src={item.flag} 
                    alt={`${item.location} flag`}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="text-[#ea9b25] text-2xl font-bold mb-1">{item.time}</div>
                <div className="text-white font-medium">{item.location}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-[#ea9b25] to-[#f4a935] text-white font-bold py-4 px-12 rounded-xl hover:from-[#d18a1f] hover:to-[#e09428] transition-all duration-300 shadow-lg transform hover:scale-105 inline-flex items-center gap-3 text-lg"
            >
              Reservar mi lugar ahora
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="EVENTO FITNESS.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1A]/95 via-[#0A0F1A]/85 to-[#0A0F1A]/70"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  ¿De qué hablaremos en esta sesión?
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#ea9b25] to-[#f4a935] rounded-full"></div>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-gray-300">
                  Después de más de <strong className="text-white">20 años transformando cuerpos reales</strong> y acompañar a más de <strong className="text-white">10.000 mujeres</strong>…
                </p>
                
                <p className="text-gray-300">
                  Quiero mostrarte el método más realista, humano y eficaz para volver a sentirte bien en tu cuerpo, sin dietas extremas ni entrenamientos imposibles.
                </p>
                
                <div className="bg-gradient-to-r from-[#ea9b25]/20 to-transparent p-6 rounded-2xl border-l-4 border-[#ea9b25]">
                  <p className="text-xl font-bold text-white">
                    Un enfoque que te permitirá perder de 3 a 10 kilos en 28 días, ganar energía real y recuperar tu autoestima.
                  </p>
                </div>
                
                <p className="text-gray-300">
                  Entrenando desde casa solo <strong className="text-white">30 minutos, 3 veces por semana</strong>, con una rutina que se adapta a ti, <strong className="text-white">y no tú a ella</strong>.
                </p>
                
                <p className="text-gray-300">
                  Esta clase es para mujeres reales. Mujeres con poco tiempo, con responsabilidades, con hijos o con mil cosas en la cabeza…
                </p>
                
                <div className="bg-[#1F2937]/80 backdrop-blur-sm p-6 rounded-2xl border border-[#ea9b25]/30">
                  <p className="text-xl font-bold text-center text-[#ea9b25]">
                    Pero con ganas de volver a tener su mejor versión física.
                  </p>
                </div>
                
                <p className="text-gray-300">
                  Todo lo que me tomó años entender, después de mis embarazos, mi propio cambio físico y mental, y el trabajo con miles de mujeres, lo voy a entregarte en esta clase gratuita.
                </p>
                
                <p className="text-gray-300">
                  Esto <strong className="text-white">no es un reto, ni un entrenamiento más</strong>. Es la <strong className="text-white">primera y única vez</strong> que revelo públicamente mi método completo, en vivo.
                </p>
                
                <p className="text-[#ea9b25] text-xl font-semibold">
                  Y créeme… si estás aquí, no es casualidad.
                </p>
              </div>
            </div>
            
            {/* Right Column - CTA */}
            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-[#1a2332] to-[#0f1419] p-8 rounded-3xl border border-[#ea9b25]/30 shadow-2xl backdrop-blur-sm text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  ¿Lista para transformar tu vida?
                </h3>
                <p className="text-gray-300 mb-8">
                  No dejes pasar esta oportunidad única de descubrir el método que cambió la vida de miles de mujeres.
                </p>
                
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-gradient-to-r from-[#ea9b25] to-[#f4a935] text-white font-bold py-4 px-8 rounded-xl hover:from-[#d18a1f] hover:to-[#e09428] transition-all duration-300 shadow-lg transform hover:scale-105 flex items-center justify-center gap-3 text-lg mb-6"
                >
                  Reservar mi lugar
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <div className="text-sm text-gray-400">
                  <p>✓ Acceso inmediato</p>
                  <p>✓ 100% gratuito</p>
                  <p>✓ Sin compromisos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-[#0A0F1A] to-[#111827]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Tu transformación comienza aquí
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Únete a las miles de mujeres que ya transformaron su vida. 
            El cambio que buscas está a un clic de distancia.
          </p>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-[#ea9b25] to-[#f4a935] text-white font-bold py-6 px-12 rounded-2xl hover:from-[#d18a1f] hover:to-[#e09428] transition-all duration-300 shadow-2xl transform hover:scale-105 inline-flex items-center gap-4 text-xl"
          >
            ¡Quiero transformar mi vida ahora!
            <ArrowRight className="w-6 h-6" />
          </button>
          
          <p className="text-sm text-gray-400 mt-6">
            Evento gratuito • Sin compromisos • Resultados garantizados
          </p>
        </div>
      </section>

      {/* Email Registration Modal */}
      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;