import { AppContext } from '../contexts/AppContext.tsx'
import { useContext } from 'react'

function useAppContext() {
  const {
    templates,
    setTemplates,

  } = useContext(AppContext)
  return {

    templates,
    setTemplates,
  }
}

export default useAppContext