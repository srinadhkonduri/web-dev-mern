import React from 'react'

const Layout = (props) => {
  return (
    <>
        <header>{props.title}</header>
        <main>{props.children}</main>
    </>
  )
}

export default Layout