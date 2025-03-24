import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header cname="navheader"></Header>
      <Footer cname="navfooter"></Footer>
    </>
  )
}

export default App
