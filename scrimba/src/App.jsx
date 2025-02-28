import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"
import Entry from "./components/Entry"
import Contact from './components/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="contacts">
    {/* <Navbar/>
    <Main/> */}
    {/* <Header/>
    <Entry/>
    <Entry/> */}
    <Contact  img="./images/mr-whiskerson.png"
                name="Mr. Whiskerson" phone="(212) 555-1234" email="mr.whiskaz@catnap.meow"/>
    <Contact/>
    <Contact/>
    <Contact/>
   
    </div>   
  )
}

export default App
