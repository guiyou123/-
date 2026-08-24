import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Advantages from './components/Advantages'
import AIWorkflow from './components/AIWorkflow'
import Contact from './components/Contact'

// 首页：Hero + 个人简介
function HomePage() {
  return (
    <>
      <Hero />
      <Profile />
    </>
  )
}

// 精选项目页
function ProjectsPage() {
  return <Projects />
}

// 作品展示页
function GalleryPage() {
  return <Gallery />
}

// 核心能力页：能力 + AI工作流
function AdvantagesPage() {
  return (
    <>
      <Advantages />
      <AIWorkflow />
    </>
  )
}

// 工作经历页
function ExperiencePage() {
  return <Experience />
}

// 联系页
function ContactPage() {
  return <Contact />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/advantages" element={<AdvantagesPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
