import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Hero, Navbar, Tech, Works, EarthCanvas, StarsCanvas } from './components';
import { FlickeringGrid } from './components/ui/flickering-grid';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <FlickeringGrid
          className="fixed inset-0 z-0 pointer-events-none"
          squareSize={4}
          gridGap={6}
          color="#3b82f6"
          maxOpacity={0.06}
          flickerChance={0.1}
        />
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Experience />
        <Works />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
