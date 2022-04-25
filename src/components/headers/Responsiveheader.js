import React, { Component } from 'react'
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import ClearIcon from '@mui/icons-material/Clear';
import  "./ResponsiveHeader.css"

export class Responsiveheader extends Component {
    constructor(props) {
        super(props)
        this.toggleDrawer = this.toggleDrawer.bind(this)
        this.state = {
       open:false
        }
      }
      toggleDrawer(e) {
        this.setState({ open: !this.state.open })
    }
  render() {
    return (
      <div>
       {/* --------->> Top Navbar <<------------------ */}
 <div className='mobile-header'>
 <div style={{paddingLeft:"5%"}}>
  <a href="/">
  <img src="/images/Group7.png" alt="id-creat" className='mobile-logo'/> </a>
  </div>
  <div style={{paddingRight:"5%"}}>
  <img src="/images/drawer.png" alt="image" onClick={() =>this.toggleDrawer()} className='mobile-logo-drawer'/>
 </div>
 </div>
     {/* -------->> FOR SIDE DRAWER <---------------- */}
 <Drawer anchor="left" open={this.state.open} onClose={() => this.toggleDrawer()} variant="temporary" elevation={16}>
   <div className="drawer-main">
  <div className="image-close">
     <img src="/images/Group7.png" alt="image"  style={{width:100,height:35}}/>
      <ClearIcon size="large" onClick={() => this.setState({open:false})}/>
       </div>
       <Divider/>
     <div className='drawer-name'>
         <a href="/" className='drawer-name-link' >Get Started </a> 
           </div>
           <Divider/>
           <div className='drawer-name'>
           <a href="/" className='drawer-name-link'>Card Design </a> 
             </div>
             <Divider/>
             <div className='drawer-name'>
             <a href="/" className='drawer-name-link'>Saved Card </a> 
               </div>
               <Divider/>
               <div className='drawer-name'>
               <button className='login-button-drawer'>
               <span className='login-drawer'>Login</span>
               </button>
                 </div>
               
              </div>
                     </Drawer>
      
      </div>
    )
  }
}

export default Responsiveheader