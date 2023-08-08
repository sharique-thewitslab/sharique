import logo from './logo.svg';
import React from "react"
import './App.css';
import "./assets/css/mystyle.css"
import { useState } from 'react';
import Main from './Components/Main';

function App() {
  const [data,setdata]=useState(0)
  return (
   <>
   <Main/>
   </>
  );
}

export default App;
