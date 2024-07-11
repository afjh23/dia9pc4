import React, { useState, useEffect } from 'react'
import { ListCards } from './components/ListCards'

export default function App() {
  const [data , setData] =useState([])
  const [users, setUsers]=useState([])
  const getData=async()=>{
    const rs= await fetch('https://jsonplaceholder.typicode.com/users')
    const jsonRs = await rs.json()
    setData(jsonRs)
    setUsers(jsonRs)
  }

  useEffect(()=>{
    getData()
   },[])

  return (
    <>
    <ListCards users={users}></ListCards>
    </>
  )
}
