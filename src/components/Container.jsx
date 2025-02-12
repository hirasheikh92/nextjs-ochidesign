import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`${className} max-w-screen-xl mx-auto px-20` }>
      {children}
    </div>
  )
}

export default Container
