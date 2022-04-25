import React, { Component } from 'react'
import "./css/QrCodeRes.css"
export class QrCodeRes extends Component {
  render() {
    return (
        <div style={{backgroundColor:"#2f2f2f",height:880}}>
     
      <div className='delete-image-box-res'>
      <span style={{color:"#06A8AE",fontSize:18}}>QR Code Type</span>
      </div>

     <div className='input-class'>
     <select className='text-field-res'>
    <option value="A">Email</option>
    <option value="B">Banana</option>
    <option value="C">Cranberry</option>
    </select>
      </div>

      <div className='label-text-res'>
      <span style={{color:"white"}}>Email Address</span>
      </div>

      <div className='input-class'>
      <input type="text" className='text-field-res' placeholder='Enter Email Address'/>
      </div>
      <div className='label-text-res'>
      <span style={{color:"white"}}>Subject(Optional)</span>
      </div>
      <div className='input-class'>
      <input type="text" className='text-field-res' placeholder='Code Subject'/>
      </div>
      <div className='label-text-res'>
      <span style={{color:"white"}}>Text(Optional)</span>
      </div>
      <div className='input-class'>
      <textarea type="text" className='text-field-res' placeholder='Enter text' rows="15" cols="50"/>
      </div>
      <div className='label-text-res'>
      <span style={{color:"white"}}>Nickname</span>
      </div>
      <div className='input-class'>
      <select className='text-field-res'>
     <option value="A">NickName</option>
     <option value="B">Banana</option>
     <option value="C">Cranberry</option>
     </select>
       </div>


      <div className='qr-button-div-res'>
      <button className='qr-button-res'>
      <span className='qr-res'>Apply</span>
      </button>
      </div>


      </div>

      
      
      

    )
  }
}

export default QrCodeRes