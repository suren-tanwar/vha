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
import QRCode from 'react-qr-code'
import { Stage, Layer, Image, Transformer } from "react-konva";

export class QRcode extends Component {
      constructor(props) {
        super(props)
      
        this.state = {
           selectQr : "1",
            qremail:"",
           qrtext:"",
           qrnumber:"",
           qrurl:"",
        }
      }
      handleChange = (e) => {
            this.setState({
              [e.target.name]: e.target.value,
            });
          };
  render() {
        console.log(this.state)
    return (
        <div style={{minheight:400,display:"flex"}}>
       <div className='qr-editor-start'>
        <div className='qr-delete-box'>
        <span style={{color:"#06A8AE"}}>QR Code</span>
        <div className='delete-button-qr'>
        <DeleteForeverOutlinedIcon style={{color:"red"}}/>
        <span style={{color:"#ffffff"}}>Delete</span>
        </div>
        </div>

       <div className='input-class-qr'>
 <select name="selectQr" value={this.state.selectQr}  className='text-field-qr' onChange={this.handleChange} >
      <option value="1" >Email</option>
      <option value="2" >Text</option>
      <option value="3" >Number</option>
      <option value="4" >URL</option>
      </select>
        </div>
{this.state.selectQr === "1" &&
        <div className='label-text-qr'>
        <span style={{color:"white"}}>Email Address</span>
        </div>
}
{this.state.selectQr === "1" &&
        <div className='input-class-qr'>
        <input type="email" className='text-field-qr' placeholder='Enter Email Address' name="qremail" value={this.state.qremail} onChange={this.handleChange}/>
        </div>
}
{this.state.selectQr === "2" &&
      <div className='label-text-qr'>
      <span style={{color:"white"}}>Text</span>
      </div>
}
{this.state.selectQr === "2" &&
      <div className='input-class-qr'>
      <input type="text" className='text-field-qr' placeholder='Enter Text' name="qrtext" value={this.state.qrtext} onChange={this.handleChange}/>
      </div>
}
{this.state.selectQr === "3" &&
      <div className='label-text-qr'>
      <span style={{color:"white"}}>Number</span>
      </div>
}
{this.state.selectQr === "3" &&
      <div className='input-class-qr'>
      <input type="number" className='text-field-qr' placeholder='Enter Number' name="qrnumber" value={this.state.qrnumber} onChange={this.handleChange}/>
      </div>
}
{this.state.selectQr === "4" &&
      <div className='label-text-qr'>
      <span style={{color:"white"}}>URL</span>
      </div>
}
{this.state.selectQr === "4" &&
      <div className='input-class-qr'>
      <input type="url" className='text-field-qr' placeholder='Enter Url' name="qrurl" value={this.state.qrurl} onChange={this.handleChange}/>
      </div>
}

        <div className='label-text-qr'>
        <span style={{color:"white"}}>Subject(Optional)</span>
        </div>
        <div className='input-class-qr'>
        <input type="text" className='text-field-qr' placeholder='Code Subject'/>
        </div>
        <div className='label-text-qr'>
        <span style={{color:"white"}}>Text(Optional)</span>
        </div>
        <div className='input-class-qr'>
        <textarea type="text" className='text-field-qr' placeholder='Enter text' rows="6" cols="50"/>
        </div>
        <div className='label-text-qr'>
        <span style={{color:"white"}}>Nickname</span>
        </div>
        <div className='input-class-qr'>
        <select className='text-field-qr'>
       <option value="A">NickName</option>
       <option value="B">Banana</option>
       <option value="C">Cranberry</option>
       </select>
         </div>

 <div className='qr-button-div-qr'>
        <button className='qr-button-qr'>
        <span className='qr-qr'>Apply</span>
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
  <Transformer
  ref={qremail => {
    this.transformer = qremail;
  }}
/>
  {this.state.selectQr === "1" && <QRCode value={this.state.qremail} />}  
  {this.state.selectQr === "2" && <QRCode value={this.state.qrtext} />}  
  {this.state.selectQr === "3" && <QRCode value={this.state.qrnumber} />}  
  {this.state.selectQr === "4" && <QRCode value={this.state.qrurl} />}  
  </div>
  </div>
        </div>
  
  
        </div>
    )
  }
}

export default QRcode