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
     


         




















          {/*****TASKBAR*/}
          <div className="right-side-div">
        <div className='navbar-div'>
        
      <div className='navbar-div-image'>

            <div className='navbar-div-saved-card-image'>
          <ContactsIcon className='icon-image-navbar'/>
          <span className='icon-navbar'>Saved Card</span>
          </div>

          <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,flexWrap:"nowrap"}}>
<UndoIcon  className='icon-image-navbar' />
<span className='icon-navbar'>Undo</span>
</div>

<div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,flexWrap:"nowrap"}}>
<RedoIcon className='icon-image-navbar'/>
<span className='icon-navbar'>Redo</span>
</div>

      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,flexWrap:"nowrap"}}>
<TagIcon className='icon-image-navbar'/>
<span className='icon-navbar'>Guide</span>
</div>

      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,flexWrap:"nowrap"}}>
<AddCardIcon className='icon-image-navbar'/>
<span className='icon-navbar'>Create New</span>
</div>

      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,flexWrap:"nowrap"}}>
<Crop169Icon className='icon-image-navbar'/>
<span className='icon-navbar'>Horizontal</span>
</div>

      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:10,flexWrap:"nowrap"}}>
<CropPortraitIcon className='icon-image-navbar'/>
<span className='icon-navbar'>Vertical</span>
</div>

</div>

<div style={{display:"flex",justifyContent:"center",alignItems:"center",background: "#FC4646",
width:"15%"}}>
<DeleteForeverOutlinedIcon style={{color:"white"}}/>
<span className='icon-navbar'>Delete Card</span>
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

export default SmartView