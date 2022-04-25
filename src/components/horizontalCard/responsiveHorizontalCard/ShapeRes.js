import React, { Component } from 'react'
import "./css/ShapeRes.css"
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleApp from "../../shapes/Circle"
import ArrowApp from "../../shapes/Arrow"
import LineApp from "../../shapes/Line"
import RectangleApp from "../../shapes/Rectangle"
import SquareApp from "../../shapes/Square"
import TriangleApp from "../../shapes/Triangle"

export class ShapeRes extends Component {
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
        <div style={{backgroundColor:"#2f2f2f",height:850}}>
        <div className='delete-image-box-res'>
      <span style={{color:"#06A8AE",fontSize:18}}>Tap Shape to add to page </span>
      </div>

      <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}}>
      <div className="icon-box-res" onClick={()=>this.setState({open:true,open2:false,open3:false,open4:false,open5:false,open6:false})}>
      <img src="/images/Rectangle70.png"  style={{width:60,height:45}}/>
      </div>

      <div className="icon-box-res" onClick={()=>this.setState({open3:true,open2:false,open:false,open4:false,open5:false,open6:false})}>
      <CircleOutlinedIcon  style={{color:"white",fontSize:70}}/>
      </div>
      <div className="icon-box-res" onClick={()=>this.setState({open2:true,open:false,open3:false,open4:false,open5:false,open6:false})}>
      <img src="/images/Rectangle73.png" style={{width:40,height:45}}/>
      </div>
      <div className="icon-box-res" onClick={()=>this.setState({open4:true,open2:false,open:false,open3:false,open5:false,open6:false})}>
      <img src="/images/Rectangle71.png" style={{width:60,height:45}}/>
      </div>
      <div className="icon-box-res" onClick={()=>this.setState({open2:false,open:false,open3:false,open4:false,open5:true,open6:false})}>
      <img src="/images/Line11.png" style={{width:40,height:45}}/>
      </div>
      <div className="icon-box-res" onClick={()=>this.setState({open2:false,open:false,open3:false,open4:false,open5:false,open6:true})}>
      <img src="/images/Line2.png" style={{width:40,height:45}}/>
      </div>



      </div>

      <div>
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
    )
  }
}

export default ShapeRes