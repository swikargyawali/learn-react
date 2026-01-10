import React from 'react'

const card = (props) => {

  console.log(props)
  return (
    <div className='card'>
        <img src={props.img} alt=''></img>
        <h1>{props.user}</h1>
        <p>Hey, I am {props.user}, {props.age}. <br />
          A passionate backend engineer</p>
        <button>View profile</button>

    </div>
  )
}

export default card