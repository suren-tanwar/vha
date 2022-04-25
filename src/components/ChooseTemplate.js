import React, { Component } from 'react'
import  "../css/ChooseTemplate.css"

export class ChooseTemplate extends Component {
  render() {
    return (
      <div>
      <div className='third-page2'>
      <div  onClick={()=> this.props.history.push("/")}>
      <span className='choose-template-page2'>Create New</span>
      </div>
      <div className='create-new-page2'>
      <span className='create-new-text-page2'>Choose Template</span>
      </div>
      </div>   
      
<div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:10,justifyContent:"space-evenly",marginTop:15}}>
<img src= "/images/CardDesign/Horizontal/Card1.svg"  style={{height:200,width:300}} />
<img src= "/images/CardDesign/Horizontal/Card1-.svg"  style={{height:200,width:300}} />
<img src= "/images/CardDesign/Horizontal/Card2.svg"  style={{height:200,width:300}} />
<img src= "/images/CardDesign/Horizontal/Card2-.svg"  style={{height:200,width:300}} />
<img src= "/images/CardDesign/Horizontal/Card3.jpd"  style={{height:200,width:300}} />
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




      <div className='div-proceed-page2'>
<button className='proceed-button-page2'>
<span className='proceed-page2'>Proceed</span>
</button>
</div>
      </div>
    )
  }
}

export default ChooseTemplate