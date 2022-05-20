import React, { createContext, useState, FC } from 'react'

type Template = any
interface IAppContext {
 templates: Template[]
  setTemplates: (templates: Template[]) => void

}

export const AppContext = createContext<IAppContext>({
  templates: [],
  setTemplates: () => {},
})

export const AppProvider: FC = ({ children }) => {
  const [templates, setTemplates] = useState<Template[]>([])
  console.log(templates)
  console.log(setTemplates)
  const context = {
    templates,
    setTemplates,

  }
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}
