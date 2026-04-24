import { useDarkMode } from './hooks/useDarkMode'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollStory from './components/ScrollStory'
import MenuSection from './components/MenuSection'
import MenuSlider from './components/MenuSlider'
import Location from './components/Location'
import SocialMedia from './components/SocialMedia'
import Footer from './components/Footer'

export default function App() {
  const [isDark, setIsDark] = useDarkMode()

  return (
    <div className={isDark ? 'dark' : 'light'}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <main>
        <Hero/>
        <ScrollStory />
        <MenuSection />
        <MenuSlider />
        <Location />
        <SocialMedia />
      </main>
      <Footer />
    </div>
  )
}
