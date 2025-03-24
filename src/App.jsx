import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeBanner from './components/HomeBanner'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header cname="navheader"></Header>
      <HomeBanner cname="home-banner"></HomeBanner>
      <Footer cname="navfooter"></Footer>
    </>
  )
}

export default App
