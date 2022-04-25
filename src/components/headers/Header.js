import React, { Component } from 'react'
import "./Header.css"

export class Header extends Component {
  render() {
    return (
      <div>
      <div className='header'>
<div className='header-parts'>
<a  href="/" className="logo">
<img src="/images/Group5.png" style={{width:130}} />
</a>
<div className='second'>
<a  href="/" className='getstarted'>Get Started</a>
<a  href="/choose-template" className='getstarted'>Card Design</a>
<a  href="/" className='getstarted'>Saved Design</a>
<button className='login-button'>
<span className='login'>Login</span>
</button>
</div>
</div>

</div>
      
      </div>
    )
  }
}

export default Header