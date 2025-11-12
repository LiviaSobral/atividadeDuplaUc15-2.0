import React, { createContext, ReactNode, useContext, useState } from 'react'

interface DarkContext {
  darkTheme: boolean, // indica se o tema está escuro (true) ou claro (false)
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>; // função para mudar o tema
}

const Context1 = createContext<DarkContext | undefined>(undefined);

export const use = ():DarkContext => {
  const context = useContext(Context1)
  if(!context){
    throw new Error("use inside temaProvider")
  }
  return context
}
export const Provider = (props: {children: ReactNode}) => {
  const [darkTheme, setDarkTheme] = useState(false)

  return(
    <Context1.Provider value={{darkTheme,setDarkTheme}}>
      {props.children}
    </Context1.Provider>
  )
}