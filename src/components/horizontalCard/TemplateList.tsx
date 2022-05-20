

// import useAppContext from '@/hooks/useAppContext'

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