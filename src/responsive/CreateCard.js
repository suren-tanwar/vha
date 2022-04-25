import React, { Component } from 'react'
import "./CreateCard.css"


export class CreateCard extends Component {
  render() {
    return (
      <div>
      <div className='create-card'>
      <div style={{display:"flex",alignItems:"center",width:"70%"}}>
      <img src="/images/Home.png" style={{width:35,height:30,marginLeft:10}}/>
      <img src="/images/undo.png" style={{width:40,height:30,marginLeft:20}}/> 
      <img src="/images/redo.png" style={{width:40,height:30,marginLeft:20}}/> 
      </div>
      <div style={{display:"flex",alignItems:"center",width:"30%",justifyContent:"space-around"}}>
      <img src="/images/3dot.png" style={{width:8,height:30}}/>  
      <div style={{textAlign:"center",backgroundColor:"#FF9900",padding:5,borderRadius:90}}>
        <img src="/images/download.png" style={{width:20,height:20}}/>
        </div>
   </div>
     </div>
     <div className='create-front-res'>
     <div className='create-new-front-res'>
     <span className='create-new-text-front-res'>Front Side</span>
     </div>
     <div className='choose-front-res'>
     <span className='choose-template-front-res'>Back Side</span>
     </div>
     </div>   

{/*****white paper*/}
<div style={{padding:20,display:"flex",justifyContent:"center"}}>
<div className='white-paper-res'>

</div>
</div>
<div className='plus-button' >
<img src="/images/plus.png" style={{width:30,height:30}}/>
</div>

      </div>
    )
  }
}

export default CreateCard