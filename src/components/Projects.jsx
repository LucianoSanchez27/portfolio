const placeholderProjects = [
  { id: 1, title: 'App de Tareas', desc: 'Gestor de tareas con React y localStorage' },
  { id: 2, title: 'E-commerce API', desc: 'API RESTful con Node.js y MongoDB' },
  { id: 3, title: 'Dashboard', desc: 'Panel de administración con gráficos interactivos' },
  { id: 4, title: 'Blog Personal', desc: 'Blog con React y Markdown' },
  { id: 5, title: 'Clon de Twitter', desc: 'Red social con autenticación y tiempo real' },
  { id: 6, title: 'Portfolio', desc: 'Este mismo sitio, construido con React y Tailwind' },
]

export default function Projects() {
  return (
    <section id="projects" className="section-sticky z-30 pt-16 bg-gray-900 border-b border-blue-500/20">
      <div className="h-full flex flex-col items-center justify-center px-4">
        <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4 text-center">
            <span className="text-cyan-400">Mis</span> proyectos
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Proyectos en los que estoy trabajando — pronto estarán disponibles
          </p>
          <div className="w-full overflow-y-auto max-h-[calc(100vh-13rem)]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {placeholderProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-2xl">
                    {['📁', '⚙️', '📊', '✍️', '🐦', '🚀'][project.id - 1]}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
                  <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-medium">
                    Próximamente
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
