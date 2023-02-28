import React from 'react'
import './button.css'

export const FilledButton = (props) => {
  return (
    <div className='btn btn-primary'>{props.title}</div>
  )
}