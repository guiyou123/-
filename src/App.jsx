import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import PageHero from './components/PageHero'
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
  return (
    <>
      <PageHero
        num="03"
        label="SELECTED PROJECTS"
        title="设计不止让每个项目更好看"
        subtitle="Selected Works"
        desc="从品牌视觉全案到AI内容生产，从宣传片独立制作到学术会议营销，以下是近年代表性项目的精选呈现。"
      />
      <Projects />
    </>
  )
}

// 作品展示页
function GalleryPage() {
  return (
    <>
      <PageHero
        num="04"
        label="PORTFOLIO GALLERY"
        title="设计连接产品和用户"
        subtitle="Portfolio Archive"
        desc="按品牌与项目分类的完整作品档案，涵盖视觉识别、海报物料、IP设计、视频制作等多类型产出。"
      />
      <Gallery />
    </>
  )
}

// 核心能力页：能力 + AI工作流
function AdvantagesPage() {
  return (
    <>
      <PageHero
        num="05"
        label="CAPABILITIES"
        title="做出设计，也做出结果"
        subtitle="What I Do"
        desc="覆盖品牌视觉全链路、AI内容生产、视频摄制与剪辑的综合能力体系，以设计+技术的复合视角交付项目。"
      />
      <Advantages />
      <AIWorkflow />
    </>
  )
}

// 工作经历页
function ExperiencePage() {
  return (
    <>
      <PageHero
        num="02"
        label="EXPERIENCE"
        title="从设计，到商业结果"
        subtitle="Career Path"
        desc="7年视觉设计与品牌营销从业经历，从设计服务到品牌方内部，持续深耕医疗、教育、制造等行业的视觉内容生产。"
      />
      <Experience />
    </>
  )
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
