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
// import { useState } from 'react'
// import { Scrollbars } from 'react-custom-scrollbars'
// import { Input } from 'baseui/input'
// import Icons from '@components/icons'
// import { useHandlers } from '@scenify/sdk'

// function TemplateList() {
//   const { templates } = useAppContext()
//   const [value, setValue] = useState('')
//   const handlers = useHandlers()
//   return (
//     <div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
//       <div style={{ padding: '2rem 2rem' }}>
//         <Input
//           startEnhancer={() => <Icons.Search size={18} />}
//           value={value}
//           onChange={e => setValue((e.target as any).value)}
//           placeholder="Search templates"
//           clearOnEscape
//         />
//       </div>
//       <div style={{ flex: 1 }}>
//         <Scrollbars>
//           <div
//             style={{ display: 'grid', gap: '0.5rem', padding: '0 2rem 2rem', gridTemplateColumns: '1fr 1fr' }}
//           >
//             {templates.map(template => (
//               <div
//                 key={template.id}
//                 style={{
//                   alignItems: 'center',
//                   cursor: 'pointer',
//                   border: '1px solid rgba(0,0,0,0.2)',
//                   padding: '5px',
//                 }}
//                 onClick={() => handlers.templateHandler.importTemplate(template)}
//               >
//                 <img width="100%" src={template.preview || 'https://via.placeholder.com/150'} alt="preview" />
//               </div>
//             ))}
//           </div>
//         </Scrollbars>
//       </div>
//     </div>
//   )
// }

// export default TemplateList
