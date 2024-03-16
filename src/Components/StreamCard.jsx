import React from 'react'

export default function StreamCard({ stream }) {
  return (
    <div className='stream-card'>
      <h3>{stream.title}</h3>
        <p>{stream.summary}</p>
      
    </div>
  )
}
