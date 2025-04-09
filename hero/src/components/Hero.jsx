import React, { useState } from "react";
import imgHero from "../assets/laptop_sinfondo.png";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const [showChat, setShowChat] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      from: "bot",
      text: "¡Hola! 👋 Soy tu asistente virtual. ¿En qué puedo ayudarte?\n\n1️⃣ 📱 Ver servicios de marketing\n2️⃣ 💰 Planes y precios\n3️⃣ 📩 Contactar por email\n4️⃣ 🛒 ¿Cómo contratar?\n5️⃣ ⏰ Horarios de atención\n6️⃣ ❓ Otras dudas frecuentes",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [step, setStep] = useState("inicio");

  const responses = {
    1: `Ofrecemos:\n\n✅ Community Manager\n✅ Social Media Manager\n✅ Google Ads\n✅ Google Analytics & Reporting\n✅ Email Marketing\n✅ Branding y diseño gráfico`,
    2: `Tenemos 3 planes:\n\n📦 Plan Básico - $80/mes: Gestión de 1 red social + 4 posteos.\n🚀 Plan Pro - $150/mes: Gestión de 2 redes + Ads + Analítica.\n🌟 Plan Premium - $250/mes: Todo incluido + reuniones quincenales.`,
    3: `Podés escribirnos a 📧 contacto@agenciawebficticia.com\nRespondemos en menos de 24hs.`,
    4: `1️⃣ Elegí un plan\n2️⃣ Contactanos por email o redes\n3️⃣ Coordinamos los pasos finales y ¡empezamos!`,
    5: `Atendemos de lunes a viernes 🕘 de 9 a 18hs. Los fines de semana solo emergencias.`,
    6: `¿Qué incluye el diseño gráfico?\n¿Puedo cambiar de plan?\n¿Se puede contratar solo un servicio específico?\n¡Te respondemos todo! 😊`,
  };

  const handleUserReply = (input) => {
    setChatHistory((prev) => [...prev, { from: "user", text: input }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setChatHistory((prev) => [
        ...prev,
        { from: "bot", text: responses[input] },
      ]);
      setStep(input);
    }, 2000);
  };

  const goToStart = () => {
    setChatHistory([
      {
        from: "bot",
        text: "¡Hola! 👋 Soy tu asistente virtual. ¿En qué puedo ayudarte?\n\n1️⃣ 📱 Ver servicios de marketing\n2️⃣ 💰 Planes y precios\n3️⃣ 📩 Contactar por email\n4️⃣ 🛒 ¿Cómo contratar?\n5️⃣ ⏰ Horarios de atención\n6️⃣ ❓ Otras dudas frecuentes",
      },
    ]);
    setStep("inicio");
  };

  return (
    <>
      <section>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 min-h-[90vh] relative">
          <div className="flex flex-col justify-center py-14 md:py-0">
            <div className="text-center md:text-left space-y-6">
              <h1 className="text-white text-5xl lg-text-6xl font-bold leading-relaxed xl:leading-normal">
                Agency web + 3 años <br />
                <span className="text-[#6FCF97] font-semibold">
                  experiencia
                </span>
              </h1>
              <p className="text-white xl:max-w-[500px]">
                Somos una agencia dedicada no solo a impulsar tu marca sino la
                identidad en tu sitio web
              </p>
              <div className="flex justify-center gap-8 md:justify-start">
                <button className="text-white heroBtn flex items-center gap-2 mt-4">
                  Conocer más
                </button>
                <button className="heroBtn mt-4 bg-transparent text-[#6FCF97] border border-[#6FCF97] hover:bg-[#6FCF97] hover:text-white transition duration-300 px-6 py-2 rounded-md">
                  Planes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Ícono de WhatsApp */}
        <div className="fixed bottom-8 right-6 z-50">
          <div className="relative">
            <button onClick={() => setShowChat(!showChat)}>
              <FaWhatsapp className="text-green-500 text-6xl hover:scale-110 transition-transform duration-300 cursor-pointer" />
            </button>

            {/* Badge de notificación */}
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md">
              1
            </span>
          </div>
        </div>
      </section>

      {/* Chat estilo WhatsApp */}
      {showChat && (
        <div className="fixed bottom-24 right-6 w-80 max-h-[500px] bg-[#e5ddd5] shadow-xl rounded-lg overflow-hidden z-50 flex flex-col border border-gray-300">
          <div className="bg-[#075E54] text-white p-4 font-bold text-sm">
            Asistente virtual
          </div>

          {/* Mensajes */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm flex flex-col">
            {chatHistory.map((msg, idx) => (
              <div
                key={idx}
                className={`px-3 py-2 rounded-xl max-w-[85%] whitespace-pre-line ${
                  msg.from === "bot"
                    ? "bg-white text-left self-start"
                    : "bg-[#DCF8C6] text-right self-end"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {isTyping && (
              <div className="text-gray-500 italic text-xs">Escribiendo...</div>
            )}
          </div>

          {/* Entrada del usuario */}
          {step === "inicio" ? (
            <div className="bg-gray-100 p-3">
              <ul className="grid grid-cols-3 gap-2 text-sm">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <li key={num}>
                    <button
                      className="w-full bg-white p-2 rounded shadow hover:bg-gray-200"
                      onClick={() => handleUserReply(num.toString())}
                    >
                      {num}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="bg-gray-100 p-3 text-sm flex flex-col gap-2">
              {step !== "6" && (
                <a
                  href="https://wa.me/541126587076"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white text-center py-2 rounded hover:bg-[#20b957] transition"
                >
                  Contratar vía WhatsApp
                </a>
              )}
              <button
                className="text-center bg-white py-2 rounded hover:bg-gray-200"
                onClick={goToStart}
              >
                🔁 Volver al inicio
              </button>
            </div>
          )}

          <div className="bg-[#f0f0f0] text-right text-xs p-2">
            <button
              onClick={() => setShowChat(false)}
              className="text-gray-500 hover:text-gray-800"
            >
              Cerrar ✖
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
