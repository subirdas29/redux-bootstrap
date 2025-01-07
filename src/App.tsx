

import { Outlet } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'

import { decrement, increment } from './redux/features/counter/counterSlice'
import { useAppDispatch, useAppSelector } from './redux/hook'
import Navbar from './components/ui/layout/Navbar'


function App() {
//  const dispatch = useAppDispatch()
//  const {count} = useAppSelector((state)=>state.counter)

//  const handleIncrement = (amount:number)=>{
//   dispatch(increment(amount))
//  }

//  const handleDecrement = ()=>{
//   dispatch(decrement())
//  }

  return (
    <div>
      {/* <h1>Counter with Redux</h1>
      <Button onClick={()=>handleIncrement(5)}>Increment By 5</Button>
      <Button onClick={()=>handleIncrement(1)}>Increment</Button>
      <div>{count}</div>
      <Button onClick={handleDecrement}>Decrement</Button> */}
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
