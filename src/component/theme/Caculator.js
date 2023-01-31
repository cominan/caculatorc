import React, { useState } from 'react'
import Button from './Button'
import Display from './Display'
import caculate from '../logic/caculate'

export default function Caculator() {
  const [value, setValue] = useState({
    operation: '',
    next: '',
    total: ''
  })
  const characters = ['+', '-', 'x', '/',]
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'DEL', '=']
  const handleCal = (valButton) => {
    const values = caculate(valButton, value)
    setValue({ ...value,...values })
  }
  return (
    <div className='max-w-[40%] m-auto text-white'>
      <Display value={value} />
      <div className='flex m-auto w-full'>
        <div className='grid grid-cols-3 bg-slate-400 max-w-[80%] w-[80%]'>
          {
            numbers.map((number) => {
              return (
                <Button key={number} cal={handleCal} name={number.toString()} value={number} />
              )
            })
          }
        </div>
        <div className='w-[20%] bg-red-500'>
          {characters.map(character => {
            return (
              <Button key={character} cal={handleCal} name={character.toString()} value={character} />
            )
          })}
        </div>
      </div>
    </div>
  )
}
