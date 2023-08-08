import React, { useState } from 'react'
import About from './About'

function Home() {
    let [data,setdata]=useState('')
    function sw(value){
    setdata(value)
    }
  return (
    <>
    <h1>Home {data?data:"0"} pages</h1>
    <About switch={sw}/>
    </>
    
  )
}

export default Home