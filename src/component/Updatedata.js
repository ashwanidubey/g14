import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../State/action';

export default function Updatedata() {
     const dispatch=useDispatch();
  return (
    <div>
        <button onClick={()=>{
          dispatch(increment())
        }}>+</button>
        <button onClick={()=>{
          dispatch(decrement())
        }}>-</button>
    </div>
  )
}
