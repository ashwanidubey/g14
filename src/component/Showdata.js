import React from 'react'
import {  useSelector } from 'react-redux'
export default function Showdata() {
    
    const data = useSelector((state)=>state)
  return (
    <div>{data}</div>
  )
}
