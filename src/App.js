import React,{useState, useEffect} from 'react'
import Navbar from './Components/Navbar'
import "./index.css"
import { css } from "@emotion/react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { color } from '@mui/system';
import Header from './Components/Header';
import Products from './Components/Products';
import About from './Components/About';
import Contact from './Components/Contact';
const override = css`
  display: block;
  margin: 40vh auto;
  border-color: red;
`;


function App() {
  const color = "#36D7B7";
 const[loading,setLoading] = useState(false);
 useEffect(() => {
   setLoading(true)
   setTimeout(()=>{setLoading(false)},5000)
 },[])
  return (
    <div className='App'>
      {
        loading? <ClimbingBoxLoader color={color} loading={loading} css={override} size={15} />
        :
        <>
        <Navbar />
        <Header />
        <Products />
        <About />
        <Contact />
        </>
      }
      
    </div>
  )
}

export default App



