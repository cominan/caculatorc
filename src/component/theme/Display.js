import React from 'react'

export default function Display(props) {
    const next = props.value.next
    const total = props.value.total
    const operation = props.value.operation
    return (
        <div className='text-black text-right border-2 bg-slate-200 pr-4 pt-2'>
            <p>{total + operation + next}</p>
            <p>{props.value === undefined ?  '0' : ( total || '0')}</p>
        </div>
    )
}
