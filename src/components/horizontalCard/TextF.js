import React, { Component } from 'react'
import  "./Image.css"
import ContactsIcon from '@mui/icons-material/Contacts';
import AddCardIcon from '@mui/icons-material/AddCard';
import TagIcon from '@mui/icons-material/Tag';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import Crop169Icon from '@mui/icons-material/Crop169';
import CropPortraitIcon from '@mui/icons-material/CropPortrait';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Slider from '@mui/material/Slider';
export class TextF extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
       
       }
     }



  render() {
       console.log(this.state)
    return (
        <div style={{minheight:400,display:"flex"}}>
     
        {/*****IMAGE UPLOAD SIDE */}
        <div className='text-editor-start'>
   <div className='text-delete-box'>
     <span style={{color:"#06A8AE"}}>Text</span>
     <div className='delete-button-text'>
     <DeleteForeverOutlinedIcon style={{color:"red"}}/>
     <span style={{color:"#ffffff"}}>Delete</span>
     </div>
     </div>
     <div className='label-text-text'>
     <span style={{color:"white"}}>Preview Text</span>
     </div>
  
     <div className='input-class-text'>
        <textarea type="text" className='text-field-text' placeholder='Enter text' rows="6" cols="30"/>
        </div>
        <div className='input-class-text'>
        <select className='text-field-text-select'>
       <option value="A">NickName</option>
       <option value="B">Banana</option>
       <option value="C">Cranberry</option>
       </select>
         </div>
        
         <div style={{display:"flex",justifyContent:"center",marginTop:5}}>
         <div className='text-editor-icon-box'>
         <div className="text-editor-box">
         <img className='img-text' src="/images/editor/italic.png" />
         </div>
         <div className="text-editor-box">
         <img className='img-text' src="/images/editor/bold.png" />
         </div>
         
         <div className="text-editor-box">
         <img className='img-text' src="/images/editor/underline.png" />
         </div>
         <select className='text-field-text-select-font-size'>
        <option value="A">10px</option>
        <option value="B">12px</option>
        <option value="C">14px</option>
        </select>
  </div>
 </div>

 <div style={{display:"flex",justifyContent:"center",marginTop:5}}>
 <div className='text-editor-icon-box'>
 <div className="text-editor-box">
 <img className='img-text' src="/images/editor/left.png" />
 </div>

 <div className="text-editor-box">
 <img className='img-text' src="/images/editor/right.png" />
 </div>
 <div className="text-editor-box">
 <img className='img-text' src="/images/editor/mig.png" />
 </div>
 <div className="text-editor-box">
 <img className='img-text' src="/images/editor/center.png" />
 </div>
 <div className="text-editor-box">
 <img className='img-text' src="/images/editor/A.png" />
 </div>
</div>
</div>


 <div style={{display:"flex",marginTop:5,marginLeft:15}}>
 <div className='text-editor-icon-box-last'>
 <div className="text-editor-box">
 <img className='img-text' src="/images/editor/Aac.png" />
 </div>
 <div className="text-editor-box">
 <img className='img-text' src="/images/editor/aau.png" />
 </div>
 <div className="text-editor-box">
 <img className='img-text' src="/images/editor/AA.png" />
 </div>

 <div className="text-editor-box">
 <img className='img-text' src="/images/editor/A.png" />
 </div>
</div>
</div>
<div style={{display:"flex",justifyContent:"center"}}>
<div className='text-editor-icon-box'>
<span style={{color:"white",fontSize:14}}>Transparency</span>
 </div>
</div>

<div style={{display:"flex",justifyContent:"center"}}>

 <div className='text-editor-icon-box'>
 <Slider
 defaultValue={30}
//  getAriaValueText={valuetext}
style={{color:"#ff9900"}}
/>
 </div>
</div>

<div style={{display:"flex",justifyContent:"center",marginTop:5}}>
<div className='text-editor-icon-box'>
<div style={{width:"43%"}}>
 <span style={{color:"white",fontSize:14}}>Width</span>
 </div>
 <div style={{width:"45%"}}>
 <span style={{color:"white",fontSize:14}}>Height</span>
 </div>
 </div>
</div>


<div style={{display:"flex",justifyContent:"center"}}>
<div className='text-editor-icon-box'>
<input type="number" className='text-field-height' />
<input type="number" className='text-field-height' />
 </div>
</div>

<div style={{display:"flex",justifyContent:"center"}}>
<div className='text-editor-icon-box'>
<div style={{width:"43%"}}>
 <span style={{color:"white",fontSize:14}}>Top</span>
 </div>
 <div style={{width:"45%"}}>
 <span style={{color:"white",fontSize:14}}>Left</span>
 </div>
 </div>
</div>


<div style={{display:"flex",justifyContent:"center"}}>
<div className='text-editor-icon-box'>
<input type="number" className='text-field-height' />
<input type="number" className='text-field-height' />
 </div>
</div>
<div className='text-editor-button-div'>
<button className='text-editor-button'>
<span className='text-editor-button-text'>Apply</span>
</button>
</div>
</div>




















          {/*****TASKBAR*/}
          <div className="main-image">

          <div className='task-bar-image'>

          <div className='task-bar-box-image'>

          <div className='task-bar-box-saved-card-image'>
          <ContactsIcon className='icon-color-image'/>
          <span className='icon-text-image'>Saved Card</span>
          </div>

          <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,flexWrap:"nowrap"}}>
<UndoIcon  className='icon-color-image' />
<span className='icon-text-image'>Undo</span>
</div>

<div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,flexWrap:"nowrap"}}>
<RedoIcon className='icon-color-image'/>
<span className='icon-text-image'>Redo</span>
</div>

      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,flexWrap:"nowrap"}}>
<TagIcon className='icon-color-image'/>
<span className='icon-text-image'>Guide</span>
</div>

      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,flexWrap:"nowrap"}}>
<AddCardIcon className='icon-color-image'/>
<span className='icon-text-image'>Create New</span>
</div>

      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,flexWrap:"nowrap"}}>
<Crop169Icon className='icon-color-image'/>
<span className='icon-text-image'>Horizontal</span>
</div>

      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,flexWrap:"nowrap"}}>
<CropPortraitIcon className='icon-color-image'/>
<span className='icon-text-image'>Vertical</span>
</div>

</div>

<div style={{display:"flex",justifyContent:"center",alignItems:"center",background: "#FC4646",
width:"15%"}}>
<DeleteForeverOutlinedIcon style={{color:"white"}}/>
<span className='icon-text-image'>Delete Card</span>
</div>

 </div>


   {/*****two buttons*/}
   <div>
   <div className='front-image'>
   <div className='front-new-image'>
   <span className='front-new-text-image'>Front Side</span>
   </div>
   <div className='back'>
   <span className='back-template-image'>Back Side</span>
   </div>
   </div>
   </div>
{/*****white paper*/}
<div style={{padding:30,display:"flex",justifyContent:"center"}}>
<div className='white-paper-image'>



</div>
</div>

     </div>



      
      
        </div>
    )
  }
}

export default TextF