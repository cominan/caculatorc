import React from 'react'

export default function Button(props) {
  return (
    <div className='w-full last:bg-red-500'>
      <button
        onClick={(e) => props.cal(e.target.value)}
        value = {props.name}
        className='border-2 p-2 w-full'>{props.value}</button>
    </div>
  )
}
