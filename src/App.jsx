import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeBanner from './components/HomeBanner'
import ProductList from './components/ProductList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header cname="nav-header"></Header>
      <main className='home'>
        <HomeBanner cname="home-banner"></HomeBanner>
        <ProductList cname="product-list"></ProductList>
      </main>
      <Footer cname="nav-footer"></Footer>
    </>
  )
}

export default App
