import React, { Component } from 'react'
import "./css/TextResponsive.css"

export class TextResponsive extends Component {
  render() {
    return (
        <div style={{backgroundColor:"#2f2f2f",height:850}}>

   
      <div style={{marginLeft:"5%"}}>
      <span style={{color:"white",fontSize:18}}>Preview Text</span>
      </div>
      <div style={{width:"100%",display:"flex",justifyContent:"center",marginTop:10}}>
      <textarea type="text" style={{width:"90%",backgroundColor:"#2f2f2f"}} placeholder='Enter text' rows="8" cols="50"/>
      </div>

      <div className='button-div-res'>
      <button className='button-res'>
      <span className='button-res-text'>Apply</span>
      </button>
      </div>
    
   
      
     
      
      </div>
    )
  }
}

export default TextResponsive