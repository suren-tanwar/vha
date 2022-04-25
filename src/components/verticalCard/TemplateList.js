import React, { Component } from 'react'

export class TemplateList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       number:""
    }
  }
  render() {
    return (
      <div>
      <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:10,justifyContent:"space-evenly",marginTop:15,paddingBottom:15}}>
      <img src= "/images/CardDesign/Vertical/Card1.jpg"  style={{height:400,width:250}} />
      <img src= "/images/CardDesign/Vertical/Card2.jpg"  style={{height:400,width:250}} />
      <img src= "/images/CardDesign/Vertical/Card3.jpg"  style={{height:400,width:250}} />
      <img src= "/images/CardDesign/Vertical/Card4.jpg"  style={{height:400,width:250}} />
      <img src= "/images/CardDesign/Vertical/Card5.jpg"  style={{height:400,width:250}} />
      <img src= "/images/CardDesign/Vertical/Card6.jpg"  style={{height:400,width:250}} />
      <img src= "/images/CardDesign/Vertical/Card7.jpg"  style={{height:400,width:250}} />
      <img src= "/images/CardDesign/Vertical/Card8.jpg"  style={{height:400,width:250}} />
      <img src= "/images/CardDesign/Vertical/Card9.jpg"  style={{height:400,width:250}} />
      <img src= "/images/CardDesign/Vertical/card10.jpg"  style={{height:400,width:250}} />
      <img src= "/images/CardDesign/Vertical/Card11.jpg"  style={{height:400,width:250}} />
      <img src= "/images/CardDesign/Vertical/Card12.jpg"  style={{height:400,width:250}} />
      <img src= "/images/CardDesign/Vertical/Card13.jpg"  style={{height:400,width:250}} />
      <img src= "/images/CardDesign/Vertical/Card14.jpg"  style={{height:400,width:250}} />
      <img src= "/images/CardDesign/Vertical/Card15.jpg"  style={{height:400,width:250}} />
      <img src= "/images/CardDesign/Vertical/Card16.jpg"  style={{height:400,width:250}} />
      <img src= "/images/CardDesign/Vertical/Card17.jpg"  style={{height:400,width:250}} />
      <img src= "/images/CardDesign/Vertical/Card18.jpg"  style={{height:400,width:250}} />
      <img src= "/images/CardDesign/Vertical/Card19.jpg"  style={{height:400,width:250}} />
      <img src= "/images/CardDesign/Vertical/card20.jpg"  style={{height:400,width:250}} />
      </div>
    
      </div>
    )
  }
}

export default TemplateList