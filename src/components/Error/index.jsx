import React from 'react'
import Liao from './liao.jpg'
import {Link} from 'react-router-dom'

function index() {
  return (
    <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      paddingTop:'100px'
    }}>
      <img alt="wiriterProfile" src={Liao} style={{height:'100px'}}/>
      <Link to='/'><h5>Get lost? Clicked me to go back to Homepage...</h5></Link>
    </div>
  )
}

export default index
