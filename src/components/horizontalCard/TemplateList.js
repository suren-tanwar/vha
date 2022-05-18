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

// import useAppContext from '@/hooks/useAppContext'
// import api from '@/services/api'
// import { useEffect } from 'react'
// import Panels from './scenes/Editor/components/Panels'
// import Editor from '@scenify/sdk'

// function TemplateList() {
//   const { setTemplates, setShapes } = useAppContext()

//   useEffect(() => {
//     api.getTemplates().then(templates => setTemplates(templates))
//     api.getShapes().then(shapes => setShapes(shapes))
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   return (
//     <div
//       style={{
//         width: '100vw',
//         height: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         background: '#F9F9F9',
//         fontFamily: 'Uber Move Text',
//       }}
//     >
   
//       <div style={{ display: 'flex', flex: 1 }}>
//         <Panels />
//         <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
     
//           <div style={{ flex: 1, display: 'flex', padding: '1px' }}>
//             <Editor />
//           </div>
      
//         </div>
//       </div>
//     </div>
//   )
// }

// export default TemplateList