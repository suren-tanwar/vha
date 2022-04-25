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
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

import CircleApp from ".././shapes/Circle"
import ArrowApp from ".././shapes/Arrow"
import LineApp from ".././shapes/Line"
import RectangleApp from ".././shapes/Rectangle"
import SquareApp from ".././shapes/Square"
import TriangleApp from ".././shapes/Triangle"

export class Typesofshape extends Component {
      constructor(props) {
        super(props)
      
        this.state = {
            open:false,
            open2:false,
            open3:false,
            open4:false,
            open5:false,
            open6:false,
        }
      }
  render() {
        console.log(this.state)
    return (
        <div style={{minheight:400,display:"flex"}}>
     
           {/*****IMAGE UPLOAD SIDE */}
           <div className='upload-image-box-image-vertical'>

           <div className='delete-image-box-image'>
        <span style={{color:"#06A8AE"}}>Type of Shape</span>
        <div className='delete-button-image'onClick={()=>this.setState({open:false,open2:false,open3:false,open4:false,open5:false,open6:false})}>
        <DeleteForeverOutlinedIcon style={{color:"red"}}/>
        <span style={{color:"#ffffff"}}>Delete</span>
        </div>
        </div>

<div className='icon-box-first'>
<div className="icon-box" onClick={()=>this.setState({open:true,open2:false,open3:false,open4:false,open5:false,open6:false})}>
<img src="/images/Rectangle70.png" style={{width:40,height:25}}/>
</div>

<div className="icon-box" onClick={()=>this.setState({open2:true,open:false,open3:false,open4:false,open5:false,open6:false})}>
<img src="/images/Rectangle73.png" style={{width:30,height:35}}/>
</div>

<div className="icon-box" onClick={()=>this.setState({open3:true,open2:false,open:false,open4:false,open5:false,open6:false})}>
<CircleOutlinedIcon className="icon-size" style={{color:"white",fontSize:60}}/>
</div>

<div className="icon-box" onClick={()=>this.setState({open4:true,open2:false,open:false,open3:false,open5:false,open6:false})}>
<img src="/images/Rectangle71.png" style={{width:40,height:35}}/>
</div>

<div className="icon-box" onClick={()=>this.setState({open2:false,open:false,open3:false,open4:false,open5:true,open6:false})}>
<img src="/images/Line11.png" style={{width:40,height:35}}/>
</div>

<div className="icon-box" onClick={()=>this.setState({open2:false,open:false,open3:false,open4:false,open5:false,open6:true})}>
<img src="/images/Line2.png" style={{width:40,height:35}}/>
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
  {this.state.open === true && this.state.open2 === false && this.state.open3 === false && this.state.open4 === false && this.state.open5 === false && this.state.open6 === false && 
  <RectangleApp/>
  }
  {this.state.open === false && this.state.open2 === true && this.state.open3 === false && this.state.open4 === false && this.state.open5 === false && this.state.open6 === false && 
      <SquareApp/>
      }
      { this.state.open === false && this.state.open2 === false && this.state.open3 === true && this.state.open4 === false && this.state.open5 === false && this.state.open6 === false && 
            <CircleApp/>
            }
            {this.state.open === false && this.state.open2 === false && this.state.open3 === false && this.state.open4 === true && this.state.open5 === false && this.state.open6 === false && 
                  <TriangleApp/>
                  }
                  {this.state.open === false && this.state.open2 === false && this.state.open3 === false && this.state.open4 === false && this.state.open5 === true && this.state.open6 === false && 
                        <LineApp/>
                        }
                        {this.state.open === false && this.state.open2 === false && this.state.open3 === false && this.state.open4 === false && this.state.open5 === false && this.state.open6 === true && 
                              <ArrowApp/>
                              }
  </div>
  </div>
  
        </div>
  
  
  
        </div>
    )
  }
}

export default Typesofshape