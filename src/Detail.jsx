import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductPresentation from './components/ProductPresentation'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header cname="nav-header"></Header>
      <main className='detail'>
        <ProductPresentation></ProductPresentation>
      </main>
      <Footer cname="nav-footer"></Footer>
    </>
  )
}

export default App
