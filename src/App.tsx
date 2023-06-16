import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

import './App.css'

function App() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
