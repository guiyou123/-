import { Outlet } from 'react-router-dom'
import Grainient from './Grainient/Grainient'
import Navbar from './Navbar'
import ScrollAnimations from './ScrollAnimations'

export default function Layout() {
  return (
    <>
      {/* 全局动态渐变背景 */}
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
        <Outlet />
      </main>

      {/* 全局页脚 */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-mag">
            <span>HOU GUIYOU / 2026</span>
            <span>Designed & Built with passion</span>
          </div>
        </div>
      </footer>
    </>
  )
}
