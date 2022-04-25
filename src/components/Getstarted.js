import React, { Component } from 'react'
import  "../css/GetStarted.css"


export class Getstarted extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      direction:""
    }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  
  };
  proceed = ()=>{
if(this.state.direction === "1"){
  this.props.history.push("/horizontal-card")
}
else if(this.state.direction === "2"){
  this.props.history.push("/vertical-card")
}
else{
  this.props.history.push("/")
}
  }
   render() {
    console.log(this.state);
    return (
      <div style={{height:500}}>

<div className='third'>
<div className='create-new'>
<span className='create-new-text' onClick={()=> this.props.history.push("/")}>Create New</span>
</div>
<div className='choose'>
<span className='choose-template' onClick={()=> this.props.history.push("/choose-template")}>Choose Template</span>
</div>
</div>



<div className='card-design'>

<div className='horizontal'>
<img src="/images/Group.png" style={{height:200}} />
<div className='horizontal-card'>
<input type="radio" name="direction" value="1" checked={this.state.direction ==="1"} onChange={this.handleChange} />
<span className='horizontal-card-text'>Horizontal Card</span>
</div>
</div>

<div  className='vertical'>
<img src="/images/Frame.png" style={{height:200}}/>
<div className='vertical-card'>
<input type="radio" name="direction" value="2" checked={this.state.direction ==="2"} onChange={this.handleChange} />
<span className='vertical-card-text'>Vertical Card</span>
</div>
</div>

<div className='div-proceed-mobile'>
<button className='proceed-button-mobile' onClick={(e)=>this.proceed()}>
<span className='proceed-mobile'>Proceed</span>
</button>
</div>


</div>

<div className='div-proceed' >
<button className='proceed-button' onClick={(e)=>this.proceed()}>
<span className='proceed'>Proceed</span>
</button>
</div>


      </div>
    )
  }
}

export default Getstarted
