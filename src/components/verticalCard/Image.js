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
import Button from '@mui/material/Button';
export class Image extends Component {
      constructor(props) {
        super(props)
      
        this.state = {
            image: [],
            imageShow:[],
        }
      }
      componentDidUpdate(prevProps, prevState){
           //  image upload conditions
            if (this.state.image !== prevState.image && this.state.image !== null && this.state.image !== undefined) {
              this.setState({ imageShow: URL.createObjectURL(this.state.image) })
          }
      }
        //-------------->>>>>>>>>>  IMAGE UPLOAD  <<<<<<<<<---------------//
  imageHandler = (e) => {
        console.log("Click")
      this.setState({
          ...this.state,
          [e.target.name]: e.target.files[0] })
    };
  render() {
        console.log(this.state)
    return (
      <div style={{display:"flex",minheight:400}}>
   
         {/*****IMAGE UPLOAD SIDE */}
      <div className='upload-image-box-image-vertical'>

      <div className='delete-image-box-image'>
      <span style={{color:"#06A8AE"}}>Image</span>
      <div className='delete-button-image'>
      <DeleteForeverOutlinedIcon style={{color:"red"}}/>
      <span style={{color:"#ffffff"}}>Delete</span>
      </div>
      </div>
     {/***UPLOAD IMAGE BUTTON */}
       <div style={{display:"flex",justifyContent:"center"}}>
       <input type="file" accept="image/*" name="image" id="input" onChange={this.imageHandler} style={{display:"none"}}/>
       <button className='upload-image-button-image'>
       <label className="image-upload" htmlFor="input">
     <span className='upload-image-button-text-image'>Upload Image</span>
     </label>
       </button>
       </div>

   


      <div style={{height:460,marginTop:10,overflowY:"scroll"}}>
      <div style={{height:"fit-content",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly",}}>
      <img src= "/images/CardDesign/Vertical/Card1.jpg"  className='image2-vertical' />
      <img src= "/images/CardDesign/Vertical/Card2.jpg"  className='image2-vertical' />
      <img src= "/images/CardDesign/Vertical/Card3.jpg"  className='image2-vertical' />
      <img src= "/images/CardDesign/Vertical/Card4.jpg"  className='image2-vertical' />
      <img src= "/images/CardDesign/Vertical/Card5.jpg"  className='image2-vertical' />
      <img src= "/images/CardDesign/Vertical/Card6.jpg"  className='image2-vertical' />
      <img src= "/images/CardDesign/Vertical/Card7.jpg"  className='image2-vertical' />
      <img src= "/images/CardDesign/Vertical/Card8.jpg"  className='image2-vertical' />
      <img src= "/images/CardDesign/Vertical/Card9.jpg"  className='image2-vertical' />
      <img src= "/images/CardDesign/Vertical/card10.jpg"  className='image2-vertical' />
      <img src= "/images/CardDesign/Vertical/Card11.jpg"  className='image2-vertical' />
      <img src= "/images/CardDesign/Vertical/Card12.jpg"  className='image2-vertical' />
      <img src= "/images/CardDesign/Vertical/Card13.jpg"  className='image2-vertical' />
      <img src= "/images/CardDesign/Vertical/Card14.jpg"  className='image2-vertical' />
      <img src= "/images/CardDesign/Vertical/Card15.jpg"  className='image2-vertical' />
      <img src= "/images/CardDesign/Vertical/Card16.jpg"  className='image2-vertical' />
      <img src= "/images/CardDesign/Vertical/Card17.jpg"  className='image2-vertical' />
      <img src= "/images/CardDesign/Vertical/Card18.jpg"  className='image2-vertical' />
      <img src= "/images/CardDesign/Vertical/Card19.jpg"  className='image2-vertical' />
      <img src= "/images/CardDesign/Vertical/card20.jpg"  className='image2-vertical' />

      </div>
  
      </div>

      <div className='apply-button-div-image-vertical'>
      <button className='apply-button-image'>
      <span className='apply-image'>Apply</span>
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
<div style={{padding:20,display:"flex",justifyContent:"center",overflow:"hidden"}}>
<div className='white-paper-image-vertical'>

</div>
</div>

      </div>



      </div>
    )
  }
}

export default Image

// <div>
// <label htmlFor="profile-image">
// <Avatar src={this.state.imageShow} alt="Profile Picture" style={{height: 150,width: 150, textAlign: "center", marginTop: 5,}} />                  
//  <label>{this.state.language === "english" ?'Profile Picture':'सामने का दृश्य'}</label>
//  </label>
//  <input  accept="image/jpeg, image/png, image/jpg" style={{ display: "none" }}
//    id="profile-image" onChange={(e) => this.imageHandler(e)} type="file" name="image" />
//    </div> 