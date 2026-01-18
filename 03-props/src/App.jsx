import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>

      <Card user='Swikar' age= {20}  img='https://plus.unsplash.com/premium_photo-1757914024397-8dfdb7756af1?q=80&w=943&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

       <Card user='Firoj' age={24} img='https://plus.unsplash.com/premium_photo-1741669281773-7ffdefea68be?q=80&w=967&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      
    </div>
  )
}

export default App