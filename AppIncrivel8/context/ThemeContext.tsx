import React, { createContext, ReactNode, useContext, useState } from 'react'

interface DarkContext {
  darkTheme: boolean, // indica se o tema está escuro (true) ou claro (false)
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>; // função para mudar o tema
}

const Context = createContext<DarkContext | undefined>(undefined);

export const use = ():DarkContext => {
  const context2 =  useContext(Context)
  if(!context2){
    throw new Error("use inside temaProvider")
  }
  return context2
}
export const Provider = (props: {children: ReactNode}) => {
  const [darkTheme, setDarkTheme] = useState(false)

  return(
    <Context.Provider value={{darkTheme,setDarkTheme}}>
      {props.children}
    </Context.Provider>
  )
}