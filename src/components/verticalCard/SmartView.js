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


import AddSharpIcon from '@mui/icons-material/AddSharp';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
export class SmartView extends Component {
  render() {
    return (
        <div style={{minheight:400,display:"flex"}}>
     


           {/*****IMAGE UPLOAD SIDE */}
           <div className='upload-image-box-image-vertical'>

           <div className='delete-image-box-image'>
        <span style={{color:"#06A8AE"}}>Smart Field</span>
        <div className='delete-button-image'>
        <DeleteForeverOutlinedIcon style={{color:"red"}}/>
        <span style={{color:"#ffffff"}}>Delete</span>
        </div>
        </div>

       <div className='input-class-smart'>
       <select className='text-field-smart'>
      <option value="A">SmartField</option>
      <option value="B">Banana</option>
      <option value="C">Cranberry</option>
      </select>
      <div className='smart-field-icon-right'>
      <AddSharpIcon  style={{color:"white"}}/>
      </div>
        </div>

        

        <div className='input-class-smart'>
        <input type="text" className='text-field-smart' placeholder='First Name'/>
        <div className='smart-field-icon-left'>
        <ClearSharpIcon  style={{color:"white"}}/>
        </div>
        </div>
       
        <div className='input-class-smart'>
        <input type="text" className='text-field-smart' placeholder='Last Name'/>
        <div className='smart-field-icon-left'>
        <ClearSharpIcon  style={{color:"white"}}/>
        </div>
        </div>
        <div className='input-class-smart'>
        <input type="text" className='text-field-smart' placeholder='Nickname'/>
        <div className='smart-field-icon-left'>
        <ClearSharpIcon  style={{color:"white"}}/>
        </div>
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
  <div className='white-paper-image-vertical'>
  
  </div>
  </div>
  
        </div>
  </div>
    )
  }
}

export default SmartView