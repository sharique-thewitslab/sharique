import React, { useState } from 'react'

function Contact() {    
  let [data,setdata]=useState({
    email:"",
    password:"",
    dates:"",
    pic:""
  })
  let [show,setshow]=useState(false)
function getdata(e){
var name=e.target.name
var value=e.target.value
setdata((old)=>{
  return{
    ...old,
    [name]:value
  }
})
}
function postdata(e){
  e.preventDefault()
 alert(
    `
    Name: ${data.email},
    Password: ${data.password}
    Date:${data.dates}
    `
 )
}
  return (
    <>
    <h1>Contact pages:</h1>
    <div className='row'>
      <div className='col-xxl-3 col-xl-2 col-lg-2 col-md-2 col-1'></div>
      <div className='col-xxl-6 col-xl-8 col-lg-8 col-md-8 col-10'>
      <div className="mb-3">
    <label for="exampleInputEmail1" className="div-label">Email address</label>
    <input type="email" className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" onChange={getdata}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type={show?"text":"password"} className="form-control" name='password' id="exampleInputPassword1" onChange={getdata}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={()=>setshow(!show)}/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="date" className="form-control" name='dates' id="exampleInputEmail1" aria-describedby="emailHelp" onChange={getdata}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="file" className="form-control" name='pic' id="exampleInputEmail1" aria-describedby="emailHelp" onChange={getdata}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <button onClick={postdata} className="btn btn-primary">Submit</button>
      </div>
      <div className='col-xxl-3 col-xl-2 col-lg-2 col-md-2 col-1'></div>
</div>
    </>
  )
}

export default Contact