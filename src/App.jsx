import React from 'react'
import './index.css'
import Header from './components/header/Header'
import About from './components/main/About'
import Service from './components/main/service'
function App() {
  return (
    <>

    <Header/>
    <section id='about' className='pt-[60px]'>
      <About/>
    </section>
    <section id='service' className='pt-[60px]'>
      <Service/>
    </section>
    </>
  )
}

export default App