import Grainient from './components/Grainient/Grainient'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Advantages from './components/Advantages'
import Experience from './components/Experience'
import Contact from './components/Contact'
import ScrollAnimations from './components/ScrollAnimations'

function App() {
  return (
    <>
      {/* 全局动态渐变背景（固定定位，覆盖整个网页） */}
      <div className="global-bg">
        <Grainient
          color1="#6e8cff"
          color2="#0a0a14"
          color3="#050508"
          timeSpeed={0.12}
          colorBalance={0.0}
          warpStrength={0.5}
          warpFrequency={3.5}
          warpSpeed={0.8}
          warpAmplitude={10}
          blendAngle={0.0}
          blendSoftness={0.15}
          rotationAmount={250.0}
          noiseScale={1.2}
          grainAmount={0.03}
          grainScale={2.0}
          grainAnimated={false}
          contrast={1.2}
          gamma={1.0}
          saturation={1.0}
          centerX={0.1}
          centerY={-0.2}
          zoom={2.0}
        />
      </div>

      <Navbar />
      <ScrollAnimations />
      <main>
        <Hero />
        <Projects />
        <Gallery />
        <Advantages />
        <Experience />
        <Contact />
      </main>
    </>
  )
}

export default App
