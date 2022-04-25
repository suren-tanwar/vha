import React, { Component } from 'react'
import "./css/ImageRes.css"


export class ImageRes extends Component {
  render() {
    return (
        <div style={{backgroundColor:"#2f2f2f",height:850}}>
      <div>
      <span style={{color:"white",padding:10,fontSize:18}}>Tap Image to add to image</span>
      </div>
      <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}}>
      <img src="/images/Rectangle74.png" style={{height:200,width:"47%"}}/>
      <img src="/images/Rectangle74.png" style={{height:200,width:"47%"}}/>
      <img src="/images/Rectangle74.png" style={{height:200,width:"47%"}}/>
      <img src="/images/Rectangle74.png" style={{height:200,width:"47%"}}/>
      </div>
      </div>
    )
  }
}

export default ImageRes