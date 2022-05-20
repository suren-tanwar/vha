// import React, { Component } from 'react'

// export class TemplateList extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        number:""
//     }
//   }
//   render() {
//     return (
//       <div>
//       <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:10,justifyContent:"space-evenly",marginTop:15,paddingBottom:15}}>
//       <img src= "/images/CardDesign/Vertical/Card1.jpg"  style={{height:400,width:250}} />
//       <img src= "/images/CardDesign/Vertical/Card2.jpg"  style={{height:400,width:250}} />
//       <img src= "/images/CardDesign/Vertical/Card3.jpg"  style={{height:400,width:250}} />
//       <img src= "/images/CardDesign/Vertical/Card4.jpg"  style={{height:400,width:250}} />
//       <img src= "/images/CardDesign/Vertical/Card5.jpg"  style={{height:400,width:250}} />
//       <img src= "/images/CardDesign/Vertical/Card6.jpg"  style={{height:400,width:250}} />
//       <img src= "/images/CardDesign/Vertical/Card7.jpg"  style={{height:400,width:250}} />
//       <img src= "/images/CardDesign/Vertical/Card8.jpg"  style={{height:400,width:250}} />
//       <img src= "/images/CardDesign/Vertical/Card9.jpg"  style={{height:400,width:250}} />
//       <img src= "/images/CardDesign/Vertical/card10.jpg"  style={{height:400,width:250}} />
//       <img src= "/images/CardDesign/Vertical/Card11.jpg"  style={{height:400,width:250}} />
//       <img src= "/images/CardDesign/Vertical/Card12.jpg"  style={{height:400,width:250}} />
//       <img src= "/images/CardDesign/Vertical/Card13.jpg"  style={{height:400,width:250}} />
//       <img src= "/images/CardDesign/Vertical/Card14.jpg"  style={{height:400,width:250}} />
//       <img src= "/images/CardDesign/Vertical/Card15.jpg"  style={{height:400,width:250}} />
//       <img src= "/images/CardDesign/Vertical/Card16.jpg"  style={{height:400,width:250}} />
//       <img src= "/images/CardDesign/Vertical/Card17.jpg"  style={{height:400,width:250}} />
//       <img src= "/images/CardDesign/Vertical/Card18.jpg"  style={{height:400,width:250}} />
//       <img src= "/images/CardDesign/Vertical/Card19.jpg"  style={{height:400,width:250}} />
//       <img src= "/images/CardDesign/Vertical/card20.jpg"  style={{height:400,width:250}} />
//       </div>
    
//       </div>
//     )
//   }
// }

// export default TemplateList



import useAppContext from './hooks/useAppContext'
import { useState } from 'react'
import { useHandlers } from '@scenify/sdk'

function TemplateList() { 
  const { templates } = useAppContext()
  const [value, setValue] = useState('')
  console.log(templates)
  const handlers = useHandlers()
  return (
    <div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
      <div style={{ padding: '2rem 2rem' }}>

        <input
         value={value}
          // onChange={e => setValue((e.target as any).value)}
          placeholder="Search templates"
     />

      </div>
      <div style={{ flex: 1 }}>
     
          <div
            style={{ display: 'grid', gap: '0.5rem', padding: '0 2rem 2rem', gridTemplateColumns: '1fr 1fr' }}
          >
            {templates.map(template => (
              <div
                key={template.id}
                style={{
                  alignItems: 'center',
                  cursor: 'pointer',
                  border: '1px solid rgba(0,0,0,0.2)',
                  padding: '5px',
                }}
                onClick={() => handlers.templateHandler.importTemplate(template)}
              >
                <img width="100%" src={template.preview || 'https://via.placeholder.com/150'} alt="preview" />
              </div>
            ))}
          </div>
   
      </div>
    </div>
  )
}

export default TemplateList