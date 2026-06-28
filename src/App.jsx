import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Journal from './components/Journal'
import Footer from './components/Footer'
import DotField from './components/DotField'
import './App.css'

function App() {
  return (
    <>
      <div className="app__bg">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          gradientFrom="rgba(190, 110, 255, 0.65)"
          gradientTo="rgba(150, 70, 220, 0.35)"
        />
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Journal />
        <Footer />
      </main>
    </>
  )
}

export default App
