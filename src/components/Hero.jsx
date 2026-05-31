export default function Hero() {
  return (
    <section id="hero" className="section-sticky z-[5] pt-16 bg-gray-950 border-b border-cyan-500/20">
      <div className="h-full flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
        <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-4xl font-bold text-white shadow-lg shadow-cyan-500/20">
          TN
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">
          <span className="text-white">Hola, soy </span>
          <span className="text-cyan-400">Luciano</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 mb-3">
          Desarrollador Full Stack
        </p>
        <p className="text-gray-500 mb-8 max-w-lg mx-auto">
          Construyo aplicaciones web modernas y escalables. Apasionado por el código limpio
          y las buenas prácticas de desarrollo.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-white font-medium transition-colors"
          >
            Contáctame
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg border border-gray-700 hover:border-cyan-500 text-gray-300 hover:text-white font-medium transition-colors"
          >
            Ver proyectos
          </a>
        </div>
      </div>
      </div>
    </section>
  )
}
