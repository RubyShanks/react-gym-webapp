import { useState } from 'react'
import Workout from './components/Workout'
import Hero from './components/Hero'
import Generator from './components/Generator'
import { generateWorkout } from './utils/functions'


function App() {
  const [workout, setWorkout] = useState(null)
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('strength_power')

  function updateWorkout() {
    if (muscles.length < 1) {
      return
    }
    let newWorkout = generateWorkout({poison, muscles, goal})
    setWorkout(newWorkout)

    window.location.href='#workout'
  }

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <Hero />
      <Generator 
        poison={poison} 
        setPoison={setPoison}
        muscles={muscles}
        setMuscles={setMuscles}
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
      />
      {/* Workout.jsx?t=1730662196766:22 Uncaught TypeError: Cannot read properties of undefined (reading 'map') */}
      {/* This error is because the workout prop is undefined */}
      {/* We need to pass the workout prop to the Workout component */}
      {workout && (<Workout workout={workout} />)} 
    </ main>
  )
}

export default App
