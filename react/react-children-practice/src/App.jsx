import React from 'react'
import Layout from './components/Layout'

const App = () => {
  return (
    <>
    <Layout title="welcome page">
      <p>This is a basic react layout using reusable components</p>
      <p>you can use this layout for any kind of web application</p>
    </Layout>

    <Layout>
        <ul>
          <li>Web</li>
          <li>UI UX</li>
        </ul>
    </Layout>
    </>
  )
}

export default App