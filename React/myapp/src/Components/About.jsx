import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function About(props) {
    let {data}=useParams()
    let [a,seta]=useState(1)
    function getdata(){
        props.switch(a)
        seta(++a)
    }
   useEffect(()=>{
    if(data===1)
    alert('Its Done')
   },[])
  return (
    <>
    <div>About {data}</div>
    <button onClick={getdata}>Click</button>
    </>
  )
}

export default About