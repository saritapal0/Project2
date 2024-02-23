import React from 'react'

export default function User(props) {
    console.log(props.data.name)
    const {data}= props
  return (
    <div>
      <h1>User Component {data.name}</h1>
      
      <h1>{data.age}</h1>
    </div>
  )
}
