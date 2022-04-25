import React, { Component } from 'react'
import "./css/Smartviewres.css"
import AddSharpIcon from '@mui/icons-material/AddSharp';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';

export class Smartviewres extends Component {
  render() {
    return (
        <div style={{backgroundColor:"#2f2f2f",height:850}}>
        <div className='delete-image-box-res'>
        <span style={{color:"#06A8AE",fontSize:18}}>Tap Shape to add to page </span>
        </div>

        <div className='input-class-smart-res'>
        <select className='text-field-smart-res'>
       <option value="A">Select Field</option>
       <option value="B">Banana</option>
       <option value="C">Cranberry</option>
       </select>
       <div className='smart-field-icon-right-res'>
       <AddSharpIcon  style={{color:"white"}}/>
       </div>
         </div>
 
         
 
         <div className='input-class-smart-res'>
         <input type="text" className='text-field-smart-res' placeholder='First Name'/>
         <div className='smart-field-icon-left-res'>
         <ClearSharpIcon  style={{color:"white"}}/>
         </div>
         </div>
        
         <div className='input-class-smart-res'>
         <input type="text" className='text-field-smart-res' placeholder='Last Name'/>
         <div className='smart-field-icon-left-res'>
         <ClearSharpIcon  style={{color:"white"}}/>
         </div>
         </div>
         <div className='input-class-smart-res'>
         <input type="text" className='text-field-smart-res' placeholder='Nickname'/>
         <div className='smart-field-icon-left-res'>
         <ClearSharpIcon  style={{color:"white"}}/>
         </div>
         </div>
       
      
      </div>
    )
  }
}

export default Smartviewres