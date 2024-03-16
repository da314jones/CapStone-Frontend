import React from 'react'

export default function StartSessionButton() {
  startSession = () => {

    console.log('Session started');
  }

  // render(){

  // }
  return (
    <button onClick={startSession}Start Session></button>
  )
}
