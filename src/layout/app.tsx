import React, { ReactNode } from "react"
import { Header } from "../components/Header"

export const LayoutApp: React.FC<{ children: ReactNode }> = ({ children }) => { 
  return (
    <>
      <Header />
      {children}
    </>
  )
}