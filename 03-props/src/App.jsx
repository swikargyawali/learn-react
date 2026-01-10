import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>

      <Card user='Bibek' age={24}/>
      <Card user='Sarthak' age={21}/>
      
    </div>
  )
}

export default App