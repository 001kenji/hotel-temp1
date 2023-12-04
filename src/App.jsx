import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Header from './JSX/header'
import Home from './JSX/home'
import About from './JSX/about'
import Menu from './JSX/menu'
import Gallary from './JSX/galary'
import Review from './JSX/review'
import Contact from './JSX/contact'
import Footer from './JSX/footer'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   
   <div>

    <div className=' bg-blue-300 sticky top-0'>
      <Header />
    </div>

    <div>
      <Home />
    </div>

    <div>
      <About />
    </div>

    <div>
      <Menu />
    </div>

    <div>
      <Gallary />
    </div>

    <div>
      <Review />
    </div>

    <div>
      <Contact />
    </div>

    <div>
      <Footer />
    </div>

   </div>
   </>
  )
}

export default App
