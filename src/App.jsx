import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/sections/Hero'
import Mission from './components/sections/Mission'
import ChairmanMessage from './components/sections/ChairmanMessage'
import Leadership from './components/sections/Leadership'
import Milestones from './components/sections/Milestones'
import Gallery from './components/sections/Gallery'
import Membership from './components/sections/Membership'

export default function App() {
  return (
    <>
      <a
        href="#mission"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg"
      >
        跳至主要內容
      </a>
      <Navbar />
      <main role="main">
        <Hero />
        <Mission />
        <ChairmanMessage />
        <Leadership />
        <Milestones />
        <Gallery />
        <Membership />
      </main>
      <Footer />
    </>
  )
}
