import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-6 border-t border-gray-800 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.
      </footer>
    </>
  )
}
