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



export class QRcode extends Component {
      constructor(props) {
        super(props)
      
        this.state = {
     
        }
      }
  render() {
    return (
        <div style={{minheight:400,display:"flex"}}>
        
        <div className='upload-image-box-image-vertical'>

      <div className='delete-image-box-image'>
        <span style={{color:"#06A8AE"}}>QR Code</span>
        <div className='delete-button-image'>
        <DeleteForeverOutlinedIcon style={{color:"red"}}/>
        <span style={{color:"#ffffff"}}>Delete</span>
        </div>
        </div>

       <div className='input-class'>
       <select className='text-field'>
      <option value="A">Email</option>
      <option value="B">Banana</option>
      <option value="C">Cranberry</option>
      </select>
        </div>

        <div className='label-text'>
        <span style={{color:"white"}}>Email Address</span>
        </div>

        <div className='input-class'>
        <input type="text" className='text-field' placeholder='Enter Email Address'/>
        </div>
        <div className='label-text'>
        <span style={{color:"white"}}>Subject(Optional)</span>
        </div>
        <div className='input-class'>
        <input type="text" className='text-field' placeholder='Code Subject'/>
        </div>
        <div className='label-text'>
        <span style={{color:"white"}}>Text(Optional)</span>
        </div>
        <div className='input-class'>
        <textarea type="text" className='text-field' placeholder='Enter text' rows="7" cols="50"/>
        </div>
        <div className='label-text'>
        <span style={{color:"white"}}>Nickname</span>
        </div>
        <div className='input-class'>
        <select className='text-field'>
       <option value="A">NickName</option>
       <option value="B">Banana</option>
       <option value="C">Cranberry</option>
       </select>
         </div>

 <div className='qr-button-div-vertical'>
        <button className='qr-button'>
        <span className='qr'>Apply</span>
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
   <div className='front-image-vertical'>
   <div className='front-new-image-vertical'>
   <span className='front-new-text-image-vertical'>Front Side</span>
   </div>
   <div className='back-vertical'>
   <span className='back-template-image-vertical'>Back Side</span>
   </div>
   </div>
   </div>
  {/*****white paper*/}
  <div style={{padding:20,display:"flex",justifyContent:"center"}}>
  <div className='white-paper-image-vertical'>
  
  </div>
  </div>
  
        </div>
  
  
  
        </div>
    )
  }
}

export default QRcode