import React from 'react'
import Card from './components/card'
import Navbar from './components/Navbar'

//usally app.jsx should be empty because we render everything ( so less code )
const App = () => {

  return (
    <div>
      <Navbar/>
      <Card />
      </div>
  )
}

export default App