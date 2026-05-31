const skillCategories = [
  {
    title: 'Frontend',
    skills: ['JavaScript', 'TypeScript', 'React', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'Herramientas',
    skills: ['Git', 'GitHub', 'VS Code', 'Linux'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-sticky z-20 pt-16 bg-gray-950 border-b border-cyan-500/20">
      <div className="h-full flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-cyan-400">Mis</span> habilidades
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {skillCategories.map((cat) => (
              <div
                key={cat.title}
                className="p-6 rounded-xl border border-gray-800 bg-gray-900 hover:border-cyan-500/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
