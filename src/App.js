import React from 'react'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import MainCard from './components/mainCard/MainCard'
import "./App.css"
import Signup from './components/Signup/Signup'
import Footer from './components/footer/Footer'
import Card from './components/card/Card'


const App = () => {
  return (
    <>
      <Navbar />
      <div className='main'>
        <div className='middle'>

          <Header />
          {/* <Card /> */}
          <MainCard />
        </div>
      </div>
      <Footer />

    </>
  )
}

export default App