import React, { useState } from 'react';
import { X, Clock, Globe, ArrowRight } from 'lucide-react';

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
      <div className="bg-[#1F2937] rounded-xl max-w-md w-full p-8 relative border border-gray-700">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        
        {isSubmitted ? (
          <div className="text-center">
            <div className="w-16 h-16 bg-[#ea9b25] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">¡Perfecto!</h3>
            <p className="text-gray-300">Te has registrado exitosamente. Pronto recibirás más información.</p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-white mb-4">Regístrate al evento gratuito</h3>
            <p className="text-gray-300 mb-6">Ingresa tu correo electrónico para asegurar tu lugar en esta sesión exclusiva.</p>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsValid(true);
                  }}
                  className={`w-full px-4 py-3 bg-[#374151] border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea9b25] text-white placeholder-gray-400 ${
                    !isValid ? 'border-red-500' : 'border-gray-600'
                  }`}
                  placeholder="tu-email@ejemplo.com"
                  required
                />
                {!isValid && (
                  <p className="text-red-400 text-sm mt-1">Por favor ingresa un correo válido</p>
                )}
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#ea9b25] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#d18a1f] transition-colors duration-300 shadow-lg"
              >
                Enviar
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
    { time: '8 PM CDMX', flag: 'mexico flag.png' },
    { time: '9 PM Miami', flag: 'EEUU flag.png' },
    { time: '8 PM Bogotá', flag: 'colombia flag.png' },
    { time: '10 PM Santiago', flag: 'chile flag.png' },
    { time: '3 AM Madrid', flag: 'españa flag.png' }
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="EVENTO FIT.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-[#0A0F1A]/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-end">
            <div className="w-full lg:w-2/3 space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Descubrirás como eliminar grasa y volver a tener el{' '}
                <span className="text-[#ea9b25]">mejor cuerpo de tu vida</span>{' '}
                en 28 días
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Pierde de 3 a 10 kilos en solo 28 días, sin dietas extremas ni entrenar cada día. 
                Solo 30 minutos, 3 veces por semana, con el método que ya transformó la vida de 
                más de <strong className="text-white">10.000 mujeres mayores de 30 años</strong>.
              </p>
              
              {/* Email Registration Card */}
              <div className="bg-gradient-to-br from-[#1a2332] to-[#0f1419] p-6 rounded-2xl border border-[#ea9b25]/20 shadow-2xl backdrop-blur-sm">
                <div className="mb-6">
                  <h3 className="text-white text-lg font-bold mb-2">
                    REGÍSTRATE CON TU CORREO A LA SESIÓN
                  </h3>
                  <h2 className="text-[#ea9b25] text-2xl font-black tracking-wide">
                    TOTALMENTE GRATIS
                  </h2>
                  {/* Decorative lines */}
                  <div className="flex items-center mt-2">
                    <div className="h-0.5 bg-gradient-to-r from-[#ea9b25] to-transparent flex-1"></div>
                    <div className="h-0.5 bg-gradient-to-l from-[#ea9b25] to-transparent flex-1 ml-2"></div>
                  </div>
                </div>
                
                <form onSubmit={handleInlineSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="INGRESA TU CORREO ELECTRÓNICO"
                      className="w-full px-4 py-4 bg-[#374151]/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ea9b25] text-white placeholder-gray-400 font-medium backdrop-blur-sm"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#ea9b25] to-[#f4a935] text-white font-bold py-4 px-6 rounded-lg hover:from-[#d18a1f] hover:to-[#e09428] transition-all duration-300 shadow-lg flex items-center gap-3 justify-center text-base sm:text-lg transform hover:scale-105"
                  >
                    ¡QUIERO REGISTRARME A LA SESIÓN!
                    <div className="bg-white/20 rounded-full p-1">
                      <ArrowRight size={20} />
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Date & Schedule Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#111827] rounded-xl shadow-2xl p-8 sm:p-12 border border-gray-800">
            <div className="text-center mb-12">
              <h2 className="text-5xl sm:text-6xl font-bold text-white mb-2">
                Jueves
              </h2>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#ea9b25]">
                26 de Junio
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {timeZones.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#0A0F1A] backdrop-blur-sm px-6 py-4 rounded-xl text-center font-semibold flex items-center justify-between border border-[#ea9b25]/20 shadow-[0_0_20px_rgba(234,155,37,0.2)] hover:shadow-[0_0_30px_rgba(234,155,37,0.3)] transition-all duration-300"
                >
                  <span className="text-[#ea9b25] font-bold">{item.time}</span>
                  <div className="w-16 h-12 flex items-center justify-center">
                    <img 
                      src={item.flag} 
                      alt="Flag" 
                      className="w-full h-full object-cover rounded-lg border-2 border-[#ea9b25]/30 shadow-[0_0_15px_rgba(234,155,37,0.3)] hover:shadow-[0_0_20px_rgba(234,155,37,0.4)] transition-all duration-300" 
                    />
                  </div>
                  <span className="text-white">{item.time.split(' ')[1]}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#0A0F1A]/50 backdrop-blur-sm px-6 py-4 rounded-xl text-center border border-[#ea9b25]/20 shadow-[0_0_20px_rgba(234,155,37,0.2)]">
                <p className="text-white text-lg font-medium">
                  Disponible en todo el mundo
                </p>
              </div>
              
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-gradient-to-r from-[#ea9b25] to-[#f4a935] text-white font-semibold py-4 px-8 rounded-xl hover:from-[#d18a1f] hover:to-[#e09428] transition-all duration-300 shadow-[0_0_20px_rgba(234,155,37,0.3)] hover:shadow-[0_0_30px_rgba(234,155,37,0.4)] transform hover:scale-105 flex items-center justify-center gap-2 text-base sm:text-lg"
              >
                Click aquí para unirte
                <ArrowRight size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Session Details Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-visible">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="EVENTO FITNESS.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-[#0A0F1A]/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Removed image */}
            <div className="order-2 lg:order-1 hidden lg:block">
            </div>
            
            {/* Right Column - Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                ¿De qué hablaremos en esta sesión?
              </h2>
              
              {/* Mobile optimized content with better spacing and readability */}
              <div className="space-y-6 text-base sm:text-lg leading-relaxed">
                <p className="text-gray-300">
                  Después de más de <strong className="text-white">20 años transformando cuerpos reales</strong> y acompañar a más de <strong className="text-white">10.000 mujeres</strong>…
                </p>
                
                <p className="text-gray-300">
                  Quiero mostrarte el método más realista, humano y eficaz para volver a sentirte bien en tu cuerpo, sin dietas extremas ni entrenamientos imposibles.
                </p>
                
                <p className="text-gray-300">
                  Un enfoque que te permitirá <strong className="text-white">perder de 3 a 10 kilos en 28 días</strong>, ganar energía real y <strong className="text-white">recuperar tu autoestima</strong>… entrenando desde casa solo 30 minutos, 3 veces por semana, con una rutina que se adapta a ti, <strong className="text-white">y no tú a ella</strong>.
                </p>
                
                <p className="text-gray-300">
                  Esta clase es para mujeres reales. Mujeres con poco tiempo, con responsabilidades, con hijos o con mil cosas en la cabeza…
                </p>
                
                <div className="bg-gradient-to-r from-[#ea9b25]/20 to-transparent p-4 rounded-lg border-l-4 border-[#ea9b25] my-8">
                  <p className="text-xl font-bold text-center text-white">
                    Pero con ganas de volver a tener su mejor versión física.
                  </p>
                </div>
                
                <p className="text-gray-300">
                  Todo lo que me tomó años entender, después de mis embarazos, mi propio cambio físico y mental, y el trabajo con miles de mujeres, lo voy a entregarte en esta clase gratuita.
                </p>
                
                <p className="text-gray-300">
                  Esto <strong className="text-white">no es un reto, ni un entrenamiento más</strong>. Es la <strong className="text-white">primera y única vez</strong> que revelo públicamente mi método completo, en vivo.
                </p>
                
                <p className="text-gray-300">
                  Y créeme… si estás aquí, no es casualidad.
                </p>
              </div>
            </div>
          </div>

          {/* Button container */}
          <div className="mt-12 mb-8 lg:flex lg:justify-end">
            <div className="w-full lg:w-1/2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-gradient-to-r from-[#ea9b25] to-[#f4a935] text-white font-semibold py-4 px-8 rounded-xl hover:from-[#d18a1f] hover:to-[#e09428] transition-all duration-300 shadow-[0_0_20px_rgba(234,155,37,0.3)] hover:shadow-[0_0_30px_rgba(234,155,37,0.4)] transform hover:scale-105 flex items-center justify-center gap-2 text-base sm:text-lg"
              >
                Click aquí para unirte
                <ArrowRight size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Email Registration Modal */}
      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;