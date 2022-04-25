import React, { Component } from 'react'

export class TemplateList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       number:"",
       image1:""
    }
  }
  render() {
    console.log(this.state)
    return (
      <div>
      <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:10,justifyContent:"space-evenly",marginTop:15,paddingBottom:15}}>
      <img src= "/images/CardDesign/Horizontal/Card1.jpg"  style={{height:200,width:300}} onClick={()=>this.setState({image1:"images/CardDesign/Horizontal/Card1.jpg"})}/>
      <img src= "/images/CardDesign/Horizontal/Card1+.jpg"  style={{height:200,width:300}} />
      <img src= "/images/CardDesign/Horizontal/Card2.jpg"  style={{height:200,width:300}} />
      <img src= "/images/CardDesign/Horizontal/Card2+.jpg"  style={{height:200,width:300}} />
      <img src= "/images/CardDesign/Horizontal/Card3.jpg"  style={{height:200,width:300}} />
      <img src= "/images/CardDesign/Horizontal/Card3+.jpg"  style={{height:200,width:300}} />
      <img src= "/images/CardDesign/Horizontal/Card4.jpg"  style={{height:200,width:300}} />
      <img src= "/images/CardDesign/Horizontal/Card4+.jpg"  style={{height:200,width:300}} />
      <img src= "/images/CardDesign/Horizontal/Card5.jpg"  style={{height:200,width:300}} />
      <img src= "/images/CardDesign/Horizontal/card5+.jpg"  style={{height:200,width:300}} />
      <img src= "/images/CardDesign/Horizontal/Card6.jpg"  style={{height:200,width:300}} />
      <img src= "/images/CardDesign/Horizontal/Card6+.jpg"  style={{height:200,width:300}} />
      <img src= "/images/CardDesign/Horizontal/Card7.jpg"  style={{height:200,width:300}} />
      <img src= "/images/CardDesign/Horizontal/Card7+.jpg"  style={{height:200,width:300}} />
      <img src= "/images/CardDesign/Horizontal/Card8.jpg"  style={{height:200,width:300}} />
      <img src= "/images/CardDesign/Horizontal/Card8+.jpg"  style={{height:200,width:300}} />
      <img src= "/images/CardDesign/Horizontal/Card9.jpg"  style={{height:200,width:300}} />
      <img src= "/images/CardDesign/Horizontal/Card9+.jpg"  style={{height:200,width:300}} />
      <img src= "/images/CardDesign/Horizontal/Card10+.jpg"  style={{height:200,width:300}} />
      <img src= "/images/CardDesign/Horizontal/card11.jpg"  style={{height:200,width:300}} />
      </div>
    
      </div>
    )
  }
}

export default TemplateList